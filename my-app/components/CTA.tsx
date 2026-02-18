'use client'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-24 text-center overflow-hidden"
    >
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0f172a] to-[#0a0a0a]" />

      {/* Glow decorativo */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-[#20B2AA]/20 rounded-full blur-3xl" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Transformemos tu idea en un ecosistema digital rentable
        </h2>

        <p className="text-gray-400 mb-10 text-lg">
          Diseñamos soluciones web pensadas para escalar, automatizar procesos
          y convertir visitantes en clientes reales.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center
                     bg-[#20B2AA] text-black
                     px-10 py-4 rounded-xl
                     font-semibold text-lg
                     hover:scale-105 hover:shadow-[0_0_30px_#20B2AA]
                     transition-all"
        >
          Empezar mi proyecto ahora
        </a>
      </div>
    </motion.section>
  )
}
