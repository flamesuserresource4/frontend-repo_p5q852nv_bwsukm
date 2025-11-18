function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.25),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Welcome to Blue University
            </h1>
            <p className="mt-5 text-lg text-blue-100">
              A modern hub for learning, research, and innovation. Explore our departments, browse courses, and stay up to date with campus news.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#departments" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-md transition">Explore Departments</a>
              <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-md transition">Contact Admissions</a>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYW1wdXN8ZW58MHwwfHx8MTc2MzQ2MzY2NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Campus" className="rounded-xl shadow-2xl border border-white/10" />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg">
              <p className="font-semibold">Top 100 Global University</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
