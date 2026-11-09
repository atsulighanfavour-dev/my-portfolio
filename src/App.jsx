import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="flex items-center justify-between px-8 py-6 text-white">

          <h1 className="text-xl font-bold">
            Favour.
          </h1>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="sm:hidden rounded-lg border border-gray-600 px-4 py-2"
          >
          Menu
          </button>
          <div className="hidden text-gray-300 gap-6 sm:flex">
              <a href="#about" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700">About</a>
              <a href="#skills" className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition duration-300 hover:border-blue-400 hover:text-blue-400">Skills</a>
              <a href="#projects" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700">Projects</a>
              <a href="#contact" className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition duration-300 hover:border-blue-400 hover:text-blue-400">Contact</a>
          </div>
      </nav>
      {menuOpen && (
        <div id="mobile-menu" 
         className="flex flex-col gap-4 px-8 pb-6 sm:hidden">

          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        </div>
      )}

      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <p className="text-blue-400 text-lg">
          Hello, I'm
        </p>

        <h1 className="mt-3 text-4xl font-bold sm:text-5xl md:text-6xl">
          Favour Atsulighan
        </h1>

        <h2 className="mt-4 text-xl text-gray-300 sm:text-2xl">
          Frontend Engineer
        </h2>

        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-gray-300 sm:text-lg">
          I build responsive and user-friendly digital
          experiences using modern frontend technologies.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="#projects" className="rounded-lg bg-blue-600 px-6 py-3">
            View My Projects
          </a>

          <a href="#contact" className="rounded-lg border border-gray-500 px-6 py-3">
            Contact Me
          </a>
        </div>

      </main>
      <section id="about" className="px-6 py-20">

        <div className="mx-auto max-w-3xl">

          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl text-center">
          About Me
          </h2>

          {/* <p className="mt-6 text-center leading-8 text-gray-400"> */}
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-gray-300 sm:text-lg">
          I'm a frontend engineer passionate about building
          responsive, accessible, and user-friendly digital
          experiences. I enjoy turning ideas into functional
          interfaces and continuously improving my skills.
          </p>
        </div>
      </section>
      <section id="skills" className="px-6 py-20 bg-gray-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl text-center">
           My Skills
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">

            <div className="rounded-xl  border border-gray-700 bg-gray-900 p-5 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:border-blue-400">
            HTML
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-900 p-5 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:border-blue-400">
            CSS
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-900 p-5 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:border-blue-400">
            JavaScript
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-900 p-5 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:border-blue-400">
            React
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-900 p-5 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:border-blue-400">
            Tailwind CSS
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-900 p-5 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:border-blue-400">
            Git & GitHub
            </div>

          </div>

        </div>

      </section>
      <section id="projects" className="px-6 py-20">

        <div className="mx-auto max-w-5xl">

          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl text-center">
          My Projects
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div className="rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-400">

              <h3 className="text-xl font-bold">
              Student Resources Hub
              </h3>

              <p className="mt-3 text-gray-400">
              A platform designed to help students access
              course materials and past questions easily.
              </p>

              <p className="mt-4 text-sm text-blue-400">
              React · Tailwind CSS
              </p>

            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-400">

              <h3 className="text-xl font-bold">
              Personal Portfolio
              </h3>

              <p className="mt-3 text-gray-400">
              A personal website showcasing my skills,
              projects, and frontend development journey.
              </p>

              <p className="mt-4 text-sm text-blue-400">
              React · Tailwind CSS
              </p>

            </div>

          </div>

        </div>

      </section>
    
      <section id="contact" className="px-6 py-20 bg-gray-800">

        <div className="mx-auto max-w-2xl text-center">

         <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
          Get In Touch
         </h2>

          <p className="mx-auto max-w-2xl leading-relaxed text-gray-300 sm:text-lg">
          I'm open to opportunities, collaborations, and conversations about
          technology and frontend development. Feel free to reach out.
          </p>

          <a
          href="mailto:your-email@example.com"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
          Send Me an Email
          </a>

        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition hover:text-blue-400"
          >
          GitHub
          </a>

          <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition hover:text-blue-400"
          >
          LinkedIn
          </a>
        </div>

      </section>
      <footer className="border-t border-gray-700 px-6 py-8 text-center text-sm text-gray-400">

        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-gray-300 sm:text-lg">
        © {new Date().getFullYear()}  Favour Atsulighan. All rights reserved.
        </p>
        <p className="mt-2 text-sm text-gray-500">
        Built with React and Tailwind CSS.
        </p>
      </footer>

    </div>
  )
}


export default App