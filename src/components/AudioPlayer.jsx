import React, { useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => {
          console.log('Audio autoplay prevented:', err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, setIsPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.error("Error playing audio:", err));
      }
    }
  };

  return (
    <div className="audio-player-wrapper">
      <audio
        ref={audioRef}
        src="/background_music.mp3"
        loop
        preload="auto"
      />
      <button 
        onClick={togglePlay} 
        className={`audio-toggle-btn ${isPlaying ? 'playing' : ''}`}
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <div className="music-playing-indicator">
            <Volume2 className="audio-icon" size={20} />
            <div className="equalizer">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        ) : (
          <VolumeX className="audio-icon paused" size={20} />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
