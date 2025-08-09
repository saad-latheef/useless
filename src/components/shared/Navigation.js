"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🌴</span>
              <span className="font-bold text-xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Kerala Predictor
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button 
                variant={pathname === "/" ? "default" : "ghost"}
                className="font-medium"
              >
                🏠 Home
              </Button>
            </Link>
            <Link href="/features">
              <Button 
                variant={pathname === "/features" ? "default" : "ghost"}
                className="font-medium"
              >
                ⚡ Features
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
