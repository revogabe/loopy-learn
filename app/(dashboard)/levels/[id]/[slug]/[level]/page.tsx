import { ButtonQuestion } from '@/components/ButtonQuestion'
import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import Link from 'next/link'
import { redirect } from 'next/navigation'

interface ParamsProps {
  params: {
    id: string
    slug: string
    level: number
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
    <div className="flex h-screen flex-col items-center justify-center gap-8">
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
  )
}
