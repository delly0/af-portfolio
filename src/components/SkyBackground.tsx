import React, { useState } from "react";
import CloudRain from "./CloudRain";

const NUM_STARS = 50;
const NUM_BIRDS = 8;

const cloudPositions = [
  { top: "20%", left: "0%" },
  { top: "40%", left: "30%" },
  { top: "60%", left: "60%" },
];

interface SkyBackgroundProps {
  isDay: boolean;
}

const SkyBackground: React.FC<SkyBackgroundProps> = ({ isDay }) => {
  const [isRaining, setIsRaining] = useState(false);

  return (
    <div
      className={`fixed inset-0 -z-10 overflow-visible transition-colors duration-700 ${
        isDay
          ? "bg-gradient-to-b from-sky-200 to-blue-100"
          : "bg-gradient-to-b from-slate-800 to-slate-900"
      }`}
    >
      {/* Stars or Birds */}
      {isDay
        ? [...Array(NUM_BIRDS)].map((_, i) => {
            const size = 24 + Math.random() * 16;
            const flyLeft = Math.random() > 0.5;
            return (
              <img
                key={`bird-${i}`}
                src="/bird.gif"
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
              src="/star.png"
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
        src={isDay ? "/sun.png" : "/moon.png"}
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

      {/* Floating Clouds */}
      {cloudPositions.map((pos, i) => (
        <div
          key={`cloud-${i}`}
          className="absolute overflow-visible"
          style={{
            top: pos.top,
            left: pos.left,
            animation: `floatCloud ${(25 + i * 5)*0.7}s ease-in-out infinite alternate`,
          }}
        >
          <div className="relative w-32 h-40 overflow-visible">
            <img
              src="/cloud.png"
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

      {/* <CloudRain onRainToggle={setIsRaining} /> */}
    </div>
  );
};

export default SkyBackground;
