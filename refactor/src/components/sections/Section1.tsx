import { motion } from 'framer-motion'
import {
  BookOpen, Monitor, FileText, ClipboardList,
  BarChart2, FlaskConical, Users, ExternalLink,
} from 'lucide-react'
import PDFViewer from '../ui/PDFViewer'
import Accordion from '../ui/Accordion'
import LinkCard from '../ui/LinkCard'

/* ─── PDF URLs via glob (handles Thai filenames safely) ─── */
const pdfModules = import.meta.glob<string>(
  '../../assets/pdf_files/**/*.pdf',
  { eager: true, query: '?url', import: 'default' },
)
const pdf = (p: string) =>
  (pdfModules[`../../assets/pdf_files/${p}`] ?? '') as string

/* ─── Link data ─── */
const slides12 = [
  'https://www.canva.com/design/DAG3m-Z5jGs/VoQREpMwfCHhlBIIUI2RVw/edit',
  'https://www.canva.com/design/DAG4H7xD_6U/xhtScbVAIuPCr5JnI-eghg/edit',
  'https://www.canva.com/design/DAG41BaXXGY/GUAb72TuW2336-zWzW_W_Q/edit',
  'https://www.canva.com/design/DAG6LSVCGlA/F3ZPWc7f-2XVJI-2Z4l41Q/edit',
  'https://www.canva.com/design/DAG609tFHJU/-eTsHqAI67I9qm54AAOh0A/edit',
  'https://www.canva.com/design/DAG604SFyfU/Xxor9EhXQyxDC_6OWufofw/edit',
  'https://www.canva.com/design/DAG6LsIH7uw/OJ1pLpOsLxmfL8JHAC9pGA/edit',
  'https://www.canva.com/design/DAG62Cjl3sg/-TZdqg28oTrVOJg9rdkVZw/edit',
]

const media12 = [
  { href: 'https://www.pacdora.com/', label: 'สื่อประกอบการสอน 1' },
  { href: 'https://app.genially.com/teams/695a461a7e4a6b4bdbd4f3ac/home', label: 'สื่อประกอบการสอน 2' },
  { href: 'https://youtu.be/6JPyLvzcgyM', label: 'สื่อประกอบการสอน 3' },
  { href: 'https://www.tiktok.com/@azuma.media/video/7539183103244373270', label: 'สื่อประกอบการสอน 4' },
  { href: 'https://www.tiktok.com/@azuma.media/video/7561450001310895363', label: 'สื่อประกอบการสอน 5' },
  { href: 'https://www.tiktok.com/@azuma.media/video/7578906416346582275', label: 'สื่อประกอบการสอน 6' },
  { href: 'https://www.tiktok.com/@gueituuuu/video/7484527820429970743', label: 'สื่อประกอบการสอน 7' },
  { href: 'https://www.tiktok.com/@gyumania/video/7513212290976566544', label: 'สื่อประกอบการสอน 8' },
  { href: 'https://www.youtube.com/watch?v=M6BfE2aB1m8', label: 'สื่อประกอบการสอน 9' },
  { href: 'https://www.youtube.com/watch?v=FRn4JzgmCwY', label: 'สื่อประกอบการสอน 10' },
  { href: 'https://www.youtube.com/watch?v=aLl__k4arO4', label: 'สื่อประกอบการสอน 11' },
  { href: 'https://www.youtube.com/watch?v=uBC_MWQVJwI', label: 'สื่อประกอบการสอน 12' },
  { href: 'https://www.youtube.com/watch?v=mDhkdilBjiw', label: 'สื่อประกอบการสอน 13' },
  { href: 'https://www.youtube.com/watch?v=s1OlXIHNj3M', label: 'สื่อประกอบการสอน 14' },
]

