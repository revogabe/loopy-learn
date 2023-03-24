import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn('h-5 w-2/5 animate-pulse rounded-lg bg-black', className)}
      {...props}
    />
  )
}
