'use client'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Web para negocios',
    icon: 'mdi:rocket-launch-outline', 
    parr: 'Páginas claras y rápidas para que tus clientes te encuentren y te escriban.'
  },
  {
    title: 'Venta online',
    icon: 'mdi:currency-usd',
    parr: 'Tiendas online con pagos integrados para vender sin depender de mensajes.'
  },
  {
    title: 'Sistemas a medida',
    icon: 'mdi:database-cog-outline',
    parr: 'Herramientas simples para ordenar turnos, clientes, ingresos y gastos.'
  },
  {
    title: 'Aplicaciones Web',
    icon: 'mdi:devices',
    parr: 'Aplicaciones web accesibles desde cualquier dispositivo para gestionar tu negocio.'
  },
  {
    title: 'Imagen Profesional',
    icon: 'mdi:shield-check-outline',
    parr: 'Webs corporativas para negocios que quieren verse serios y crecer.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#20B2AA] text-xs font-bold tracking-[0.3em] uppercase mb-2"
        >
          Soluciones
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white italic tracking-tighter">
          Nuestros <span className="text-[#20B2AA] not-italic">Servicios.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-8 overflow-hidden"
          >
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#20B2AA]/10 rounded-full blur-2xl group-hover:bg-[#20B2AA]/20 transition-all duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#20B2AA]/50 transition-colors">
                <Icon icon={s.icon} className="text-3xl text-[#20B2AA]" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#20B2AA] transition-colors">
                {s.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                {s.parr}
              </p>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="group border-2 border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center opacity-50 hover:opacity-100 transition-opacity"
        >
          <p className="text-[#20B2AA] font-bold uppercase tracking-widest text-xs">¿Tenés una idea?</p>
          <h3 className="text-white font-semibold mt-2">Tu próximo sistema</h3>
        </motion.div>
      </div>
    </section>
  )
}
