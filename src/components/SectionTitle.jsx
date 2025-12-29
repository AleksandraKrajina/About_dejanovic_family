function SectionTitle({ label, accent }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-slate/80 uppercase">
      <span className="h-px w-9 bg-slate/40" />
      <span className={accent ? 'text-accent' : ''}>{label}</span>
    </div>
  )
}

export default SectionTitle


