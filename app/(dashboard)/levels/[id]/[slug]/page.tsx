// import { authOptions } from '@/lib/auth'
// import { getCurrentUser } from '@/lib/session'
// import { redirect } from 'next/navigation'

interface ParamsProps {
  params: {
    id: string
    slug: string
  }
}

export default async function LevelPage({ params }: ParamsProps) {
  // const user = await getCurrentUser()

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || '/login')
  // }

  // const currentLevel = await fetch(
  //   `https://loopy-levels-default-rtdb.firebaseio.com/modules/${params.id}/levels/${params.slug}.json?auth=${process.env.GOOGLE_API_LEVELS}`,
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     return data
  //   })

  // console.log(currentLevel)

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      <h1>Questions</h1>
      {/* <p className="text-4xl font-bold text-primarycolor">
        {currentLevel.question}
      </p>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(currentLevel.alternatives).map((key) => {
          return (
            <div className="group mb-4 cursor-pointer rounded-md border border-primarycolor py-2 px-4 transition-all duration-100 ease-out hover:bg-primarycolor">
              <p className="text-primarycolor group-hover:text-bgprimary">
                {currentLevel.alternatives[key]}
              </p>
            </div>
          )
        })}
      </div>
      <div></div>
      <div>
        <p className="text-primarycolor">
          Result: {currentLevel.result.toUpperCase()}
        </p>
      </div>
      <p className="text-primarycolor">{currentLevel.level}</p> */}
    </div>
  )
}
