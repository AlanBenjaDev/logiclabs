'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()
  const [isSent, setIsSent] = useState(false)

  const onSubmit = (data: any) => {
    setIsSent(true)
    reset()

    const whatsappMessage = `Hola Logic Lab, quiero desarrollar mi proyecto web. Nombre: ${data.name}, Email: ${data.email}, Mensaje: ${data.message}`
    window.open(
      `https://wa.me/5493541628322?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    )
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 bg-[#0a0a0a] text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-[#20B2AA] uppercase tracking-widest">
        Contacto
      </h2>

      <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
        Hablemos sobre tu proyecto y cómo llevarlo a un ecosistema digital
        exitoso. Completa tus datos y abriremos WhatsApp para cerrar tu proyecto al instante.
      </p>

      {isSent && (
        <p className="mb-6 text-green-400 font-semibold">
          ¡Mensaje enviado! Abriendo WhatsApp para concretar tu proyecto.
        </p>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto grid gap-4"
      >
        <input
          {...register('name', { required: true })}
          placeholder="Nombre"
          className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 placeholder-gray-400 text-white"
        />
        <input
          {...register('email', { required: true })}
          placeholder="Email"
          className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 placeholder-gray-400 text-white"
        />
        <textarea
          {...register('message', { required: true })}
          placeholder="Mensaje"
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 placeholder-gray-400 text-white"
        />

        <button
          type="submit"
          className="bg-[#20B2AA] text-black px-6 py-3 rounded-xl font-semibold uppercase hover:scale-105 transition-transform flex items-center justify-center gap-2"
        >
          <Icon icon="mdi:whatsapp" width={24} height={24} />
          Enviar por WhatsApp
        </button>
      </form>
    </motion.section>
  )
}