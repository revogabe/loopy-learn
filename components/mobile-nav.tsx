import * as React from 'react'
import Link from 'next/link'
import { useLockBody } from '@/hooks/use-lock-body'

import { MainNavItem } from 'types'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody()

  // if (!items?.length) return null

  return (
    <div
      className={cn(
        'fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden',
      )}
    >
      <div className="relative z-20 flex flex-col gap-0 rounded-md border border-primarycolor bg-bgprimary p-4 shadow-xl shadow-black/50">
        <nav className="flex flex-col gap-0 text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex w-full items-center rounded-md p-2 text-sm font-medium hover:text-primarycolor hover:underline',
                item.disabled && 'cursor-not-allowed opacity-60',
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}
