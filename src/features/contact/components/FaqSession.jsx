"use client"

import Container from "@/components/Container"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSession() {
  const faqsLeft = [
    {
      question: "How does your diet plan service work?",
      answer: "Plans are updated monthly to ensure continued progress and cater to your evolving preferences.",
    },
    {
      question: "Will I receive support from a nutritionist?",
      answer:
        "Yes, our plans come with access to certified nutritionists for guidance and support throughout your journey.",
    },
    {
      question: "What type of diets do you offer?",
      answer:
        "We provide a range of diet options including balanced, keto, vegetarian, and more. You can choose based on your needs.",
    },
  ]

  const faqsRight = [
    {
      question: "What is the cancellation policy?",
      answer: "You can cancel your subscription at any time. Please refer to our terms of service for details.",
    },
    {
      question: "How do I get started with a diet plan?",
      answer: "Simply sign up on our website, provide your details, and our team will create a tailored plan for you.",
    },
    {
      question: "Can I customize my diet plan?",
      answer: "Yes, you can customize your plan based on dietary restrictions, allergies, and food preferences.",
    },
  ]

  const AccordionGroup = ({ faqs }) => (
    <Accordion type="single" collapsible className="grid gap-4">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )

  return (
    <Container className="py-20">
      <div className=" flex flex-col justify-center items-center mb-10">
        <p className="text-sm uppercase tracking-wide mb-2">Helpful Information</p>
        <h1 className="text-4xl font-bold mb-4">Frequently Ask Questions</h1>
        <p className="text-muted-foreground">Explore our comprehensive for dieting and nutrition.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div>
          <AccordionGroup faqs={faqsLeft} />
        </div>
        <div>
          <AccordionGroup faqs={faqsRight} />
        </div>
      </div>
    </Container>
  )
}

