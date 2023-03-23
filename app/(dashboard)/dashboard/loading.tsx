import { DashboardHeader } from "@/components/header"


import { DashboardShell } from "@/components/shell"

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
      </DashboardHeader>
      <div className="divide-y divide-neutral-200 rounded-md border border-slate-200">
      </div>
    </DashboardShell>
  )
}
