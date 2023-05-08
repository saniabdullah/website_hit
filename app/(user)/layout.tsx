import Navbar from '@/components/navbar'
import '../globals.css'
import Carousel from '@/components/carousel'

export const metadata = {
  title: 'HIT Digital Indonesia'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
