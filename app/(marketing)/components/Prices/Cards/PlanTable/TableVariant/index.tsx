import { Check, X } from '@phosphor-icons/react'

type CardProps = {
  price?: string
}

export function TableVariant({ price }: CardProps) {
  return (
    <div className="flex h-max w-full flex-col">
      <div className="flex w-full items-center justify-start gap-2 bg-plantable px-5 py-4">
        <Check className="text-primarycolor" />
        <p className="subtitle-mini text-sm">Lorem ipsum set det way</p>
      </div>
      <div className="flex w-full items-center justify-start gap-2 bg-plantablevariant px-5 py-4">
        <Check className="text-primarycolor" />
        <p className="subtitle-mini text-sm">Lorem ipsum set det way</p>
      </div>
      <div className="flex w-full items-center justify-start gap-2 bg-plantable px-5 py-4">
        <X className="text-gray-500" />
        <p className="subtitle-mini text-sm text-gray-500">
          Lorem ipsum set det way
        </p>
      </div>
      <div className="flex w-full items-center justify-start gap-2 bg-plantablevariant px-5 py-4">
        <X className="text-gray-500" />
        <p className="subtitle-mini text-sm text-gray-500">
          Lorem ipsum set det way
        </p>
      </div>
      <div className="flex w-full items-center justify-start gap-2 bg-plantable px-5 py-4">
        <X className="text-gray-500" />
        <p className="subtitle-mini text-sm text-gray-500">
          Lorem ipsum set det way
        </p>
      </div>
      <div className="flex w-full items-center justify-start gap-2 bg-plantablevariant px-5 py-4">
        <X className="text-gray-500" />
        <p className="subtitle-mini text-sm text-gray-500">
          Lorem ipsum set det way
        </p>
      </div>
      <div className="flex w-full items-center justify-start gap-2 bg-plantable px-5 py-4">
        <X className="text-gray-500" />
        <p className="subtitle-mini text-sm text-gray-500">
          Lorem ipsum set det way
        </p>
      </div>
    </div>
  )
}
