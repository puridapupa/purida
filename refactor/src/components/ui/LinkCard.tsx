import { ExternalLink, FileText } from 'lucide-react'

interface Props {
  href: string
  label: string
  badge?: string | number
  variant?: 'default' | 'pdf'
}

export default function LinkCard({ href, label, badge, variant = 'default' }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group"
      style={{ background: '#fff', border: '1px solid rgba(26,18,14,0.08)' }}
    >
      {variant === 'pdf' ? (
        <span className="w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0 transition-all"
          style={{ background: 'rgba(212,132,90,0.1)', color: '#D4845A' }}>
          <FileText size={14} />
        </span>
      ) : badge !== undefined ? (
        <span className="w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0 transition-all"
          style={{ background: 'rgba(212,132,90,0.1)', color: '#D4845A' }}>
          {badge}
        </span>
      ) : null}
      <span className="text-sm font-medium flex-1 truncate" style={{ color: 'rgba(26,18,14,0.75)' }}>{label}</span>
      <ExternalLink size={13} className="flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: '#D4845A' }} />
    </a>
  )
}
