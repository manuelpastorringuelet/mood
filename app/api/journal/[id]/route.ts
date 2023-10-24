import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { JournalEntry } from '@prisma/client'
import { NextResponse } from 'next/server'

interface Params {
  params: JournalEntry
}

export const PATCH = async (request: Request, { params }: Params) => {
  const { content } = await request.json()
  const user = await getUserByClerkId()
  const updateEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        id: user.id,
        userId: params.id,
      },
    },

    data: {
      content: content,
    },
  })

  return NextResponse.json({ data: updateEntry })
}
