
'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/space_model/need_some_space.glb');
  const modelRef = useRef();
  
  // Add slight automatic rotation
  useEffect(() => {
    const interval = setInterval(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01;
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return <primitive ref={modelRef} object={scene} scale={1.5} position={[0, -1, 0]} />;
}

export default function SpaceModel() {
  return (
    <div className="h-full w-full">
      <Canvas 
        shadows
        className="w-full h-full"
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <spotLight 
          position={[-5, 5, 5]} 
          intensity={0.8} 
          angle={0.3} 
          penumbra={0.5}
        />
        
        {/* Camera setup */}
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        
        {/* The 3D model */}
        <Model />
        
        {/* Controls */}
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

// Important! Preload the GLTF model
useGLTF.preload('/space_model/need_some_space.glb');
