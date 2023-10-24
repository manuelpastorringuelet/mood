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

  const updatedEntry = await prisma.journalEntry.update({
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
