import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-primarycolor',
        className,
      )}
      {...props}
    />
  )
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

Card.Header = function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn('grid gap-1 p-6 text-primarycolor', className)}
      {...props}
    />
  )
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

Card.Content = function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn('px-6 pb-4', className)} {...props} />
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

Card.Footer = function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      className={cn(
        ' border-t border-primarycolor bg-black px-6 py-4',
        className,
      )}
      {...props}
    />
  )
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

Card.Title = function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h4
      className={cn('text-lg font-medium text-primarycolor', className)}
      {...props}
    />
  )
}

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

Card.Description = function CardDescription({
  className,
  ...props
}: CardDescriptionProps) {
  return <p className={cn('text-sm text-primarycolor', className)} {...props} />
}

Card.Skeleton = function CardSeleton() {
  return (
    <Card>
      <Card.Header className="gap-2">
        <Skeleton className="h-5 w-1/5" />
        <Skeleton className="h-4 w-4/5" />
      </Card.Header>
      <Card.Content className="h-10" />
      <Card.Footer>
        <Skeleton className="h-8 w-[120px] bg-black" />
      </Card.Footer>
    </Card>
  )
}
