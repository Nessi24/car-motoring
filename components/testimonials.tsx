"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Rodríguez",
    location: "Caguas, PR",
    rating: 5,
    text: "Llevé mi Toyota Camry con un problema de transmisión que otro taller no pudo resolver. Aquí lo diagnosticaron en minutos y lo repararon al día siguiente. Excelente servicio y precio justo. ¡100% recomendado!",
    service: "Transmisión",
    initials: "CR",
  },
  {
    name: "María González",
    location: "Caguas, PR",
    rating: 5,
    text: "El A/C de mi carro dejó de funcionar en pleno verano. Los llamé por la mañana, me atendieron ese mismo día y en menos de 3 horas estaba listo. El precio fue súper razonable. Gracias al equipo!",
    service: "Aire Acondicionado",
    initials: "MG",
  },
  {
    name: "Juan Pérez",
    location: "Gurabo, PR",
    rating: 5,
    text: "Llevan años cuidando mis carros. Siempre honestos, nunca tratan de venderte lo que no necesitas. Son los únicos mecánicos en quienes confío en el área de Caguas. Servicio de primera.",
    service: "Cliente Regular",
    initials: "JP",
  },
  {
    name: "Ana Rivera",
    location: "San Lorenzo, PR",
    rating: 5,
    text: "Fui por el cambio de aceite y aprovecharon para hacer una inspección completa sin cobrarme extra. Me avisaron de unas gomas bajas y unos frenos que necesitaban atención. Super agradecida con ellos.",
    service: "Mantenimiento",
    initials: "AR",
  },
  {
    name: "Roberto Soto",
    location: "Caguas, PR",
    rating: 5,
    text: "Me repararon el sistema eléctrico de mi pickup que estaba fallando el arranque. El diagnóstico computarizado que ofrecen es de lo mejor. Rápido, eficiente y con garantía. No voy a otro taller.",
    service: "Sistema Eléctrico",
    initials: "RS",
  },
  {
    name: "Diana Colón",
    location: "Cayey, PR",
    rating: 5,
    text: "Personal muy amable y profesional. Explican todo lo que van a hacer antes de hacerlo. Me dieron un estimado exacto y no hubo cobros sorpresa. El trabajo quedó perfecto. Definitivamente regreso.",
    service: "Frenos",
    initials: "DC",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-3">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-none text-balance">
            OPINIONES DE
            <br />
            <span className="text-primary">CLIENTES REALES</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background p-8 flex flex-col gap-5 group hover:bg-primary/5 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Service tag */}
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/30 px-2 py-1 w-fit">
                {t.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border group-hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <span className="font-bold text-foreground text-sm block">{t.name}</span>
                  <span className="text-muted-foreground text-xs">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating strip */}
        <div className="mt-px bg-primary px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary-foreground text-primary-foreground" />
            ))}
          </div>
          <span className="text-primary-foreground font-bold text-lg">5.0 en Google</span>
          <span className="text-primary-foreground/80 text-sm">— Más de 200 reseñas de clientes satisfechos</span>
        </div>
      </div>
    </section>
  )
}
