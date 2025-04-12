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

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token")
        if (token) {
          const response = await fetch('/api/auth/verify', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          if (response.ok) {
            const userData = await response.json()
            setUser(userData)
          }
        }
      } catch (error) {
        console.error("Auth verification error:", error)
      } finally {
        setIsLoading(false)
      }
    }
    checkAuth()
  }, [])

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Login failed')
      }

      const { user: userData, token } = await response.json()
      setUser(userData)
      localStorage.setItem("token", token)
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
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Registration failed')
      }

      const { user: userData, token } = await response.json()
      setUser(userData)
      localStorage.setItem("token", token)

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
    localStorage.removeItem("token")
    router.push("/")
  }

  const updateUser = async (data: Partial<User>) => {
    setIsLoading(true)
    try {
      const token = localStorage.getItem("token")
      const response = await fetch('/api/auth/user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Update failed')
      }

      const userData = await response.json()
      setUser(userData)
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
