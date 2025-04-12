import Link from 'next/link'

export function Footer() {
  return (
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
  )
}

