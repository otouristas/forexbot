'use client'

import { useState } from 'react'

interface AccordionItem {
  title: string
  content: string
  emoji?: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left p-6 bg-gradient-to-r from-brand-cyan-50 to-brand-cyan-100 hover:from-brand-cyan-100 hover:to-brand-cyan-200 transition-all duration-300 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              {item.emoji && <span className="text-2xl">{item.emoji}</span>}
              <h3 className="text-lg font-semibold text-brand-cyan-800 group-hover:text-brand-cyan-900 transition-colors">
                {item.title}
              </h3>
            </div>
            <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
              <svg className="w-5 h-5 text-brand-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {openIndex === index && (
            <div className="p-6 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {item.content}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
