"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "3-Day Retreat",
    price: 450,
    duration: "3 days",
    description: "Perfect introduction to temple meditation",
    features: [
      "Private room accommodation",
      "All meals included",
      "Daily meditation sessions",
      "Tea ceremony experience",
      "Dharma teachings",
    ],
    note: "Airport transfer available for additional fee",
    popular: false,
  },
  {
    name: "5-Day Retreat",
    price: 600,
    duration: "5 days",
    description: "Deeper immersion into Chan practice",
    features: [
      "Private room accommodation",
      "All meals included",
      "Daily meditation sessions",
      "Tea ceremony experience",
      "Dharma teachings",
      "Guangzhou airport/station transfer included",
    ],
    note: null,
    popular: false,
  },
  {
    name: "7-Day Retreat",
    price: 800,
    duration: "7 days",
    description: "Complete transformation experience",
    features: [
      "Private room accommodation",
      "All meals included",
      "Daily meditation sessions",
      "Tea ceremony experience",
      "Dharma teachings",
      "One-on-one guidance with monks",
      "Guangzhou airport/station transfer included",
      "Traditional meditation gift set",
    ],
    note: null,
    popular: true,
  },
  {
    name: "Small Group Intensive",
    price: 900,
    duration: "7 days",
    description: "Personalized small group experience",
    features: [
      "Private room accommodation",
      "All meals included",
      "Small group sessions (max 6 people)",
      "Extended personal guidance",
      "Advanced meditation techniques",
      "Guangzhou airport/station transfer included",
      "Traditional meditation gift set",
    ],
    note: null,
    popular: false,
  },
]

export function Pricing() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-balance">
            Retreat Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the retreat duration that suits your journey. All packages include accommodation, vegetarian meals, and meditation instruction.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Flexible dates available — contact us to arrange your preferred schedule
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-6 flex flex-col transition-all duration-300 hover:shadow-lg ${
                plan.popular ? "border-primary border-2 shadow-md" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">USD</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {plan.duration}
                </p>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className="text-xs text-muted-foreground text-center mb-4 italic">
                  * {plan.note}
                </p>
              )}

              <Button
                onClick={scrollToContact}
                variant={plan.popular ? "default" : "outline"}
                className="w-full rounded-full"
              >
                Book Now
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Custom retreat lengths and group bookings available.{" "}
            <button
              onClick={scrollToContact}
              className="text-primary hover:text-primary/80 underline underline-offset-4"
            >
              Contact us
            </button>{" "}
            to discuss your needs.
          </p>
        </div>
      </div>
    </section>
  )
}
