'use client'

import { useState } from 'react'
import { useAutosave } from 'react-autosave'
import { Analysis, JournalEntry } from '@prisma/client'

import { updateEntry } from '@/utils/api'

import Spinner from './Spinner'

type AnalysisDataProps = {
  entry: JournalEntry & {
    analysis: Analysis | null
  }
}

const Editor = ({ entry }: AnalysisDataProps) => {
  const [value, setValue] = useState(entry.content)
  const [isSaving, setIsSaving] = useState(false)
  const [analysis, setAnalysis] = useState<Analysis | null>(entry.analysis)

  const { mood, summary, color, subject, negative } = analysis || {}

  const analysisData = [
    { name: 'Summary', value: summary || '' },
    { name: 'Subject', value: subject || '' },
    { name: 'Mood', value: mood || '' },
    { name: 'Negative', value: negative ? 'True' : 'False' || '' },
  ]

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValue(event.target.value)
  }

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsSaving(true)
      const data = await updateEntry(entry.id, _value)
      setAnalysis(data.analysis)
      setIsSaving(false)
    },
  })

  return (
    <div className="w-full h-full grid grid-cols-3 gap-0 relative">
      <div className="absolute left-0 top-0 p-2">
        {isSaving ? (
          <Spinner />
        ) : (
          <div className="w-[16px] h-[16px] rounded-full bg-green-500"></div>
        )}
      </div>
      <div className="col-span-2">
        <textarea
          className="h-full w-full p-8 text-xl outline-none"
          defaultValue={value}
          onChange={handleContentChange}
        />
      </div>
      <div className="border-l border-black/10">
        <div className="px-6 py-10" style={{ backgroundColor: color }}>
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between px-2 py-4 border-b border-t border-black/10 gap-4"
              >
                <span className="text-lg font-semibold">{item.name}</span>
                <span className="text-right">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Editor
