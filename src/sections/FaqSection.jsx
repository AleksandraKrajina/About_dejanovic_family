import SectionTitle from '../components/SectionTitle.jsx'

function FaqSection({ t, activeFaq, setActiveFaq }) {
  return (
    <section className="space-y-6 rounded-2xl border border-slate/20 bg-white/80 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.1)] md:p-7">
      <SectionTitle label={t.faq.title} />
      <div className="space-y-2">
        {t.faq.items.map((item, index) => (
          <button
            key={item.question}
            type="button"
            onClick={() =>
              setActiveFaq((current) => (current === index ? -1 : index))
            }
            className="flex w-full flex-col items-stretch rounded-xl border border-slate/20 bg-white/90 px-4 py-3 text-left text-[13px] shadow-sm transition hover:border-accent hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-medium text-slate">{item.question}</span>
              <span className="text-xs text-accent">
                {activeFaq === index ? '−' : '+'}
              </span>
            </div>
            {activeFaq === index && (
              <p className="mt-2 text-[12px] leading-relaxed text-slate/80">
                {item.answer}
              </p>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}

export default FaqSection


