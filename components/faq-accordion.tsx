"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term strategy. While some improvements (like fixing technical issues) can show benefits within a few weeks, most businesses see significant ranking and traffic gains within 3 to 6 months, depending on the competition in their niche.",
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer:
      "No ethical SEO agency can guarantee specific rankings — and you should be cautious of those who do. What we do guarantee is a transparent, proven strategy that aligns with Google's best practices, and monthly reporting that tracks measurable progress over time.",
  },
  {
    question: "Can you work on my existing website?",
    answer:
      "Yes. Whether you're on WordPress, Webflow, Shopify, or a custom CMS, we can audit your current site and apply SEO improvements without rebuilding from scratch — unless you'd like us to.",
  },
  {
    question: "How is local SEO different from regular SEO?",
    answer:
      'Local SEO focuses on helping your business appear in map results and localized searches (like "web design agency near me"). We optimize your Google Business Profile, local citations, and on-site content to improve your visibility in your area.',
  },
  {
    question: "Do you provide content as part of SEO?",
    answer:
      "Yes. We include content strategy, optimization, and creation in our SEO plans. That means blog posts, landing pages, and service pages are written with both humans and search engines in mind.",
  },
  {
    question: "Will I get reports and updates?",
    answer:
      "Absolutely. We provide monthly SEO reports that include traffic, keyword rankings, technical fixes completed, and what's planned for the next cycle — so you always know what's happening.",
  },
]

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <h3 className="text-lg font-semibold text-[#9baed9] pr-4">{faq.question}</h3>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-[#9baed9] flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-[#9baed9] flex-shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6">
              <div className="pt-2 border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
