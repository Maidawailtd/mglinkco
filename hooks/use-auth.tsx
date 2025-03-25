"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
  avatar?: string
  role: "freelancer" | "client"
  isVerified: boolean
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (data: SignUpData) => Promise<void>
  signOut: () => void
  updateUser: (data: Partial<User>) => Promise<void>
}

type SignUpData = {
  name: string
  email: string
  password: string
  role: "freelancer" | "client"
}

// Mock user data
const MOCK_USER: User = {
  id: "user-1",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/images/avatar.png",
  role: "freelancer",
  isVerified: true,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check if user is logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, you would check with your backend
        // For now, we'll check localStorage
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Authentication error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, you would call your API
      // For now, we'll simulate a successful login
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock successful login
      setUser(MOCK_USER)
      localStorage.setItem("user", JSON.stringify(MOCK_USER))
      router.push("/dashboard")
    } catch (error) {
      console.error("Login error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (data: SignUpData) => {
    setIsLoading(true)
    try {
      // In a real app, you would call your API
      // For now, we'll simulate a successful registration
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock successful registration
      const newUser: User = {
        id: `user-${Date.now()}`,
        name: data.name,
        email: data.email,
        role: data.role,
        isVerified: false,
      }

      setUser(newUser)
      localStorage.setItem("user", JSON.stringify(newUser))

      // Redirect based on role
      if (data.role === "freelancer") {
        router.push("/onboarding/freelancer")
      } else {
        router.push("/onboarding/client")
      }
    } catch (error) {
      console.error("Registration error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  const updateUser = async (data: Partial<User>) => {
    setIsLoading(true)
    try {
      // In a real app, you would call your API
      // For now, we'll simulate a successful update
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (user) {
        const updatedUser = { ...user, ...data }
        setUser(updatedUser)
        localStorage.setItem("user", JSON.stringify(updatedUser))
      }
    } catch (error) {
      console.error("Update error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        signIn,
        signUp,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

