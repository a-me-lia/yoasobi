import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Lia Paisley",
  description: "The official website of Emelia Paisley",
  openGraph: {
    title: "Lia Paisley",
    description: "The official website of Emelia Paisley",
    url: "https://emelia.pl",
    images: "https://emelia.pl/favicon.ico",
    siteName: "Lia Paisley",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
