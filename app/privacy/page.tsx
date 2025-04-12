import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            MGLINKCO
          </Link>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Privacy Content */}
      <main className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg">
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide when registering, including name, email,
            and professional details. We also automatically collect usage data.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            Your information is used to provide and improve our services, communicate with you,
            and ensure platform security.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy periodically. We'll notify you of significant changes.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xl font-bold">MGLINKCO</p>
              <p className="text-gray-400">Connecting talent with opportunity</p>
            </div>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-primary transition">
                About
              </Link>
              <Link href="/contact" className="hover:text-primary transition">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-primary transition">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
