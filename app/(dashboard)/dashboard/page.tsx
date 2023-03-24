import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { DashboardHeader } from '@/components/header'
import { DashboardShell } from '@/components/shell'
import Link from 'next/link'

export const metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  const user = await getCurrentUser()
  const currentUserLevel = user?.level

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  const authGoogleDB = process.env.GOOGLE_API_LEVELS

  const moduleCard = await fetch(
    `https://loopy-levels-default-rtdb.firebaseio.com/data/module.json?auth=${authGoogleDB}`,
    {
      cache: 'no-cache',
    },
  )
    .then((res) => res.json())
    .then((data) => {
      return data
    })

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Modules"
        text="Let's get started! You can create a new level or edit an existing one."
      ></DashboardHeader>
      <div className="flex items-center gap-3">
        <h1>Current Level:</h1>
        <p className="rounded-full border border-primarycolor px-4 py-1 text-lg text-primarycolor">
          {currentUserLevel}
        </p>
      </div>
      <div>
        <h1 className="mb-8 text-2xl font-bold">Modulos</h1>
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(moduleCard).map((key) => {
            return (
              <Link
                href={
                  user.level > moduleCard[key].id
                    ? `/dashboard/module/${moduleCard[key].id}`
                    : `/dashboard/`
                }
              >
                <div
                  className={`flex cursor-pointer  flex-col items-start gap-5 rounded-md border border-primarycolor bg-bgheader p-6 shadow-xl shadow-black/50 transition-all duration-300 ease-out hover:-translate-y-2 hover:brightness-150 ${
                    user.level <= moduleCard[key].id
                      ? 'cursor-not-allowed opacity-20 saturate-0 hover:transform-none hover:brightness-95 hover:transition-none'
                      : ''
                  }`}
                >
                  <p className="rounded-md border border-primarycolor px-4 py-1 text-lg text-primarycolor">
                    {moduleCard[key].name}
                  </p>
                  <p className="text-lg text-textprimary/75">
                    {moduleCard[key].description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </DashboardShell>
  )
}
