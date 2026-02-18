'use client'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()
  const [isSent, setIsSent] = useState(false)

 const onSubmit = async (data: any) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setIsSent(true);
      reset();
    } else {
      alert("Hubo un error al enviar el mensaje");
    }
  } catch (error) {
    console.error(error);
  }
}


  return (
    <section id="contact" className="py-24 px-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#20B2AA]">Contacto</h2>

      {isSent ? (
        <p className="text-center text-green-400">Mensaje enviado con éxito 🚀</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register('name', { required: true })} placeholder="Nombre"
            className="w-full p-3 rounded bg-black/40 border border-white/10" />
          <input {...register('email', { required: true })} placeholder="Email"
            className="w-full p-3 rounded bg-black/40 border border-white/10" />
          <textarea {...register('message', { required: true })} placeholder="Mensaje"
            className="w-full p-3 rounded bg-black/40 border border-white/10" />
          <button className="w-full bg-[#20B2AA] text-black py-3 rounded font-semibold">
            Enviar
          </button>
        </form>
      )}
    </section>
  )
}
