function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-y-auto">
      <nav className="flex items-center justify-between px-8 py-6 text-white">

      <h1 className="text-xl font-bold">
        Favour.
      </h1>

      <div className="flex gap-6">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

    </nav>

      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

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
    </div>
  )
}

export default App