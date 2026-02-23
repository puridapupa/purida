import { motion } from 'framer-motion'
import tableImg from '../../assets/images/table/t1.jpg'

const entries = [
  {
    year: '01',
    school: 'โรงเรียนบ่อวิทยบางระกำ',
    desc: 'ฝึกสังเกตการณ์สอนและเรียนรู้บริบทห้องเรียนจริง',
    current: false,
  },
  {
    year: '02',
    school: 'โรงเรียนจ่านกร้อง',
    desc: 'ฝึกสอนและปฏิบัติการจัดการเรียนรู้เพิ่มเติม',
    current: false,
  },
  {
    year: '03–04',
    school: 'โรงเรียนเฉลิมขวัญสตรี',
    desc: 'ฝึกประสบการณ์วิชาชีพครูเต็มรูปแบบ · สอนวิชาเทคโนโลยีเพื่อการแก้ปัญหา 1',
    current: true,
  },
]

export default function TimelineSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-[#D4845A] text-sm font-bold tracking-widest uppercase">Experience</span>
        <div className="flex-1 h-px" style={{ background: 'rgba(212,132,90,0.2)' }} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Timeline — left 3 cols */}
        <div className="lg:col-span-3 space-y-4">
          {entries.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative flex gap-6 p-6 rounded-2xl transition-all group ${
                e.current
                  ? 'bg-[#1A120E] text-[#FFF8F3]'
                  : 'bg-[#FFF8F3] border border-[#1A120E]/8 hover:border-[#D4845A]/30'
              }`}
              style={e.current ? { boxShadow: '0 20px 60px rgba(26,18,14,0.15)' } : {}}
            >
              {/* Year */}
              <div className="flex-shrink-0">
                <span
                  className="text-4xl font-black leading-none"
                  style={{ color: e.current ? 'rgba(212,132,90,0.4)' : 'rgba(26,18,14,0.12)' }}
                >
                  {e.year}
                </span>
              </div>
              <div className="flex-1 pt-1">
                {e.current && (
                  <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#D4845A] text-white mb-2">
                    ปัจจุบัน
                  </span>
                )}
                <h3
                  className="font-bold text-lg leading-snug"
                  style={{ color: e.current ? '#FFF8F3' : '#1A120E' }}
                >
                  {e.school}
                </h3>
                <p
                  className="text-sm mt-1.5 leading-relaxed"
                  style={{ color: e.current ? 'rgba(255,248,243,0.55)' : 'rgba(26,18,14,0.5)' }}
                >
                  {e.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schedule image — right 2 cols */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="sticky top-24">
            <p className="text-xs font-bold tracking-widest uppercase text-[#D4845A] mb-3">ตารางสอน</p>
            <div className="rounded-2xl overflow-hidden border border-[#1A120E]/8 shadow-lg">
              <img src={tableImg} alt="ตารางสอน" className="w-full object-contain" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
