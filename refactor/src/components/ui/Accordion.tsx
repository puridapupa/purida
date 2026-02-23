import { useState, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface Props {
  title: string
  subtitle?: string
  icon: ReactNode
  children: ReactNode
  defaultOpen?: boolean
}

export default function Accordion({ title, subtitle, icon, children, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: '#fff', border: '1px solid rgba(26,18,14,0.07)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-5 transition-colors text-left cursor-pointer"
        style={{ background: open ? 'rgba(212,132,90,0.04)' : 'transparent' }}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-white transition-transform duration-300 ${open ? 'scale-110' : ''}`}
            style={{ background: '#D4845A' }}
          >
            {icon}
          </div>
          <div>
            <p className="font-semibold text-base" style={{ color: '#1A120E' }}>{title}</p>
            {subtitle && <p className="text-xs mt-0.5" style={{ color: 'rgba(26,18,14,0.45)' }}>{subtitle}</p>}
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 ml-4"
          style={{ color: 'rgba(26,18,14,0.4)' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-5" style={{ borderTop: '1px solid rgba(26,18,14,0.06)', background: 'rgba(212,132,90,0.02)' }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
