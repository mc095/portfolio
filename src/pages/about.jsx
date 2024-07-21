import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  SpotifyIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar-bw.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ganesh</title>
        <meta
          name="description"
          content="Hello there! I build things for the web. Read more about me here."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-3xl bg-zinc-100 object-cover shadow-lg dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hello there! I work on things that make web.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
                Began web development in 2021, initially focusing on HTML, CSS, and JavaScript. Expanded expertise to include cloud platforms like Azure
                and AWS for scalable applications.
            </p>
            <p>
                Developed skills in modern web frameworks and libraries, including React.js for dynamic UIs,
                Tailwind CSS for utility-first styling, and Next.js for server-side rendering. Gained experience with MongoDB for NoSQL databases, 
                and Node.js with Express.js for server-side applications.
            </p>
            <p>
                Extensive experience in C++ and JavaScript, building complex algorithms and applications. 
                Proficient in version control using Git and GitHub for collaborative development.
            </p>
            <p>
                Experienced with no-code tools such as Framer, Wix Studio, and WordPress for rapid development. 
                Actively participated in college technical club activities, securing a top-7 position in a hackathon.
            </p>
            <p>
              Applied Microsoft Excel DAX for advanced data analysis and reporting. Practical knowledge of LLMs 
              and REST APIs for intelligent applications, along with BASH scripting and basics of Red Hat Enterprise Linux.
            </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/gc097"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/lakshmi-sri-sai-ganesh-vathumilli/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://open.spotify.com/user/31eiobsw6mvowylhyokvhodph6tu?si=HIm2sj2NRkmFjJRy06eqjg"
                icon={SpotifyIcon}
                className="mt-4"
              >
                Follow on Spotify Music ;)
              </SocialLink>
              <SocialLink
                href="mailto:22a81a05q0@sves.org.in"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                22a81a05q0@sves.org.in
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
