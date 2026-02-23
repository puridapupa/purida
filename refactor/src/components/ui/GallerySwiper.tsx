import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import Lightbox from 'yet-another-react-lightbox'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'yet-another-react-lightbox/styles.css'

export interface GallerySlide {
  src: string
  alt?: string
  caption?: string
}

interface Props {
  slides: GallerySlide[]
  className?: string
  showCaption?: boolean
  maxHeight?: number
}

export default function GallerySwiper({ slides, className = '', showCaption = false, maxHeight = 380 }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openAt = (i: number) => {
    setLightboxIndex(i)
    setLightboxOpen(true)
  }

  return (
    <>
      <div className={className}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={12}
          slidesPerView={1}
          className="rounded-xl overflow-hidden"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative cursor-zoom-in select-none"
                onClick={() => openAt(i)}
              >
                <img
                  src={slide.src}
                  alt={slide.alt ?? `ภาพที่ ${i + 1}`}
                  className="w-full object-cover rounded-xl"
                  style={{ maxHeight, minHeight: 180, objectFit: 'cover' }}
                  draggable={false}
                />
                {showCaption && slide.caption && (
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-4 rounded-b-xl">
                    <p className="text-white text-sm font-medium">{slide.caption}</p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides.map(s => ({ src: s.src, alt: s.alt }))}
      />
    </>
  )
}
