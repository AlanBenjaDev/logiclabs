import './globals.css'

export const metadata = {
  title: 'Logic Lab',
  description: 'Agencia de desarrollo web y software',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#0a0a0a] text-gray-100 antialiased">
        {children}
      </body>
    </html>
  )
}
