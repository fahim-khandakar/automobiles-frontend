"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Title from "@/components/common/Title/Title";

export default function Faq() {
  const faqData = [
    {
      question: "How long does a typical car repair take?",
      answer:
        "Most standard repairs are completed within 2-5 business days. Complex repairs or parts replacements may take longer, but we always provide an estimated completion time upfront.",
    },
    {
      question: "Do you provide warranty on repairs?",
      answer:
        "Yes! All repairs and parts come with a 6-month warranty to ensure your vehicle remains in top condition.",
    },
    {
      question: "Can I book a service online?",
      answer:
        "Absolutely. You can schedule your car service online through our booking system or contact us directly for urgent repairs.",
    },
    {
      question: "Do you handle electric vehicles?",
      answer:
        "Yes, our certified technicians are trained to service both conventional and electric vehicles safely and efficiently.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, all major credit cards, and online payment methods for your convenience.",
    },
  ];

  return (
    <section className="bg-[#050607] text-white py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-0">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Title title="FAQs" aos="fade-up" aosDelay={0} />
          <h2
            className="text-3xl md:text-5xl font-extrabold mt-4"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Here’s everything you need to know about our car repair services. We
            aim to make your experience smooth and transparent.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              data-aos="fade-up"
              data-aos-delay={300 + idx * 100}
              className="bg-[#121418] rounded-xl border border-gray-800"
            >
              <AccordionTrigger className="px-6 py-4 text-lg md:text-xl font-semibold hover:bg-gray-900 transition">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-400 text-sm md:text-base leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
