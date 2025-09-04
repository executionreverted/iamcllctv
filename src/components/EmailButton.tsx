"use client";

import { useState, useEffect } from "react";

type Props = {
  email: string;
};

export function EmailButton({ email }: Props) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [initialText, setInitialText] = useState("");
  const [isInitialTyping, setIsInitialTyping] = useState(false);
  const [animationRef, setAnimationRef] = useState<NodeJS.Timeout | null>(null);

  // Initial typing effect for "Contact Us"
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialTyping(true);
      const fullText = "Contact Us";
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setInitialText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsInitialTyping(false);
        }
      }, 100);
      
      return () => clearInterval(typeInterval);
    }, 500); // Start after 0.5 seconds
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Clear any existing animation
    if (animationRef) {
      clearInterval(animationRef);
      setAnimationRef(null);
    }

    if (isHovered) {
      // First delete current text character by character
      setIsTyping(true);
      let currentIndex = displayText.length;
      const deleteInterval = setInterval(() => {
        if (currentIndex > 0) {
          setDisplayText(prev => prev.slice(0, -1));
          currentIndex--;
        } else {
          clearInterval(deleteInterval);
          setAnimationRef(null);
          // After deleting, type the email
          let typeIndex = 0;
          const typeInterval = setInterval(() => {
            if (typeIndex < email.length) {
              setDisplayText(email.slice(0, typeIndex + 1));
              typeIndex++;
            } else {
              setIsTyping(false);
              clearInterval(typeInterval);
              setAnimationRef(null);
            }
          }, 50);
          setAnimationRef(typeInterval);
        }
      }, 30);
      setAnimationRef(deleteInterval);
      return () => {
        clearInterval(deleteInterval);
        setAnimationRef(null);
      };
    } else if (displayText) {
      // First delete the email character by character
      setIsTyping(true);
      let currentIndex = displayText.length;
      const deleteInterval = setInterval(() => {
        if (currentIndex > 0) {
          setDisplayText(prev => prev.slice(0, -1));
          currentIndex--;
        } else {
          clearInterval(deleteInterval);
          setAnimationRef(null);
          // After deleting, type "Contact Us"
          const fullText = "Contact Us";
          let typeIndex = 0;
          
          const typeInterval = setInterval(() => {
            if (typeIndex < fullText.length) {
              setDisplayText(fullText.slice(0, typeIndex + 1));
              typeIndex++;
            } else {
              setIsTyping(false);
              clearInterval(typeInterval);
              setAnimationRef(null);
            }
          }, 100);
          setAnimationRef(typeInterval);
        }
      }, 30);
      setAnimationRef(deleteInterval);
      
      return () => {
        clearInterval(deleteInterval);
        setAnimationRef(null);
      };
    }
  }, [isHovered, email]);

  const handleClick = async () => {
    if (isProcessing) return; // Prevent multiple clicks
    
    setIsProcessing(true);
    
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      
      // Dispatch custom event for toast
      window.dispatchEvent(new CustomEvent('email-copied'));
      
      setTimeout(() => setCopied(false), 2000);
      
      // 1 second delay then trigger mailto
      setTimeout(() => {
        window.location.href = `mailto:${email}`;
        setIsProcessing(false);
      }, 1000);
    } catch {
      setCopied(true);
      
      // Dispatch custom event for toast
      window.dispatchEvent(new CustomEvent('email-copied'));
      
      setTimeout(() => setCopied(false), 2000);
      
      // 1 second delay then trigger mailto
      setTimeout(() => {
        window.location.href = `mailto:${email}`;
        setIsProcessing(false);
      }, 1000);
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={isProcessing}
      className={`foil-btn relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:border-white/60 transition-all min-w-[140px] ${
        isProcessing ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      }`}
      aria-label="Email"
    >
      
      <span className="relative z-10">
        {(isHovered || isTyping) ? (
          <>
            {displayText}
            {isTyping && <span className="animate-pulse">|</span>}
          </>
        ) : (
          <>
            {isInitialTyping ? (
              <>
                {initialText}
                <span className="animate-pulse">|</span>
              </>
            ) : initialText ? (
              <>
                <span className="italic font-normal">Contact</span><span className="font-normal" style={{marginLeft: "1px"}}>Us</span>
              </>
            ) : (
              <span className="animate-pulse">|</span>
            )}
          </>
        )}
      </span>
      <span aria-hidden className="foil-sheen" />
    </button>
  );
}


