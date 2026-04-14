"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"


const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0e0e10]/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleClick("#inicio") }}
            className="flex items-center gap-3 group"
          >
            <div className="h-12 w-40 flex items-center justify-center bg-black flex-shrink-0 rounded overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/1jjlgpFEFBDIuG5gEGs4J-3PbC1TO651LB0rorbZ6JntTHTpv1jD.jpg"
                alt="Car Motoring logo"
                className="w-full h-full object-contain"
                crossOrigin="anonymous"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                className="text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+17873740509"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 font-bold text-sm uppercase tracking-widest transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              Llamar Ahora
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
                className="text-base font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+17873740509"
              className="mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-bold text-sm uppercase tracking-widest"
            >
              <Phone className="w-4 h-4" />
              Llamar Ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
