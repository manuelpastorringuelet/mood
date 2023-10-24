'use client'

import { useEffect, useState } from 'react'

import { JournalEntry } from '@prisma/client'

interface EntryProps {
  entry: JournalEntry
}

const Editor = ({ entry }: EntryProps) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(entry.content)
  }, [entry])

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValue(event.target.value)
  }

  return (
    <div className="h-full w-full">
      <textarea
        className="h-full w-full p-8 text-xl outline-none"
        defaultValue={value}
        onChange={handleContentChange}
      />
    </div>
  )
}

export default Editor
