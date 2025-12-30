import { Card } from "@/components/ui/card"

export function Guidance() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-balance">
            Authentic Lineage & Professional Guidance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Learn from genuine masters with deep roots in Buddhist tradition
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden group">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src="/images/e5-be-ae-e4-bf-a1-e5-9b-be-e7-89-87-20251228185437-123-163.jpg"
                alt="Ancient Buddhist temple altar with traditional scriptures"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif mb-2">Sacred Texts & Tradition</h3>
                <p className="text-sm text-white/90">Ancient wisdom preserved through centuries</p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden group">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src="/images/e5-be-ae-e4-bf-a1-e5-9b-be-e7-89-87-20251226211019-60-715.jpg"
                alt="Traditional Buddhist calligraphy and teachings"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif mb-2">Authentic Dharma Transmission</h3>
                <p className="text-sm text-white/90">Direct lineage from enlightened masters</p>
              </div>
            </div>
          </Card>
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
                Monks graduated from China Buddhist Academy and other prestigious institutions
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

          <div className="pt-6 border-t">
            <p className="text-muted-foreground leading-relaxed">
              Participants consistently report experiencing unprecedented inner peace and clarity during their retreat.
              Many students share that the transformative effects have helped them become more focused in daily life,
              emotionally balanced, mentally energized, and experience significantly improved sleep quality.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
