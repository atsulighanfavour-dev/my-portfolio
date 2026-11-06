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
              <a href="#about" className="transition-colors hover:text-blue-400">About</a>
              <a href="#skills" className="transition-colors hover:text-blue-400">Skills</a>
              <a href="#projects" className="transition-colors hover:text-blue-400">Projects</a>
              <a href="#contact" className="transition-colors hover:text-blue-400">Contact</a>
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

        <h1 className="mt-3 text-5xl font-bold sm:text-5xl md:text-6xl">
          Favour Atsulighan
        </h1>

        <h2 className="mt-4 text-2xl text-gray-300">
          Frontend Engineer
        </h2>

        <p className="mt-6 max-w-xl text-gray-400">
          I build responsive and user-friendly digital
          experiences using modern frontend technologies.
        </p>

        <div className="mt-8 flex gap-4">
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

          <h2 className="text-3xl font-bold text-center">
          About Me
          </h2>

          <p className="mt-6 text-center leading-8 text-gray-400">
          I'm a frontend engineer passionate about building
          responsive, accessible, and user-friendly digital
          experiences. I enjoy turning ideas into functional
          interfaces and continuously improving my skills.
          </p>
        </div>
      </section>
      <section id="skills" className="px-6 py-20 bg-gray-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center">
           My Skills
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">

            <div className="rounded-lg bg-gray-900 p-5 text-center">
            HTML
            </div>

            <div className="rounded-lg bg-gray-900 p-5 text-center">
            CSS
            </div>

            <div className="rounded-lg bg-gray-900 p-5 text-center">
            JavaScript
            </div>

            <div className="rounded-lg bg-gray-900 p-5 text-center">
            React
            </div>

            <div className="rounded-lg bg-gray-900 p-5 text-center">
            Tailwind CSS
            </div>

            <div className="rounded-lg bg-gray-900 p-5 text-center">
            Git & GitHub
            </div>

          </div>

        </div>

      </section>
      <section id="projects" className="px-6 py-20">

        <div className="mx-auto max-w-5xl">

          <h2 className="text-3xl font-bold text-center">
          My Projects
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">

            <div className="rounded-xl bg-gray-800 p-6">

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

            <div className="rounded-xl bg-gray-800 p-6">

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

          <h2 className="text-3xl font-bold">
          Let's Work Together
          </h2>

          <p className="mt-5 text-gray-400">
          Have a project or opportunity in mind?
          I'd love to hear from you.
          </p>

          <a
          href="mailto:your-email@example.com"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3"
          >
          Send Me an Email
          </a>

        </div>

      </section>
      <footer className="border-t border-gray-700 px-6 py-8 text-center">

        <p className="text-gray-400">
        © 2026 Favour Atsulighan. All rights reserved.
        </p>
        <p className="mt-2 text-sm text-gray-500">
        Built with React and Tailwind CSS.
        </p>
      </footer>

    </div>
  )
}


export default App