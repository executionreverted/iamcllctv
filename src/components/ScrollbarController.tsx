"use client";

import { useEffect } from "react";

export function ScrollbarController() {
  useEffect(() => {
    // Show scrollbar after reveal animations complete
    const timer = setTimeout(() => {
      document.body.classList.add('animations-complete');
    }, 1000); // Wait for all animations to complete (longest is 0.6s + 0.8s duration)
    
    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
}
