"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Button from "@/components/ui/Button"
import { NAV_LINKS } from "@/constants/data"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll-spy: detect which section is in viewport
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", "")).filter(Boolean)

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      return observer
    })

    // Navbar shadow on scroll
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)

    return () => {
      observers.forEach((obs) => obs?.disconnect())
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-8 pointer-events-none">
      <nav
        className={`w-full max-w-5xl flex flex-col px-5 py-2.5 rounded-2xl pointer-events-auto transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border border-gray-100"
            : "bg-white/85 backdrop-blur-sm shadow-sm border border-white/60"
        }`}
      >
        {/* Top Navbar Row */}
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="flex items-center gap-2">
            <Image src="/logo.png" width={32} height={32} alt="Logo" />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "")
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm transition-colors ${
                      isActive
                        ? "text-amber font-medium"
                        : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Sign In CTA */}
          <div className="hidden md:block">
            <button
              className="bg-[#0A192F] border-none py-2 px-6 rounded-full font-medium text-[13px] text-white cursor-pointer flex items-center gap-1.5 transition-transform active:scale-95"
            >
              Sign In
              <span className="text-[12px]">↗</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu — nested inside the nav card */}
        {menuOpen && (
          <div className="md:hidden w-full border-t border-gray-100/60 mt-3 pt-3 flex flex-col gap-4">
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "")
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-sm block py-1 transition-colors ${
                        isActive ? "text-amber font-medium" : "text-ink/70 hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
            <Button variant="gradient" className="w-full py-2.5 justify-center">
              Sign In
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}

