import { JournalEntry } from '@prisma/client'

interface EntryProps {
  entry: JournalEntry
}

const EntryCard = ({ entry }: EntryProps) => {
  return <div>{entry.id}</div>
}

export default EntryCard
