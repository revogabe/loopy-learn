import { CardsPrice } from './Cards'

export function Prices() {
  return (
    <div className="flex w-full flex-col gap-16 pb-20">
      <div>
        <h1 className="title-main text-4xl">Prices Plan</h1>
      </div>

      <div className="grid w-full grid-cols-3 justify-between gap-8">
        <CardsPrice
          price="Free"
          button="Start learn"
          describe="Start with HTML, CSS, JavaScript, React, Node, and more."
          typeTable={false}
        />
        <CardsPrice
          price="$5"
          plan="/month"
          button="Start free trial 7 days"
          describe="Start with HTML, CSS, JavaScript, React, Node, and more."
          typeTable={true}
        />
        <CardsPrice
          price="$45"
          plan="/year"
          button="Start free trial 7 days"
          describe="Start with HTML, CSS, JavaScript, React, Node, and more."
          typeTable={true}
        />
      </div>
    </div>
  )
}
