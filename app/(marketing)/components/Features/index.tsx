import { Cards } from './Cards'

export function Features() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      <div>
        <h1 className="title-main text-4xl">Lorem ipsum set det way</h1>
      </div>

      <div className="grid w-full grid-cols-3 justify-between gap-12">
        <Cards
          title="Learn to code"
          description="Learn to code by building real apps. Start with HTML, CSS, JavaScript, React, Node, and more."
        />
        <Cards
          title="Learn to code"
          description="Learn to code by building real apps. Start with HTML, CSS, JavaScript, React, Node, and more."
        />
        <Cards
          title="Learn to code"
          description="Learn to code by building real apps. Start with HTML, CSS, JavaScript, React, Node, and more."
        />
      </div>
    </div>
  )
}
