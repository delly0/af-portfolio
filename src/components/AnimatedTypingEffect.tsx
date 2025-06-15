import React, { useState, useEffect } from "react";

interface AnimatedTypingEffectProps {
  texts: string[];
  typingSpeed?: number; // ms per char
  pauseDuration?: number; // ms between texts
  className?: string;
}

const AnimatedTypingEffect: React.FC<AnimatedTypingEffectProps> = ({
  texts,
  typingSpeed = 100,
  pauseDuration = 1500,
  className,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex <= currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
    } else if (charIndex === currentText.length + 1) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (charIndex === -1) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, pauseDuration]);

  return (
    <span
      className={`font-mono text-lg text-blue-700 dark:text-blue-300 ${className}`}
      aria-label="Animated typing effect"
    >
      {displayText}
      <span className="inline-block w-1 h-6 bg-blue-700 dark:bg-blue-300 animate-blink ml-1" />
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </span>
  );
};

export default AnimatedTypingEffect;
