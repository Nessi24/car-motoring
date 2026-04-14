"use client"

import { useState, useMemo, useEffect } from "react"
import { MapPin, Phone, Clock, CheckCircle, ChevronLeft, ChevronRight, CalendarDays, AlertCircle } from "lucide-react"

const hours = [
  { day: "Lunes – Viernes", time: "8:00 AM – 6:00 PM" },
  { day: "Sábado", time: "8:00 AM – 2:00 PM" },
  { day: "Domingo", time: "Cerrado" },
]

const MAX_PER_DAY = 3
const OIL_SERVICES = [
  "Cambio de Aceite Sintético",
  "Cambio de Aceite Sintético y Filtro de Aire",
  "Cambio de Aceite Sintético y Filtro de Cabina",
  "Cambio de Aceite Sintético, Filtro de Aire y Cabina",
]
const STORAGE_KEY = "car_motoring_appointments"

function getAppointments(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")
  } catch {
    return {}
  }
}

function bookAppointment(dateStr: string) {
  const appts = getAppointments()
  appts[dateStr] = (appts[dateStr] || 0) + 1
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appts))
}

function getDateKey(date: Date) {
  return date.toISOString().split("T")[0]
}

function isSunday(date: Date) {
  return date.getDay() === 0
}

function isSaturday(date: Date) {
  return date.getDay() === 6
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [whatsappLinks, setWhatsappLinks] = useState<{ owner: string; parent: string } | null>(null)

  // When client returns from WhatsApp (owner), auto-open the second one (parent/coordination)
  useEffect(() => {
    const pendingParent = sessionStorage.getItem("cm_pending_parent")
    if (pendingParent) {
      sessionStorage.removeItem("cm_pending_parent")
      setSubmitted(true)
      setTimeout(() => {
        window.location.href = pendingParent
      }, 600)
    }
  }, [])
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "",
    message: "",
    date: "",
  })

  // Calendar state
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const [calendarMonth, setCalendarMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [appointments, setAppointments] = useState<Record<string, number>>(getAppointments)

  const isOilService = OIL_SERVICES.includes(form.service)

  const calendarDays = useMemo(() => {
    const year = calendarMonth.getFullYear()
    const month = calendarMonth.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const days: (Date | null)[] = Array(firstDay).fill(null)
    for (let d = 1; d <= daysInMonth; d++) days.push(new Date(year, month, d))
    return days
  }, [calendarMonth])

  function getDayStatus(date: Date) {
    if (isSunday(date)) return "closed"
    if (date < today) return "past"
    const key = getDateKey(date)
    const count = appointments[key] || 0
    if (!isOilService && count >= MAX_PER_DAY) return "full"
    return "available"
  }

  function selectDate(date: Date) {
    const status = getDayStatus(date)
    if (status === "closed" || status === "past" || status === "full") return
    setForm({ ...form, date: getDateKey(date) })
  }

  function prevMonth() {
    setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1))
  }
  function nextMonth() {
    setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1))
  }

  const monthNames = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
  const dayNames = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.date) return

    // Book the slot locally
    bookAppointment(form.date)
    setAppointments(getAppointments())

    const [year, month, day] = form.date.split("-")
    const dateFormatted = `${day}/${month}/${year}`

    // Build WhatsApp message
    const msg = encodeURIComponent(
      `*Nueva solicitud de cita — Car Motoring*\n\n` +
      `*Nombre:* ${form.name}\n` +
      `*Teléfono:* ${form.phone}\n` +
      `*Email:* ${form.email || "No indicado"}\n` +
      `*Vehículo:* ${form.vehicle || "No indicado"}\n` +
      `*Servicio:* ${form.service || "No indicado"}\n` +
      `*Fecha solicitada:* ${dateFormatted}\n` +
      `*Mensaje:* ${form.message || "Sin mensaje adicional"}`
    )

    setWhatsappLinks({
      owner: `https://wa.me/17873740509?text=${msg}`,
      parent: `https://wa.me/17873184811?text=${msg}`,
    })

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 10000)
    setForm({ name: "", phone: "", email: "", vehicle: "", service: "", message: "", date: "" })
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-3">
            Estamos aquí para ayudarte
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-none text-balance">
            CONTÁCTANOS
            <br />
            <span className="text-primary">HOY MISMO</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
          {/* Info panel */}
          <div className="bg-card p-10 flex flex-col gap-10">
            {/* OpenStreetMap embed — no API key needed, loads reliably */}
            <div className="relative overflow-hidden h-52 bg-card">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-66.0427,-66.0367,18.2702,18.2762&layer=mapnik&marker=18.273223,-66.039696"
                className="w-full h-full border-0"
                loading="lazy"
                title="Ubicacion Car Motoring Caguas PR"
              />
              <a
                href="https://www.google.com/maps?q=18.273223,-66.039696"
                onClick={(e) => { e.preventDefault(); window.location.href = "https://www.google.com/maps?q=18.273223,-66.039696" }}
                className="absolute bottom-2 right-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 hover:bg-primary/90 transition-colors flex items-center gap-1 z-10"
              >
                <MapPin className="w-3 h-3" />
                Como llegar
              </a>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 gap-px bg-border">
              <div className="bg-background p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1">Dirección</span>
                  <span className="text-foreground font-semibold text-sm">Caguas, Puerto Rico</span>
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

              <div className="bg-background p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1">Teléfono</span>
                  <a href="tel:+17873740509" className="text-foreground font-semibold text-sm hover:text-primary transition-colors">
                    (787) 374-0509
                  </a>
                  <span className="text-xs text-muted-foreground mt-0.5 block">Juan Hidalgo — Dueño</span>
                </div>
              </div>

              <div className="bg-background p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">Horario</span>
                  <div className="flex flex-col gap-1">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-8 text-sm">
                        <span className="text-foreground font-medium">{h.day}</span>
                        <span className={h.time === "Cerrado" ? "text-muted-foreground" : "text-primary font-semibold"}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div className="bg-card p-10">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Agenda tu Cita</h3>
            <p className="text-muted-foreground text-sm mb-8">Completa el formulario y te contactaremos en menos de 2 horas.</p>

            {submitted && whatsappLinks ? (
              <div className="flex flex-col items-center justify-center gap-5 py-10">
                <div className="w-16 h-16 bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-serif text-xl font-bold text-foreground text-center">¡Cita Lista!</h4>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">
                  Toca el boton para enviar tu solicitud directamente por WhatsApp al equipo de Car Motoring.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    window.open(whatsappLinks.owner, "_blank")
                    setTimeout(() => {
                      window.open(whatsappLinks.parent, "_blank")
                    }, 1000)
                  }}
                  className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-5 font-bold text-base uppercase tracking-widest transition-colors cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Enviar Cita por WhatsApp
                </button>
                <p className="text-muted-foreground text-xs text-center">
                  Se abriran dos conversaciones de WhatsApp — una para el dueno y otra para coordinacion.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Nombre *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                      className="bg-background border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Teléfono *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="(787) 000-0000"
                      className="bg-background border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="bg-background border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="vehicle" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Vehículo
                  </label>
                  <input
                    id="vehicle"
                    name="vehicle"
                    value={form.vehicle}
                    onChange={handleChange}
                    placeholder="Ej: Toyota Camry 2020"
                    className="bg-background border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Servicio Necesario
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="bg-background border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Selecciona un servicio</option>

                    <optgroup label="── RACING ESPECIALIDAD ──">
                      <option>Racing BMW — Mantenimiento General</option>
                      <option>Racing BMW — Instalación de Turbo</option>
                      <option>Racing BMW — Preparación de Pista</option>
                      <option>Racing BMW — Diagnóstico de Motor</option>
                      <option>Racing BMW — Modificaciones de Rendimiento</option>
                      <option>Racing Supra — Mantenimiento General</option>
                      <option>Racing Supra — Instalación de Turbo</option>
                      <option>Racing Supra — Preparación de Pista</option>
                      <option>Racing Supra — Diagnóstico de Motor</option>
                      <option>Racing Supra — Modificaciones de Rendimiento</option>
                    </optgroup>

                    <optgroup label="── FRENOS ──">
                      <option>Frenos — Reemplazo de Pads (Pastillas)</option>
                      <option>Frenos — Reemplazo de Disco y Pads</option>
                      <option>Frenos — Reemplazo de Tambores</option>
                      <option>Frenos — Reemplazo de Zapatas</option>
                      <option>Frenos — Sangría de Líquido de Frenos</option>
                      <option>Frenos — Inspección General del Sistema</option>
                    </optgroup>

                    <optgroup label="── ACEITE Y FILTROS ──">
                      <option>Cambio de Aceite Sintético</option>
                      <option>Cambio de Aceite Sintético y Filtro de Aire</option>
                      <option>Cambio de Aceite Sintético y Filtro de Cabina</option>
                      <option>Cambio de Aceite Sintético, Filtro de Aire y Cabina</option>
                    </optgroup>

                    <optgroup label="── TRANSMISIÓN ──">
                      <option>Transmisión — Diagnóstico</option>
                      <option>Transmisión — Cambio de Fluido</option>
                      <option>Transmisión — Reparación Automática</option>
                      <option>Transmisión — Reparación Manual</option>
                      <option>Transmisión — Reconstrucción</option>
                    </optgroup>

                    <optgroup label="── AIRE ACONDICIONADO ──">
                      <option>A/C — Recarga de Gas Refrigerante</option>
                      <option>A/C — Diagnóstico del Sistema</option>
                      <option>A/C — Reemplazo de Compresor</option>
                      <option>A/C — Reemplazo de Condensador</option>
                      <option>A/C — Mantenimiento General</option>
                    </optgroup>

                    <optgroup label="── SISTEMA ELÉCTRICO ──">
                      <option>Eléctrico — Diagnóstico Computarizado</option>
                      <option>Eléctrico — Reemplazo de Batería</option>
                      <option>Eléctrico — Reemplazo de Alternador</option>
                      <option>Eléctrico — Reemplazo de Arranque (Starter)</option>
                      <option>Eléctrico — Reparación de Cableado</option>
                    </optgroup>

                    <optgroup label="── MECÁNICA GENERAL ──">
                      <option>Motor — Diagnóstico General</option>
                      <option>Motor — Reemplazo de Correa de Distribución</option>
                      <option>Motor — Reparación de Escape</option>
                      <option>Suspensión — Reemplazo de Amortiguadores</option>
                      <option>Suspensión — Reemplazo de Bola (Ball Joint)</option>
                      <option>Suspensión — Reemplazo de CV Axle</option>
                      <option>Dirección — Reparación de Rack and Pinion</option>
                      <option>Dirección — Reemplazo de Tie Rods</option>
                      <option>Reemplazo de Spark Plugs (Bujías)</option>
                      <option>Reemplazo de Serpentine Belt</option>
                    </optgroup>

                    <optgroup label="── OTRO ──">
                      <option>Otro — Describir en el mensaje</option>
                    </optgroup>
                  </select>
                </div>

                {/* Calendar date picker */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-primary" />
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Fecha de Cita *
                    </label>
                  </div>

                  {isOilService && (
                    <div className="flex items-start gap-2 bg-primary/10 border border-primary/20 px-3 py-2 text-xs text-primary">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      Cambio de aceite — disponible cualquier dia sin limite de cupo.
                    </div>
                  )}

                  <div className="bg-background border border-border p-4">
                    {/* Month nav */}
                    <div className="flex items-center justify-between mb-3">
                      <button type="button" onClick={prevMonth} className="p-1 hover:text-primary transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-sm font-bold uppercase tracking-widest text-foreground">
                        {monthNames[calendarMonth.getMonth()]} {calendarMonth.getFullYear()}
                      </span>
                      <button type="button" onClick={nextMonth} className="p-1 hover:text-primary transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    {/* Day headers */}
                    <div className="grid grid-cols-7 mb-1">
                      {dayNames.map((d) => (
                        <div key={d} className="text-center text-[10px] font-bold uppercase tracking-wider text-muted-foreground py-1">
                          {d}
                        </div>
                      ))}
                    </div>
                    {/* Days grid */}
                    <div className="grid grid-cols-7 gap-0.5">
                      {calendarDays.map((date, i) => {
                        if (!date) return <div key={`empty-${i}`} />
                        const status = getDayStatus(date)
                        const key = getDateKey(date)
                        const isSelected = form.date === key
                        const count = appointments[key] || 0
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => selectDate(date)}
                            disabled={status === "closed" || status === "past" || status === "full"}
                            className={`relative flex flex-col items-center justify-center py-1.5 text-xs font-semibold transition-colors
                              ${isSelected ? "bg-primary text-primary-foreground" : ""}
                              ${status === "available" && !isSelected ? "hover:bg-primary/20 text-foreground cursor-pointer" : ""}
                              ${status === "full" ? "text-muted-foreground/40 line-through cursor-not-allowed" : ""}
                              ${status === "past" || status === "closed" ? "text-muted-foreground/30 cursor-not-allowed" : ""}
                              ${isSaturday(date) && status !== "past" && !isSelected ? "text-primary" : ""}
                            `}
                          >
                            {date.getDate()}
                            {status === "available" && !isSelected && count > 0 && !isOilService && (
                              <span className="absolute bottom-0.5 right-0.5 text-[8px] text-primary font-bold leading-none">{MAX_PER_DAY - count}</span>
                            )}
                          </button>
                        )
                      })}
                    </div>
                    {/* Legend */}
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border">
                      <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                        <span className="w-2.5 h-2.5 bg-primary inline-block" /> Seleccionado
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                        <span className="w-2.5 h-2.5 bg-muted-foreground/20 inline-block" /> Lleno
                      </span>
                      <span className="text-[10px] text-muted-foreground italic">
                        * Numero pequeno = espacios restantes
                      </span>
                    </div>
                  </div>

                  {form.date && (
                    <p className="text-xs text-primary font-semibold">
                      Fecha seleccionada: {form.date.split("-").reverse().join("/")}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Mensaje / Descripción
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe brevemente el problema o lo que necesitas..."
                    className="bg-background border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!form.date}
                  className="mt-2 flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-primary-foreground px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-primary/20"
                >
                  {/* WhatsApp icon */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enviar por WhatsApp
                </button>
                <p className="text-center text-xs text-muted-foreground mt-1">
                  Se abrira WhatsApp con tu solicitud lista para enviar a Juan Hidalgo
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
