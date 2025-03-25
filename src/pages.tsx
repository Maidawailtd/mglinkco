import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FeaturedFreelancers from "@/components/featured-freelancers"
import FeaturedProjects from "@/components/featured-projects"
import { SearchFreelancers } from "@/components/search-freelancers"
import { TrustedBy } from "@/components/trusted-by"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-frame.webp"
            alt="Hero background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Connect with Top Talent Worldwide
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  MGLink Connect brings together skilled professionals and businesses for seamless collaboration. Find
                  the perfect match for your project or showcase your expertise to clients globally.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="glow-effect">
                    Get Started
                  </Button>
                </Link>
                <Link href="/browse">
                  <Button variant="outline" size="lg">
                    Browse Freelancers
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square animate-float">
                <Image src="/images/mglink-icon.webp" alt="MGLink Connect" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Search Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Find Your Perfect Match</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Search for skilled freelancers based on expertise, location, and budget.
              </p>
            </div>
            <div className="w-full max-w-3xl">
              <SearchFreelancers />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Featured Freelancers */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Top Freelancers</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover our most highly-rated professionals across various categories.
              </p>
            </div>
            <FeaturedFreelancers />
            <div className="flex justify-center mt-8">
              <Link href="/freelancers">
                <Button variant="outline">View All Freelancers</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Recent Projects</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the latest projects posted by clients looking for talent.
              </p>
            </div>
            <FeaturedProjects />
            <div className="flex justify-center mt-8">
              <Link href="/projects">
                <Button variant="outline">View All Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/content-frame.webp" alt="CTA background" fill className="object-cover opacity-20" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join thousands of freelancers and businesses already using our platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="glow-effect">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

