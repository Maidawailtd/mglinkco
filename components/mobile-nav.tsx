"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { handleError } from "@/lib/error-handling"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (searchQuery.trim()) {
        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
        setOpen(false)
      }
    } catch (error) {
      handleError(error, "Failed to perform search. Please try again.")
    }
  }

  return (
    <div className="md:hidden flex items-center ml-auto">
      <form onSubmit={handleSearch} className="relative mr-2">
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
      <Link href="/" className="flex items-center mr-2" aria-label="MGLink Connect Home">
        <Image src="/images/logo-mglink.png" alt="" width={32} height={32} className="h-8 w-auto" priority />
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-2" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex items-center mb-6">
            <Image
              src="/images/logo-mglink.png"
              alt="MGLink Connect"
              width={32}
              height={32}
              className="h-8 w-auto mr-2"
            />
            <span className="font-bold">MGLink Connect</span>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              href="/find-work"
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Find Work
            </Link>
            <Link
              href="/find-talent"
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Find Talent
            </Link>
            <Link
              href="/categories"
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/how-it-works"
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              How It Works
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/login" onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link href="/register" onClick={() => setOpen(false)}>
                <Button className="w-full">Sign up</Button>
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

