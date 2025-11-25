'use client'

import { useState } from 'react'

interface AccordionItem {
  title: string
  content: string
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
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition"
          >
            {item.title}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
