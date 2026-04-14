"use client"

import { Phone, MapPin, ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://placehold.co/1920x1080?text=Professional+auto+mechanic+shop+interior+with+cars+on+lifts+dramatic+lighting+dark+steel+environment"
          alt="Taller mecánico profesional con vehículos en elevadores, iluminación dramática y ambiente de acero oscuro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0e0e10]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e10]/50 via-transparent to-[#0e0e10]" />
      </div>

      {/* Diagonal red stripe accent */}
      <div
        className="absolute left-0 top-0 h-full w-1.5 bg-primary z-10"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
              Caguas, Puerto Rico
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-none tracking-tight text-balance mb-6">
            CAR
            <br />
            <span className="text-primary">MOTORING</span>
            <br />
            CAGUAS, PR
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Ubicados en Caguas, Puerto Rico. 6 años de taller con técnicos de más de 15 años de experiencia. Diagnóstico experto, precios justos y trabajo garantizado.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
            <a
              href="tel:+17873740509"
              className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/20"
            >
              <Phone className="w-5 h-5" />
              (787) 374-0509
            </a>
            <button
              onClick={() => scrollTo("#servicios")}
              className="flex items-center gap-3 border-2 border-foreground/30 hover:border-primary text-foreground hover:text-primary px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all duration-200"
            >
              Ver Servicios
            </button>
          </div>

          {/* Location pill */}
          <div className="mt-10 inline-flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
            <span>Caguas, Puerto Rico — Abierto Lun–Sáb 8am–6pm</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border bg-card/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {[
              { value: "15+", label: "Años Exp. Técnicos" },
              { value: "5,000+", label: "Clientes Satisfechos" },
              { value: "20+", label: "Servicios Disponibles" },
              { value: "100%", label: "Trabajo Garantizado" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-5 px-4 gap-1">
                <span className="font-serif text-2xl lg:text-3xl font-bold text-primary">{stat.value}</span>
                <span className="text-muted-foreground text-xs uppercase tracking-widest text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo("#servicios")}
        className="absolute bottom-28 right-8 z-10 hidden lg:flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll hacia abajo"
      >
        <span className="text-xs uppercase tracking-widest rotate-90 translate-y-4">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  )
}
