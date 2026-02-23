import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Check, Copy } from 'lucide-react'
import contactImg from '../../assets/images/contact.jpeg'

const contacts = [
  {
    icon: <Phone size={20} />,
    label: 'โทรศัพท์',
    value: '098-616-8387',
    action: () => window.open('tel:0986168387'),
    actionLabel: 'โทรเลย',
    copyable: false,
  },
  {
    icon: <MessageCircle size={20} />,
    label: 'LINE ID',
    value: 'purida1234',
    copyable: true,
    actionLabel: 'คัดลอก LINE ID',
  },
  {
    icon: <Mail size={20} />,
    label: 'อีเมล',
    value: 'Purida.pupa@gmail.com',
    action: () => window.open('mailto:Purida.pupa@gmail.com'),
    actionLabel: 'ส่งอีเมล',
    copyable: false,
  },
]

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyLine = () => {
    navigator.clipboard.writeText('purida1234').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden grain" style={{ background: '#1A120E' }}>
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 80%, rgba(212,132,90,0.1) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-[#D4845A] text-sm font-bold tracking-widest uppercase">Contact</span>
          <div className="flex-1 h-px" style={{ background: 'rgba(212,132,90,0.2)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">ติดต่อฉัน</h2>
          <p className="mt-2 text-base" style={{ color: 'rgba(255,248,243,0.45)' }}>ยินดีตอบทุกคำถามครับ</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl"
            style={{ maxHeight: 500 }}
          >
            <img
              src={contactImg}
              alt="ติดต่อฉัน"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: 320 }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,18,14,0.8) 0%, rgba(26,18,14,0.1) 60%, transparent 100%)' }} />
            <div className="absolute bottom-7 left-7">
              <p className="text-sm font-medium" style={{ color: 'rgba(255,248,243,0.6)' }}>ผู้จัดทำ</p>
              <p className="text-white font-black text-2xl mt-0.5">นางสาวปูริดา คุ้มรักษ์</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="h-px w-8" style={{ background: '#D4845A' }} />
                <span className="text-sm" style={{ color: '#D4845A' }}>ครูผู้ช่วย</span>
              </div>
            </div>
          </motion.div>

          {/* Right: contact cards */}
          <div className="space-y-4">
            {contacts.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-5 rounded-2xl transition-all"
                style={{ background: 'rgba(255,248,243,0.04)', border: '1px solid rgba(255,248,243,0.08)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,132,90,0.15)', color: '#D4845A' }}
                >
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'rgba(255,248,243,0.4)' }}>{c.label}</p>
                  <p className="font-bold truncate mt-0.5 text-white">{c.value}</p>
                </div>
                {c.copyable ? (
                  <button
                    onClick={copyLine}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer"
                    style={{
                      background: copied ? 'rgba(212,132,90,0.3)' : 'rgba(212,132,90,0.12)',
                      color: '#D4845A',
                      border: '1px solid rgba(212,132,90,0.2)',
                    }}
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    {copied ? 'คัดลอกแล้ว!' : 'คัดลอก'}
                  </button>
                ) : (
                  <button
                    onClick={c.action}
                    className="px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer"
                    style={{
                      background: 'rgba(212,132,90,0.12)',
                      color: '#D4845A',
                      border: '1px solid rgba(212,132,90,0.2)',
                    }}
                  >
                    {c.actionLabel}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20 pb-4"
        >
          <div className="h-px mb-8" style={{ background: 'rgba(255,248,243,0.06)' }} />
          <p className="text-sm" style={{ color: 'rgba(255,248,243,0.25)' }}>
            © 2026 Portfolio — นางสาวปูริดา คุ้มรักษ์
          </p>
        </motion.div>

      </div>
    </section>
  )
}
