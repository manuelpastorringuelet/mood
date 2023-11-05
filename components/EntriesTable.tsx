'use client'

import { useRouter, usePathname } from 'next/navigation'
import { format } from 'date-fns'
import { Analysis, JournalEntry } from '@prisma/client'
import { useEffect, useState } from 'react'

import { Card } from '@/components/ui/card'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
import { deleteEntry } from '@/utils/api'

interface EntriesTableProps {
  entries: (JournalEntry & { analysis: Analysis[] })[]
}

const EntriesTable = ({ entries }: EntriesTableProps) => {
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const dateFormatted = (date: Date) => format(new Date(date), 'MMM d, yyyy')

  const onClick = (id: string) => {
    router.push(`/journal/${id}`)
  }

  useEffect(() => {
    router.refresh()
  }, [pathname, router])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const onDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation()

    await deleteEntry(id)
    router.refresh()
  }

  return (
    <>
      {isClient && (
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-900">Date</TableHead>
                <TableHead className="text-gray-900">Entry Summary</TableHead>
                <TableHead className="text-gray-900">Mood</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {entries?.map((entry) => (
                <TableRow
                  key={entry.id}
                  className="cursor-pointer relative"
                  onClick={() => onClick(entry.id)}
                >
                  <TableCell className="font-medium text-gray-900">
                    {dateFormatted(entry.createdAt)}
                  </TableCell>
                  <TableCell className="text-gray-900">
                    {entry.analysis?.[0].summary.length !== 0 ? (
                      entry.analysis?.[0].summary
                    ) : (
                      <span className="text-gray-400">Entry empty</span>
                    )}
                  </TableCell>
                  <TableCell
                    className="text-gray-900"
                    style={{ color: entry.analysis[0]?.color }}
                  >
                    {entry.analysis?.[0].mood}
                  </TableCell>
                  <Button
                    className="absolute right-0 top-0 shadow-none hover:text-red-600 text-red-300 transition-shadow duration-200 ease-in-out"
                    onClick={(e) => onDelete(entry.id, e)}
                  >
                    <Trash size={16} />
                  </Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}
    </>
  )
}

export default EntriesTable
