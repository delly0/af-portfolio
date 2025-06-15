import React, { useState } from "react";

interface CloudRainProps {
  onRainToggle?: (isRaining: boolean) => void;
}

const CloudRain = ({ onRainToggle }: CloudRainProps) => {
  const [isRaining, setIsRaining] = useState(false);
  console.log(isRaining) 

  const handleClick = () => {
    const newState = !isRaining;
    setIsRaining(newState);
    onRainToggle?.(newState); // optional chaining prevents crash
  };

  const handleMouseEnter = () => {
    if (!isRaining) onRainToggle?.(true);
  };

  const handleMouseLeave = () => {
    if (!isRaining) onRainToggle?.(false);
  };

  return (
    <div
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer w-16 h-16 z-20"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title="Click to toggle raining!"
    >
      <img
        src="/cloud.png"
        alt="toggle rain cloud"
        className="w-full h-full transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
};

export default CloudRain;
