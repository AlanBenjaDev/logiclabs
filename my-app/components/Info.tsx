'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
    >
      {/* Columna texto */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm uppercase tracking-widest text-[#20B2AA]">
          Quiénes somos
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
          Ingeniería digital enfocada en resultados reales
        </h2>

        <p className="text-gray-400 mb-4 leading-relaxed">
          En <span className="text-white font-medium">Logic Lab</span> creamos
          ecosistemas digitales pensados para escalar. Combinamos diseño,
          desarrollo y lógica de negocio para construir productos sólidos,
          rápidos y preparados para crecer.
        </p>

        <p className="text-gray-400 leading-relaxed">
          No vendemos plantillas. Diseñamos soluciones a medida que optimizan
          procesos, mejoran la conversión y acompañan la evolución de tu empresa.
        </p>
      </motion.div>

      {/* Columna visual */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Glow */}
        <div className="absolute -inset-2 bg-[#20B2AA]/20 rounded-xl blur-2xl" />

        <div className="relative bg-black/50 border border-white/10 rounded-xl p-6 font-mono text-sm text-[#5eead4]">
          <pre>
{`// Filosofía Logic Lab
function buildEcosystem(business) {
  return {
    scalable: true,
    secure: true,
    conversionFocused: true,
    longTermVision: true
  }
}`}
          </pre>
        </div>
      </motion.div>
    </section>
  )
}
