import { JournalEntry } from '@prisma/client'

import { prisma } from '@/utils/db'
import { getUserByClerkId } from '@/utils/auth'

import Editor from '@/components/Editor'

type EntryPageParams = {
  params: JournalEntry
}

export const getEntry = async (id: string) => {
  const user = await getUserByClerkId()

  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  })

  if (!entry) {
    throw new Error('Entry not found')
  }

  return entry
}

const EntryPage = async ({ params }: EntryPageParams) => {
  const entry = await getEntry(params.id)

  return (
    <div className="w-full h-full">
      <Editor entry={entry} />
    </div>
  )
}

export default EntryPage
