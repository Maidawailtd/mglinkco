'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type User = {
  id: string
  email: string
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (data: any) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  isAuthenticated: false,
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const login = async (email: string, password: string) => {
    setLoading(true)
    // TODO: Implement actual login logic
    setUser({ id: '123', email })
    setLoading(false)
  }

  const register = async (data: any) => {
    setLoading(true)
    // TODO: Implement actual register logic
    setUser({ id: '456', email: data.email })
    setLoading(false)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
