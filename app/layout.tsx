import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AudioPlayer from "./components/AudioPlayer";
import VideoBackground from "./components/VideoBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ganesh",
  description: "my work and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased relative min-h-screen">
        <VideoBackground />
        <AudioPlayer />
        {children}
      </body>
    </html>
  );
}