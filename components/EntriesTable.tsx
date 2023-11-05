'use client'

import { useRouter, usePathname } from 'next/navigation'
import { format } from 'date-fns'
import { Analysis, JournalEntry } from '@prisma/client'

import { Card } from '@/components/ui/card'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'
import { useEffect, useState } from 'react'

interface EntriesTableProps {
  entries: (JournalEntry & { analysis: Analysis[] })[]
}

const EntriesTable = ({ entries }: EntriesTableProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const dateFormatted = (date: Date) => format(new Date(date), 'MMM d, yyyy')

  const onClick = (id: string) => {
    router.push(`/journal/${id}`)
  }

  useEffect(() => {
    router.refresh()
  }, [pathname, router])

  return (
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
              className="cursor-pointer"
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default EntriesTable
