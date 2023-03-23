"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { MainNavItem } from "types"
import { cn } from "@/lib/utils"
import { MobileNav } from "@/components/mobile-nav"

import Logotype from '@/assets/logotypes/logo-dark.svg'
import IconLogo from "@/assets/logotypes/logo-dark-icon.svg"
import Image from "next/image"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Image src={Logotype} alt='' />
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-semibold text-textprimary transition-all duration-300 ease-out hover:text-primarycolor sm:text-sm",
                item.href.startsWith(`/${segment}`) && "text-primarycolor",
                item.disabled && "cursor-not-allowed opacity-25"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center gap-3 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <Image src={IconLogo} alt='' width={28} />
        <span className="text-2xl font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  )
}
