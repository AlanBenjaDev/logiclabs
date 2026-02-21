'use client'
import { motion } from 'framer-motion'

export default function Header() {
  const navLinks = [
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Resultados', href: '#results' },
    { name: 'Contacto', href: '#contact' },
  ]

  return (
    <>
      {/* Desktop Header / Mobile Logo Bar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-bold tracking-widest text-[#20B2AA] uppercase">
            Logic Lab
          </span>

          <nav className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-gray-300">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-[#20B2AA] transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <a href="#contact" className="bg-[#20B2AA] text-black px-5 py-2 rounded-xl text-[10px] md:text-xs font-bold tracking-widest uppercase hover:scale-105 transition-all">
            Empezar
          </a>
        </div>
      </motion.header>

      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] z-50 bg-black/80 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-3 flex justify-between items-center shadow-2xl">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-[10px] uppercase tracking-tighter text-gray-400 active:text-[#20B2AA]"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </>
  )
}
