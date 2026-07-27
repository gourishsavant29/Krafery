import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      autoplay={{ delay: 5500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      }}
      className="!pb-14"
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.id}>
          <div className="flex h-full flex-col gap-5 rounded-[1.75rem] bg-white p-8 shadow-soft">
            <Quote className="text-coral" size={28} />
            <p className="flex-1 text-base leading-relaxed text-ink/80">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-1 text-golden-500">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <div className="flex items-center gap-3 border-t border-ink/5 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-100 font-heading text-sm font-semibold text-forest-600">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink/50">{t.location}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
