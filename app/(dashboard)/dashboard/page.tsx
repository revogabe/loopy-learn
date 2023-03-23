
import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()
  const currentUserLevel = user?.level

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const authGoogleDB = process.env.GOOGLE_API_LEVELS

  const apiLevel = await fetch(`https://loopy-levels-default-rtdb.firebaseio.com/data.json?auth=${authGoogleDB}`)
    .then(res => res.json())
    .then(data => {
      return data
    })

  return (
    <DashboardShell>
      <DashboardHeader heading="Level" text="Let's get started! You can create a new level or edit an existing one.">
      </DashboardHeader>
      <div className="flex items-center gap-3">
        <h1>Current Level:</h1>
        <p className="rounded-full border border-primarycolor px-4 py-1 text-lg text-primarycolor">{user.level}</p>
      </div>
      <div>
        <h1 className="mb-8 text-2xl font-bold">Level List:</h1>
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(apiLevel).map((key) => {
            return (
              <div className={`flex flex-col items-start gap-5 ${apiLevel[key].level > currentUserLevel ? "cursor-not-allowed opacity-10" : ""}`}>
                <p className="rounded-md border border-primarycolor px-4 py-1 text-lg text-primarycolor">Level: {apiLevel[key].level}</p>
                <p className="text-3xl font-bold">{apiLevel[key].question}</p>
                <p className="flex flex-col items-start gap-3 text-base">Answer:
                 {Object.values(apiLevel[key].alternatives).map((answer: string) => {
                    return (
                      <span className="rounded-md border border-primarycolor px-4 py-1 text-lg text-primarycolor">{answer}</span>
                    )
                  })
                 }
                </p>
                <p className="flex items-center justify-end gap-2 text-lg">Result: 
                  <span className="rounded-md border border-primarycolor bg-primarycolor px-4 py-1 text-lg font-bold text-bgprimary">
                    {apiLevel[key].result.toUpperCase()}
                  </span>
                </p>
              </div>           
            )
          })}
        </div>
      </div>
    </DashboardShell>
  )
}
