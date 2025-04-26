
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onAnimationComplete?: () => void;
}

const LoadingScreen = ({ onAnimationComplete }: LoadingScreenProps) => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Timeline for animation stages
    const timeline = [
      setTimeout(() => setAnimationStage(1), 1500), // After stroke animation
      setTimeout(() => setAnimationStage(2), 2500), // After fill animation
      setTimeout(() => {
        setAnimationStage(3);
        if (onAnimationComplete) {
          setTimeout(onAnimationComplete, 500); // Allow time for the final fade
        }
      }, 3000) // Prepare for transition
    ];

    return () => timeline.forEach(clearTimeout);
  }, [onAnimationComplete]);

  return (
    <div className={`loading-container ${animationStage === 3 ? 'loading-complete' : ''}`}>
      <div className="name-wrapper">
        <svg className="name-svg" viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
          <text 
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            dominantBaseline="middle"
            className="loading-name-text"
          >
            Jagadeesh Kovi
          </text>
        </svg>
        <div className={`loading-name ${animationStage >= 1 ? 'fill-text' : ''}`}>
          Jagadeesh Kovi
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
