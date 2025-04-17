'use client';

export default function VideoBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
} 