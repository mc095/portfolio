import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
      <div className="text-center relative">
        {/* Navigation */}
        <nav className="mb-12 flex flex-row items-center justify-center gap-6 sm:gap-8">
          <Link href="/projects" className="text-accent/90 hover:text-accent transition-colors relative group">projects</Link>
          <Link href="/experience" className="text-accent/90 hover:text-accent transition-colors relative group">experience</Link>
          <Link href="/resume" className="text-accent/90 hover:text-accent transition-colors relative group">resume</Link>
        </nav>

        {/* Hidden SEO elements */}
        <h1 className="sr-only">Ganesh Vathumilli — Web Engineer & Design Enthusiast</h1>
        <p className="sr-only">
          I&apos;m Ganesh Vathumilli, a web engineer and design enthusiast crafting clean, user-friendly digital experiences. Explore my projects, design work, and development activities.
        </p>

        {/* Visible Hero */}
        <h1 className="text-4xl sm:text-[2.5rem] font-semibold tracking-tight mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          hey, i&apos;m ganesh
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/65 max-w-xl mx-auto">
          rookie web engineer and design enthusiast crafting clean, user-friendly interfaces.
        </p>

        {/* Social links */}
        <div className="mt-12 flex flex-row items-center justify-center gap-6 sm:gap-8">
          <Link href="https://www.linkedin.com/in/ganesh097/" target="_blank" rel="noopener noreferrer">linkedin</Link>
          <Link href="https://github.com/mc095" target="_blank" rel="noopener noreferrer">github</Link>
          <Link href="mailto:ganeshvathumilli@gmail.com">email</Link>
        </div>

        {/* Hidden LinkedIn badge script for SEO */}
        <script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        />
      </div>
    </main>
  );
}
