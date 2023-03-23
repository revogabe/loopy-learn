'use client'
import { FireSimple } from "@phosphor-icons/react";
import { User } from "next-auth"

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "streak"  >
}

export function StreakCount({ user }: UserAccountNavProps) {

  return (
    <div className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-primarycolor/25 bg-black/20 px-4 py-2">
      <FireSimple weight="fill" className="text-primarycolor" />
      <p>{user.streak}</p>
    </div>
  )
}