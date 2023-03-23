'use client'

import { PlanTable } from './PlanTable'
import { TableVariant } from './PlanTable/TableVariant'

type CardProps = {
  price: string
  plan?: string
  button: string
  describe: string
  typeTable: boolean
}

export function CardsPrice({
  price,
  plan,
  button,
  describe,
  typeTable,
}: CardProps) {
  // se tiver typeTable, ele vai retornar o componente PlanTable se não TableVariant

  const Table = typeTable ? <PlanTable /> : <TableVariant />

  return (
    <div className="card-plan group gap-6 bg-black shadow-2xl shadow-black/50">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-start gap-2 ">
          <h1 className="title-main text-3xl group-hover:text-bgprimary">
            {price}
          </h1>
          <p className="subtitle-mini text-sm group-hover:text-bgprimary">
            {plan}
          </p>
        </div>
        <div>
          <p className="subtitle-mini text-left text-sm group-hover:text-bgprimary">
            {describe}
          </p>
        </div>
      </div>

      <div className="bg flex h-max w-full flex-col overflow-hidden rounded-lg ">
        {Table}
      </div>
      <div>
        <button className="button-purchase">{button}</button>
      </div>
    </div>
  )
}
