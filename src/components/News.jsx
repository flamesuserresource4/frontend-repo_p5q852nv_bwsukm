import { useEffect, useState } from 'react'

function News() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/news`)
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
    <section id="news" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Campus News</h2>
        {loading ? (
          <p className="text-blue-100">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((n, i) => (
              <article key={i} className="bg-slate-800/60 border border-white/10 rounded-xl overflow-hidden hover:translate-y-[-2px] transition shadow">
                {n.image_url && <img src={n.image_url} alt="" className="w-full h-40 object-cover" />}
                <div className="p-5">
                  <h3 className="text-white font-semibold">{n.title}</h3>
                  <p className="text-blue-200 mt-1 text-sm line-clamp-3">{n.summary || '—'}</p>
                </div>
              </article>
            ))}
            {items.length === 0 && (
              <div className="text-blue-200">No news yet.</div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default News
