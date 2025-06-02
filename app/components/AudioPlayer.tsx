'use client';

import { useEffect, useState } from 'react';

export default function AudioPlayer() {
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Initialize audio on client side only
  useEffect(() => {
    setIsClient(true);
    const audioInstance = new Audio('/audio/background-music-3.mp3');
    audioInstance.loop = true;
    audioInstance.volume = 0.4;
    setAudio(audioInstance);
  }, []);

  // Handle play/pause
  useEffect(() => {
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }

    return () => {
      if (!isPlaying) {
        audio.pause();
      }
    };
  }, [isPlaying, audio]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Don't render anything until client-side hydration is complete
  if (!isClient) return null;

  return (
    <button 
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 p-2.5 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/50 group"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <svg className="w-4 h-4 text-white/80 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"/>
          <rect x="14" y="4" width="4" height="16"/>
        </svg>
      ) : (
        <svg className="w-4 h-4 text-white/80 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
      )}
    </button>
  );
} 