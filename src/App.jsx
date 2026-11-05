function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="flex items-center justify-between px-8 py-6 text-white">

          <h1 className="text-xl font-bold">
          Favour.
          </h1>

          <div className="hidden gap-6 sm:flex">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
          </div>
      </nav>
      <main className="flex flex-col items-center justify-center px-6 text-center">

        <p className="text-blue-400 text-lg">
          Hello, I'm
        </p>

        <h1 className="mt-3 text-5xl font-bold">
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
          <button className="rounded-lg bg-blue-600 px-6 py-3">
            View My Projects
          </button>

          <button className="rounded-lg border border-gray-500 px-6 py-3">
            Contact Me
          </button>
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
    </div>
  )
}

export default App