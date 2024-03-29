import { NextResponse } from 'next/server'
import { JournalEntry } from '@prisma/client'

import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { updateEntry } from '@/utils/api'
import { analyze } from '@/utils/ai'

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
  let analysis = null

  if (updatedEntry.content.trim() !== 'Write about your day') {
    analysis = await analyze(updatedEntry.content)
  }

  if (!analysis)
    return NextResponse.json({
      error: 'Something went wrong with the analysis',
    })
  const updated = await prisma.analysis.upsert({
    where: {
      entryId: updatedEntry.id,
    },
    create: { userId: user.id, entryId: updatedEntry.id, ...analysis },
    update: analysis,
  })

  const newObject = { ...updateEntry, analysis: updated }

  return NextResponse.json({ data: newObject })
}

export const DELETE = async (request: Request, { params }: Params) => {
  const user = await getUserByClerkId()

  const deletedEntry = await prisma.journalEntry.delete({
    where: {
      userId_id: {
        id: params.id,
        userId: user.id,
      },
    },
  })

  return NextResponse.json({ data: deletedEntry })
}
