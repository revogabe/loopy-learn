'use client'
import { useRouter } from 'next/navigation'

type QuestionProps = {
  question: string
  answer: string

  module: {
    id: string
    level: string
    question: number
  }
}

export function ButtonQuestion({ question, answer, module }: QuestionProps) {
  const router = useRouter()

  async function handleAnswer() {
    const result = question.toLowerCase()
    if (result === answer) {
      router.push(`/levels/${module.id}/${module.level}/${module.question}`)
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
