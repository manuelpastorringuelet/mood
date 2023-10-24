import { JournalEntry } from '@prisma/client'

interface EntryProps {
  entry: JournalEntry
}
const Editor = ({ entry }: EntryProps) => {
  return <div>{entry.content}</div>
}

export default Editor
