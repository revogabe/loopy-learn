'use client'
import { useRouter } from 'next/navigation'

type QuestionProps = {
  question: string
  answer: string

  module: {
    id: string
    level: number
    question: number
    user: string
  }
}

export function ButtonQuestion({ question, answer, module }: QuestionProps) {
  const router = useRouter()

  async function updateLevel() {
    const currentLevel = +module.level + 1

    await fetch(`/api/levels/${module.user}`, {
      cache: 'no-cache',
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        levelProgress: currentLevel,
      }),
    })

    // axios.patch(`/api/levels/${module.user}`, {
    //   levelProgress: currentLevel,
    // })
  }

  async function updateModule() {
    const currentModule = +module.id + 1

    await fetch(`/api/module/${module.user}`, {
      cache: 'no-cache',
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        level: currentModule,
      }),
    })

    // axios.patch(`/api/module/${module.user}`, {
    //   level: currentModule,
    // })
  }

  async function handleAnswer() {
    const result = question.toLowerCase()
    if (result === answer) {
      if (module.question === 5) {
        const currentLevel = +module.level + 1
        if (currentLevel === 10) {
          updateModule()
          updateLevel()
          return router.push(`/dashboard`)
        }

        updateLevel()

        router.push(`/dashboard/module/${module.id}`)
      } else {
        router.push(`/levels/${module.id}/${module.level}/${module.question}`)
      }
      console.log('correct')
    } else {
      console.log('incorrect')
    }
  }

  return (
    <button
      onClick={handleAnswer}
      className="group  mb-4 cursor-pointer rounded-md border border-primarycolor py-4 px-8 transition-all duration-100 ease-out hover:bg-primarycolor"
    >
      <p className="text-primarycolor group-hover:text-bgprimary">{question}</p>
    </button>
  )
}
