'use client'
import { useRef, useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const EncryptData = ({ buttonText = "Encrypt data" }) => {
  return (
    <div className="grid min-h-[200px] place-content-center bg-neutral-900 p-4">
    <EncryptButton text={buttonText} />
    </div>
    );
  };
  
  const CYCLES_PER_LETTER = 2;
  const SHUFFLE_TIME = 50;
  
  const CHARS = "!@#$%^&*():{};|,.<>/?";
  
  const EncryptButton = ({ text }: { text: string }) => {
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    
    const [displayText, setDisplayText] = useState(text);
    
    const scramble = () => {
      let pos = 0;
      
      intervalRef.current = setTimeout(() => {
        const scrambled = text
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          
          return randomChar;
        })
        .join("");
        
        setDisplayText(scrambled);
        pos++;
        
        if (pos >= text.length * CYCLES_PER_LETTER) {
          stopScramble();
        }
      }, SHUFFLE_TIME);
    };
    
    const stopScramble = () => {
      clearTimeout(intervalRef.current || undefined);
      
      setDisplayText(text);
    };
    
    return (
      <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300"
      >
      <div className="relative z-10 flex items-center gap-2">
      <FiLock />
      <span>{displayText}</span>
      </div>
      <motion.span
      initial={{
        y: "100%",
      }}
      animate={{
        y: "-100%",
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "linear",
      }}
      className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
      </motion.button>
      );
    };
    
    
    export default EncryptData;
    