
// import React from 'react';

// const LoadingScreen = () => {
//   return (
//     <div className="loading-container">
//       <div className="logo-wrapper md:pl-8 lg:pl-12 flex items-start justify-start mt-[39vh]">
//         <div className="logo-line"></div>
//         <div className="letter">Jagadeesh Kovi</div>
//       </div>
//     </div>
//   );
// };

// export default LoadingScreen;

import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Set a timer to start the fade-out process
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      
      // After fade-out animation completes, set visibility to false
      const fadeOutTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Fade-out takes 1s
      
      return () => clearTimeout(fadeOutTimer);
    }, 2000); // Wait 2 seconds before starting fade-out
    
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;
  
  return (
    <div className={`loading-container ${isFadingOut ? 'animate-fade-out' : ''}`}>
      <div className="logo-wrapper md:pl-8 lg:pl-12 flex items-start justify-start mt-[39vh]">
        <div className="logo-line"></div>
        <div className={`letter ${isFadingOut ? 'animate-fade-out' : ''}`}>
          Jagadeesh Kovi
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;