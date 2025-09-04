"use client";

import { useState, useEffect } from "react";

type Props = {
  show: boolean;
  message: string;
  duration?: number;
};

export function Toast({ show, message, duration = 2000 }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-[9999] bg-black/90 text-white px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm border border-white/20 toast-slide-down">
      <div className="flex items-center gap-2">
        <span className="text-green-400">✓</span>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}
