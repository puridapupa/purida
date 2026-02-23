import { Download } from 'lucide-react'

interface Props {
  src: string
  title: string
  filename?: string
}

export default function PDFViewer({ src, title, filename }: Props) {
  const handleDownload = () => {
    fetch(src)
      .then(r => r.blob())
      .then(blob => {
        const a = document.createElement('a')
        a.href = URL.createObjectURL(blob)
        a.download = filename ?? `${title}.pdf`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(a.href)
      })
      .catch(() => window.open(src, '_blank'))
  }

  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-5 py-2 text-white rounded-xl text-sm font-medium transition-colors cursor-pointer"
          style={{ background: '#D4845A' }}
        >
          <Download size={15} />
          ดาวน์โหลด
        </button>
      </div>
      <div
        className="w-full rounded-xl border border-stone-100 overflow-hidden bg-stone-50"
        style={{ aspectRatio: '210/297' }}
      >
        <iframe src={src} className="w-full h-full" title={title} />
      </div>
    </div>
  )
}
