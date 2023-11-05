'use client'

import { useEffect, useState } from 'react'
import { useAutosave } from 'react-autosave'
import { Analysis, JournalEntry } from '@prisma/client'

import { CardContent, Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'

import Spinner from './Spinner'
import { Table, TableBody, TableCell, TableHeader, TableRow } from './ui/table'
import { format } from 'date-fns'
import { updateEntry } from '@/utils/api'

type AnalysisDataProps = {
  entry: JournalEntry & {
    analysis: Analysis[] | null
  }
}

const Editor = ({ entry }: AnalysisDataProps) => {
  const [isClient, setIsClient] = useState(false)
  const [value, setValue] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [analysis, setAnalysis] = useState<Analysis | null>(null)

  const dateFormatted = (date: Date) => format(new Date(date), 'MMM d, yyyy')

  const { mood, summary, color, subject, negative, createdAt } = analysis || {}

  const analysisData = [
    { name: 'Summary', value: summary || '' },
    { name: 'Subject', value: subject || '' },
    { name: 'Mood', value: mood || '' },
    { name: 'Negative', value: negative ? 'True' : 'False' || '' },
    { name: 'Date', value: (createdAt && dateFormatted(createdAt)) || '' },
  ]

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    setValue(entry.content)
    entry.content.trim() !== 'Write about your day' &&
      setAnalysis(entry.analysis?.[0] || null)
  }, [entry])

  useEffect(() => {
    setIsClient(true)
  }, [])

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsSaving(true)
      if (value.trim() !== 'Write about your day') {
        const data = await updateEntry(entry.id, value)
        setAnalysis(data.analysis)
      }
      setIsSaving(false)
    },
  })

  return (
    isClient && (
      <div className="grid sm:grid-cols-2 gap-4 relative">
        <div className="absolute left-0 top-0 p-2">
          {isSaving ? (
            <Spinner />
          ) : (
            <div className="w-[16px] h-[16px] rounded-full bg-green-500"></div>
          )}
        </div>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out cursor-pointer w-full h-full">
          <CardContent className="flex flex-col items-start p-0 w-full h-full">
            <Textarea
              className="w-full h-60 sm:h-full p-6 text-gray-900 outline-none border-none"
              placeholder="How are you feeling today?"
              onChange={handleContentChange}
              defaultValue={value}
            />
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out">
          <Table>
            <TableHeader>
              <div className="px-4 py-8" style={{ backgroundColor: color }}>
                <h2 className="text-xl">Analysis</h2>
              </div>
            </TableHeader>
            <TableBody>
              {analysisData.map((item) => (
                <TableRow
                  key={item.name}
                  className="flex items-center justify-between p-2 border-b border-t border-black/10 gap-4"
                >
                  <TableCell className="font-medium text-gray-900">
                    {item.name}
                  </TableCell>
                  <TableCell className="text-right text-gray-900">
                    {item.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    )
  )
}

export default Editor
