import ShieldBadge from '../components/ShieldBadge.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

function HeaderSection({
  t,
  language,
  setLanguage,
  galleryImages,
  galleryIndex,
  setGalleryIndex,
}) {
  const safeGalleryImages = galleryImages || []
  const currentImage = safeGalleryImages[galleryIndex] || safeGalleryImages[0]

  return (
    <header className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-medium text-slate/80">
        <div className="flex items-center gap-4">
          <ShieldBadge />
          <div className="text-sm font-semibold leading-tight">
            <div className="tracking-[0.22em] text-[10px] uppercase text-slate/60">
              {t.brand.label}
            </div>
            <div>{t.brand.name}</div>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-5 rounded-full bg-white/70 px-4 py-2 text-[11px] shadow-sm ring-1 ring-black/5 backdrop-blur">
          {t.navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="pb-0.5 text-slate/70 transition hover:text-accent"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1 rounded-full bg-white/70 px-2 py-1 text-[10px] shadow-sm ring-1 ring-black/5 backdrop-blur">
          <button
            type="button"
            onClick={() => setLanguage('sr')}
            className={`rounded-full px-2 py-0.5 font-semibold tracking-[0.16em] ${
              language === 'sr'
                ? 'bg-accent text-white'
                : 'text-slate/70 hover:text-accent'
            }`}
          >
            SR
          </button>
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`rounded-full px-2 py-0.5 font-semibold tracking-[0.16em] ${
              language === 'en'
                ? 'bg-accent text-white'
                : 'text-slate/70 hover:text-accent'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-10 rounded-2xl bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)] ring-1 ring-black/5 md:grid-cols-2 md:items-start md:p-8">
        <div className="space-y-5">
          <SectionTitle label={t.hero.sectionTitle} />
          <div className="space-y-4 text-sm leading-relaxed text-slate/80">
            <p>{t.hero.paragraph1}</p>
            <p>{t.hero.paragraph2}</p>
            {t.hero.paragraph3 && <p>{t.hero.paragraph3}</p>}
          </div>
          <button className="group inline-flex items-center gap-3 text-xs font-semibold text-accent">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent bg-white text-base leading-none transition group-hover:-translate-y-0.5 group-hover:bg-accent group-hover:text-white">
              ↓
            </span>
            <span className="tracking-[0.18em] uppercase">
              {t.hero.cta}
            </span>
          </button>
        </div>

        <div className="space-y-3">
          {safeGalleryImages.length > 0 ? (
            <div className="overflow-hidden rounded-xl border border-slate/20 bg-slate-950/5 shadow-[0_14px_35px_rgba(15,23,42,0.18)]">
              <div className="relative flex h-60 w-full items-center justify-center overflow-hidden bg-slate-100 transition-all duration-300">
                {currentImage?.src ? (
                  <img
                    src={currentImage.src}
                    alt={currentImage.title || 'Gallery image'}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xs text-slate/70">
                    {t.hero.mapPlaceholder}
                  </span>
                )}
                {safeGalleryImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="absolute left-2 h-8 w-8 rounded-full border border-white/80 bg-white/90 text-sm font-semibold text-slate/80 shadow-md backdrop-blur transition hover:bg-white hover:text-accent"
                      onClick={(e) => {
                        e.stopPropagation()
                        setGalleryIndex(
                          (prev) =>
                            (prev - 1 + safeGalleryImages.length) %
                            safeGalleryImages.length,
                        )
                      }}
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="absolute right-2 h-8 w-8 rounded-full border border-white/80 bg-white/90 text-sm font-semibold text-slate/80 shadow-md backdrop-blur transition hover:bg-white hover:text-accent"
                      onClick={(e) => {
                        e.stopPropagation()
                        setGalleryIndex(
                          (prev) => (prev + 1) % safeGalleryImages.length,
                        )
                      }}
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </>
                )}
                {safeGalleryImages.length > 1 && (
                  <div className="absolute bottom-2 flex gap-1.5">
                    {safeGalleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setGalleryIndex(idx)
                        }}
                        className={`h-1.5 rounded-full transition ${
                          idx === galleryIndex
                            ? 'w-6 bg-white'
                            : 'w-1.5 bg-white/50'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between border-t border-white/60 bg-gradient-to-r from-white/95 to-white/80 px-4 py-3 text-[11px] text-slate/80 backdrop-blur">
                <div>
                  <div className="font-semibold text-slate">
                    {currentImage?.title || ''}
                  </div>
                  <div className="text-slate/70">
                    {currentImage?.caption || ''}
                  </div>
                </div>
                {safeGalleryImages.length > 1 && (
                  <div className="text-xs text-slate/60">
                    {galleryIndex + 1} / {safeGalleryImages.length}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex h-60 items-center justify-center rounded-xl border border-slate/20 bg-slate-100">
              <span className="text-xs text-slate/70">
                {t.hero.mapPlaceholder}
              </span>
            </div>
          )}
          <p className="text-center text-[11px] text-slate/60">
            {t.hero.galleryHelper}
          </p>
        </div>
      </section>
    </header>
  )
}

export default HeaderSection


