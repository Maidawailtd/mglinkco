"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Menu, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { useAuth } from "@/hooks/use-auth"
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()
  const { user, isAuthenticated, signOut } = useAuth()
  const [unreadMessages, setUnreadMessages] = useState(3)
  const [unreadNotifications, setUnreadNotifications] = useState(5)

  // Add scroll event listener to change header style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white/95 backdrop-blur-sm border-b shadow-sm dark:bg-gray-950/95" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/mglink-logo.webp" alt="MGLink Connect" width={40} height={40} className="h-10 w-auto" />
            <span className="font-bold text-xl hidden sm:inline-block">MGLink Connect</span>
          </Link>

          {!isMobile && (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/browse" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Browse Freelancers</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/projects" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Find Projects</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-700 p-6 no-underline outline-none focus:shadow-md"
                            href="/how-it-works"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">How It Works</div>
                            <p className="text-sm leading-tight text-white/90">
                              Learn how to make the most of our platform as a freelancer or client.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link href="/resources/guides" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="text-sm font-medium leading-none">Guides</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                              Helpful guides for navigating freelance work.
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources/blog" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="text-sm font-medium leading-none">Blog</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                              Articles and insights about the freelance industry.
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources/faq" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="text-sm font-medium leading-none">FAQ</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                              Answers to commonly asked questions.
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>

        <div className="flex items-center gap-4">
          {!isMobile && <ModeToggle />}

          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
                    <Bell className="h-5 w-5" />
                    {unreadNotifications > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white">
                        {unreadNotifications}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="font-medium">Notifications</h3>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Mark all as read
                    </Button>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    <div className="p-4 border-b bg-blue-50 dark:bg-blue-900/20">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/images/freelancer-1.jpg" />
                          <AvatarFallback>EJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">Emma Johnson</span> sent you a message
                          </p>
                          <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-b bg-blue-50 dark:bg-blue-900/20">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/images/client-1.jpg" />
                          <AvatarFallback>TR</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">TechRetail Inc.</span> accepted your proposal
                          </p>
                          <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-b">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-green-600"
                          >
                            <path d="M12 2v20" />
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm">
                            Payment of <span className="font-medium">$750</span> received
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 border-t">
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link href="/notifications">View all notifications</Link>
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" size="icon" aria-label="Messages" className="relative" asChild>
                <Link href="/messages">
                  <MessageSquare className="h-5 w-5" />
                  {unreadMessages > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white">
                      {unreadMessages}
                    </Badge>
                  )}
                </Link>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar>
                      <AvatarImage src={user?.avatar || "/images/avatar.png"} alt={user?.name || "User"} />
                      <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user?.name || "John Doe"}</p>
                      <p className="w-[200px] truncate text-sm text-gray-500">
                        {user?.email || "john.doe@example.com"}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/messages">Messages</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              {!isMobile ? (
                <>
                  <Link href="/login">
                    <Button variant="ghost">Log In</Button>
                  </Link>
                  <Link href="/signup">
                    <Button>Sign Up</Button>
                  </Link>
                </>
              ) : (
                <ModeToggle />
              )}
            </div>
          )}

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col">
                <div className="flex flex-col gap-4 pt-10">
                  <SheetClose asChild>
                    <Link href="/browse">
                      <Button variant="ghost" className="w-full justify-start">
                        Browse Freelancers
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/projects">
                      <Button variant="ghost" className="w-full justify-start">
                        Find Projects
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/how-it-works">
                      <Button variant="ghost" className="w-full justify-start">
                        How It Works
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/resources/guides">
                      <Button variant="ghost" className="w-full justify-start">
                        Guides
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/resources/blog">
                      <Button variant="ghost" className="w-full justify-start">
                        Blog
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
                <div className="mt-auto pt-4">
                  {!isAuthenticated ? (
                    <>
                      <SheetClose asChild>
                        <Link href="/login">
                          <Button variant="outline" className="w-full mb-2">
                            Log In
                          </Button>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/signup">
                          <Button className="w-full">Sign Up</Button>
                        </Link>
                      </SheetClose>
                    </>
                  ) : (
                    <>
                      <SheetClose asChild>
                        <Link href="/dashboard">
                          <Button variant="outline" className="w-full mb-2">
                            Dashboard
                          </Button>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Button variant="default" className="w-full" onClick={signOut}>
                          Logout
                        </Button>
                      </SheetClose>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}

