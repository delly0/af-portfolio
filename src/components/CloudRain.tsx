import React from "react";

interface CloudRainProps {
  isRaining: boolean;
  lightning?: boolean;
  pos: { top: string; left: string };
}

const CloudRain: React.FC<CloudRainProps> = ({ isRaining, lightning, pos }) => {
  return (
    <div
      className="absolute overflow-visible"
      style={{
        top: pos.top,
        left: pos.left,
        animation: `floatCloud 20s ease-in-out infinite alternate`,
      }}
    >
      <div className="relative w-32 h-40 overflow-visible">
        <img
          src={`${import.meta.env.BASE_URL}cloud.png`}
          alt="cloud"
          className="w-full opacity-90 pointer-events-none"
        />
        {isRaining &&
          [...Array(6)].map((_, j) => (
            <div
              key={`raindrop-${j}`}
              className="absolute bg-blue-400"
              style={{
                left: `${10 + j * 12}%`,
                top: "90%",
                width: "2px",
                height: "16px",
                borderRadius: "2px",
                animation: `raindrop 0.8s ease-in-out infinite`,
                animationDelay: `${j * 0.2}s`,
              }}
            />
          ))}
        {lightning && Math.random() < 0.05 && (
          <div className="absolute inset-0 bg-white bg-opacity-50 animate-flash" />
        )}
      </div>
    </div>
  );
};

export default CloudRain;