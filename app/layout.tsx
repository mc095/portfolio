import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AudioPlayer from "./components/AudioPlayer";
import VideoBackground from "./components/VideoBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ganesh Vathumilli - Rookie Engineer",
  description:
    "Ganesh Vathumilli — web engineer and design enthusiast crafting clean, user-friendly interfaces.",
  openGraph: {
    title: "Ganesh Vathumilli - Rookie Engineer",
    description:
      "Ganesh Vathumilli — web engineer and design enthusiast crafting clean, user-friendly interfaces.",
    images: [
      {
        url: "https://ganeshvath.netlify.app/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh Vathumilli - Rookie Engineer",
    description:
      "Ganesh Vathumilli — web engineer and design enthusiast crafting clean, user-friendly interfaces.",
    images: ["https://ganeshvath.netlify.app/opengraph.jpg"],
  },
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