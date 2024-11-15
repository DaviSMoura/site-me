import Image from "next/image"
import Link from "next/link"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const companiesImpacted = [
  {
    name: "Beyond Company",
    logo: "/beyond-logo.png",
  },
  {
    name: "Extreme Digital Solutions",
    logo: "/eds-logo.png?1",
  },
]

const projects = [
  {
    title: "Eleições 2024",
    description:
      "I developed a real-time platform designed to track the 2024 Brazilian elections with data sourced directly from the TSE (Electoral Court of Brazil). The platform incorporates a TweetDeck-inspired interface, allowing users to add and organize horizontal columns for each state, tailored to their preferences. The primary challenge was efficiently managing and processing large volumes of data to maintain optimal performance and a seamless user experience.",
    image: "/proj-eleicoes-2024.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Open Source"],
    actions: [
      {
        title: "View project",
        url: "https://eleicoes2024.davimoura.dev",
      },
    ],
  },
  {
    title: "Cotação Nucoin",
    description:
      "A comprehensive tool designed to monitor the real-time value of Nucoin, the crypto token created by Nubank, a leading Brazilian bank. Due to the absence of an official API, I reverse-engineered the Nubank app to accurately extract and display the necessary data. This tool features real-time graph updates for seamless user experience. Additionally, I developed an automated Telegram channel that delivers the current Nucoin price every minute, ensuring users stay informed with up-to-the-minute data.",
    extra: "The telegram channel of this project reached almost 2k users.",
    image: "/proj-cotacao-nucoin.png",
    tags: ["Vue", "Vite", "Reverse Engineering"],
    actions: [
      {
        title: "View project",
        url: "https://nucoin.davimoura.dev/",
      },
      {
        title: "Telegram Channel",
        url: "https://t.me/nucoincotacao",
      },
    ],
  },
]

export default function Home() {
  return (
    <>
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md py-4 px-10 border-b">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            Davi Moura
          </Link>
          <div className="flex gap-6">
            <a href="#projects" className="hover:text-gray-600">
              Projects
            </a>
            <a href="https://links.davimoura.dev" className="hover:text-gray-600">
              Contact
            </a>
            <a href="https://github.com/davismoura" className="hover:text-gray-600">
              GitHub
            </a>
          </div>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row justify-between items-center bg-white h-[95vh] relative">
        <div className="flex flex-col justify-center h-full px-10 w-full md:w-1/2 order-2 md:order-1">
          <div>
            <h1 className="text-lg uppercase font-thin text-slate-400 tracking-widest">
              Davi Moura
            </h1>
            <h1 className="text-4xl md:text-6xl font-black pt-2 pb-5">
              Full Stack Developer
            </h1>
          </div>
          <div>
            <p className="text-2xl text-justify text-slate-500">
              Not your <i>average</i> developer. I began my journey at the age
              of 12, and since then, I&apos;ve been dedicated to creating
              products, services, and tools that make a difference and solve
              real-world problems.
            </p>
          </div>
          <div className="pt-5">
            <a
              href="#projects"
              className="text-black py-3 rounded-lg text-lg font-semibold"
            >
              My Public Projects
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full relative w-full md:w-1/2 order-1 md:order-2 mt-10 md:mt-0">
          <Image
            src="/davi-moura.png"
            alt="Davi Moura"
            fill
            className="object-contain drop-shadow-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <a
          href="#projects"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
          aria-label="Scroll to projects"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
      <div className="divider border-t mx-10 mt-10"></div>
      {/* <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-xl uppercase font-thin text-slate-400 tracking-widest text-center mb-12">
            Companies Impacted
          </h2>
          <div className="flex justify-center gap-12">
            {companiesImpacted.map((company, index) => (
              <div key={index} className="w-48 h-24 relative">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div id="projects" className="py-16 px-10">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">Public Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden bg-gray-50 border border-gray-200 rounded-lg border-solid border flex flex-col justify-between"
              >
                {/* <div className="relative h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div> */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.extra && (
                    <p className="text-gray-600 mb-4 italic">{project.extra}</p>
                  )}
                  {project.actions && (
                    <div className="flex gap-3 mt-auto">
                      {project.actions.map((action, actionIndex) => (
                        <a
                          key={actionIndex}
                          href={action.url}
                          target="_blank"
                          className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
                        >
                          {action.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="divider border-t"></div>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl uppercase font-thin text-slate-400 tracking-widest">
            Need a developer?
          </h2>
          <a
            href="https://links.davimoura.dev"
            className="text-5xl font-bold mb-8 hover:underline"
          >
            Let&apos;s work together! 🚀
          </a>
        </div>
      </div>
      <footer className="w-full py-4 mt-10 bg-white border-t">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 Davi Moura. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/davismoura"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/davi-s-moura/"
              target="_blank"
              className="text-gray-600 hover:text-gray-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
