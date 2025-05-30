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

  const imagePaths = [
    '/certifications/aws_mla_c01.png',
    '/certifications/engineer_data_BQ1.png',
    '/certifications/oracledb_23ai_vec.png',
    '/certifications/apex_cloud_dev.png',
    '/certifications/ms_az_900.png',
    '/certifications/databricks_fundamentals.png',
    '/OEIS2.png',
    '/OEIS.png',
    '/IULMIA1.png',
    '/LuddyChatbot.jpeg',
    '/vec-store.gif',
    '/hcdr-gif.gif',
    '/jaga.jpeg',
    '/GCP-Data-Pipeline.png',
    '/a-48.gif',
  ];

  useEffect(() => {
    // Prefetch images
    imagePaths.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

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