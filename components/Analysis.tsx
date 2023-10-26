'use client'

import { Analysis } from '@prisma/client'

type AnalysisDataProps = {
  entry: {
    analysis: Analysis | null
  }
}

const Analysis = ({ entry }: AnalysisDataProps) => {
  const { mood, summary, color, subject, negative } = entry?.analysis || {}

  const analysisData = [
    { name: 'Summary', value: summary || '' },
    { name: 'Subject', value: subject || '' },
    { name: 'Mood', value: mood || '' },
    { name: 'Negative', value: negative ? 'True' : 'False' || '' },
  ]

  return (
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
  )
}

export default Analysis
