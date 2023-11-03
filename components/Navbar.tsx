'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { createNewEntry } from '@/utils/api'
import { Button } from './ui/button'

interface NavbarProps {
  links: {
    href: string
    label: string
  }[]
}
const Navbar = ({ links }: NavbarProps) => {
  const pathname = usePathname()

  const router = useRouter()

  const handleOnClick = async () => {
    const data = await createNewEntry()
    router.push(`/journal/${data.id}`)
  }

  return (
    <header className="flex items-center h-16 px-4 border-b border-gray-200 text-gray-900 shrink-0 md:px-6">
      <nav className="flex gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold md:text-base hover:text-gray-600"
          href="#"
        >
          <svg
            className=" w-6 h-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
          </svg>
          <span className="sr-only">Mood Tracker</span>
        </Link>
        {links.map((link) => (
          <Link
            key={link.href}
            className={cn(
              'hover:text-gray-600',
              pathname === link.href && 'font-bold',
            )}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
        <Button
          onClick={handleOnClick}
          className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          New Entry
        </Button>
      </nav>
    </header>
  )
}

export default Navbar
