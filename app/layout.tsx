import type { Metadata } from 'next'
import { Geist, Geist_Mono, Montserrat } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'
import TargetCursor from '../components/ui/TargetCursor/TargetCursor'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'OgiTech | Engineering Digital Excellence',
  description: 'A technical collective of computer science and systems information experts based in Indonesia, specializing in precision AI & IoT architecture.',
  icons: {
    icon: '/logo_ogitech_clean.jpg',
    apple: '/logo_ogitech_clean.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <TargetCursor targetSelector="a, button, .cursor-target" />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
