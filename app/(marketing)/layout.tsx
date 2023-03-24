import Link from 'next/link'

import { marketingConfig } from '@/config/marketing'
import { cn } from '@/lib/utils'
import { MainNav } from '@/components/main-nav'
import { buttonVariants } from '@/components/ui/button'
import { Footer } from '@/components/Footer'
import { ReactNode } from 'react'

interface MarketingLayoutProps {
  children: ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full bg-bgheader/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-main items-center justify-between py-10">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex items-center gap-4">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ size: 'sm', variant: 'ghost' }),
                'px-6',
              )}
            >
              Login
            </Link>
            <Link
              href="/register"
              className={cn(
                buttonVariants({ size: 'sm', variant: 'subtle' }),
                'p-6 text-lg font-bold',
              )}
            >
              Free trial
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
