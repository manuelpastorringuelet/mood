import { JournalEntry } from '@prisma/client'

interface EntryPageParams {
  params: JournalEntry
}

const EntryPage = ({ params }: EntryPageParams) => {
  return <div>{params.id}</div>
}

export default EntryPage
