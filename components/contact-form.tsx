"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "9f24028e-dc0b-4bd2-9098-8ffcba7ab84f", //
          subject: "🧘 New Meditation Retreat Inquiry",
          from_name: "Boror Retreat Website",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message || "No message provided",
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setFormData({ name: "", phone: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-12 text-center">
            <div className="text-6xl mb-6">🙏</div>
            <h2 className="text-3xl font-serif mb-4">Thank You</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your inquiry has been received. We will contact you within 24 hours with detailed information about the retreat.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setStatus("idle")}
              className="rounded-full"
            >
              Submit Another Inquiry
            </Button>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-balance">Begin Your Journey</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            This is an opportunity for deep learning and authentic experience, perfect for those ready to commit fully
            and seek genuine inner peace
          </p>
        </div>

        <Card className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name *
              </label>
              <Input
                id="name"
                type="text"
                required
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Your Questions or Interests
              </label>
              <Textarea
                id="message"
                placeholder="Tell us what you hope to achieve through meditation or any questions you have..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-32 resize-none"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full h-12 text-base rounded-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Submitting..." : "Submit Inquiry"}
            </Button>

            {status === "error" && (
              <p className="text-sm text-red-500 text-center">
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <p className="text-sm text-muted-foreground text-center">
              After submitting, we will contact you within 24 hours with detailed information about the retreat
              arrangements
            </p>
          </form>
        </Card>
      </div>
    </section>
  )
}
