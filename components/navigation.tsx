'use client'
import Link from 'next/link'
import { Button } from 'components/ui/button'
import { useAuth } from 'hooks/use-auth'

export function Navigation() {
  const { isAuthenticated } = useAuth()

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          MGLINKCO
        </Link>
        <div className="flex gap-4">
          {isAuthenticated ? (
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
