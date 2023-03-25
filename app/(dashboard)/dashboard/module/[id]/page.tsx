import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { DashboardHeader } from '@/components/header'
import { DashboardShell } from '@/components/shell'
import Link from 'next/link'
import { ButtonApi } from '@/components/ButtonApi'

export const metadata = {
  title: 'Dashboard',
}

interface ParamsProps {
  params: {
    id: string
  }
}

interface LevelsProps {
  id: string
  name: string
  description: string
  leassons: [
    {
      answer: string
      description: string
      id: string
      question: string
      options: string[]
    },
  ]
}

export default async function DashboardPage({ params }: ParamsProps) {
  const user = await getCurrentUser()
  const currentUserLevel = user?.level

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  const authGoogleDB = process.env.GOOGLE_API_LEVELS

  const response = await fetch(
    `https://loopy-levels-default-rtdb.firebaseio.com/modules/${params.id}/levels.json?auth=${authGoogleDB}`,
    {
      cache: 'no-cache',
    },
  )
  const levelData = await response.json()

  return (
    <DashboardShell>
      <ButtonApi />
      <DashboardHeader
        heading="Levels"
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
          {levelData.map((item: LevelsProps) => {
            return (
              <Link href={`/levels/${params.id}/${item.id}`}>
                <div
                  className={`flex cursor-pointer  flex-col items-start gap-5 rounded-md border border-primarycolor bg-bgheader p-6 shadow-xl shadow-black/50 transition-all duration-300 ease-out hover:-translate-y-2 hover:brightness-150`}
                >
                  <p className="rounded-md border border-primarycolor px-4 py-1 text-lg text-primarycolor">
                    {item.name}
                  </p>
                  <p className="text-lg text-textprimary/75">
                    {item.description}
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
