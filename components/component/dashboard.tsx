import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'

export function Dashboard() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-gray-900">
              Ask a Question
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <Input
              className="w-full mr-2 bg-gray-200 text-gray-900"
              placeholder="Type your question here..."
              type="text"
            />
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white"
              variant="outline"
            >
              Ask
            </Button>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-gray-900">
              Journal Entry
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start">
            <Input
              className="w-full mb-2 bg-gray-200 text-gray-900"
              placeholder="How are you feeling today?"
              type="text"
            />
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              type="submit"
              variant="outline"
            >
              Submit Entry
            </Button>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out cursor-pointer">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-900">Date</TableHead>
                <TableHead className="text-gray-900">Entry</TableHead>
                <TableHead className="text-gray-900">Mood</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-gray-900">
                  Nov 3, 2023
                </TableCell>
                <TableCell className="text-gray-900">
                  {`I'm feeling great today!`}
                </TableCell>
                <TableCell className="text-green-500">Happy</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-gray-900">
                  Nov 2, 2023
                </TableCell>
                <TableCell className="text-gray-900">
                  A bit tired but overall good.
                </TableCell>
                <TableCell className="text-yellow-500">Neutral</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-gray-900">
                  Nov 1, 2023
                </TableCell>
                <TableCell className="text-gray-900">
                  Feeling a little down today.
                </TableCell>
                <TableCell className="text-red-500">Sad</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </main>
  )
}
