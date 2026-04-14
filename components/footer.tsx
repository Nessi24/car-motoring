"use client"

import { Phone, MapPin, Facebook, Instagram } from "lucide-react"


const services = [
  "Mecánica Racing BMW",
  "Mecánica Racing Supra",
  "Mecánica General",
  "Sistema Eléctrico",
  "Aire Acondicionado",
  "Transmisión",
  "Frenos",
  "Cambio de Aceite",
]

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t border-border">
      {/* Pre-footer CTA */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary-foreground">
              ¿Listo para el servicio?
            </h3>
            <p className="text-primary-foreground/80 text-sm mt-1">
              Llámanos o visítanos en Caguas, Puerto Rico
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="tel:+17873740509"
              className="flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-primary-foreground/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (787) 374-0509
            </a>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); scrollTo("#contacto") }}
              className="flex items-center gap-2 border-2 border-primary-foreground/50 text-primary-foreground px-6 py-3 font-bold text-sm uppercase tracking-widest hover:border-primary-foreground transition-colors"
            >
              Agendar Cita
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="h-14 w-44 rounded overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/1jjlgpFEFBDIuG5gEGs4J-3PbC1TO651LB0rorbZ6JntTHTpv1jD.jpg"
                  alt="Car Motoring logo"
                  className="object-contain w-full h-full"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Car Motoring — tu taller mecánico de confianza en Caguas, Puerto Rico. 6 años de taller con técnicos de más de 15 años de experiencia automotriz.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Visítanos en Facebook"
                className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/carmotoring_pr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
                className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-foreground mb-5 pb-2 border-b border-border">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-foreground mb-5 pb-2 border-b border-border">
              Servicios
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    onClick={(e) => { e.preventDefault(); scrollTo("#servicios") }}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-200" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-foreground mb-5 pb-2 border-b border-border">
              Contacto
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-muted-foreground text-sm">Caguas, Puerto Rico</span>
                  <br />
                  <a
                    href="https://maps.app.goo.gl/MiqqrwURoVfaFgoc6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-xs hover:underline"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+17873740509" className="text-muted-foreground text-sm hover:text-primary transition-colors block">
                    (787) 374-0509
                  </a>
                  <span className="text-xs text-muted-foreground/70">Juan Hidalgo — Dueño</span>
                </div>
              </div>
              <div className="mt-2 bg-background border border-border p-4">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">Horario</span>
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Lun – Vie</span>
                    <span className="text-primary font-semibold">8AM – 6PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Sábado</span>
                    <span className="text-primary font-semibold">8AM – 2PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Domingo</span>
                    <span className="text-muted-foreground">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Car Motoring Caguas. Todos los derechos reservados.
          </span>
          <span className="text-muted-foreground text-xs">
            Caguas, Puerto Rico — Servicio Automotriz Profesional
          </span>
        </div>
      </div>
    </footer>
  )
}
