import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2" aria-label="MGLink Connect Home">
              <Image src="/images/logo-mglink.png" alt="" width={40} height={40} className="h-10 w-auto" />
              <span className="font-bold text-xl">MGLink Connect</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Connecting talented freelancers with clients worldwide. Find work, hire experts, and grow your business.
            </p>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4" id="footer-freelancers">
              For Freelancers
            </h3>
            <ul className="space-y-2 text-sm" aria-labelledby="footer-freelancers">
              <li>
                <Link href="/find-work" className="text-muted-foreground hover:text-foreground">
                  Find Work
                </Link>
              </li>
              <li>
                <Link href="/create-profile" className="text-muted-foreground hover:text-foreground">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link href="/freelancer-resources" className="text-muted-foreground hover:text-foreground">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/freelancer-success" className="text-muted-foreground hover:text-foreground">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4" id="footer-clients">
              For Clients
            </h3>
            <ul className="space-y-2 text-sm" aria-labelledby="footer-clients">
              <li>
                <Link href="/post-job" className="text-muted-foreground hover:text-foreground">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/find-talent" className="text-muted-foreground hover:text-foreground">
                  Find Talent
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-muted-foreground hover:text-foreground">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link href="/client-success" className="text-muted-foreground hover:text-foreground">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4" id="footer-resources">
              Resources
            </h3>
            <ul className="space-y-2 text-sm" aria-labelledby="footer-resources">
              <li>
                <Link href="/help-center" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">&copy; {currentYear} MGLink Connect. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0 space-x-4 text-xs text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

