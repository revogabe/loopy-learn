type LevelCardProps = {
  title: string
  description: string
}

export function LevelCardLocked({ title, description }: LevelCardProps) {
  return (
    <div className="flex cursor-not-allowed flex-col gap-8 rounded-lg border border-transparent bg-black/20 p-7 transition-all duration-200 ease-out hover:blur-[2px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-zinc-800">{title}</h1>
        <p className="text-base leading-relaxed text-zinc-900">{description}</p>
      </div>
    </div>
  )
}
