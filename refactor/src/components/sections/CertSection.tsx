import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import cert1 from '../../assets/images/certificate/c1.jpg'
import cert2 from '../../assets/images/certificate/c2.jpg'
import cert3 from '../../assets/images/certificate/c3.jpg'

const certs = [
  { src: cert1, title: 'การอบรมปฏิบัติงานครู On the Job Training', year: '2025' },
  { src: cert2, title: 'ครูที่ปรึกษาผู้สนับสนุนนักเรียนเรียนดีเด่น ระดับเพชร', year: '2025' },
  { src: cert3, title: 'กรรมการตัดสินการประกวดการศึกษาค้นคว้าอิสระ', year: '2025' },
]

export default function CertSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const open = (i: number) => { setLightboxIndex(i); setLightboxOpen(true) }

  return (
    <section
      className="py-24 relative overflow-hidden grain"
      style={{ background: '#1A120E' }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(212,132,90,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-[#D4845A] text-sm font-bold tracking-widest uppercase">Awards & Certificates</span>
          <div className="flex-1 h-px" style={{ background: 'rgba(212,132,90,0.2)' }} />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onClick={() => open(i)}
              className="group relative overflow-hidden rounded-2xl cursor-zoom-in"
              whileHover={{ y: -8 }}
              style={{
                background: 'rgba(255,248,243,0.04)',
                border: '1px solid rgba(255,248,243,0.08)',
              }}
            >
              {/* Image */}
              <div className="overflow-hidden bg-[#2C1810]" style={{ height: 220 }}>
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="text-xs font-bold text-[#D4845A]">{cert.year}</span>
                <p className="text-sm font-medium mt-1 leading-snug" style={{ color: 'rgba(255,248,243,0.75)' }}>
                  {cert.title}
                </p>
              </div>

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(212,132,90,0.4)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={certs.map(c => ({ src: c.src, alt: c.title }))}
      />
    </section>
  )
}