const work1 = [
  { href: 'https://www.canva.com/design/DAG4dngfXXU/tmtYI3gyVm5sgx-726pV3w/edit', label: 'ลิงค์งานที่ 1.1' },
  { href: 'https://www.canva.com/design/DAG4d1fzqRg/1YLFOtA8B2zhTShJcmYt0g/edit', label: 'ลิงค์งานที่ 1.2' },
  { href: 'https://www.canva.com/design/DAG46EbFIDM/PmOk20djUvru_Tzr6TYGow/edit', label: 'ลิงค์งานที่ 1.3' },
  { href: 'https://www.canva.com/design/DAG4dmJjl2E/y76Wa6ffeFlRmfts63HOYg/edit', label: 'ลิงค์งานที่ 1.4' },
  { href: 'https://www.canva.com/design/DAG48jrNlko/lWE1l7vF_WEIqFCxJgPyyg/edit', label: 'ลิงค์งานที่ 1.6' },
  { href: 'https://www.canva.com/design/DAG495jAnJU/OJu9yngkQ57_hbc_D8GEaQ/edit', label: 'ลิงค์งานที่ 1.7' },
  { href: 'https://www.canva.com/design/DAG4oheTi4w/QXAd97FszIUIm8phD-tPMg/edit', label: 'ลิงค์งานที่ 1.8' },
]

const work2 = [
  { href: 'https://www.canva.com/design/DAG5xlcefyI/igDDULQRM4mD5POg3PQMpg/edit', label: 'ลิงค์งานที่ 2.1' },
  { href: 'https://www.canva.com/design/DAG5xyhBn98/XN6ZLIYxImevbmjbs_LIpw/edit', label: 'ลิงค์งานที่ 2.2' },
  { href: 'https://www.canva.com/design/DAG5xiJOQiY/vPsdoQFSZzuEVjdTyRIBdg/edit', label: 'ลิงค์งานที่ 2.3' },
  { href: 'https://www.canva.com/design/DAG5x7THDsE/LuW14IvLFhZKWZvPK0WiuQ/edit', label: 'ลิงค์งานที่ 2.4' },
  { href: 'https://www.canva.com/design/DAG5xhOUhdY/Bn8wjwF6P5qSi25YA-aF6A/edit', label: 'ลิงค์งานที่ 2.5' },
  { href: 'https://www.canva.com/design/DAG6b6kRVG8/OpHAgMD72H3ab5MJ6ZjKPA/edit', label: 'ลิงค์งานที่ 2.6' },
  { href: 'https://www.canva.com/design/DAG5xh5WzQw/Ir0Us7W8vpjEccn348v4aw/edit', label: 'ลิงค์งานที่ 2.7' },
  { href: 'https://www.canva.com/design/DAG5x1xCT8s/l_vHNrdSUmsDe0uwLSvfFQ/edit', label: 'ลิงค์งานที่ 2.8' },
  { href: 'https://www.canva.com/design/DAG5xtIoV_o/2UYWo8ENCwC8u7K6h6_o3g/edit', label: 'ลิงค์งานที่ 2.9' },
  { href: 'https://www.canva.com/design/DAG5x8I89n0/QQfVbTW102zjdMf29GhjoA/edit', label: 'ลิงค์งานที่ 2.10' },
  { href: 'https://www.canva.com/design/DAG5xpck6zU/9DqQW5LuTXL462G5DURwzQ/edit', label: 'ลิงค์งานที่ 2.11' },
  { href: 'https://www.canva.com/design/DAG6bp3vvUM/Z-p7R9CtwHbNuGtLo6w4xg/edit', label: 'ลิงค์งานที่ 2.12' },
]

