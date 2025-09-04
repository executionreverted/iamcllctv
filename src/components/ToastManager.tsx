"use client";

import { useState, useEffect } from "react";

export function ToastManager() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleEmailCopy = () => {
      setShowToast(true);
    };

    // Listen for custom event
    window.addEventListener('email-copied', handleEmailCopy);

    return () => {
      window.removeEventListener('email-copied', handleEmailCopy);
    };
  }, []);

  if (!showToast) return null;

  return (
    <div className="fixed top-4 right-4 z-[9999] bg-black/90 text-white px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm border border-white/20 toast-slide-down">
      <div className="flex items-center gap-2">
        <span className="text-green-400">✓</span>
        <span className="text-sm font-medium">Email copied to clipboard!</span>
      </div>
    </div>
  );
}
