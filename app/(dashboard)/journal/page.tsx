import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'

import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
import Question from '@/components/Question'
import EntriesTable from '@/components/EntriesTable'
import Question2 from '@/components/Question2'

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
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        <Question2 />
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-gray-900">
              Journal Entry
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start">
            <Input
              className="w-full mb-2 bg-gray-100 text-gray-900"
              placeholder="How are you feeling today?"
              type="text"
            />
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              type="submit"
              variant="outline"
            >
              Submit Entry
            </Button>
          </CardContent>
        </Card>
      </div>
      <div>
        <EntriesTable entries={entries} />
      </div>
    </main>

    // <div className="p-10 bg-zinc-400/10 h-full">
    //   <h2 className="text-3xl mb-8">Journal</h2>
    //   <div className="my-8">
    //     <Question />
    //   </div>
    //   <div className="grid grid-cols-3 gap-4">
    //     <NewEntryCard />
    //     {entries.map((entry) => (
    //       <Link href={`/journal/${entry.id}`} key={entry.id}>
    //         <EntryCard entry={entry} />
    //       </Link>
    //     ))}
    //   </div>
    // </div>
  )
}

export default JournalPage
