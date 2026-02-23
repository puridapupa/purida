import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import TimelineSection from './components/sections/TimelineSection'
import CertSection from './components/sections/CertSection'
import Section1 from './components/sections/Section1'
import Section2 from './components/sections/Section2'
import Section3 from './components/sections/Section3'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  return (
    <div style={{ background: '#FFF8F3' }} className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TimelineSection />
      <CertSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <ContactSection />
    </div>
  )
}