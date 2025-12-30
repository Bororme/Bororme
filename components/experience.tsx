"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function Experience() {
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
    <section ref={sectionRef} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Ancient Wisdom • Modern Practice
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-balance">A Transformative Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Immerse yourself in authentic Buddhist practice at a historic Tang Dynasty temple
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            className="overflow-hidden group border-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src="/images/e5-be-ae-e4-bf-a1-e5-9b-be-e7-89-87-20251226204209-46-715.jpg"
                alt="Tang Dynasty Temple Architecture"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold">Historic Temple Setting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Practice in a thousand-year-old Tang Dynasty-style temple, far from modern distractions. The ancient
                architecture, serene courtyards, and traditional bells create the ideal atmosphere for deep meditation
                and spiritual growth.
              </p>
            </div>
          </Card>

          <Card
            className="overflow-hidden group border-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.8s ease 0.4s",
            }}
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src="/images/e5-be-ae-e4-bf-a1-e5-9b-be-e7-89-87-20251228180637-117-163.jpg"
                alt="Professional Monk Guidance"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold">Expert Monk Guidance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our highly trained monks bring deep Buddhist knowledge and extensive teaching experience. Many have
                international teaching backgrounds and graduated from prestigious Buddhist academies, offering
                personalized guidance tailored to each practitioner.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
