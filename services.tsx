"use client"

import {
  Wrench,
  Zap,
  Thermometer,
  Settings,
  Car,
  RefreshCw,
  Trophy,
  Flame,
} from "lucide-react"

const services = [
  {
    icon: Trophy,
    title: "Mecánica Racing BMW",
    desc: "Especialistas en BMW. Diagnóstico, mantenimiento y preparación de alto rendimiento para la máquina bávara.",
    tag: "Especialidad",
    highlight: true,
  },
  {
    icon: Flame,
    title: "Mecánica Racing Supra",
    desc: "Expertos en Toyota Supra. Modificaciones, preparación de pista y servicio técnico de alto desempeño.",
    tag: "Especialidad",
    highlight: true,
  },
  {
    icon: Wrench,
    title: "Mecánica General",
    desc: "Reparación y mantenimiento completo de motor, suspensión, dirección y sistema de escape.",
    tag: "Servicio #1",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Sistema Eléctrico",
    desc: "Diagnóstico computarizado, reparación de alternadores, baterías, arranques y cableado.",
    tag: "Diagnóstico",
    highlight: false,
  },
  {
    icon: Thermometer,
    title: "Aire Acondicionado",
    desc: "Recarga, reparación y mantenimiento del sistema de A/C para que siempre viajes fresco.",
    tag: "A/C Auto",
    highlight: false,
  },
  {
    icon: Settings,
    title: "Transmisión",
    desc: "Revisión, reparación y reconstrucción de transmisiones automáticas y manuales.",
    tag: "Especialidad",
    highlight: false,
  },
  {
    icon: Car,
    title: "Frenos",
    desc: "Cambio de pastillas, discos, tambores, líquido de frenos y revisión completa del sistema.",
    tag: "Seguridad",
    highlight: false,
  },
  {
    icon: RefreshCw,
    title: "Cambio de Aceite",
    desc: "Cambio de aceite sintético o convencional con inspección de 25 puntos sin cargo adicional.",
    tag: "Express",
    highlight: false,
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-3">
              ¿Qué hacemos?
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-none text-balance">
              NUESTROS
              <br />
              <span className="text-primary">SERVICIOS</span>
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-md text-base">
            Especialistas en mecánica racing BMW y Supra. Técnicos certificados por el Colegio de Técnicos y Mecánicos Automotrices de Puerto Rico.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`p-8 flex flex-col gap-5 group transition-colors duration-300 cursor-default ${
                  service.highlight
                    ? "bg-primary/20 hover:bg-primary/30 border-t-2 border-t-primary"
                    : "bg-card hover:bg-primary/10"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary ${
                    service.highlight
                      ? "bg-primary border border-primary"
                      : "bg-primary/10 border border-primary/20"
                  }`}>
                    <Icon className={`w-6 h-6 transition-colors duration-300 group-hover:text-primary-foreground ${
                      service.highlight ? "text-primary-foreground" : "text-primary"
                    }`} />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest border px-2 py-1 transition-all duration-300 ${
                    service.highlight
                      ? "text-primary border-primary"
                      : "text-muted-foreground border-border group-hover:border-primary/40 group-hover:text-primary"
                  }`}>
                    {service.tag}
                  </span>
                </div>
                <div>
                  <h3 className={`font-serif text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-primary ${
                    service.highlight ? "text-primary" : "text-foreground"
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
                <div className={`mt-auto pt-4 border-t transition-colors duration-300 ${
                  service.highlight ? "border-primary/40" : "border-border group-hover:border-primary/30"
                }`}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Solicitar Servicio →
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Banner CTA */}
        <div className="mt-px bg-primary p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary-foreground">
              ¿Tienes una emergencia?
            </h3>
            <p className="text-primary-foreground/80 text-sm mt-1">
              Llámanos ahora y te atendemos de inmediato.
            </p>
          </div>
          <a
            href="tel:+17873740509"
            className="flex-shrink-0 bg-foreground text-background px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-foreground/90 transition-colors"
          >
            (787) 374-0509
          </a>
        </div>
      </div>
    </section>
  )
}