const work3 = [
  { href: 'https://www.pacdora.com/share?filter_url=psipavbuu1', label: 'ลิงค์งานที่ 3.1' },
  { href: 'https://www.pacdora.com/share?filter_url=psrfyg5kn8', label: 'ลิงค์งานที่ 3.2' }, // fixed: removed leading #
  { href: 'https://www.pacdora.com/share?filter_url=ps5sp51rfa', label: 'ลิงค์งานที่ 3.3' },
  { href: 'https://www.pacdora.com/share?filter_url=ps3abhjeaj', label: 'ลิงค์งานที่ 3.4' },
  { href: 'https://www.pacdora.com/share?filter_url=ps3esacpo6', label: 'ลิงค์งานที่ 3.5' },
  { href: 'https://www.pacdora.com/share?filter_url=ps4c608tg7', label: 'ลิงค์งานที่ 3.6' },
  { href: 'https://www.pacdora.com/share?filter_url=psjnnvpbt3', label: 'ลิงค์งานที่ 3.7' },
  { href: 'https://www.pacdora.com/share?filter_url=psf1kifyw8', label: 'ลิงค์งานที่ 3.8' },
  { href: 'https://www.pacdora.com/share?filter_url=psfdc7t33b', label: 'ลิงค์งานที่ 3.9' },
  { href: 'https://www.pacdora.com/share?filter_url=psiajb15l5', label: 'ลิงค์งานที่ 3.10' },
  { href: 'https://www.pacdora.com/share?filter_url=pscqt0ds0h', label: 'ลิงค์งานที่ 3.11' },
  { href: 'https://www.pacdora.com/share?filter_url=psxmv4f42o', label: 'ลิงค์งานที่ 3.12' },
]

const work4 = [
  { href: 'https://www.canva.com/design/DAG9E2DFS8Q/TIV99Ch0gk557VpVxuI2hw/edit', label: 'ลิงค์งานที่ 4.1' },
  { href: 'https://www.canva.com/design/DAG95g8qF0w/rwVmWsKhnahyQj1IN1qLGg/edit', label: 'ลิงค์งานที่ 4.2' },
  { href: 'https://www.canva.com/design/DAG8PlOc6cY/gg2pbJ1rBznv_yrLgel1pw/edit', label: 'ลิงค์งานที่ 4.3' },
  { href: 'https://www.canva.com/design/DAG4dh9N9SM/7DqqaUfC_9rXDgHZR6FWJg/edit', label: 'ลิงค์งานที่ 4.4' }, // fixed: removed leading #
  { href: 'https://www.canva.com/design/DAG7vpkETzU/KQurvB7ee8uFM_jDEryWMg/edit', label: 'ลิงค์งานที่ 4.5' },
  { href: 'https://www.canva.com/design/DAG7vpUtpXQ/i0j1v0Vm16lLMD2YUKqLqg/edit', label: 'ลิงค์งานที่ 4.6' },
]

const work5 = [
  { href: 'https://www.canva.com/design/DAG70StgcMs/S51TZyvwfaymXAPUEI9mLA/edit', label: 'ลิงค์งานที่ 5.1' },
  { href: 'https://www.canva.com/design/DAG82wrOJK8/1yL722CDT3JtGrp_kdfFcA/edit', label: 'ลิงค์งานที่ 5.2' },
  { href: 'https://www.canva.com/design/DAG7pO6vvXo/GaYJe5CqkeTLDKFckMdMeA/edit', label: 'ลิงค์งานที่ 5.3' },
  { href: 'https://www.canva.com/design/DAG7v6X47_Y/Vzi1lo4xFzGRw9FE0U-46A/edit', label: 'ลิงค์งานที่ 5.4' },
  { href: 'https://www.canva.com/design/DAG8Ja4uPv0/XNpfoxWUCWkJo6ISFuhemQ/edit', label: 'ลิงค์งานที่ 5.5' },
  { href: 'https://www.canva.com/design/DAG7vsvpo9k/pHoDq_oFTJzGBFizti34bg/edit', label: 'ลิงค์งานที่ 5.6' },
]

