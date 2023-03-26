import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { DashboardHeader } from '@/components/header'
import { DashboardShell } from '@/components/shell'
import { ButtonApi } from '@/components/ButtonApi'
import { LevelCard } from '@/components/LevelCard'
import { LevelCardLocked } from '@/components/LevelCardLocked'

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
  level: string
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
        <div className="flex w-full flex-col gap-4">
          {levelData.map((item: LevelsProps) => {
            const userLevel = user.levelProgress

            if (userLevel >= item.level) {
              return (
                <LevelCard
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  levelUrl={
                    userLevel > item.id
                      ? `/levels/${params.id}/${item.id}/0`
                      : `/dashboard/`
                  }
                />
              )
            } else {
              return (
                <LevelCardLocked
                  key={item.id}
                  title={item.name}
                  description={item.description}
                />
              )
            }
          })}
        </div>
      </div>
    </DashboardShell>
  )
}
