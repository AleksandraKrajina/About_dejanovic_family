import SectionTitle from '../components/SectionTitle.jsx'

function CitizenshipSection({
  t,
  citizenshipForm,
  onChange,
  onSubmit,
}) {
  return (
    <section className="space-y-5 rounded-2xl border border-slate/20 bg-white/85 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.1)] md:p-7">
      <SectionTitle label={t.citizenship.title} />
      <div className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
        <div className="grid grid-cols-1 gap-3 text-[12px] text-slate">
          <input
            type="text"
            placeholder={t.citizenship.fields.firstName}
            className="w-full rounded border border-slate/30 bg-white px-3 py-2 text-xs shadow-sm focus:border-accent focus:outline-none"
            value={citizenshipForm.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
          />
          <input
            type="text"
            placeholder={t.citizenship.fields.lastName}
            className="w-full rounded border border-slate/30 bg-white px-3 py-2 text-xs shadow-sm focus:border-accent focus:outline-none"
            value={citizenshipForm.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="email"
              placeholder={t.citizenship.fields.email}
              className="w-full rounded border border-slate/30 bg-white px-3 py-2 text-xs shadow-sm focus:border-accent focus:outline-none"
              value={citizenshipForm.email}
              onChange={(e) => onChange('email', e.target.value)}
            />
            <input
              type="text"
              placeholder={t.citizenship.fields.occupation}
              className="w-full rounded border border-slate/30 bg-white px-3 py-2 text-xs shadow-sm focus:border-accent focus:outline-none"
              value={citizenshipForm.occupation}
              onChange={(e) => onChange('occupation', e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate">
            <input
              id="support"
              type="checkbox"
              className="accent-accent"
              checked={citizenshipForm.support}
              onChange={(e) => onChange('support', e.target.checked)}
            />
            <label htmlFor="support" className="select-none">
              {t.citizenship.supportLabel}
            </label>
          </div>
          <textarea
            rows={4}
            placeholder={t.citizenship.storyPlaceholder}
            className="w-full rounded border border-slate/30 bg-white px-3 py-2 text-xs shadow-sm focus:border-accent focus:outline-none"
            value={citizenshipForm.story}
            onChange={(e) => onChange('story', e.target.value)}
          />
          <button
            type="button"
            onClick={onSubmit}
            className="w-24 rounded bg-accent px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            {t.citizenship.submit}
          </button>
        </div>
        <div className="flex items-center justify-center rounded-2xl border border-accent/80 bg-accent/95 p-5 text-base font-semibold leading-relaxed text-white shadow-md md:text-lg">
          {t.citizenship.sideText}
        </div>
      </div>
      <div className="flex items-center justify-between pt-2 text-[10px] text-slate/70">
        <span>{t.citizenship.footerCopyright}</span>
        <div className="flex gap-4">
          {t.citizenship.footerLinks.map((link) => (
            <a key={link} href="#" className="hover:text-accent">
              {link}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CitizenshipSection


