"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to split text into grapheme clusters (including Hindi combining characters)
  const splitIntoGraphemes = (text: string) => {
    // Use Intl.Segmenter if available (modern browsers)
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter('hi', { granularity: 'grapheme' });
      return Array.from(segmenter.segment(text)).map(segment => segment.segment);
    }
    // Fallback: treat each character as a grapheme
    return Array.from(text);
  };

  const startAnimation = useCallback(() => {
    const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
    setCurrentWord(words[nextIndex]);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  const graphemes = splitIntoGraphemes(currentWord);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left text-white dark:text-neutral-100",
          className
        )}
        key={currentWord}
      >
        <span className="whitespace-nowrap">
          {graphemes.map((grapheme, index) => (
            <motion.span
              key={currentWord + index}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className="inline-block"
              style={{
                fontFeatureSettings: '"ss01"', // Enable font features for better Hindi rendering
                fontVariantLigatures: "normal"
              }}
            >
              {grapheme}
            </motion.span>
          ))}
        </span>
      </motion.div>
    </AnimatePresence>
  );
};

export default FlipWords;