'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { HomeIcon, Smile, SmilePlus } from 'lucide-react'

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
    <header className="flex items-center h-16 px-4 md:px-10 border-b border-gray-200 text-gray-900 shrink-0">
      <nav className="flex gap-6 text-lg font-medium md:flex-row items-center justify-between w-full md:gap-5 md:text-sm lg:gap-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold  hover:text-gray-600"
          href="/"
        >
          <Smile className="w-6 h-6" />
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
