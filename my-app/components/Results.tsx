'use client'
import { motion } from 'framer-motion'

const stats = [
  { 
    label: 'Crecimiento de Ventas', 
    value: '140%', 
    desc: 'Incremento mensual en facturación tras el lanzamiento del ecommerce.' 
  },
  { 
    label: 'Carga Ultra-Rápida', 
    value: '0.8s', 
    desc: 'Velocidad de respuesta para optimizar la experiencia de compra.' 
  },
  { 
    label: 'Conversión Móvil', 
    value: '+60%', 
    desc: 'Más clientes comprando sus suplementos directo desde el celular.' 
  },
]

export default function Results() {
  return (
    <section id="results" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="text-[#20B2AA] text-xs font-bold tracking-[0.3em] uppercase">
              Caso de Éxito: DAC PRO
            </span>
            <div className="h-[1px] w-12 bg-[#20B2AA]/50" />
          </motion.div>

          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-5xl font-light mt-4 tracking-tight leading-tight"
          >
            Escalamos la venta de suplementos <br /> 
            <span className="font-bold">al siguiente nivel digital.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#20B2AA]/50 transition-all relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#20B2AA]/5 blur-3xl group-hover:bg-[#20B2AA]/15 transition-all" />
              
              <h3 className="text-4xl md:text-5xl font-black text-[#20B2AA] mb-2 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-200">
                {stat.label}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed tracking-wide">
                {stat.desc}
              </p>

              <div className="mt-6 h-[2px] w-full bg-white/5 overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '0%' }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  className="h-full bg-[#20B2AA]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 gap-4"
        >
          <p className="text-gray-500 text-[10px] tracking-[0.2em] uppercase text-center md:text-left">
            * Resultados auditados tras integración de pasarelas de pago y optimización SEO.
          </p>
          <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 flex items-center gap-2">
            <div className="w-2 h-2 bg-[#20B2AA] animate-pulse rounded-full" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Proyecto Finalizado</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
