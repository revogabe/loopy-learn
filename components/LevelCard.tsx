import Link from 'next/link'

type LevelCardProps = {
  title: string
  description: string
  levelUrl: string
}

export function LevelCard({ title, description, levelUrl }: LevelCardProps) {
  return (
    <Link href={levelUrl}>
      <div className="flex flex-col gap-8 rounded-lg border border-primarycolor bg-bgheader p-7 brightness-90 transition-all duration-300 ease-out hover:-translate-y-2 hover:brightness-125">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-primarycolor">{title}</h1>
          <p className="text-base leading-relaxed text-zinc-300">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}
