type ModuleCardProps = {
  title: string
  description: string
  percent: string
}

export function ModuleCardLocked({
  title,
  description,
  percent,
}: ModuleCardProps) {
  return (
    <div className="flex cursor-not-allowed flex-col gap-8 rounded-lg border border-transparent bg-black/20 p-7 transition-all duration-200 ease-out hover:blur-[2px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-zinc-800">{title}</h1>
        <p className="text-base leading-relaxed text-zinc-900">{description}</p>
      </div>
      <div className="flex w-full items-center justify-start gap-4">
        <div className="h-5 w-full rounded bg-zinc-900" />
        <p className="flex-1 text-lg font-bold text-zinc-800">{percent}</p>
      </div>
    </div>
  )
}
