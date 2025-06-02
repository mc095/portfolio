'use client';

export default function VideoBackground() {  return (
    <div className="absolute inset-0 -z-10">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="metadata"        className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
      >
        <source src="/videos/background-2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
} 