"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { handleError } from "@/lib/error-handling"

export function MainNav() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (searchQuery.trim()) {
        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      }
    } catch (error) {
      handleError(error, "Failed to perform search. Please try again.")
    }
  }

  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2" aria-label="MGLink Connect Home">
        <Image src="/images/logo-mglink.png" alt="" width={40} height={40} className="h-10 w-auto" priority />
        <span className="font-bold text-xl">MGLink Connect</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link href="/find-work" className="text-sm font-medium transition-colors hover:text-primary">
          Find Work
        </Link>
        <Link href="/find-talent" className="text-sm font-medium transition-colors hover:text-primary">
          Find Talent
        </Link>
        <Link href="/categories" className="text-sm font-medium transition-colors hover:text-primary">
          Categories
        </Link>
        <Link href="/how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
          How It Works
        </Link>
      </nav>
      <div className="hidden md:flex items-center ml-auto gap-2">
        <form onSubmit={handleSearch} className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full pl-8 bg-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search MGLink Connect"
          />
        </form>
        <Link href="/login">
          <Button variant="ghost">Log in</Button>
        </Link>
        <Link href="/register">
          <Button>Sign up</Button>
        </Link>
      </div>
    </div>
  )
}

