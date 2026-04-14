"use client"

const galleryItems = [
  {
    src: "/gallery-bmw-m3.jpg",
    alt: "BMW M3 azul con kit de carrocería ancha, capó de carbono y rines RAYS forged con gomas slick de pista — trabajo de Car Motoring",
    caption: "BMW M3 — Build Completo",
    tag: "Racing BMW",
    tall: true,
  },
  {
    src: "/gallery-bmw-turbo.jpg",
    alt: "Motor de BMW con turbocharger de alto desempeño instalado — especialidad de Car Motoring Caguas",
    caption: "BMW Turbo Build",
    tag: "Racing BMW",
    tall: false,
  },
]

const instagramHandle = "@carmotoring_pr"
const instagramUrl = "https://www.instagram.com/carmotoring_pr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clipRule="evenodd"
    />
  </svg>
)

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block mb-3">
              Nuestro trabajo
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-none text-balance">
              GALERÍA DE
              <br />
              <span className="text-primary">TRABAJOS</span>
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-sm text-base">
            Especialistas en mecánica racing. Cada build es un proyecto de pasión y precisión.
            Visita nuestro Instagram para ver más contenido.
          </p>
        </div>

        {/* Main grid: 2 real photos + 2 Instagram CTA tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">

          {/* Real photo 1 — BMW M3 full build, tall */}
          <div className="relative group overflow-hidden bg-card md:row-span-2">
            <img
              src="/gallery-bmw-m3.jpg"
              alt="BMW M3 azul con kit de carrocería ancha, capó de carbono y rines RAYS forged — Car Motoring Caguas"
              className="w-full h-[400px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Racing BMW</span>
              <span className="font-serif text-2xl font-bold text-foreground">BMW M3 — Build Completo</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>

          {/* Real photo 2 — BMW Turbo */}
          <div className="relative group overflow-hidden bg-card">
            <img
              src="/gallery-bmw-turbo.jpg"
              alt="Motor de BMW con turbocharger de alto desempeño instalado — Car Motoring Caguas"
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Racing BMW</span>
              <span className="font-serif text-2xl font-bold text-foreground">BMW Turbo Build</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>

          {/* Instagram CTA tile */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden bg-card h-[400px] flex flex-col items-center justify-center gap-5 border-t border-border hover:bg-primary/5 transition-colors duration-300 cursor-pointer"
          >
            {/* Animated ring */}
            <div className="w-20 h-20 rounded-full border-2 border-primary/30 group-hover:border-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <div className="w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                <InstagramIcon />
              </div>
            </div>
            <div className="text-center px-8">
              <p className="font-serif text-2xl font-bold text-foreground mb-1">Ver más en Instagram</p>
              <p className="text-primary font-bold text-sm uppercase tracking-widest">{instagramHandle}</p>
              <p className="text-muted-foreground text-xs mt-3 leading-relaxed">
                Builds, proyectos, antes y después,<br />y trabajo diario del taller
              </p>
            </div>
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground px-5 py-2.5 transition-all duration-300">
              <InstagramIcon />
              Seguir
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

        </div>

        {/* Bottom banner */}
        <div className="mt-px bg-card border-t border-border p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            Tienes fotos o videos de tu carro que trabajamos? Compartelas con nosotros en Instagram
            {" "}<span className="text-primary font-semibold">{instagramHandle}</span>
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-bold text-sm uppercase tracking-widest transition-all duration-200"
          >
            <InstagramIcon />
            {instagramHandle}
          </a>
        </div>

      </div>
    </section>
  )
}
