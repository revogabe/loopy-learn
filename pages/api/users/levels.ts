import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

import { withCurrentUser } from '@/lib/api-middlewares/with-current-user'
import { withMethods } from '@/lib/api-middlewares/with-methods'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const session = await getServerSession(req, res, authOptions)
      const user = session?.user

      if (!user) {
        throw new Error('User not found.')
      }

      const body = req.body

      if (body) {
        await db.user.update({
          where: {
            id: user.id,
          },
          data: {
            level: body.level,
          },
        })
      }

      return res.end()
    } catch (error) {
      return res.status(422).end()
    }
  }
}

export default withMethods(['POST'], withCurrentUser(handler))
