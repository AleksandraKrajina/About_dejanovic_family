import SectionTitle from '../components/SectionTitle.jsx'

const PATREON_URL = 'https://www.patreon.com/c/Dejanovic_Family'

function DonationsSection({ t, language }) {
  return (
    <section className="space-y-6 rounded-2xl border border-slate/20 bg-white/80 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.1)] md:p-7">
      <SectionTitle label={t.donations.title} />
      <p className="text-[12px] leading-relaxed text-slate/70">
        {t.donations.highlight}
      </p>
      <div className="grid gap-5 md:grid-cols-3">
        {t.donations.tiers.map((tier, index) => {
          const isFeatured = tier.featured
          return (
            <div
              key={`${tier.amount}-${index}`}
              className={`flex flex-col justify-between rounded-2xl border p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                isFeatured
                  ? 'border-accent/80 bg-accent/5 md:scale-[1.03]'
                  : 'border-slate/20 bg-white/95'
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-slate/60">
                    {tier.frequency}
                  </div>
                  <div className="mt-1 text-lg font-bold text-accent">
                    {tier.amount}
                  </div>
                </div>
                {isFeatured && (
                  <span className="rounded-full bg-accent px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                    VIP
                  </span>
                )}
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="text-sm font-semibold text-slate">
                  {tier.title}
                </h3>
                <p className="text-[12px] leading-relaxed text-slate/75">
                  {tier.description}
                </p>
              </div>
              <a
                href={PATREON_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-accent px-3 py-2 text-xs font-semibold text-accent shadow-xs transition hover:bg-accent hover:text-white"
              >
                {language === 'sr'
                  ? 'Nastavi na donaciju na Patreon'
                  : 'Proceed to donate on Patreon'}
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default DonationsSection


