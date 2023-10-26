import { NextResponse } from 'next/server'
import { JournalEntry } from '@prisma/client'

import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'

interface Params {
  params: JournalEntry
}

export const PATCH = async (request: Request, { params }: Params) => {
  const { content } = await request.json()
  const user = await getUserByClerkId()

  await prisma.journalEntry.update({
    where: {
      userId_id: {
        id: params.id,
        userId: user.id,
      },
    },
    data: {
      content,
    },
  })

  return NextResponse.json({})
}
