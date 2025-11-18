import { useEffect, useState } from 'react'

function Departments() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/departments`)
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
  }, [])

  return (
    <section id="departments" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Departments</h2>
        {loading ? (
          <p className="text-blue-100">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((d, i) => (
              <div key={i} className="bg-slate-800/60 border border-white/10 rounded-xl p-5 hover:translate-y-[-2px] transition shadow">
                <h3 className="text-white font-semibold text-lg">{d.name}</h3>
                <p className="text-blue-200 mt-1 text-sm">{d.description || '—'}</p>
                {d.chair && <p className="text-blue-300 mt-2 text-xs">Chair: {d.chair}</p>}
              </div>
            ))}
            {items.length === 0 && (
              <div className="text-blue-200">No data yet. You can trigger a demo seed from the backend test page.</div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Departments
