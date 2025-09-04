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

  useEffect(() => {
    if (isHovered) {
      setIsTyping(true);
      setDisplayText("");
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex < email.length) {
          setDisplayText(email.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, 50);
      return () => clearInterval(typeInterval);
    } else {
      setIsTyping(true);
      let currentIndex = displayText.length;
      const deleteInterval = setInterval(() => {
        if (currentIndex > 0) {
          setDisplayText(displayText.slice(0, currentIndex - 1));
          currentIndex--;
        } else {
          setIsTyping(false);
          clearInterval(deleteInterval);
        }
      }, 30);
      return () => clearInterval(deleteInterval);
    }
  }, [isHovered, email]);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      window.open(`mailto:${email}`);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="foil-btn relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:border-white/60 transition-all min-w-[140px] cursor-pointer"
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
            <span className="italic font-normal">Contact</span><span className="font-normal" style={{marginLeft: "1px"}}>Us</span>
          </>
        )}
      </span>
      <span aria-hidden className="foil-sheen" />
      {copied && (
        <span className="absolute -top-7 text-xs bg-black/70 text-white px-2 py-1 rounded">
          Copied
        </span>
      )}
    </button>
  );
}


