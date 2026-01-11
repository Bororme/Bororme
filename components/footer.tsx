import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-3">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dedicated to transmitting authentic Buddhist teachings and providing genuine, effective meditation
              experiences for modern practitioners.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact & Links</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Available: Daily 9:00 AM - 6:00 PM</p>
              <p>Email: contact@boror.me</p>
              <p className="pt-2">
                <a href="/blog" className="hover:text-primary transition-colors underline underline-offset-4">Read our Blog</a>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Important Note</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Meditation requires full commitment. Please ensure you are prepared and have arranged your schedule
              accordingly.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Boror. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
