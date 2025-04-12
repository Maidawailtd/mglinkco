import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Contact() {
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

      {/* Contact Content */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="mb-4">123 Business Street<br />Tech City, TC 10001</p>
              <p className="mb-4">Email: info@mglinkco.com<br />Phone: (123) 456-7890</p>
              <img 
                src="/images/map.jpg" 
                alt="Office location" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
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
