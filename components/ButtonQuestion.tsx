'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'

type QuestionProps = {
  question: string
  answer: string

  module: {
    id: string
    level: string
    question: number
    user: string
  }
}

export function ButtonQuestion({ question, answer, module }: QuestionProps) {
  const router = useRouter()

  async function requestApi() {
    axios.patch(`/api/users/${module.user}`, {
      name: '',
      levelProgress: 0,
    })
    console.log(axios)
  }

  async function handleAnswer() {
    const result = question.toLowerCase()
    if (result === answer) {
      if (module.question === 4) {
        requestApi()
        await router.push(`/dashboard/module/${module.id}`)
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
