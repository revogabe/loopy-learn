import { CheckCircle } from 'lucide-react'

type LevelCardProps = {
  title: string
  description: string
}

export function LevelCardComplete({ title, description }: LevelCardProps) {
  return (
    <div className="flex cursor-default flex-col gap-8 rounded-lg border border-primarycolor bg-bgheader p-7 brightness-50 transition-all duration-300 ease-out hover:brightness-100 ">
      <div className="flex flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold text-primarycolor">{title}</h1>
          <div className="flex items-center gap-2">
            <CheckCircle size={24} className="text-primarycolor" />
            <p className="text-base font-bold text-textprimary">Completed</p>
          </div>
        </div>
        <p className="text-base leading-relaxed text-zinc-300">{description}</p>
      </div>
    </div>
  )
}
