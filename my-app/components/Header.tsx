'use client'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <span className="text-lg font-bold tracking-widest text-[#20B2AA] uppercase">
          Logic Lab
        </span>

        {/* Navegación */}
        <nav className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-gray-300">
          <a
            href="#services"
            className="hover:text-[#20B2AA] transition-colors"
          >
            Servicios
          </a>
          <a
            href="#about"
            className="hover:text-[#20B2AA] transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#contact"
            className="hover:text-[#20B2AA] transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center
                     bg-[#20B2AA] text-black
                     px-6 py-2 rounded-xl
                     text-xs font-semibold tracking-widest uppercase
                     hover:scale-105 hover:shadow-[0_0_20px_#20B2AA]
                     transition-all"
        >
          Empezar Proyecto
        </a>
      </div>
    </motion.header>
  )
}
