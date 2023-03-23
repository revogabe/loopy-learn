'use client'

import Image from 'next/image'
import ImageFeature from '@/assets/image-feature2.png'

type CardProps = {
  title: string
  description: string
}

export function Cards({ title, description }: CardProps) {
  return (
    <div className="trasition-everything group flex max-w-xs flex-col hover:-translate-y-2">
      <div className="w-full flex-1 object-contain">
        <Image src={ImageFeature} alt="" className="rounded-lg" />
      </div>
      <div className="flex w-full gap-4 py-4">
        <div className="flex w-full flex-col items-start">
          <h2 className="title-main trasition-everything text-xl group-hover:text-green-500">
            {title}
          </h2>
          <p className="subtitle-mini text-left text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
