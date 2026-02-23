import { motion } from 'framer-motion'
import profileImg from '../../assets/images/Gemini_Generated_Image_3wbttt3wbttt3wbt.png'

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden grain"
      style={{ background: 'linear-gradient(135deg, #1A120E 0%, #2C1810 50%, #1A120E 100%)' }}
    >
      {/* Glow blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,132,90,0.18) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], x: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,132,90,0.10) 0%, transparent 70%)' }}
        animate={{ scale: [1.2, 1, 1.2], x: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Decorative large text */}
      <div
        className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none select-none overflow-hidden"
        style={{ height: '40%' }}
      >
        <span
          className="text-[22vw] font-black leading-none"
          style={{ color: 'rgba(212,132,90,0.05)', letterSpacing: '-0.04em' }}
        >
          PURIDA
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full pt-24 pb-16">
          
          {/* Left: text */}
          <div className="space-y-6">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4845A]/40 text-[#D4845A] text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4845A] animate-pulse" />
                นักศึกษาฝึกประสบการณ์วิชาชีพครู ปีที่ 4
              </span>
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight"
                style={{ color: '#FFF8F3' }}
              >
                Purida<br />
                <span style={{ color: '#D4845A' }}>Kumrak</span>
              </motion.h1>
            </div>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-base leading-relaxed max-w-md"
              style={{ color: 'rgba(255,248,243,0.55)' }}
            >
              คณะศึกษาศาสตร์ · สาขาเทคโนโลยีและการสื่อสารศึกษา
              <br />มหาวิทยาลัยนเรศวร · รหัส 65411979
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-3 pt-2"
            >
              <button
                onClick={() => go('section1')}
                className="px-8 py-3.5 rounded-full font-semibold text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4845A]/30"
                style={{ background: '#D4845A' }}
              >
                ดูผลงาน
              </button>
              <button
                onClick={() => go('contact')}
                className="px-8 py-3.5 rounded-full font-semibold cursor-pointer border transition-all duration-300 hover:bg-white/10"
                style={{ color: 'rgba(255,248,243,0.7)', borderColor: 'rgba(255,248,243,0.2)' }}
              >
                ติดต่อฉัน
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex gap-8 pt-4 border-t"
              style={{ borderColor: 'rgba(255,248,243,0.08)' }}
            >
              {[
                { num: '4', label: 'ปีการศึกษา' },
                { num: '3', label: 'โรงเรียน' },
                { num: '7', label: 'ชุดผลงาน' },
              ].map(s => (
                <div key={s.label}>
                  <p className="text-2xl font-black" style={{ color: '#D4845A' }}>{s.num}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,248,243,0.45)' }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <div className="relative">
              {/* Ring */}
              <motion.div
                className="absolute -inset-4 rounded-[2.5rem] opacity-60"
                style={{ border: '1px solid rgba(212,132,90,0.3)' }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -inset-8 rounded-[3rem] opacity-30"
                style={{ border: '1px dashed rgba(212,132,90,0.2)' }}
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />

              {/* Main image */}
              <div
                className="relative w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-[2rem] overflow-hidden"
                style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(212,132,90,0.15)' }}
              >
                <img
                  src={profileImg}
                  alt="Purida Kumrak"
                  className="w-full h-full object-cover object-top scale-110"
                />
                {/* Overlay gradient bottom */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(26,18,14,0.5) 0%, transparent 50%)' }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-2xl"
                style={{
                  background: 'rgba(26,18,14,0.85)',
                  border: '1px solid rgba(212,132,90,0.3)',
                  backdropFilter: 'blur(12px)',
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-xs font-medium" style={{ color: 'rgba(255,248,243,0.5)' }}>สอนวิชา</p>
                <p className="text-sm font-bold" style={{ color: '#D4845A' }}>เทคโนโลยีเพื่อการแก้ปัญหา</p>
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl flex items-center justify-center text-xs font-bold"
                style={{ background: '#D4845A', color: '#1A120E' }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                NU
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,248,243,0.3)' }}>scroll</span>
        <motion.div
          className="w-0.5 h-8 rounded-full"
          style={{ background: 'linear-gradient(to bottom, rgba(212,132,90,0.6), transparent)' }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
