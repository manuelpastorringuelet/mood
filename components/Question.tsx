'use client'

import { EventHandler, FormEvent, useState } from 'react'

import { askQuestion } from '@/utils/api'

const Question = () => {
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

  return (
    <div>
      <form className="space-x-2" onSubmit={handleSubmit}>
        <input
          disabled={isLoading}
          onChange={onChange}
          className="border border-black/20 px-4 py-2 text-lg rounded-lg"
          type="text"
          value={value}
          placeholder="Ask a question"
        />
        <button
          disabled={isLoading}
          className="bg-blue-400 px-4 py-2 rounded-lg text-lg"
          type="submit"
        >
          Ask
        </button>
      </form>
      {isLoading && <p>...loading</p>}
      {response && <p>{response}</p>}
    </div>
  )
}

export default Question
