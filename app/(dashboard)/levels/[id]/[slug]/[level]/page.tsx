import { ButtonQuestion } from '@/components/ButtonQuestion'
import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'

interface ParamsProps {
  params: {
    id: string
    slug: number
    level: number
    update: number
  }

  level: {
    id: string
    question: string
    answer: string
    description: string
    options: string[]
  }
}

export default async function LevelPage({ params }: ParamsProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  const questionData = await fetch(
    `https://loopy-levels-default-rtdb.firebaseio.com/modules/${params.id}/levels/${params.slug}/lessons/${params.level}.json?auth=${process.env.GOOGLE_API_LEVELS}`,
  )
    .then((res) => res.json())
    .then((data) => {
      const returnData = {
        id: data.id,
        question: data.question,
        answer: data.answer,
        description: data.description,
        options: data.options,
      }

      return returnData
    })

  const options = questionData.options

  const code = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <style>
  button {
    border-radius: 12px;
    background-color: greenyellow;
  }

  button:hover {
    transform: scale(1.05);
    filter: brightness(0.75);

    transition: all 0.2s ease-out;
    cursor: pointer;
  }
</style>
      <body>
        ${questionData.answer}
      </body>
    </html>`

  return (
    <div className="flex h-screen items-center justify-center gap-8">
      <div className="flex h-full max-w-5xl flex-col gap-8 py-16 px-10">
        <div className="rounded-lg border border-transparent bg-zinc-900/50 py-6 px-8 brightness-90 transition-all duration-200 ease-out hover:border-primarycolor hover:brightness-125">
          <p className="text-base leading-7 text-zinc-300">
            {questionData.description}
          </p>
        </div>
        <p className="text-2xl font-bold text-primarycolor">
          {questionData.question}
        </p>
        <div className="grid grid-cols-2 gap-4">
          {options.map((item: string) => {
            return (
              <ButtonQuestion
                question={item}
                answer={questionData.answer}
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
      </div>
      <div className="flex h-full w-full flex-1 flex-col bg-zinc-900">
        <div className="flex h-max w-full items-center justify-between gap-4 bg-zinc-800 p-4">
          <div className="flex w-full items-center justify-start rounded-full bg-zinc-900 px-4 py-3">
            <p className="text-sm text-textprimary/50">https://loopy.dev</p>
          </div>
        </div>
        <iframe src="" frameBorder="0" srcDoc={code}></iframe>
      </div>
    </div>
  )
}
