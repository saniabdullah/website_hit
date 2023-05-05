
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