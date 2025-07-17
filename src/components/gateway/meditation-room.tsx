'use client';
import React, { useRef, useState } from 'react';

export const MeditationRoom = ({ onEnter }: { onEnter: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleAudioToggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Meditation Audio */}
      <audio
        ref={audioRef}
        src="/audio/meditation/Zikr_Allah__40_Minutes.__That_will_clean_your_soul_and_heart.__2__lc1dkr.mp3"
        loop
        hidden
        id="meditation-audio"
      />
      {/* Animation Placeholder */}
      <div className="mb-8">
        <div className="w-40 h-40 rounded-full bg-white/10 border-4 border-white/30 animate-pulse" />
      </div>
      {/* Welcome Text */}
      <h2 className="text-2xl md:text-4xl font-light mb-4 text-center">
        Entrez dans un espace de paix et de lumière
      </h2>
      {/* Play/Pause Button */}
      <button
        className="mb-6 px-6 py-2 rounded-full bg-white/20 border border-white/30 text-white hover:bg-white/30 transition"
        onClick={handleAudioToggle}
      >
        {isPlaying ? 'Pause Audio' : 'Jouer Audio'}
      </button>
      {/* Enter Button */}
      <button
        className="px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white text-lg hover:bg-white/20 transition"
        onClick={onEnter}
      >
        Entrer
      </button>
    </div>
  );
}; 