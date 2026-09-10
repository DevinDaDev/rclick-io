import Image from 'next/image'
/**
 * The site's icon set: monoline, 24px viewBox, 1.7px stroke. Add a glyph here and
 * its key to IconKey in content/site.ts to use it from content.
 *
 * Caps and joins vary per glyph in the source and are NOT uniform - a blanket
 * "round everything" changes how the document and folder corners render, so each one
 * carries only the attributes it was drawn with.
 *
 * Every icon here is decoration beside a text label, so they are all aria-hidden.
 */

type IconProps = { size?: number; className?: string }

function Svg({
  size = 21,
  className,
  children,
  linecap,
  linejoin,
}: IconProps & {
  children: React.ReactNode
  linecap?: 'round'
  linejoin?: 'round'
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap={linecap}
      strokeLinejoin={linejoin}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

/** Document with two text lines. */
export function FileIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <path d="M6.5 3.5h7L18 8v12.5H6.5z" />
      <path d="M13.5 3.5V8H18" />
      <path d="M9.5 12.5h5" />
      <path d="M9.5 16h3.5" />
    </Svg>
  )
}

export function FolderIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <path d="M3.5 19.5h17V8.5h-8L10 5.5H3.5z" />
    </Svg>
  )
}

export function PencilIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <path d="M4 20h4l11-11-4-4L4 16z" />
    </Svg>
  )
}

/** Download arrow onto a baseline. */
export function DownloadIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <path d="M12 4v11" />
      <path d="M7 11l5 5 5-5" />
      <path d="M4.5 19.5h15" />
    </Svg>
  )
}

/** Loop-back arrow - the only arc in the set. Sweep flag 1; flipping it inverts the loop. */
export function LoopIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <path d="M4 8h11.5a4 4 0 0 1 0 8H8" />
      <path d="M7 5 4 8l3 3" />
    </Svg>
  )
}

export function HouseIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <path d="M3.5 10.5 12 4l8.5 6.5" />
      <path d="M6 10v10h12V10" />
      <path d="M10.5 20v-4.5h3V20" />
    </Svg>
  )
}

export function CalendarIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.2" />
      <path d="M3.5 10h17M8 3.5V6M16 3.5V6M8 14h8M8 17h5" />
    </Svg>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <path d="M12 3.5 5 6v6c0 4 3 7 7 8.5 4-1.5 7-4.5 7-8.5V6z" />
      <path d="M9 12l2 2 4-4" />
    </Svg>
  )
}

export function BoltIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <path d="M13 3 5 14h6l-1 7 8-11h-6z" />
    </Svg>
  )
}

export function ChartIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <path d="M4 20h16" />
      <path d="M7 16v-5M12 16V7M17 16v-8" />
    </Svg>
  )
}

export function MonitorIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <rect x="3" y="4.5" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16.5V20" />
    </Svg>
  )
}

export function UsersIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M15.5 5.2a3.2 3.2 0 0 1 0 5.6M17 14.2c2.1.5 3.5 2.2 3.5 4.8" />
    </Svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </Svg>
  )
}

export function LockIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </Svg>
  )
}

export function MessageIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 3.5V16H6.5A2.5 2.5 0 0 1 4 13.5z" />
      <path d="M8 9h8M8 12.5h5" />
    </Svg>
  )
}

export function TicketIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5v1.6a2 2 0 0 0 0 3.8v1.6a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 15.5v-1.6a2 2 0 0 0 0-3.8z" />
      <path d="M13.5 8v8" strokeDasharray="2 2" />
    </Svg>
  )
}

export function TargetIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </Svg>
  )
}

export function SettingsIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6L18 18M6 18l1.4-1.4M16.6 7.4L18 6" />
    </Svg>
  )
}

export function BuildingIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <rect x="4.5" y="3.5" width="15" height="17" rx="1.5" />
      <path d="M8.5 7.5h2M13.5 7.5h2M8.5 11.5h2M13.5 11.5h2M10 20.5v-4h4v4" />
    </Svg>
  )
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <Svg {...props} linecap="round" linejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.5l2.3 2.3L15.5 10" />
    </Svg>
  )
}

const ICONS = {
  file: FileIcon,
  folder: FolderIcon,
  pencil: PencilIcon,
  download: DownloadIcon,
  loop: LoopIcon,
  house: HouseIcon,
  calendar: CalendarIcon,
  shield: ShieldIcon,
  bolt: BoltIcon,
  chart: ChartIcon,
  monitor: MonitorIcon,
  users: UsersIcon,
  clock: ClockIcon,
  mail: MailIcon,
  lock: LockIcon,
  message: MessageIcon,
  ticket: TicketIcon,
  target: TargetIcon,
  settings: SettingsIcon,
  building: BuildingIcon,
  checkcircle: CheckCircleIcon,
} as const

export type IconName = keyof typeof ICONS

export function Icon({ name, ...rest }: IconProps & { name: IconName }) {
  const Component = ICONS[name]
  return <Component {...rest} />
}

/**
 * The product's own folder mark, supplied as artwork and trimmed to its bounding box so it
 * fills the height it is given. It is 302x252, so the box is slightly wider than tall.
 * Always paired with the brand wordmark beside it, so it is decoration.
 */
/**
 * The brand mark. The rclick.io app icon (cursor + wrench on slate) from public/img/logo.png.
 */
export function LogoMark({ size = 26 }: { size?: number }) {
  return (
    <Image
      src="/img/logo.png"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      className="block rounded-[6px]"
      priority
    />
  )
}

/** Windows four-pane glyph, solid fill. Sits inside the download buttons. */
export function WindowsGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 4.7l8-1.1v8H3zM12.4 3.4L21 2.2v9.4h-8.6zM3 12.9h8v8L3 19.8zM12.4 12.9H21v9.4l-8.6-1.2z" />
    </svg>
  )
}

/**
 * The checklist tick. Heavier than the icon system (3.2 / 2.4 rather than 1.7) because it
 * renders at 12-15px; at 1.7 it disappears.
 */
export function CheckGlyph({
  size = 12,
  strokeWidth = 3.2,
  className,
}: {
  size?: number
  strokeWidth?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  )
}

export function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3d3e38"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={direction === 'left' ? 'M14.5 6l-6 6 6 6' : 'M9.5 6l6 6-6 6'} />
    </svg>
  )
}

/** Small arrow for primary buttons. */
export function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5" />
    </svg>
  )
}

/** Chevron pointing down, for FAQ cards. Rotates via the parent's group-open. */
export function ChevronDown({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M6 9.5l6 6 6-6" />
    </svg>
  )
}
