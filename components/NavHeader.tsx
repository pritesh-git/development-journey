'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { navLinks } from '@/shared/navbar'
import { CodeXml, Menu, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { ModeToggle } from './modeToggle'

const NavHeader: FC = () => {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 w-full flex items-center justify-between p-4 bg-opacity-50 backdrop-blur-md bg-[hsl(var(--background))]">
      <div className="text-[hsl(var(--foreground))] text-lg font-bold flex items-center gap-2">
        <CodeXml className="w-5 h-5" />
        <span>DevJourney</span>
      </div>

      <div className="hidden md:flex gap-3 lg:gap-6 xl:gap-9 font-semibold text-[hsl(var(--muted-foreground))] justify-center flex-1">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-[hsl(var(--foreground))] ${
              isActive(link.href)
                ? 'text-[hsl(var(--foreground))] underline underline-offset-4'
                : ''
            }`}>
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 cursor-not-allowed" />
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <span className="sr-only">Menu</span>
              <Menu className="w-6 h-6 text-[hsl(var(--foreground))]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {navLinks.map(link => (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default NavHeader
