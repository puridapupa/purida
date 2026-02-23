import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'section1', label: 'การสอน' },
  { id: 'section2', label: 'ดูแลนักเรียน' },
  { id: 'section3', label: 'จรรยาบรรณ' },
  { id: 'contact', label: 'ติดต่อ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      let cur = 'home'
      for (const l of links) {
        const el = document.getElementById(l.id)
        if (el && el.getBoundingClientRect().top <= 120) cur = l.id
      }
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      {/* Floating pill navbar — desktop */}
      <motion.nav
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      >
        <div
          className={`flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-500 ${
            scrolled
              ? 'bg-[#1A120E]/90 backdrop-blur-xl shadow-2xl shadow-black/40 border border-white/10'
              : 'bg-[#1A120E]/70 backdrop-blur-md border border-white/10'
          }`}
        >
          <button
            onClick={() => go('home')}
            className="px-4 py-1.5 rounded-full text-sm font-bold text-[#D4845A] mr-2 cursor-pointer"
          >
            P.
          </button>
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                active === l.id
                  ? 'bg-[#D4845A] text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile top bar */}
      <motion.div
        className="fixed top-0 inset-x-0 z-50 md:hidden flex items-center justify-between px-5 py-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: scrolled ? 'rgba(26,18,14,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'background 0.3s, backdrop-filter 0.3s',
        }}
      >
        <span className="font-bold text-[#D4845A] text-lg">P.</span>
        <button
          onClick={() => setOpen(o => !o)}
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white cursor-pointer"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[#1A120E]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-4">
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  onClick={() => go(l.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-2xl font-bold text-white/70 hover:text-[#D4845A] transition-colors cursor-pointer"
                >
                  {l.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
