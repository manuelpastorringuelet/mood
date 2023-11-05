import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

import { Analysis } from '@prisma/client'

import { analyze } from '@/utils/ai'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'

export const POST = async () => {
  const user = await getUserByClerkId()
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: 'Write about your day',
    },
  })

  let analysis = null

  if (entry.content.trim() !== 'Write about your day') {
    analysis = await analyze(entry.content)
  } else {
    analysis = {
      sentimentScore: 0,
      mood: '',
      summary: '',
      subject: '',
      negative: false,
      color: '',
    }
  }

  await prisma.analysis.create({
    data: {
      userId: user.id,
      entryId: entry.id,
      ...analysis,
    } as Analysis,
  })

  revalidatePath('/journal')
  return NextResponse.json({ data: entry })
}
