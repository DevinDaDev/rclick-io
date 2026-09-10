export function SectionHeader({
  eyebrow,
  heading,
  lede,
  id,
}: {
  eyebrow: string
  heading: string
  lede?: string
  id: string
}) {
  return (
    <div className="max-w-[620px]">
      <div className="lp-eyebrow">{eyebrow}</div>
      <h2 id={id} className="lp-h2 max-[768px]:text-[28px]">
        {heading}
      </h2>
      {lede && <p className="lp-lede">{lede}</p>}
    </div>
  )
}
