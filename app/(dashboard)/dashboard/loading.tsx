import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { Card } from "@/components/ui/card"

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Level"
        text="Let's get started! You can create a new level or edit an existing one."
      />
      <div className="grid gap-10">
        <Card.Skeleton />
      </div>
    </DashboardShell>
  )
}
