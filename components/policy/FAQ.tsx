"use client";

import { useState } from "react";
import PolicyLayout from "./PolicyLayout";

const faqs = [
  {
    question: "Who can join Techtronica?",
    answer:
      "Any student of the university, regardless of branch or year, can join and participate in events.",
  },
  {
    question: "Is there any membership or event fee?",
    answer:
      "Most events are completely free. Some premium workshops or competitions may have a minimal registration fee.",
  },
  {
    question: "Do participants receive certificates?",
    answer:
      "Yes. Certificates are provided for eligible events, workshops, and competitions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <PolicyLayout title="Frequently Asked Questions">
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 transition-all duration-300
                         hover:border-indigo-500 hover:shadow-md bg-white dark:bg-slate-900"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                <span
                  className={`text-2xl font-bold text-indigo-600 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </PolicyLayout>
  );
}
