'use client'
import { FireSimple } from '@phosphor-icons/react'

type StreakCountProps = {
  streak: string | number
}

export function StreakCount({ streak }: StreakCountProps) {
  return (
    <div
      className={`flex cursor-pointer items-center justify-center gap-2 rounded-md border  bg-black/20 px-4 py-2 
    ${
      streak === 0
        ? 'border-primarycolor/25 text-gray-600/50'
        : 'border-primarycolor text-textprimary'
    }`}
    >
      <FireSimple
        weight="fill"
        className={streak === 0 ? 'text-gray-600/50' : 'text-primarycolor'}
      />
      <p>{streak}</p>
    </div>
  )
}
