import { useState, useEffect } from "react";

const TypedText = ({ texts, typingSpeed = 100, eraseSpeed = 50, delayBetweenTexts = 5000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping && displayText.length < texts[currentIndex].length) {
      timeout = setTimeout(() => {
        setDisplayText(texts[currentIndex].substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (isTyping) {
      timeout = setTimeout(() => setIsTyping(false), delayBetweenTexts);
    } else if (displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1));
      }, eraseSpeed);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setIsTyping(true);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, texts, typingSpeed, eraseSpeed, delayBetweenTexts]);

  return (
    <span className="inline-block font-medium text-shadow-lg/50 text-[1rem]">
      {displayText}
      <span className="cursor animate-pulse">|</span>
    </span>
  );
};

export default TypedText;