const work7 = [
  { href: 'https://view.genially.com/6975def55cbbecef19044fe9/interactive-content-', label: 'ลิงค์งานที่ 7.1' },
  { href: 'https://view.genially.com/697814dbc34d1f3930d861c5/interactive-content-chinnaraj-quest', label: 'ลิงค์งานที่ 7.2' },
  { href: 'https://view.genially.com/6965c1fabc34471ca3b55100/interactive-content-8-12-22-29-31-2', label: 'ลิงค์งานที่ 7.3' },
  { href: 'https://view.genially.com/695b68b90205f1624b6ee8e1/interactive-content-genially-3', label: 'ลิงค์งานที่ 7.4' },
  { href: 'https://view.genially.com/6968551ef1d327d651c8fe84/interactive-content-no-1343841', label: 'ลิงค์งานที่ 7.5' },
]

/* ─── Shared link grid ─── */
function LinkGrid({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {links.map((l, i) => (
        <LinkCard key={i} href={l.href} label={l.label} badge={i + 1} />
      ))}
    </div>
  )
}

/* ─── Sub-section card ─── */
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
      {/* Card header strip */}
      <div className="flex items-center gap-3 px-6 py-4" style={{ borderBottom: '1px solid rgba(26,18,14,0.06)' }}>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          style={{ background: '#D4845A' }}>
          {num}
        </div>
        <div className="flex items-center gap-2 text-[#D4845A]">{icon}</div>
        <h3 className="font-bold text-base" style={{ color: '#1A120E' }}>{title}</h3>
      </div>
      <div className="p-6 md:p-8">{children}</div>
    </motion.div>
  )
}

