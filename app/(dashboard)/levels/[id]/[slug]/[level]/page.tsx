import { ButtonQuestion } from '@/components/ButtonQuestion'
import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import Link from 'next/link'
import { redirect } from 'next/navigation'

interface ParamsProps {
  params: {
    id: string
    slug: number
    level: number
    update: number
  }
}

// interface QuestionProps {
//   id: string
//   question: string
//   answer: string
//   options: string[]
// }

export default async function LevelPage({ params }: ParamsProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  const currentQuestion = await fetch(
    `https://loopy-levels-default-rtdb.firebaseio.com/modules/${params.id}/levels/${params.slug}/lessons/${params.level}.json?auth=${process.env.GOOGLE_API_LEVELS}`,
  )
    .then((res) => res.json())
    .then((data) => {
      return data
    })

  const currentOptions = currentQuestion.options

  return (
    <div className="flex h-screen items-center justify-center gap-8">
      <div className="flex h-full flex-col gap-4 px-8 py-12">
        <h1>Questions</h1>
        <p className="text-4xl font-bold text-primarycolor">
          {currentQuestion.question}
        </p>
        <div className="grid grid-cols-2 gap-4">
          {currentOptions.map((item: string) => {
            return (
              <ButtonQuestion
                question={item}
                answer={currentQuestion.answer}
                module={{
                  id: params.id,
                  level: params.slug,
                  question: +params.level + 1,
                  user: user.id,
                }}
              />
            )
          })}
        </div>
        <div>
          <p className="text-primarycolor">Result: {currentQuestion.answer}</p>
        </div>
        <Link href="">
          <button className="rounded-md bg-primarycolor py-2 px-4 text-bgprimary">
            Submit
          </button>
        </Link>
      </div>
      <div className="flex h-full w-full flex-1 flex-col bg-zinc-700">
        <iframe src="" frameBorder="0"></iframe>
      </div>
    </div>
  )
}
