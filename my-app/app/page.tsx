import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/Info"
import Services from "@/components/Services"
import CTA from "@/components/CTA"
import Contact from "@/components/Contacto"
import Footer from "@/components/Footer"
import Results from "@/components/Results"


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Results /> 
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
