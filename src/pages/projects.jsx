import Head from 'next/head'
import Link from 'next/link'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { useEffect, useState, Fragment } from 'react'

function ProjectCard({ project }) {
  console.log(project)
  return (
    <Card as="li" key={project.name}>
      <Link href={project.html_url} target="blank">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          {project.emoji}
        </div>
      </Link>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link
          target="blank"
          href={
            project.private ? project.homepage || '' : project.html_url || ''
          }
        >
          {project.name}
        </Card.Link>
      </h2>
      <Card.Description>{project.description}</Card.Description>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        <span className="">
          {project.topics.map((topic, index) => (
            <span
              key={index}
              className="my-1 mr-1 inline-flex items-center rounded-full bg-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
            >
              <svg
                className="-ml-0.5 mr-1.5 h-2 w-2 text-zinc-600"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              {topic}
            </span>
          ))}
        </span>
      </p>
    </Card>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loader, setLoader] = useState(true)

  async function getProjects() {
    const data = [
      {
        name: 'MERN Job Portal App',
        html_url: 'https://github.com/gc097/MERN-App-Job-Portal',
        description: 'a full stack application which helps recruiters to track their openings.',
        emoji: '👩🏻‍🎓',
        topics: ['react', 'mongoDB', 'express', 'node', 'tailwindcss', 'vite', 'nodemon'],
        private: false,
        homepage: ''
      },
      {
        name: 'Bloom Store',
        html_url: 'https://github.com/mc095/ecommerce-bloom-store',
        description: 'a simple ecommerce application with basic functionalities.',
        emoji: '👟',
        topics: ['react', 'tailwindcss'],
        private: false,
        homepage: ''
      },
      {
        name: 'Mental Health Chatbot',
        html_url: 'https://github.com/mc095/Ashley-mental-health-Chatbot',
        description: 'a depression support chatbot that helps teenagers by providing empathetic responses',
        emoji: '🍃',
        topics: ['Semantic Language Models', 'Langchain', 'Python', 'React', 'Huggingface API'],
        private: false,
        homepage: ''
      },
      {
        name: 'Python Snippets',
        html_url: 'https://github.com/mc095/Python_snippets_1',
        description: 'This repository consists of python mini projects i have worked upon.',
        emoji: '🦊',
        topics: ['python', 'GUI', 'web app'],
        private: false,
        homepage: ''
      },
      {
        name: 'Simple Supermarket billing',
        html_url: 'https://github.com/mc095/Simple-Supermarket_billing',
        description: 'predicting total cost image to sum up billing at supermarket',
        emoji: '🛩️',
        topics: ['Python', 'OCR', 'Computer Vision'],
        private: false,
        homepage: ''
      },
      {
        name: 'Data Analysis using Python',
        html_url: 'https://github.com/mc095/Data-Analysis-With-Python',
        description: 'This repo consists of starter projects to get started with DA.',
        emoji: '🔎',
        topics: ['python', 'selenium', 'beautiful soup', 'RNN'],
        private: false,
        homepage: ''
      },
      {
        name: 'Denoising-Images-using-Deeplearning_N2V',
        html_url: 'https://github.com/mc095/Denoising-Images-using-Deeplearning_-N2V',
        description: 'Image denoising using N2V model',
        emoji: '🌠',
        topics: ['python', 'CNN', 'data cleaning techniques'],
        private: false,
        homepage: ''
      },
      {
        name: 'MLSC svec Prototype Website',
        html_url: 'https://github.com/mc095/mlsc-test',
        description: 'built basic functionalities of tech club website using html, css, js.',
        emoji: '🐠',
        topics: ['Html', 'css', 'JavaScript'],
        private: false,
        homepage: ''
      },
    ]

    setProjects(data)
    setLoader(false)
  }

  useEffect(() => {
    getProjects()
  }, [])

  const Shimmer = ({ n }) => {
    let shimmers = []
    for (let i = 0; i < n; i++) {
      shimmers.push(
        <Card className="m-2" key={i}>
          <div className="w-80 animate-pulse rounded bg-zinc-200 py-4 shadow-md dark:bg-zinc-900 sm:w-80">
            <div className="flex space-x-4 p-4 sm:px-8">
              <div className="h-16 w-16 flex-shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-700"></div>
              <div className="flex-1 space-y-4 py-2">
                <div className="h-3 w-full rounded bg-zinc-100 dark:bg-zinc-700"></div>
                <div className="h-3 w-5/6 rounded bg-zinc-100 dark:bg-zinc-700"></div>
              </div>
            </div>
            <div className="space-y-4 p-4 sm:px-8">
              <div className="h-4 w-full rounded bg-zinc-100 dark:bg-zinc-700"></div>
              <div className="h-4 w-full rounded bg-zinc-100 dark:bg-zinc-700"></div>
              <div className="h-4 w-3/4 rounded bg-zinc-100 dark:bg-zinc-700"></div>
            </div>
          </div>
        </Card>
      )
    }

    return <div className="md:flex">{shimmers}</div>
  }

  return (
    <>
      <Head>
        <title>Projects - Ganesh</title>
        <meta
          name="description"
          content="Hello there, I'm Ganesh. Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on a dozen of little projects over the years that can be found at my personal code museum, GitHub. I've listed them here for your convenience. In case you're still wondering, I specialize in
        creating scalable enterprise software solutions. Currently exploring the horizons of AI."
      >
        <div className="-mt-16 mb-10 shadow">
          <div className="flex">
            <div className=" flex-1 md:flex md:justify-between">
              <p className="text-sm text-zinc-600 ">
                All the projects in this page are fetched from my
                <a
                  href="https://github.com/mc095"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 font-bold text-zinc-600 hover:text-zinc-500"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {loader ? (
            <Shimmer n={9} />
          ) : (
            projects.map((project) => (
              <Fragment key={project.name}>
                <ProjectCard key={project.name} project={project} />
              </Fragment>
            ))
          )}
        </ul>
      </SimpleLayout>
    </>
  )
}
