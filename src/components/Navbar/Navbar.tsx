'use client'

import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react'
import { Menu01Icon, Cancel02Icon, Github01Icon } from '@hugeicons/core-free-icons'
import Link from 'next/link'
import Image from 'next/image'
import { ForwardRefExoticComponent, useState } from 'react'
import { Button } from '../ui/button'
import Logo from '@/components/Navbar/Logo'
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler'

type navLink = {
  label: string | React.ReactNode
  src: string
  isExternal: boolean
}
const navLinks: navLink[] = [
  {
    label: 'Home',
    src: '/',
    isExternal: false,
  },
  {
    label: 'Projects',
    src: '/projects',
    isExternal: false,
  },
  {
    label: <HugeiconsIcon icon={Github01Icon} />,
    src: 'https://github.com/boulilaAnis',
    isExternal: true,
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className=" py-3 border-b">
      <div className="flex justify-between items-center">
        <AnimatedThemeToggler />
        <h2 className="relative w-32 h-10">
          <Link href="/" className="block w-full h-full">
            <Logo className="w-full h-full text-primary dark:text-white transition-colors duration-200" />
          </Link>
        </h2>
        <ul className="hidden md:flex gap-3">
          {navLinks.map((link: navLink) => (
            <li key={link.src} className="">
              <Link
                className="text-accent-foreground inline-block pb-1 relative group"
                href={link.src}
                target={link.isExternal ? '_blank' : '_self'}
              >
                {link.label}
                <span className="absolute rounded-sm bottom-0 left-0 w-full h-0.5 bg-accent group-hover:scale-x-100 scale-x-0 transition-transform duration-400 origin-center ease-in-out " />
              </Link>
            </li>
          ))}
        </ul>
        <Button
          className="z-70 md:hidden rounded-xl"
          variant="ghost"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {!isOpen ? <HugeiconsIcon icon={Menu01Icon} /> : <HugeiconsIcon icon={Cancel02Icon} />}
        </Button>
        {isOpen && (
          <div className="fixed w-screen h-screen  top-0 left-0 z-50 flex justify-center items-center backdrop-blur-sm bg-background/80">
            <ul className="flex flex-col justify-center items-center gap-15 ">
              {navLinks.map((link: navLink) => (
                <li key={link.src} className="">
                  <Link className="text-accent-foreground text-3xl" href={link.src}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
