interface DashboardHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function DashboardHeader({
  heading,
  text,
  children,
}: DashboardHeaderProps) {
  return (
    <div className="flex justify-between px-2">
      <div className="grid gap-1">
        <h1 className="text-2xl font-bold tracking-wide text-primarycolor">
          {heading}
        </h1>
        {text && <p className="text-gray-300">{text}</p>}
      </div>
      {children}
    </div>
  )
}
