import { motion } from 'framer-motion'
import { Heart, Users } from 'lucide-react'
import GallerySwiper from '../ui/GallerySwiper'
import type { GallerySlide } from '../ui/GallerySwiper'

/* ─── Images via glob ─── */
const raw21 = import.meta.glob<string>(
  '../../assets/images/section2/2.1/*',
  { eager: true, query: '?url', import: 'default' },
)
const raw22 = import.meta.glob<string>(
  '../../assets/images/section2/2.2/*',
  { eager: true, query: '?url', import: 'default' },
)

/* ─── PDFs via glob ─── */
const pdfModules = import.meta.glob<string>(
  '../../assets/pdf_files/2.2/*.pdf',
  { eager: true, query: '?url', import: 'default' },
)

const byPrefix = (raw: Record<string, string>, prefix: string): GallerySlide[] =>
  Object.entries(raw)
    .filter(([p]) => p.split('/').pop()!.toLowerCase().startsWith(prefix.toLowerCase()))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => ({ src }))

const allSorted = (raw: Record<string, string>): GallerySlide[] =>
  Object.entries(raw)
    .filter(([p]) => !p.split('/').pop()!.startsWith('.'))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => ({ src }))

const groups21 = [
  {
    key: 'morning',
    title: 'เช็คชื่อนักเรียนตอนเช้า',
    slides: byPrefix(raw21, 'morning'),
  },
  {
    key: 'pachim',
    title: 'พิธีปัจฉิมนิเทศนักเรียนชั้น ม.3',
    slides: byPrefix(raw21, 'pachim'),
  },
  {
    key: 'award',
    title: 'พิธีมอบรางวัลนักเรียนและครูดีเด่น ม.3',
    slides: byPrefix(raw21, 'award'),
  },
]

const slides22 = allSorted(raw22)
const meetingPdf = Object.values(pdfModules)[0] ?? ''

/* ─── Card wrapper ─── */
function Card({ children, num, title, icon }: {
  children: React.ReactNode
  num: string
  title: string
  icon: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden"
      style={{ background: '#fff', border: '1px solid rgba(26,18,14,0.07)' }}
    >
      <div className="flex items-center gap-3 px-6 py-4" style={{ borderBottom: '1px solid rgba(26,18,14,0.06)' }}>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          style={{ background: '#D4845A' }}>
          {num}
        </div>
        <div className="text-[#D4845A]">{icon}</div>
        <h3 className="font-bold text-base" style={{ color: '#1A120E' }}>{title}</h3>
      </div>
      <div className="p-6 md:p-8">{children}</div>
    </motion.div>
  )
}

export default function Section2() {
  return (
    <section id="section2" className="py-24 relative" style={{ background: '#FFF8F3' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-[#D4845A] text-sm font-bold tracking-widest uppercase">Section 02</span>
          <div className="flex-1 h-px" style={{ background: 'rgba(212,132,90,0.2)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: '#1A120E' }}>
            ด้านระบบดูแลช่วยเหลือนักเรียน
          </h2>
          <p className="mt-2 text-base" style={{ color: 'rgba(26,18,14,0.5)' }}>
            บทบาทหน้าที่ครูประจำชั้นและการส่งเสริมความสัมพันธ์
          </p>
        </motion.div>

        <div className="space-y-6">

          {/* 2.1 */}
          <Card num="2.1" title="หน้าที่ครูประจำชั้น" icon={<Users size={16} />}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {groups21.map(group => (
                <motion.div
                  key={group.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-sm font-semibold mb-3 px-1" style={{ color: '#D4845A' }}>{group.title}</p>
                  {group.slides.length > 0 && (
                    <GallerySwiper slides={group.slides} maxHeight={260} />
                  )}
                </motion.div>
              ))}
            </div>
          </Card>

          {/* 2.2 */}
          <Card num="2.2" title="ส่งเสริมความสัมพันธ์กับผู้ปกครองและชุมชน" icon={<Heart size={16} />}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-sm font-semibold mb-3" style={{ color: '#D4845A' }}>งานประชุมผู้ปกครอง</p>
                {slides22.length > 0 && (
                  <GallerySwiper slides={slides22} maxHeight={300} />
                )}
              </div>
              <div>
                <p className="text-sm font-semibold mb-3" style={{ color: '#D4845A' }}>แบบรายงานผลการจัดประชุมผู้ปกครอง</p>
                {meetingPdf ? (
                  <div
                    className="w-full rounded-xl overflow-hidden"
                    style={{ aspectRatio: '210/297', border: '1px solid rgba(26,18,14,0.07)', background: 'rgba(26,18,14,0.02)' }}
                  >
                    <iframe src={meetingPdf} className="w-full h-full" title="แบบรายงานผล" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-48 rounded-xl"
                    style={{ background: 'rgba(212,132,90,0.05)', border: '1px dashed rgba(212,132,90,0.3)' }}>
                    <span style={{ color: 'rgba(26,18,14,0.4)' }}>ไม่พบไฟล์ PDF</span>
                  </div>
                )}
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  )
}