export default function Section1() {
  const work6 = [
    { path: 'งานที่6/โครงงานผีตาโขน.pdf', label: 'โครงงานผีตาโขน' },
    { path: 'งานที่6/วัฒนธรรมสุโขทัย.pdf', label: 'วัฒนธรรมสุโขทัย' },
    { path: 'งานที่6/พระพุทธชินราช.pdf', label: 'พระพุทธชินราช' },
    { path: 'งานที่6/วัฒนธรรมโนรา.pdf', label: 'วัฒนธรรมโนรา' },
    { path: 'งานที่6/ประเพณียี่เป็ง.pdf', label: 'ประเพณียี่เป็ง' },
  ]

  return (
    <section id="section1" className="py-24 relative" style={{ background: '#FFF8F3' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-[#D4845A] text-sm font-bold tracking-widest uppercase">Section 01</span>
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
            ด้านการจัดการเรียนรู้
          </h2>
          <p className="mt-2 text-base" style={{ color: 'rgba(26,18,14,0.5)' }}>
            รวบรวมผลงานด้านการจัดการเรียนรู้ทั้งหมด
          </p>
        </motion.div>

        <div className="space-y-6">

          {/* 1.1 */}
          <Card num="1.1" title="แผนการจัดการเรียนรู้" icon={<BookOpen size={16} />}>
            <PDFViewer
              src={pdf('1.1/แผนการสอน.pdf')}
              title="แผนการจัดการเรียนรู้"
              filename="แผนการจัดการเรียนรู้.pdf"
            />
          </Card>

          {/* 1.2 */}
          <Card num="1.2" title="สื่อเทคโนโลยี" icon={<Monitor size={16} />}>
            <div className="space-y-3">
              <Accordion title="สไลด์การสอน" subtitle="8 สไลด์" icon={<Monitor size={18} />}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {slides12.map((href, i) => (
                    <LinkCard key={i} href={href} label={`สไลด์ที่ ${i + 1}`} badge={i + 1} />
                  ))}
                </div>
              </Accordion>
              <Accordion title="สื่อการสอนเพิ่มเติม" subtitle="14 ลิงค์" icon={<ExternalLink size={18} />}>
                <LinkGrid links={media12} />
              </Accordion>
              <Accordion title="ใบงาน" subtitle="1 ไฟล์" icon={<FileText size={18} />}>
                <LinkCard
                  href={pdf('1.2/ใบงาน/ใบงานการจัดการเรียนรู้.pdf')}
                  label="ใบงานประกอบการเรียนรู้"
                  variant="pdf"
                />
              </Accordion>
              <Accordion title="แบบทดสอบ" subtitle="ก่อนเรียน & หลังเรียน" icon={<ClipboardList size={18} />}>
                <div className="space-y-3">
                  {[
                    { href: 'https://forms.gle/DHLXsSyUqu1oAdy5A', label: 'แบบทดสอบก่อนเรียน', tag: 'ก่อน' },
                    { href: 'https://forms.gle/fJ5ujJPaXFBaEtud9', label: 'แบบทดสอบหลังเรียน', tag: 'หลัง' },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group"
                      style={{ background: 'rgba(212,132,90,0.05)', border: '1px solid rgba(212,132,90,0.15)' }}
                    >
                      <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold text-white"
                        style={{ background: '#D4845A' }}>{item.tag}</span>
                      <span className="flex-1 text-sm font-medium" style={{ color: '#1A120E' }}>{item.label}</span>
                      <ExternalLink size={13} className="opacity-40 group-hover:opacity-100 transition-opacity"
                        style={{ color: '#D4845A' }} />
                    </a>
                  ))}
                </div>
              </Accordion>
            </div>
          </Card>

          {/* 1.3 */}
          <Card num="1.3" title="การวัดผลและประเมินผล" icon={<BarChart2 size={16} />}>
            <div className="flex flex-col items-center justify-center py-10 gap-5 rounded-xl"
              style={{ background: 'rgba(212,132,90,0.05)', border: '1px dashed rgba(212,132,90,0.3)' }}>
              <BarChart2 size={40} style={{ color: 'rgba(212,132,90,0.4)' }} />
              <p className="font-medium" style={{ color: 'rgba(26,18,14,0.6)' }}>เอกสารการวัดผลและประเมินผล</p>
              <a
                href="https://docs.google.com/spreadsheets/d/1KheYTF8_cmLLfXR3oqJ0pCC26_pq00IRarYGkxwFJDw/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 rounded-xl text-white font-medium transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: '#D4845A' }}
              >
                <ExternalLink size={15} />
                เปิด Google Sheets
              </a>
            </div>
          </Card>

          {/* 1.4 */}
          <Card num="1.4" title="วิจัยในชั้นเรียน" icon={<FlaskConical size={16} />}>
            <PDFViewer
              src={pdf('1.4/โครงร่างวิจัย.pdf')}
              title="วิจัยในชั้นเรียน"
              filename="วิจัยในชั้นเรียน.pdf"
            />
          </Card>

          {/* 1.5 */}
          <Card num="1.5" title="ผลงานนักเรียน" icon={<Users size={16} />}>
            <div className="space-y-3">
              <Accordion title="งานที่ 1" subtitle="7 ลิงค์ (Canva)" icon={<Monitor size={18} />}>
                <LinkGrid links={work1} />
              </Accordion>
              <Accordion title="งานที่ 2" subtitle="12 ลิงค์ (Canva)" icon={<Monitor size={18} />}>
                <LinkGrid links={work2} />
              </Accordion>
              <Accordion title="งานที่ 3" subtitle="12 ลิงค์ (Pacdora)" icon={<Monitor size={18} />}>
                <LinkGrid links={work3} />
              </Accordion>
              <Accordion title="งานที่ 4" subtitle="6 ลิงค์ (Canva)" icon={<Monitor size={18} />}>
                <LinkGrid links={work4} />
              </Accordion>
              <Accordion title="งานที่ 5" subtitle="6 ลิงค์ (Canva)" icon={<Monitor size={18} />}>
                <LinkGrid links={work5} />
              </Accordion>
              <Accordion title="งานที่ 6" subtitle="5 ไฟล์ PDF" icon={<FileText size={18} />}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {work6.map((w, i) => (
                    <LinkCard key={i} href={pdf(w.path)} label={w.label} variant="pdf" />
                  ))}
                </div>
              </Accordion>
              <Accordion title="งานที่ 7" subtitle="5 ลิงค์ (Genially)" icon={<Monitor size={18} />}>
                <LinkGrid links={work7} />
              </Accordion>
            </div>
          </Card>

        </div>
      </div>
    </section>
  )
}
