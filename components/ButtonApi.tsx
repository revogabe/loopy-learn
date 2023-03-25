'use client'
import { api } from '@/lib/axios'

export function ButtonApi() {
  async function handleUpdateProfile() {
    await api.post('/users/levels', {
      level: 4,
    })
  }

  return (
    <button
      onClick={handleUpdateProfile}
      className="rounded-md bg-primarycolor px-3 py-2 text-bgprimary"
    >
      Teste
    </button>
  )
}
