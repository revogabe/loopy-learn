/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'

type UserId = string

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId
      streak: user.streak
      level: user.streak
    }
  }
}
