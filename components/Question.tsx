'use client'

import { EventHandler, FormEvent, useState } from 'react'

const Question = () => {
  const [value, setValue] = useState('')

  const onChange = (e: FormEvent) => {
    setValue((e.target as HTMLInputElement).value)
  }

  const handleSubmit: EventHandler<FormEvent> = (e) => {
    e.preventDefault()
  }

  return (
    <form className="space-x-2" onSubmit={handleSubmit}>
      <input
        onChange={onChange}
        className="border border-black/20 px-4 py-2 text-lg rounded-lg"
        type="text"
        value={value}
        placeholder="Ask a question"
      />
      <button
        className="bg-blue-400 px-4 py-2 rounded-lg text-lg"
        type="submit"
      >
        Ask
      </button>
    </form>
  )
}

export default Question
