import { useState, useRef, useEffect } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'

function ArticlesSection({ t }) {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScrollability()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollability)
      window.addEventListener('resize', checkScrollability)
      return () => {
        container.removeEventListener('scroll', checkScrollability)
        window.removeEventListener('resize', checkScrollability)
      }
    }
  }, [t.articles.cards])

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('article')
        ?.offsetWidth || 280
      const scrollAmount = cardWidth + 16 // card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }


  return (
    <section className="space-y-6 rounded-2xl border border-slate/20 bg-white/80 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.1)] md:p-7">
      <SectionTitle label={t.articles.title} />
      <div className="relative">
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate/30 bg-white/90 p-2 text-sm font-semibold text-slate/70 shadow-md backdrop-blur transition hover:bg-white hover:text-accent"
            aria-label="Scroll left"
          >
            ‹
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex gap-4 overflow-x-auto pb-2 scroll-smooth"
        >
          {t.articles.cards.map((card, index) => (
            <article
              // eslint-disable-next-line react/no-array-index-key
              key={card.title + index}
              className="group flex min-w-[260px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-slate/20 bg-white/95 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg md:min-w-[280px]"
            >
              <div className="h-28 opacity-90 bg-gradient-to-br from-orange-100 to-yellow-300  transition group-hover:opacity-100">

                {/*<img
                  alt={card.title}
                  src={card.src}
                  className="h-full w-full object-cover"
                /> */}

              </div>

              <button
                type="button"
                onClick={() => window.open(card.link, '_blank')}
                className="flex-1 px-3 py-3 text-left text-[12px] font-semibold leading-snug text-slate/80 transition group-hover:text-accent"
              >
                {card.title}
              </button>
            </article>
          ))}
        </div>
        {canScrollRight && (
          <button
            type="button"
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate/30 bg-white/90 p-2 text-sm font-semibold text-slate/70 shadow-md backdrop-blur transition hover:bg-white hover:text-accent"
            aria-label="Scroll right"
          >
            ›
          </button>
        )}
      </div>
    </section>
  )
}

export default ArticlesSection


