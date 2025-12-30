"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const meditationPractices = [
  {
    title: "Sitting Meditation",
    description:
      "Traditional zazen practice in the serene meditation hall, cultivating deep concentration and inner stillness",
    image: "/images/e5-be-ae-e4-bf-a1-e5-9b-be-e7-89-87-20251226211251-63-715.jpg",
    alt: "Meditation cushions in temple hall",
  },
  {
    title: "Walking Meditation",
    description: "Mindful movement practice combining awareness with gentle physical activity in temple grounds",
    image: "/images/e5-be-ae-e4-bf-a1-e5-9b-be-e7-89-87-20251228185434-121-163.jpg",
    alt: "Group walking meditation in nature",
  },
  {
    title: "Tea Ceremony",
    description: "Experience traditional tea culture as a form of moving meditation and mindful presence",
    image: "/images/e5-be-ae-e4-bf-a1-e5-9b-be-e7-89-87-20251228194906-127-163.jpg",
    alt: "Hands holding tea cup",
  },
]

const templeAndGuidance = [
  {
    title: "Cloud Ornament",
    description: "Traditional temple architecture featuring ornate rooftop decorations and auspicious motifs",
    image: "/images/e5-be-ae-e4-bf-a1-e5-9b-be-e7-89-87-20251228201432-135-163.jpg",
    alt: "Temple roof with decorative cloud ornament",
  },
  {
    title: "Sacred Texts & Tradition",
    description: "Ancient wisdom preserved through centuries",
    image: "/images/e5-be-ae-e4-bf-a1-e5-9b-be-e7-89-87-20251228185437-123-163.jpg",
    alt: "Ancient Buddhist temple altar with traditional scriptures",
  },
  {
    title: "Authentic Dharma Transmission",
    description: "Direct lineage from enlightened masters",
    image: "/images/e5-be-ae-e4-bf-a1-e5-9b-be-e7-89-87-20251226211019-60-715.jpg",
    alt: "Traditional Buddhist calligraphy and teachings",
  },
]

export function Practices() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Meditation Practices
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-balance">Daily Practice & Inner Cultivation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A diverse range of meditation forms and traditional rituals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {meditationPractices.map((practice, index) => (
            <Card
              key={index}
              className="overflow-hidden group border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.9)",
                transition: `all 0.6s ease ${index * 0.1}s`,
              }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={practice.image || "/placeholder.svg"}
                  alt={practice.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white">{practice.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">{practice.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Sacred Environment & Lineage
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-balance">Temple Scenery & Authentic Guidance</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience centuries of spiritual tradition through authentic temple grounds and enlightened masters
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {templeAndGuidance.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden group border-2 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.9)",
                transition: `all 0.6s ease ${(index + 3) * 0.1}s`,
              }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Highly Qualified Monastic Team</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our guidance team consists of senior monks with profound Buddhist knowledge and decades of practice
              experience. Many have international teaching experience and graduated from renowned Buddhist academies.
              They have served in important positions at well-known temples both domestically and abroad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-6">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">✓ Authentic Lineage</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Direct transmission from the Zen Buddhist tradition, ensuring pure and effective teachings
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">✓ Academic Excellence</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Monks graduated from Buddhist Academy and other prestigious institutions
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">✓ Global Perspective</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                International teaching experience with understanding of modern Western needs
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">✓ Personalized Teaching</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Customized practice plans designed for each student's unique journey
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
