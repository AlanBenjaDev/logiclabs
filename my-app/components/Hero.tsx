'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
  <span className="block text-[#7dd3fc]">
    Construimos tu
  </span>

  <span className="block bg-gradient-to-r from-[#20B2AA] to-[#5eead4] bg-clip-text text-transparent">
    Ecosistema Digital
  </span>
</h1>


        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10">
          Desarrollo web de alta calidad, tiendas online seguras y estrategias digitales.
          Llevamos tu negocio de lo local a lo global.
        </p>

        <div className="flex justify-center">
          <a
            href="#services"
            className="bg-[#20B2AA] text-black px-8 py-3 rounded-xl font-semibold
                       hover:scale-105 transition-transform"
          >
            Ver soluciones web
          </a>
        </div>
      </motion.div>
    </section>
  )
}
