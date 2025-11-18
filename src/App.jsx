import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Departments from './components/Departments'
import Courses from './components/Courses'
import News from './components/News'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-blue-100">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-3">About Blue University</h2>
              <p className="text-blue-200 max-w-3xl">We are a forward-thinking institution focused on hands-on learning and real-world impact. Our community is built on curiosity, collaboration, and care for society.</p>
            </div>
          </div>
        </section>
        <Departments />
        <Courses />
        <News />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300/80 text-sm">© {new Date().getFullYear()} Blue University. All rights reserved.</p>
          <a href="/test" className="text-blue-300 hover:text-white text-sm">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
