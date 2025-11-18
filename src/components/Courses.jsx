import { useEffect, useState } from 'react'

function Courses() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [dept, setDept] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const url = new URL(`${base}/api/courses`)
        if (dept) url.searchParams.set('department', dept)
        const res = await fetch(url)
        if (res.ok) {
          const data = await res.json()
          setItems(data)
        }
      } catch (e) {
        // ignore
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [dept])

  return (
    <section id="courses" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Courses</h2>
          <div className="flex items-center gap-2">
            <input value={dept} onChange={(e) => setDept(e.target.value)} placeholder="Filter by department" className="bg-slate-800/60 border border-white/10 rounded-md px-3 py-2 text-blue-100 placeholder-blue-300/60 focus:outline-none" />
          </div>
        </div>
        {loading ? (
          <p className="text-blue-100">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((c, i) => (
              <div key={i} className="bg-slate-800/60 border border-white/10 rounded-xl p-5 hover:translate-y-[-2px] transition shadow">
                <div className="text-xs text-blue-300">{c.code}</div>
                <h3 className="text-white font-semibold">{c.title}</h3>
                <p className="text-blue-200 mt-1 text-sm line-clamp-3">{c.description || '—'}</p>
                <div className="flex items-center justify-between mt-3 text-sm text-blue-300">
                  <span>{c.level}</span>
                  <span>{c.credits} credits</span>
                </div>
              </div>
            ))}
            {items.length === 0 && (
              <div className="text-blue-200">No courses found.</div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Courses
