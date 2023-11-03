'use client'

import { EventHandler, FormEvent, useState } from 'react'

import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

import { askQuestion } from '@/utils/api'
import { Button } from '@/components/ui/button'

const Question2 = () => {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState('')

  const onChange = (e: FormEvent) => {
    setValue((e.target as HTMLInputElement).value)
  }

  const handleSubmit: EventHandler<FormEvent> = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const answer = await askQuestion(value)
    setResponse(answer)
    setValue('')
    setIsLoading(false)
  }

  console.log(response)

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-gray-900">
          Ask a Question
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 items-center">
        <form className="flex w-full space-x-2" onSubmit={handleSubmit}>
          <Input
            disabled={isLoading}
            onChange={onChange}
            className="w-full mr-2 bg-gray-200 text-gray-900"
            placeholder="Type your question here..."
            type="text"
          />
          <Button
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-600 text-white"
            variant="outline"
            type="submit"
          >
            Ask
          </Button>
        </form>
        {isLoading && response && <p className="w-full mr-2 p-1">...loading</p>}
        {response && <p className="w-full mr-2 p-1">{response}</p>}
      </CardContent>
    </Card>
    // <div>
    //   <form className="space-x-2" onSubmit={handleSubmit}>
    //     <input
    //       disabled={isLoading}
    //       onChange={onChange}
    //       className="border border-black/20 px-4 py-2 text-lg rounded-lg"
    //       type="text"
    //       value={value}
    //       placeholder="Ask a question"
    //     />
    //     <button
    //       disabled={isLoading}
    //       className="bg-blue-400 px-4 py-2 rounded-lg text-lg"
    //       type="submit"
    //     >
    //       Ask
    //     </button>
    //   </form>
    //   {isLoading && <p>...loading</p>}
    //   {response && <p>{response}</p>}
    // </div>
  )
}

export default Question2
