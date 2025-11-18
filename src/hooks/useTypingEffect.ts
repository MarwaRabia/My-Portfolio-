// src/hooks/useTypingEffect.ts
import { useState, useEffect } from 'react';

interface UseTypingEffectOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

interface UseTypingEffectReturn {
  text: string;
  isDeleting: boolean;
  currentWordIndex: number;
}

export const useTypingEffect = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: UseTypingEffectOptions): UseTypingEffectReturn => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // Deleting
        setText(currentWord.substring(0, text.length - 1));
        setDelta(deletingSpeed);

        if (text.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setDelta(typingSpeed);
        }
      } else {
        // Typing
        setText(currentWord.substring(0, text.length + 1));
        setDelta(typingSpeed);

        if (text === currentWord) {
          setDelta(pauseDuration);
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(handleTyping, delta);

    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    delta,
  ]);

  return {
    text,
    isDeleting,
    currentWordIndex,
  };
};