import { JournalEntry } from '@prisma/client'

interface EntryProps {
  entry: JournalEntry
}

const EntryCard = ({ entry }: EntryProps) => {
  const date = new Date(entry.createdAt).toLocaleDateString()
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5">{date}</div>
      <div className="px-4 py-5">summary</div>
      <div className="px-4 py-5">mood</div>
    </div>
  )
}

export default EntryCard
