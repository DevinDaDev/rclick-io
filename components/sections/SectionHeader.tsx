export function SectionHeader({
  eyebrow,
  heading,
  lede,
  id,
  center = false,
}: {
  eyebrow: string
  heading: string
  lede?: string
  id: string
  center?: boolean
}) {
  return (
    <div className={center ? 'mx-auto max-w-[680px] text-center' : 'max-w-[620px]'}>
      <div className="lp-eyebrow">{eyebrow}</div>
      <h2 id={id} className="lp-h2 max-[768px]:text-[28px]">
        {heading}
      </h2>
      {lede && <p className={'lp-lede' + (center ? ' mx-auto' : '')}>{lede}</p>}
    </div>
  )
}
