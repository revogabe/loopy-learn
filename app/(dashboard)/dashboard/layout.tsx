import { notFound } from 'next/navigation'

import { dashboardConfig } from '@/config/dashboard'
import { getCurrentUser } from '@/lib/session'
import { DashboardNav } from '@/components/nav'
import { UserAccountNav } from '@/components/user-account-nav'

import Logotype from '@/assets/logotypes/logo-dark.svg'
import Image from 'next/image'
import Link from 'next/link'
import { StreakCount } from '@/components/streak'
import { ReactNode } from 'react'

interface DashboardLayoutProps {
  children?: ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }

  return (
    <div className="mx-auto flex flex-col space-y-6">
      <header className="container z-40 bg-transparent">
        <div className="flex h-16 items-center justify-between border-0 pt-10 pb-12">
          <Link href="/">
            <Image src={Logotype} alt="" />
          </Link>
          <StreakCount streak={user?.streak} />
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          />
        </div>
      </header>
      <div className="container grid gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}
