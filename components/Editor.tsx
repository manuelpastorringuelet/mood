'use client'

import { useEffect, useState } from 'react'
import { useAutosave } from 'react-autosave'
import { JournalEntry } from '@prisma/client'

import { updateEntry } from '@/utils/api'

interface EntryProps {
  entry: JournalEntry
}

const Editor = ({ entry }: EntryProps) => {
  const [value, setValue] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setValue(entry.content)
  }, [entry])

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValue(event.target.value)
  }

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsSaving(true)
      await updateEntry(entry.id, _value)
      setIsSaving(false)
    },
  })

  return (
    <div className="relative h-full w-full">
      {isSaving && <div className="absolute">...saving</div>}
      <textarea
        className="h-full w-full p-8 text-xl outline-none"
        defaultValue={value}
        onChange={handleContentChange}
      />
    </div>
  )
}

export default Editor
