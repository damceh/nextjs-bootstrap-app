"use client"

import React, { useEffect, useState } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IT Tech Consultant",
  description: "Professional IT consulting and managed services with AI-driven workflow solutions",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check localStorage for theme preference
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  return (
    <html lang="en" className={isDark ? "dark" : ""}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500`}>
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 no-underline">
              IT Tech Consultant
            </Link>
            <ul className="flex space-x-8 items-center">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white no-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/managed-services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white no-underline">
                  Managed Services
                </Link>
              </li>
              <li>
                <Link href="/ai-agent-request" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white no-underline">
                  AI Agent Request
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleDarkMode}
                  aria-label="Toggle Dark Mode"
                  className="ml-4 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  {isDark ? "Light Mode" : "Dark Mode"}
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main className="min-h-screen transition-colors duration-500">
          {children}
        </main>
        <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-gray-600 dark:text-gray-300">
              © 2024 IT Tech Consultant. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
