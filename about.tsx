"use client"

import { CheckCircle2, Award, Users, Clock } from "lucide-react"

const strengths = [
  "Técnicos certificados por el Colegio de Técnicos y Mecánicos Automotrices de PR",
  "Más de 15 años de experiencia de nuestros técnicos",
  "Diagnóstico computarizado gratis",
  "Garantía en mano de obra",
  "Precios transparentes sin sorpresas",
  "Servicio rápido y eficiente",
]

const highlights = [
  { icon: Award, label: "Certificados", sub: "Col. Téc. y Mec. Automotrices PR" },
  { icon: Users, label: "Familia Local", sub: "Negocio puertorriqueño" },
  { icon: Clock, label: "Abierto 6 Días", sub: "Lun – Sáb 8am – 6pm" },
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Stats / visual side */}
          <div className="relative flex flex-col gap-px bg-border">
            {/* Top two stat blocks */}
            <div className="grid grid-cols-2 gap-px bg-border">
              <div className="bg-card p-10 flex flex-col items-center justify-center text-center gap-2">
                <span className="font-serif text-6xl font-bold text-primary leading-none">6</span>
                <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Años del Taller</span>
              </div>
              <div className="bg-card p-10 flex flex-col items-center justify-center text-center gap-2">
                <span className="font-serif text-6xl font-bold text-primary leading-none">15+</span>
                <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Años de Experiencia</span>
              </div>
            </div>

            {/* BMW & Supra specialty block */}
            <div className="bg-primary p-10 flex flex-col items-center justify-center text-center gap-3">
              <span className="text-primary-foreground text-xs font-bold uppercase tracking-[0.3em]">Especialidad Racing</span>
              <span className="font-serif text-3xl font-bold text-primary-foreground leading-tight">BMW & Toyota Supra</span>
              <span className="text-primary-foreground/70 text-sm">Builds de alto rendimiento y modificaciones de pista</span>
            </div>

            {/* Highlights row */}
            <div className="grid grid-cols-3 gap-px bg-border">
              {highlights.map((h) => {
                const Icon = h.icon
                return (
                  <div key={h.label} className="bg-card flex flex-col items-center text-center gap-2 p-5">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-bold text-xs uppercase tracking-wider leading-tight">{h.label}</span>
                    <span className="text-muted-foreground text-[11px]">{h.sub}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-3">
              Quiénes somos
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-none mb-6 text-balance">
              CAR MOTORING
              <br />
              <span className="text-primary">TU TALLER</span>
              <br />
              DE CONFIANZA
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              Car Motoring es un taller mecánico familiar ubicado en el corazón de Caguas, Puerto Rico. Llevamos 6 años sirviendo a nuestra comunidad, respaldados por técnicos con más de 15 años de experiencia en el campo automotriz.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Nuestro equipo de técnicos certificados por el <span className="text-foreground font-semibold">Colegio de Técnicos y Mecánicos Automotrices de Puerto Rico</span> utiliza tecnología de diagnóstico de vanguardia para identificar y resolver cualquier problema automotriz, desde el más sencillo hasta el más complejo.
            </p>

            {/* Strengths list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{s}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/20"
            >
              Agenda tu Cita
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
