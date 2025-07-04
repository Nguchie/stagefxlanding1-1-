import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StageFX - SEO & Web Development Agency",
  description: "We build websites that rank. SEO strategy and custom web development to grow your business.",
  icons: {
    icon: "/images/stagelogo.png", // This points to your favicon.png in the public folder
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
