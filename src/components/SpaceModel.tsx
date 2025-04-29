'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('public/space_model/sci-fi_computer_room.glb'); // or .gltf
  return <primitive object={scene} scale={1.5} />;
}

export default function SpaceModel() {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

// Important! Preload the GLTF model
useGLTF.preload('public/space_model/need_some_space.glb');
