import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'

import EntriesTable from '@/components/EntriesTable'
import Question from '@/components/Question'

const getEntries = async () => {
  const user = await getUserByClerkId()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      analysis: true,
    },
  })

  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <Question />
      <EntriesTable entries={entries} />
    </div>
  )
}

export default JournalPage
