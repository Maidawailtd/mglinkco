"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Briefcase, FileText, Home, MessageSquare, Settings, User, Users, PlusCircle, CreditCard } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const freelancerNavItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Proposals", href: "/proposals", icon: FileText },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Payments", href: "/payments", icon: CreditCard },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
]

const clientNavItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "My Projects", href: "/projects", icon: Briefcase },
  { name: "Post a Project", href: "/projects/post", icon: PlusCircle },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Freelancers", href: "/browse", icon: Users },
  { name: "Payments", href: "/payments", icon: CreditCard },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function DashboardSidebar({ userType = "freelancer" }) {
  const pathname = usePathname()
  const navItems = userType === "freelancer" ? freelancerNavItems : clientNavItems

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/mglink-icon.webp" alt="MGLink" className="h-8 w-8" />
          <span className="font-bold text-xl">MGLink</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild isActive={isActive} tooltip={item.name}>
                  <Link href={item.href} className="flex items-center gap-2">
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">Premium Account</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

