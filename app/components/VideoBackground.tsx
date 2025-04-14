export default function VideoBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-black/50"></div>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/background.mp4"
      >
      </video>
    </div>
  );
} 