import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { Experience } from "@/components/experience"
import { Practices } from "@/components/practices"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { RecentArticles } from "@/components/recent-articles"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Experience />
      <Practices />
      <RecentArticles />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
