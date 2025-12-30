"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Is this meditation method and location safe?",
    answer:
      "Our meditation activities take place within a traditional temple managed by experienced monks who ensure both safety and effectiveness. The methods fully align with Buddhist teachings and traditions. We carefully control the intensity and pace of practice, allowing each participant to adjust according to their personal capacity. Our accommodation is clean, safe, and meets basic health standards, with 24/7 support available.",
  },
  {
    question: "How does temple meditation differ from other meditation practices?",
    answer:
      "The key difference lies in purity and depth. Temple meditation occurs in a traditional Buddhist environment with guidance from experienced monks teaching the original methods of Buddha and Dharma. It emphasizes holistic mind-body cultivation including lifestyle, diet, and daily rhythms—not just meditation techniques. Participants practice in a distraction-free environment, accelerating awareness development and achieving inner peace and focus more rapidly.",
  },
  {
    question: "Do different temples have different meditation methods?",
    answer:
      "Yes, meditation methods vary across temples and practice systems. While all are based on Buddhist teachings, specific approaches differ. Some emphasize huatou Chan (meditation through inquiry), while others practice silent illumination Chan (meditation in complete silence). Our retreat combines traditional Buddhist essence with guidance from highly qualified monks to ensure depth and effectiveness.",
  },
  {
    question: "What duration is recommended and what are the requirements?",
    answer:
      "For beginners, a two-week retreat is ideal for deeply experiencing and practicing meditation, awareness, and focus skills while allowing adequate rest and recovery. We also offer 1-week and 3-week options based on individual needs. Participants should be prepared for early rising and regular schedules. The program is not suitable for those with serious physical illness or unstable mental conditions. Our approach welcomes anyone willing to set aside daily distractions and commit to deep practice.",
  },
  {
    question: "Is language a significant barrier?",
    answer:
      "Language presents minimal challenges. We provide written materials and on-site translation to ensure participants understand course content and daily activities. For complex Buddhist terminology or meditation techniques, we also utilize smart devices for real-time translation, ensuring everyone can follow the practice clearly.",
  },
  {
    question: "What are the fees?",
    answer:
      "Fees vary based on retreat duration and course content, ranging approximately $350-500 per week. This includes temple accommodation, vegetarian meals, meditation instruction, and support services. Specific costs fluctuate based on your chosen duration, accommodation arrangements, and additional services, ensuring you can focus on practice in a comfortable environment.",
  },
  {
    question: "What activities are included during the retreat?",
    answer:
      "Activities include: Sitting meditation (zazen) practicing breath awareness and mental observation to enhance inner awareness; Walking meditation for mindful movement in temple grounds; Dharma teachings where monks explain Buddhist classics and practical applications; Work practice (temple chores like cleaning) to cultivate focus and awareness; and other contemplative activities that form an integrated practice.",
  },
  {
    question: "Can I use my phone during the retreat?",
    answer:
      "Participants surrender phones during the retreat, and electronic device use is not permitted. This digital detox helps everyone disconnect from external distractions and focus on inner cultivation. Emergency communication channels are available for urgent external matters.",
  },
  {
    question: "What results can I expect from this retreat?",
    answer:
      "Participants will experience: Inner peace and emotional regulation—learning to manage emotions and maintain calm; Deep focus and cognitive enhancement—significantly improved concentration and working memory; Better sleep and mind-body health through meditation and regular schedules; Enhanced self-awareness and emotional management; Inner tranquility and joy independent of external stimulation; and personalized guidance from highly qualified monks ensuring effective, deep practice at every step.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to know about your meditation retreat experience
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 group"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <div
                    className={`grid transition-all duration-300 ${
                      openIndex === index ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground leading-relaxed text-pretty">{faq.answer}</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact")
              contactSection?.scrollIntoView({ behavior: "smooth" })
            }}
            className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
          >
            Get in touch with us
          </button>
        </div>
      </div>
    </section>
  )
}
