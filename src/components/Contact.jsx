import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: 'Admissions', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('Thanks! We\'ll be in touch.')
        setForm({ name: '', email: '', topic: 'Admissions', message: '' })
      } else {
        setStatus('Something went wrong. Please try again later.')
      }
    } catch (e) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="bg-slate-900/60 border border-white/10 rounded-md px-4 py-3 text-blue-100 placeholder-blue-300/60 focus:outline-none" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" type="email" className="bg-slate-900/60 border border-white/10 rounded-md px-4 py-3 text-blue-100 placeholder-blue-300/60 focus:outline-none" required />
            <select name="topic" value={form.topic} onChange={handleChange} className="bg-slate-900/60 border border-white/10 rounded-md px-4 py-3 text-blue-100 focus:outline-none md:col-span-2">
              <option>Admissions</option>
              <option>Programs</option>
              <option>Financial Aid</option>
              <option>General</option>
            </select>
            <textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Your message" className="bg-slate-900/60 border border-white/10 rounded-md px-4 py-3 text-blue-100 placeholder-blue-300/60 focus:outline-none md:col-span-2" required />
            <div className="md:col-span-2 flex items-center gap-3">
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-md transition">Send Message</button>
              {status && <p className="text-blue-200">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
