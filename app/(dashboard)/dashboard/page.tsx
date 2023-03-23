
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

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }


  return (
    <DashboardShell>
      <DashboardHeader heading="Level" text="Let's get started! You can create a new level or edit an existing one.">
      </DashboardHeader>
      <div className="flex items-center gap-3">
        <h1>Current Level:</h1>
        <p className="rounded-full border border-primarycolor px-4 py-1 text-lg text-primarycolor">1</p>
      </div>
    </DashboardShell>
  )
}
