import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="University" className="w-8 h-8" />
            <span className="text-white font-semibold text-lg">Blue University</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-blue-100">
            <button onClick={() => scrollTo('about')} className="hover:text-white transition">About</button>
            <button onClick={() => scrollTo('departments')} className="hover:text-white transition">Departments</button>
            <button onClick={() => scrollTo('courses')} className="hover:text-white transition">Courses</button>
            <button onClick={() => scrollTo('news')} className="hover:text-white transition">News</button>
            <button onClick={() => scrollTo('contact')} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition">Contact</button>
          </nav>
          <button className="md:hidden text-blue-100" onClick={() => setOpen(!open)}>
            <span className="sr-only">Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden py-3 space-y-2 text-blue-100">
            {[
              ['about', 'About'],
              ['departments', 'Departments'],
              ['courses', 'Courses'],
              ['news', 'News'],
              ['contact', 'Contact'],
            ].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left px-2 py-2 rounded hover:bg-white/10">{label}</button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
