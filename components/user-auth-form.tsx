"use client"

import * as React from "react"
import { signIn } from "next-auth/react"
import { User } from "@prisma/client"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)

  return (
    <div className={cn("flex h-12 w-full", className)} {...props}>
      <button
        type="button"
        className="flex h-full w-full items-center justify-center rounded-md border border-textprimary bg-transparent font-bold transition-all duration-300 ease-out hover:bg-textprimary hover:text-bgprimary dark:border-slate-700 dark:text-slate-100"
        onClick={() => {
          setIsGitHubLoading(true)
          signIn("github")
        }}
        disabled={isLoading || isGitHubLoading}
      >
        {isGitHubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </button>
    </div>
  )
}
