import { motion } from 'framer-motion'
import { Shield, HeartHandshake, GraduationCap, ExternalLink, Clock, MapPin } from 'lucide-react'
import GallerySwiper from '../ui/GallerySwiper'
import type { GallerySlide } from '../ui/GallerySwiper'

/* ─── Images via glob ─── */
const raw31 = import.meta.glob<string>(
  '../../assets/images/section3/3.1/*',
  { eager: true, query: '?url', import: 'default' },
)
const raw32 = import.meta.glob<string>(
  '../../assets/images/section3/3.2/*',
  { eager: true, query: '?url', import: 'default' },
)
const raw33 = import.meta.glob<string>(
  '../../assets/images/section3/3.3/*',
  { eager: true, query: '?url', import: 'default' },
)

const toSlides = (raw: Record<string, string>): GallerySlide[] =>
  Object.entries(raw)
    .filter(([p]) => !p.split('/').pop()!.startsWith('.'))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => ({ src }))

const byPrefix32 = (prefix: string): GallerySlide[] =>
  Object.entries(raw32)
    .filter(([p]) => p.split('/').pop()!.toLowerCase().startsWith(prefix.toLowerCase()))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => ({ src }))

const slides31 = toSlides(raw31)
const slides33 = toSlides(raw33)

const activities32 = [
  {
    key: '102y',
    title: 'ช่วยจัดงานโรงเรียนเฉลิมขวัญ 102 ปี',
    slides: byPrefix32('102y'),
  },
  {
    key: 'art',
    title: 'ช่วยงานศิลปะหัตถกรรมนักเรียนระดับชาติ ครั้งที่ 73',
    slides: byPrefix32('art'),
  },
  {
    key: 'p',
    title: 'กิจกรรมเข้าค่ายพักแรมผู้บำเพ็ญประโยชน์ ม.2',
    slides: byPrefix32('p'),
  },
  {
    key: 'enroll',
    title: 'ดูแลระบบรับสมัครนักเรียน ม.1 และ ม.4',
    slides: byPrefix32('enroll'),
  },
  {
    key: 'ai',
    title: 'จัดกิจกรรมอบรม AI โครงการ SMTE ม.1',
    slides: byPrefix32('ai'),
  },
  {
    key: 'f',
    title: 'จัดเตรียมอุปกรณ์งานประชุมผู้ปกครอง',
    slides: byPrefix32('f'),
  },
  {
    key: 's',
    title: 'ซ่อมแซมอุปกรณ์อิเล็กทรอนิกส์ภายในโรงเรียน',
    slides: byPrefix32('s'),
  },
]

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

export default function Section3() {
  return (
    <section id="section3" className="py-24 relative" style={{ background: '#FFF8F3' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-[#D4845A] text-sm font-bold tracking-widest uppercase">Section 03</span>
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
            ด้านจรรยาบรรณวิชาชีพครู
          </h2>
          <p className="mt-2 text-base" style={{ color: 'rgba(26,18,14,0.5)' }}>
            การปฏิบัติตนตามจรรยาบรรณวิชาชีพครู
          </p>
        </motion.div>

        <div className="space-y-6">

          {/* 3.1 */}
          <Card num="3.1" title="การปฏิบัติหน้าที่เวรประจำวัน" icon={<Shield size={16} />}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
              <div className="lg:col-span-3">
                {slides31.length > 0 && (
                  <GallerySwiper slides={slides31} maxHeight={340} />
                )}
              </div>
              <div className="lg:col-span-2 space-y-4">
                <div className="rounded-2xl p-5 space-y-4"
                  style={{ background: 'rgba(212,132,90,0.06)', border: '1px solid rgba(212,132,90,0.15)' }}>
                  <h4 className="font-bold text-sm uppercase tracking-wider" style={{ color: '#D4845A' }}>รายละเอียดการเวร</h4>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock size={15} style={{ color: '#D4845A', flexShrink: 0 }} />
                    <span style={{ color: 'rgba(26,18,14,0.7)' }}>
                      วันพุธ ช่วงเย็น <span className="font-semibold" style={{ color: '#D4845A' }}>16:00–17:00 น.</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin size={15} style={{ color: '#D4845A', flexShrink: 0 }} />
                    <span style={{ color: 'rgba(26,18,14,0.7)' }}>
                      ตำแหน่ง: <span className="font-semibold" style={{ color: '#D4845A' }}>ประตู 1</span>
                    </span>
                  </div>
                </div>
                <a
                  href="https://docs.google.com/spreadsheets/d/1NdIJqWg9dxUwqxRPPEUEjr3imXwqEy7qM6Ff9SAd9F0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: '#D4845A' }}
                >
                  <ExternalLink size={14} />
                  ดูตารางเวรประจำวัน
                </a>
              </div>
            </div>
          </Card>

          {/* 3.2 */}
          <Card num="3.2" title="การทำงานร่วมกับผู้อื่นและการมีจิตอาสา" icon={<HeartHandshake size={16} />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {activities32.map((act, i) => (
                <motion.div
                  key={act.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <p className="text-xs font-semibold mb-2 leading-snug px-1" style={{ color: '#D4845A' }}>
                    {act.title}
                  </p>
                  {act.slides.length > 0 && (
                    <GallerySwiper slides={act.slides} maxHeight={200} />
                  )}
                </motion.div>
              ))}
            </div>
          </Card>

          {/* 3.3 */}
          <Card num="3.3" title="การพัฒนาตนเองด้านวิชาชีพครู" icon={<GraduationCap size={16} />}>
            {slides33.length > 0 && (
              <GallerySwiper slides={slides33} maxHeight={420} showCaption />
            )}
          </Card>

        </div>
      </div>
    </section>
  )
}
