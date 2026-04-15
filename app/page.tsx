import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
