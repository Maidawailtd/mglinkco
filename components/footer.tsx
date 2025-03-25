import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6 dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
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
                className="h-6 w-6 text-blue-600"
              >
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
              </svg>
              <span className="font-bold">FreelanceConnect</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Connecting talented freelancers with businesses worldwide.
            </p>
            <div className="flex gap-4 text-gray-500">
              <Link href="#" className="hover:text-blue-600">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-blue-600">
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-blue-600">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-blue-600">
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
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">For Freelancers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/freelancers/how-it-works" className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/freelancers/find-work" className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
                  Find Work
                </Link>
              </li>
              <li>
                <Link
                  href="/freelancers/success-stories"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/freelancers/pricing" className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link href="/freelancers/resources" className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">For Clients</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/clients/how-it-works" className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/clients/post-project" className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
                  Post a Project
                </Link>
              </li>
              <li>
                <Link href="/clients/find-freelancers" className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
                  Find Freelancers
                </Link>
              </li>
              <li>
                <Link href="/clients/enterprise" className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link href="/clients/success-stories" className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-500 hover:text-blue-600 dark:text-gray-400">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} FreelanceConnect. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
              <Link href="/terms" className="hover:text-blue-600">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-blue-600">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="hover:text-blue-600">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

