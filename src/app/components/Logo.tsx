import Link from 'next/link'
import Image from 'next/image'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/favicon.svg"
        alt="Logo"
        width={32}
        height={32}
        className="w-8 h-8"
      />
      <span className="text-xl font-bold text-gray-900">7dia | 每日记录</span>
    </Link>
  )
}

