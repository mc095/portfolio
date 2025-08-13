import Link from "next/link";

export default function Experience() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
      <div className="text-center max-w-4xl relative">
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
        <h1 className="text-4xl sm:text-[2.5rem] font-semibold tracking-tight mb-12 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          experience
        </h1>
        
        <div className="relative p-4 sm:p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 shadow-xl">
          <div className="text-left space-y-12">
            {/* Passionett Experience */}
            <div className="group relative p-4 sm:p-6 rounded-2xl bg-accent/5 hover:bg-accent/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h2 className="text-2xl font-semibold text-white">Technical Intern</h2>
                <div className="text-accent/90 font-medium mt-2 sm:mt-0">Jul 2025 - Present</div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <a 
                  href="https://www.passionett.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white/90 hover:text-white hover:underline"
                >
                  Passionett
                </a>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                As a Technical Intern at Passionett, I am responsible for maintaining and optimizing backend services for a SaaS platform. 
                I primarily use Node.js to manage the codebase and handle the serverless infrastructure on AWS, ensuring high availability and scalability. 
                This role allows me to gain hands-on experience with cloud computing and modern backend development practices.
              </p>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent/90 text-sm font-medium hover:bg-accent/20 transition-colors">
                    <span className="mr-1.5">•</span>Node.js
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent/90 text-sm font-medium hover:bg-accent/20 transition-colors">
                    <span className="mr-1.5">•</span>AWS
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent/90 text-sm font-medium hover:bg-accent/20 transition-colors">
                    <span className="mr-1.5">•</span>Serverless
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent/90 text-sm font-medium hover:bg-accent/20 transition-colors">
                    <span className="mr-1.5">•</span>SaaS
                  </span>
                </div>
              </div>
            </div>

            {/* Sysbolt India Experience */}
            <div className="group relative p-4 sm:p-6 rounded-2xl bg-accent/5 hover:bg-accent/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h2 className="text-2xl font-semibold text-white">Web Developer Intern</h2>
                <div className="text-accent/90 font-medium mt-2 sm:mt-0">Jan 2024 - Mar 2024</div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <a 
                  href="https://www.linkedin.com/company/sysbolt/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white/90 hover:text-white hover:underline"
                >
                  Sysbolt India
                </a>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Worked as a Web Development Intern at Sysbolt India, focusing on CSS and JavaScript. 
                Gained experience with CMS platforms like Shopify and WordPress. Additionally, 
                explored serverless architecture on Azure, enhancing my understanding of cloud 
                computing and modern web development practices.
              </p>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent/90 text-sm font-medium hover:bg-accent/20 transition-colors">
                    <span className="mr-1.5">•</span>CSS
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent/90 text-sm font-medium hover:bg-accent/20 transition-colors">
                    <span className="mr-1.5">•</span>JavaScript
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent/90 text-sm font-medium hover:bg-accent/20 transition-colors">
                    <span className="mr-1.5">•</span>Shopify
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent/90 text-sm font-medium hover:bg-accent/20 transition-colors">
                    <span className="mr-1.5">•</span>WordPress
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent/90 text-sm font-medium hover:bg-accent/20 transition-colors">
                    <span className="mr-1.5">•</span>Azure
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent/90 text-sm font-medium hover:bg-accent/20 transition-colors">
                    <span className="mr-1.5">•</span>Serverless
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}