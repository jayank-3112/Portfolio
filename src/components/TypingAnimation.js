// src/components/TypingAnimation.js
import React, { useEffect, useState } from 'react';

const TypingAnimation = ({ phrases, delay }) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (phraseIndex < phrases.length) {
      const currentPhrase = phrases[phraseIndex];

      // Typing effect
      if (charIndex < currentPhrase.length) {
        const typingTimer = setTimeout(() => {
          setText(prev => prev + currentPhrase[charIndex]);
          setCharIndex(prev => prev + 1);
        }, 100); // Delay between characters

        return () => clearTimeout(typingTimer);
      } else {
        // Pause before moving to the next phrase
        const pauseTimer = setTimeout(() => {
          setPhraseIndex(prev => prev + 1);
          setCharIndex(0);
          setText(''); // Reset text for the next phrase
        }, delay); // Delay before the next phrase

        return () => clearTimeout(pauseTimer);
      }
    } else {
      // Reset to the first phrase for looping
      const resetTimer = setTimeout(() => {
        setPhraseIndex(0);
        setCharIndex(0);
        setText('');
      }, delay); // Delay before restarting the loop

      return () => clearTimeout(resetTimer);
    }
  }, [charIndex, phraseIndex, phrases, delay]);

  return <span>{text}</span>;
};

export default TypingAnimation;
