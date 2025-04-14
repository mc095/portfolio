import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
      <div className="text-center relative">
        <nav className="mb-12 flex flex-row items-center justify-center gap-6 sm:gap-8">
          <Link
            href="/projects"
            className="text-accent/90 hover:text-accent transition-colors relative group"
          >
            <span className="relative z-10">projects</span>
            <span className="absolute inset-x-0 -bottom-px h-px bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
          <Link
            href="/experience"
            className="text-accent/90 hover:text-accent transition-colors relative group"
          >
            <span className="relative z-10">experience</span>
            <span className="absolute inset-x-0 -bottom-px h-px bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
          <Link
            href="/resume"
            className="text-accent/90 hover:text-accent transition-colors relative group"
          >
            <span className="relative z-10">resume</span>
            <span className="absolute inset-x-0 -bottom-px h-px bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </Link>
        </nav>

        <h1 className="text-4xl sm:text-[2.5rem] font-semibold tracking-tight mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          hey, i&apos;m ganesh
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/65 max-w-xl mx-auto">
          rookie web engineer and design enthusiast crafting clean, user-friendly interfaces.
          <br /><br />
        </p>
        <div className="mt-12">
          <div className="flex flex-row items-center justify-center gap-6 sm:gap-8">
            <Link
              href="https://www.linkedin.com/in/ganesh097/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/90 hover:text-accent transition-colors relative group"
            >
              <span className="relative z-10">linkedin</span>
              <span className="absolute inset-x-0 -bottom-px h-px bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link
              href="https://github.com/mc095"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/90 hover:text-accent transition-colors relative group"
            >
              <span className="relative z-10">github</span>
              <span className="absolute inset-x-0 -bottom-px h-px bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link
              href="mailto:your.email@example.com"
              className="text-accent/90 hover:text-accent transition-colors relative group"
            >
              <span className="relative z-10">email</span>
              <span className="absolute inset-x-0 -bottom-px h-px bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}