


import React, { useState, useEffect, useCallback } from "react";

const NUM_STARS = 50;
const NUM_BIRDS = 8;

const cloudPositions = [
  { top: "5%", left: "5%" },
  { top: "20%", left: "80%" },
  { top: "45%", left: "230%" },
  { top: "15%", left: "45%" },
  { top: "60%", left: "0%" },
  { top: "55%", left: "35%" },
  { top: "60 %", left: "60%" },
  { top: "10%", left: "85%" },
  { top: "80%", left: "10%" },
  { top: "90%", left: "85%" },
];

const extraCloudPositions = [
  { top: "30%", left: "5%" },
  { top: "40%", left: "85%" },
  { top: "50%", left: "65%" },
  { top: "35%", left: "45%" },
  { top: "65%", left: "10%" },
  { top: "70%", left: "80%" },
  { top: "20%", left: "25%" },
  { top: "75%", left: "55%" },
  { top: "90%", left: "35%" },
];

interface SkyBackgroundProps {
  isDay: boolean;
}

const SkyBackground: React.FC<SkyBackgroundProps> = ({ isDay }) => {
  const [isRaining, setIsRaining] = useState<boolean>(() => {
    const storedRain = localStorage.getItem("isRaining");
    return storedRain === "true"; // default to false
  });

  const [showRainbow, setShowRainbow] = useState(false);
  const [lightningActive, setLightningActive] = useState(false);

  // Save `isRaining` to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("isRaining", JSON.stringify(isRaining));
  }, [isRaining]);

  // Save `isDay` to localStorage when it updates from parent
  useEffect(() => {
    localStorage.setItem("isDay", JSON.stringify(isDay));
  }, [isDay]);

  const toggleRain = useCallback(() => {
    if (isRaining) {
      setIsRaining(false);
      setShowRainbow(true);
      setTimeout(() => setShowRainbow(false), 10000);
    } else {
      setIsRaining(true);
      setShowRainbow(false);
    }
  }, [isRaining]);

  useEffect(() => {
    if (!isRaining) {
      setLightningActive(false);
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const triggerLightning = () => {
      setLightningActive(true);
      setTimeout(() => {
        setLightningActive(false);
        timeoutId = setTimeout(triggerLightning, 4000 + Math.random() * 3000);
      }, 200);
    };

    timeoutId = setTimeout(triggerLightning, 1000 + Math.random() * 2000);

    return () => clearTimeout(timeoutId);
  }, [isRaining]);

  return (
    <>
      {/* Background & effects container */}
      <div
        className={`fixed inset-0 -z-10 overflow-visible transition-colors duration-700 ${
          isDay
            ? "bg-gradient-to-b from-sky-200 to-blue-100"
            : isRaining
            ? "bg-gradient-to-b from-slate-700 to-slate-800"
            : "bg-gradient-to-b from-slate-800 to-slate-900"
        }`}
      >
        {/* Dark overlay for gloomy rain atmosphere */}
        <div
          className={`pointer-events-none fixed inset-0 z-20 bg-black transition-opacity duration-700 ${
            isRaining ? "opacity-20" : "opacity-0"
          }`}
        />

        {/* Lightning flash overlay */}
        <div
          className={`pointer-events-none fixed inset-0 z-40 bg-white opacity-0 transition-opacity duration-150 ${
            lightningActive ? "opacity-50" : "opacity-0"
          }`}
        />

        {/* Stars or Birds */}
        {isDay
          ? [...Array(NUM_BIRDS)].map((_, i) => {
              const size = 24 + Math.random() * 16;
              const flyLeft = Math.random() > 0.5;
              return (
                <img
                  key={`bird-${i}`}
                  src={`${import.meta.env.BASE_URL}bird.gif`}
                  alt="bird"
                  className={`absolute pointer-events-none`}
                  style={{
                    top: `${Math.random() * 80}%`,
                    left: flyLeft ? "100%" : "-10%",
                    width: `${size}px`,
                    height: "auto",
                    animation: `${flyLeft ? "fly-left" : "fly-right"} ${
                      10 + Math.random() * 10
                    }s linear infinite`,
                    opacity: 0.85,
                  }}
                />
              );
            })
          : [...Array(NUM_STARS)].map((_, i) => (
              <img
                key={`star-${i}`}
                src={`${import.meta.env.BASE_URL}star.png`}
                alt="star"
                className="absolute w-1.5 h-1.5 pointer-events-none"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${3 + Math.random() * 3}s ease-in-out infinite`,
                  opacity: 0.8,
                }}
              />
            ))}

        {/* Sun or Moon */}
        <img
          src={
            isDay
              ? `${import.meta.env.BASE_URL}sun.png`
              : `${import.meta.env.BASE_URL}moon.png`
          }
          alt={isDay ? "sun" : "moon"}
          className="absolute w-16 h-16 animate-pulse pointer-events-none"
          style={{
            top: "75%",
            left: "33%",
            animation: "twinkle 6s ease-in-out infinite",
            filter: isDay
              ? "drop-shadow(0 0 6px rgba(255, 223, 0, 0.4))"
              : "drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))",
          }}
        />

        {/* Original Floating Clouds */}
        {cloudPositions.map((pos, i) => (
          <div
            key={`cloud-${i}`}
            className="absolute overflow-visible transition-colors duration-700"
            style={{
              top: pos.top,
              left: pos.left,
              animation: `floatCloud ${(20 + i * 5) * 0.7}s ease-in-out infinite alternate`,
              filter: isRaining ? "brightness(0.7)" : "brightness(1)",
            }}
          >
            <div className="relative w-32 h-40 overflow-visible">
              <img
                src={`${import.meta.env.BASE_URL}cloud.png`}
                alt="cloud"
                className="w-full opacity-90 pointer-events-none"
              />
              {isRaining &&
                [...Array(5)].map((_, j) => (
                  <div
                    key={`raindrop-${i}-${j}`}
                    className="absolute"
                    style={{
                      left: `${10 + j * 15}%`,
                      top: "90%",
                      width: "2px",
                      height: "16px",
                      backgroundColor: "#3b82f6",
                      borderRadius: "2px",
                      animation: `raindrop 0.8s ease-in-out infinite`,
                      animationDelay: `${j * 0.2}s`,
                      zIndex: 10,
                    }}
                  />
                ))}
            </div>
          </div>
        ))}

        {/* Extra Clouds sliding in/out during rain */}
        {extraCloudPositions.map((pos, i) => {
          // Extract numeric left % value from string
          const leftPercent = parseFloat(pos.left);

          // If left < 50% => slide left, else slide right
          const slideLeft = leftPercent < 50;


          return (
            <div
              key={`extra-cloud-${i}`}
              className="absolute overflow-visible transition-transform duration-700 pointer-events-none"
              style={{
                top: pos.top,
                left: pos.left,
                transform: isRaining
                  ? "translateX(0)"
                  : slideLeft
                  ? "translateX(-120%)"
                  : "translateX(120%)",
                opacity: isRaining ? 1 : 0,
                transitionProperty: "transform, opacity",
                transitionDuration: "0.7s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <div className="relative w-32 h-40 overflow-visible">
                <img
                  src={`${import.meta.env.BASE_URL}cloud.png`}
                  alt="cloud"
                  className="w-full opacity-80"
                />
                {[...Array(4)].map((_, j) => (
                  <div
                    key={`extra-raindrop-${i}-${j}`}
                    className="absolute"
                    style={{
                      left: `${10 + j * 15}%`,
                      top: "40%",
                      width: "2px",
                      height: "16px",
                      backgroundColor: "#3b82f6",
                      borderRadius: "2px",
                      animation: `raindrop 0.8s ease-in-out infinite`,
                      animationDelay: `${j * 0.2}s`,
                      zIndex: 10,
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* Rainbow fades & slides in at bottom when rain stops */}
        {showRainbow && (
          <img
            src={`${import.meta.env.BASE_URL}rainbow.png`}
            alt="rainbow"
            className="absolute w-60 pointer-events-none rainbow-fade-reveal"
            style={{
              top: "75%",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 30,
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        )}
      </div>

      {/* Balloon easter egg button: separate container for clicks and stacking */}
      <div
        className="fixed z-50 pointer-events-auto"
        style={{ top: "40%", left: "15%", width: "80px", height: "auto" }}
      >
        <img
          src={`${import.meta.env.BASE_URL}balloon.png`}
          alt="balloon"
          className="w-full cursor-pointer animate-bounce-slow transition-transform hover:scale-110"
          onClick={toggleRain}
        />
      </div>
    </>
  );
};

export default SkyBackground;



// import React, { useState, useEffect, useCallback } from "react";

// const NUM_STARS = 50;
// const NUM_BIRDS = 8;

// const cloudPositions = [
//   { top: "5%", left: "5%" },
//   { top: "20%", left: "80%" },
//   { top: "45%", left: "230%" },
//   { top: "15%", left: "45%" },
//   { top: "60%", left: "0%" },
//   { top: "55%", left: "35%" },
//   { top: "60 %", left: "60%" },
//   { top: "10%", left: "85%" },
//   { top: "80%", left: "10%" },
//   { top: "90%", left: "85%" },
// ];

// const extraCloudPositions = [
//   { top: "30%", left: "5%" },
//   { top: "40%", left: "85%" },
//   { top: "50%", left: "65%" },
//   { top: "35%", left: "45%" },
//   { top: "65%", left: "10%" },
//   { top: "70%", left: "80%" },
//   { top: "20%", left: "25%" },
//   { top: "75%", left: "55%" },
//   { top: "90%", left: "35%" },
// ];

// interface SkyBackgroundProps {
//   isDay: boolean;
// }

// const SkyBackground: React.FC<SkyBackgroundProps> = ({ isDay }) => {
//   const [isRaining, setIsRaining] = useState(false);
//   const [showRainbow, setShowRainbow] = useState(false);
//   const [lightningActive, setLightningActive] = useState(false);

//   const toggleRain = useCallback(() => {
//     if (isRaining) {
//       setIsRaining(false);
//       setShowRainbow(true);
//       setTimeout(() => setShowRainbow(false), 10000);
//     } else {
//       setIsRaining(true);
//       setShowRainbow(false);
//     }
//   }, [isRaining]);

//   useEffect(() => {
//     if (!isRaining) {
//       setLightningActive(false);
//       return;
//     }

//     let timeoutId: NodeJS.Timeout;

//     const triggerLightning = () => {
//       setLightningActive(true);
//       setTimeout(() => {
//         setLightningActive(false);
//         timeoutId = setTimeout(triggerLightning, 4000 + Math.random() * 3000);
//       }, 200);
//     };

//     timeoutId = setTimeout(triggerLightning, 1000 + Math.random() * 2000);

//     return () => clearTimeout(timeoutId);
//   }, [isRaining]);

//   return (
//     <>
//       {/* Background & effects container */}
//       <div
//         className={`fixed inset-0 -z-10 overflow-visible transition-colors duration-700 ${
//           isDay
//             ? "bg-gradient-to-b from-sky-200 to-blue-100"
//             : isRaining
//             ? "bg-gradient-to-b from-slate-700 to-slate-800"
//             : "bg-gradient-to-b from-slate-800 to-slate-900"
//         }`}
//       >
//         {/* Dark overlay for gloomy rain atmosphere */}
//         <div
//           className={`pointer-events-none fixed inset-0 z-20 bg-black transition-opacity duration-700 ${
//             isRaining ? "opacity-20" : "opacity-0"
//           }`}
//         />

//         {/* Lightning flash overlay */}
//         <div
//           className={`pointer-events-none fixed inset-0 z-40 bg-white opacity-0 transition-opacity duration-150 ${
//             lightningActive ? "opacity-50" : "opacity-0"
//           }`}
//         />

//         {/* Stars or Birds */}
//         {isDay
//           ? [...Array(NUM_BIRDS)].map((_, i) => {
//               const size = 24 + Math.random() * 16;
//               const flyLeft = Math.random() > 0.5;
//               return (
//                 <img
//                   key={`bird-${i}`}
//                   src={`${import.meta.env.BASE_URL}bird.gif`}
//                   alt="bird"
//                   className={`absolute pointer-events-none`}
//                   style={{
//                     top: `${Math.random() * 80}%`,
//                     left: flyLeft ? "100%" : "-10%",
//                     width: `${size}px`,
//                     height: "auto",
//                     animation: `${flyLeft ? "fly-left" : "fly-right"} ${
//                       10 + Math.random() * 10
//                     }s linear infinite`,
//                     opacity: 0.85,
//                   }}
//                 />
//               );
//             })
//           : [...Array(NUM_STARS)].map((_, i) => (
//               <img
//                 key={`star-${i}`}
//                 src={`${import.meta.env.BASE_URL}star.png`}
//                 alt="star"
//                 className="absolute w-1.5 h-1.5 pointer-events-none"
//                 style={{
//                   top: `${Math.random() * 100}%`,
//                   left: `${Math.random() * 100}%`,
//                   animation: `twinkle ${3 + Math.random() * 3}s ease-in-out infinite`,
//                   opacity: 0.8,
//                 }}
//               />
//             ))}

//         {/* Sun or Moon */}
//         <img
//           src={
//             isDay
//               ? `${import.meta.env.BASE_URL}sun.png`
//               : `${import.meta.env.BASE_URL}moon.png`
//           }
//           alt={isDay ? "sun" : "moon"}
//           className="absolute w-16 h-16 animate-pulse pointer-events-none"
//           style={{
//             top: "75%",
//             left: "33%",
//             animation: "twinkle 6s ease-in-out infinite",
//             filter: isDay
//               ? "drop-shadow(0 0 6px rgba(255, 223, 0, 0.4))"
//               : "drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))",
//           }}
//         />

//         {/* Original Floating Clouds */}
//         {cloudPositions.map((pos, i) => (
//           <div
//             key={`cloud-${i}`}
//             className="absolute overflow-visible transition-colors duration-700"
//             style={{
//               top: pos.top,
//               left: pos.left,
//               animation: `floatCloud ${(20 + i * 5) * 0.7}s ease-in-out infinite alternate`,
//               filter: isRaining ? "brightness(0.7)" : "brightness(1)",
//             }}
//           >
//             <div className="relative w-32 h-40 overflow-visible">
//               <img
//                 src={`${import.meta.env.BASE_URL}cloud.png`}
//                 alt="cloud"
//                 className="w-full opacity-90 pointer-events-none"
//               />
//               {isRaining &&
//                 [...Array(5)].map((_, j) => (
//                   <div
//                     key={`raindrop-${i}-${j}`}
//                     className="absolute"
//                     style={{
//                       left: `${10 + j * 15}%`,
//                       top: "90%",
//                       width: "2px",
//                       height: "16px",
//                       backgroundColor: "#3b82f6",
//                       borderRadius: "2px",
//                       animation: `raindrop 0.8s ease-in-out infinite`,
//                       animationDelay: `${j * 0.2}s`,
//                       zIndex: 10,
//                     }}
//                   />
//                 ))}
//             </div>
//           </div>
//         ))}

//         {/* Extra Clouds sliding in/out during rain */}
//         {extraCloudPositions.map((pos, i) => {
//           // Extract numeric left % value from string
//           const leftPercent = parseFloat(pos.left);

//           // If left < 50% => slide left, else slide right
//           const slideLeft = leftPercent < 50;


//           return (
//             <div
//               key={`extra-cloud-${i}`}
//               className="absolute overflow-visible transition-transform duration-700 pointer-events-none"
//               style={{
//                 top: pos.top,
//                 left: pos.left,
//                 transform: isRaining
//                   ? "translateX(0)"
//                   : slideLeft
//                   ? "translateX(-120%)"
//                   : "translateX(120%)",
//                 opacity: isRaining ? 1 : 0,
//                 transitionProperty: "transform, opacity",
//                 transitionDuration: "0.7s",
//                 transitionTimingFunction: "ease-in-out",
//               }}
//             >
//               <div className="relative w-32 h-40 overflow-visible">
//                 <img
//                   src={`${import.meta.env.BASE_URL}cloud.png`}
//                   alt="cloud"
//                   className="w-full opacity-80"
//                 />
//                 {[...Array(4)].map((_, j) => (
//                   <div
//                     key={`extra-raindrop-${i}-${j}`}
//                     className="absolute"
//                     style={{
//                       left: `${10 + j * 15}%`,
//                       top: "40%",
//                       width: "2px",
//                       height: "16px",
//                       backgroundColor: "#3b82f6",
//                       borderRadius: "2px",
//                       animation: `raindrop 0.8s ease-in-out infinite`,
//                       animationDelay: `${j * 0.2}s`,
//                       zIndex: 10,
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>
//           );
//         })}

//         {/* Rainbow fades & slides in at bottom when rain stops */}
//         {showRainbow && (
//           <img
//             src={`${import.meta.env.BASE_URL}rainbow.png`}
//             alt="rainbow"
//             className="absolute w-60 pointer-events-none rainbow-fade-reveal"
//             style={{
//               top: "75%",
//               left: "50%",
//               transform: "translateX(-50%)",
//               zIndex: 30,
//               pointerEvents: "none",
//               userSelect: "none",
//             }}
//           />
//         )}
//       </div>

//       {/* Balloon easter egg button: separate container for clicks and stacking */}
//       <div
//         className="fixed z-50 pointer-events-auto"
//         style={{ top: "40%", left: "15%", width: "80px", height: "auto" }}
//       >
//         <img
//           src={`${import.meta.env.BASE_URL}balloon.png`}
//           alt="balloon"
//           className="w-full cursor-pointer animate-bounce-slow transition-transform hover:scale-110"
//           onClick={toggleRain}
//         />
//       </div>
//     </>
//   );
// };

// export default SkyBackground;
