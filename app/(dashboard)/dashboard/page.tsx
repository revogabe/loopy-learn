import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { DashboardHeader } from '@/components/header'
import { DashboardShell } from '@/components/shell'
import { ModuleCard } from '@/components/ModuleCard'
import { ModuleCardLocked } from '@/components/ModuleCardLocked'

export const metadata = {
  title: 'Dashboard',
}

interface ModulesProps {
  id: string
  name: string
  description: string
  levels: []
}

export default async function DashboardPage() {
  const user = await getCurrentUser()
  const currentUserLevel = user?.level

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  const authGoogleDB = process.env.GOOGLE_API_LEVELS

  const moduleCard = await fetch(
    `https://loopy-levels-default-rtdb.firebaseio.com/modules.json?auth=${authGoogleDB}`,
    {
      cache: 'no-cache',
    },
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
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
        <div className="grid grid-cols-2 gap-6">
          {Object.keys(moduleCard).map((key: string) => {
            const moduleData: ModulesProps = moduleCard[key]
            const userModule = user.level

            if (userModule > moduleData.id) {
              return (
                <ModuleCard
                  key={moduleData.id}
                  title={moduleData.name}
                  description={moduleData.description}
                  levelUrl={
                    user.level > moduleData.id
                      ? `/dashboard/module/${moduleData.id}`
                      : `/dashboard/`
                  }
                  percent="COMPLETE"
                />
              )
            } else {
              return (
                <ModuleCardLocked
                  key={moduleData.id}
                  title={moduleData.name}
                  description={moduleData.description}
                  percent="LOCKED"
                />
              )
            }
          })}
        </div>
      </div>
    </DashboardShell>
  )
}
