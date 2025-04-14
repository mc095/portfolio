import Link from "next/link";

export default function Projects() {
    return (
      <main className="relative flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
        <div className="text-center max-w-5xl relative">
          <nav className="mb-12 flex flex-row items-center justify-center gap-6 sm:gap-8">
            <Link
              href="/"
              className="text-accent/90 hover:text-accent transition-colors relative group"
            >
              <span className="relative z-10">home</span>
              <span className="absolute inset-x-0 -bottom-px h-px bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
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
          <h1 className="text-4xl sm:text-[2.5rem] font-semibold tracking-tight mb-16 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            my projects
          </h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="group relative p-4 -m-4 rounded-xl transition-colors hover:bg-accent/5">
              <h2 className="text-2xl font-semibold tracking-tight mb-8">
                <a href="https://ashhealth07.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-white">
                  kawaii chatbot
                </a>
              </h2>
              <div className="mt-4">
                <video
                  className="w-full aspect-video mx-auto rounded-lg shadow-lg"
                  controls
                  src="/videos/ashley.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="mt-8 text-lg text-zinc-400">
                i developed a chatbot to support mental health using <a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline">huggingface</a> and <a href="https://docs.chainlit.io" target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline">chainlit</a>. it provided users with accessible emotional support and resources.
              </p>
            </div>

            <div className="group relative p-4 -m-4 rounded-xl transition-colors hover:bg-accent/5">
              <h2 className="text-2xl font-semibold tracking-tight mb-8">
                <a href="https://github.com/mc095/contest-platform" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-white">
                  coding contest platform
                </a>
              </h2>
              <div className="mt-4">
                <video
                  className="w-full aspect-video mx-auto rounded-lg shadow-lg"
                  controls
                  src="/videos/coding-contest.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="mt-8 text-lg text-zinc-400">
                i created a platform for hosting coding contests using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline">nextjs</a> and <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline">typescript</a>. it engaged developers and fostered competitive programming skills.
              </p>
            </div>

            <div className="group relative p-4 -m-4 rounded-xl transition-colors hover:bg-accent/5">
              <h2 className="text-2xl font-semibold tracking-tight mb-8">
                <a href="https://mern-app-job-portal.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-white">
                  job portal
                </a>
              </h2>
              <div className="mt-4">
                <video
                  className="w-full aspect-video mx-auto rounded-lg shadow-lg"
                  controls
                  src="/videos/jobportal.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="mt-8 text-lg text-zinc-400">
                i created a platform for hosting coding contests using the <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline">mern stack</a>. it engaged developers and fostered competitive programming skills.
              </p>
            </div>

            <div className="group relative p-4 -m-4 rounded-xl transition-colors hover:bg-accent/5">
              <h2 className="text-2xl font-semibold tracking-tight mb-8">
                <a href="https://ganesh97.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-white">
                  employee management system
                </a>
              </h2>
              <div className="mt-4">
                <video
                  className="w-full aspect-video mx-auto rounded-lg shadow-lg"
                  controls
                  src="/videos/empmngmnt.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="mt-8 text-lg text-zinc-400">
                created a system for managing employees using the <a href="https://www.djangoproject.com" target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline">django</a> framework. it streamlined employee management and improved productivity in retail stores.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }