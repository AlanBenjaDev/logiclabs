'use client'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Web para negocios',
    icon: 'mdi:web',
    parr: 'Páginas claras y rápidas para que tus clientes te encuentren y te escriban.'
  },
  {
    title: 'Venta online',
    icon: 'mdi:cart',
    parr: 'Tiendas online con pagos integrados para vender sin depender de mensajes.'
  },
  {
    title: 'Sistemas a medida',
    icon: 'mdi:server',
    parr: 'Herramientas simples para ordenar turnos, clientes, ingresos y gastos.'
  },
  {
    title: 'Aplicaciones Web',
    icon: 'mdi:application',
    parr: 'Aplicaciones web accesibles desde cualquier dispositivo para gestionar tu negocio.'
  },
  {
    title: 'Imagen Profesional',
    icon: 'mdi:office-building',
    parr: 'Webs corporativas para negocios que quieren verse serios y crecer.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#20B2AA]">Servicios</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="bg-black/40 border border-white/10 rounded-xl p-6 text-center"
          >
            <Icon icon={s.icon} className="text-4xl text-[#20B2AA] mx-auto mb-4" />
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm mt-2 text-white/80">{s.parr}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
