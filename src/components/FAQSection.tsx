"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How does Underdog work for parents?",
    answer:
      "Parents can easily browse and book sessions, camps, clinics, and events through our platform. You can securely pay for sessions, sync bookings to your calendar, and track your child's progress - all in one place.",
  },
  {
    question: "What makes Underdog different from other platforms?",
    answer:
      "Underdog is built specifically for the sports training industry by people who understand it. We offer modern, intuitive tools at affordable prices, with seamless integrations and features designed to help you scale without limits.",
  },
  {
    question: "Can small trainers use Underdog, or is it only for large academies?",
    answer:
      "Underdog is perfect for both! Our Trainer plan starts at just $19.99/month for individual coaches, while our Academy plan offers advanced features for larger organizations. You can start small and scale as you grow.",
  },
  {
    question: "How secure are payments on Underdog?",
    answer:
      "We use Stripe for all payment processing, which provides industry-standard security and encryption. Your financial data is protected with the same security measures used by major financial institutions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-primary-dark" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            FREQUENTLY ASKED
            <br />
            QUESTIONS.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-white/60 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-white/60">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
