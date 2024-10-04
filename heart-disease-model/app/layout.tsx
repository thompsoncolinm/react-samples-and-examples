import './globals.css'
import { Inter } from 'next/font/google'
import { AppProvider } from '@/context/AppContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Heart Disease Visualization',
  description: 'Interactive 3D visualization of heart disease stages',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}