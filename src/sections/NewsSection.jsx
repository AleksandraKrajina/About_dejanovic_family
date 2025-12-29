import SectionTitle from '../components/SectionTitle.jsx'

function NewsSection({ t }) {
  return (
    <section className="space-y-6 rounded-2xl border border-slate/20 bg-white/80 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.1)] md:p-7">
      <SectionTitle label={t.news.title} />
      <div className="grid gap-4 md:grid-cols-3">
        {t.news.items.map((item) => (
          <article
            key={item.id}
            className="col-span-2 flex flex-col justify-between rounded-2xl border border-slate/20 bg-white/95 p-5 text-[13px] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg md:col-span-3"
          >
            <div className="flex items-center justify-between gap-3 text-[11px]">
              <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold uppercase tracking-[0.16em] text-amber-800">
                {item.tag}
              </span>
              <span className="text-slate/60">{item.location}</span>
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-sm font-semibold text-slate">{item.title}</h3>
              <p className="text-[12px] leading-relaxed text-slate/80">
                {item.body}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-[11px] text-slate/60">
              <span>{item.phase}</span>
              <span className="text-accent">{item.ctaHelper}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default NewsSection


