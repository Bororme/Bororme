"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { useEffect, useState } from "react"

const heroImages = [
  {
    src: "/images/e5-be-ae-e4-bf-a1-e5-9b-be-e7-89-87-20251228194908-128-163.jpg",
    alt: "Meditation mudra hands in contemplation",
  },
  {
    src: "/images/e5-be-ae-e4-bf-a1-e5-9b-be-e7-89-87-20251226203301-35-715.jpg",
    alt: "Golden Bodhisattva through temple doorway",
  },
  {
    src: "/images/e5-be-ae-e4-bf-a1-e5-9b-be-e7-89-87-20251228201431-134-163.jpg",
    alt: "Buddhist scriptures being read",
  },
  {
    src: "/images/e5-be-ae-e4-bf-a1-e5-9b-be-e7-89-87-20251228180638-118-163.jpg",
    alt: "Meditators sitting in peaceful contemplation",
  },
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    aboutSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-8 left-8 z-20">
        <Logo />
      </div>

      <div className="absolute top-8 right-8 z-20">
        <Button variant="ghost" asChild className="text-white hover:bg-white/20 hover:text-white">
          <a href="/blog">Blog</a>
        </Button>
      </div>

      {/* Animated background images with crossfade */}
      <div className="absolute inset-0 -z-10">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className="absolute inset-0 transition-opacity duration-2000"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 px-4 py-20">
        <div
          className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-card/80 backdrop-blur-sm text-sm border border-accent/30 shadow-lg"
          style={{
            transform: `translateY(${Math.min(scrollY * 0.3, 50)}px)`,
            opacity: Math.max(1 - scrollY / 500, 0),
          }}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(139,69,19,0.6)]" />
          <span className="text-foreground font-medium">Ancient Wisdom Practice</span>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-balance leading-[1.1]"
          style={{
            transform: `translateY(${Math.min(scrollY * 0.2, 30)}px)`,
            opacity: Math.max(1 - scrollY / 600, 0),
          }}
        >
          <span className="block">Awaken Your</span>
          <span className="block mt-3 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient">
            Inner Wisdom
          </span>
        </h1>

        <div
          className="space-y-3"
          style={{
            transform: `translateY(${Math.min(scrollY * 0.15, 20)}px)`,
            opacity: Math.max(1 - scrollY / 700, 0),
          }}
        >
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto text-pretty leading-relaxed">
            Experience authentic Buddhist meditation guided by senior monks. Practice walking meditation, seated
            meditation, mindful hiking, and traditional tea ceremony in the sacred grounds of a Tang Dynasty temple.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          style={{
            transform: `translateY(${Math.min(scrollY * 0.1, 15)}px)`,
            opacity: Math.max(1 - scrollY / 800, 0),
          }}
        >
          <Button
            size="lg"
            className="text-base px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={handleScrollToContact}
          >
            Begin Your Journey
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 py-6 rounded-full bg-card/80 backdrop-blur-sm border-2 hover:bg-card transition-all duration-300 hover:scale-105"
            onClick={handleScrollToAbout}
          >
            Discover the Path
          </Button>
        </div>

        {/* Scroll indicator with image dots */}
        <div className="flex items-center justify-center gap-2 pt-8">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className="group relative"
              aria-label={`View image ${index + 1}`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-500 ${index === currentImageIndex
                    ? "bg-accent w-8 shadow-[0_0_8px_rgba(139,69,19,0.6)]"
                    : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                  }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{
          opacity: Math.max(1 - scrollY / 300, 0),
        }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-medium">Scroll to Explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
