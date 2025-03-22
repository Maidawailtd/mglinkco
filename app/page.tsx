import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Globe, MessageSquare, Search, Shield, Star, Users } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MGLink Connect - Global Freelancing Platform",
  description:
    "Connect with top talent worldwide. Post jobs, find work, and collaborate on projects with MGLink Connect.",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Connect with Top Talent Worldwide
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  MGLink Connect brings together skilled freelancers and clients from around the globe. Post a job, find
                  talent, or showcase your skills - all in one place.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="px-8">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="/find-work">
                  <Button size="lg" variant="outline" className="px-8">
                    Browse Jobs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo-mglink.png"
                width={400}
                height={400}
                alt="MGLink Connect logo showing a hexagonal network design with connected nodes"
                className="rounded-lg object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50" aria-labelledby="how-it-works-heading">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 id="how-it-works-heading" className="text-3xl font-bold tracking-tighter md:text-4xl">
                How MGLink Connect Works
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Our platform makes it easy to connect, collaborate, and complete projects with confidence.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl mt-8">
            <Image
              src="/images/freelancing-illustration.png"
              alt="Illustration showing freelancers working remotely, collaborating on projects, and achieving success"
              width={1000}
              height={1000}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Search className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold">Find Talent or Work</h3>
              <p className="text-center text-muted-foreground">
                Post a job or browse opportunities that match your skills and interests.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold">Connect & Collaborate</h3>
              <p className="text-center text-muted-foreground">
                Communicate directly, share files, and work together seamlessly.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold">Get Paid Securely</h3>
              <p className="text-center text-muted-foreground">
                Our secure payment system ensures you get paid for your work on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the homepage content remains the same */}
      {/* Popular Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32" aria-labelledby="categories-heading">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 id="categories-heading" className="text-3xl font-bold tracking-tighter md:text-4xl">
                Explore Popular Categories
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Find the perfect match for your project needs or showcase your skills in these in-demand categories.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {[
              { name: "Web Development", icon: "💻" },
              { name: "Graphic Design", icon: "🎨" },
              { name: "Content Writing", icon: "✍️" },
              { name: "Digital Marketing", icon: "📱" },
              { name: "Video Editing", icon: "🎬" },
              { name: "Data Analysis", icon: "📊" },
              { name: "Mobile Development", icon: "📲" },
              { name: "UI/UX Design", icon: "🖌️" },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex flex-col items-center p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
                aria-label={`Browse ${category.name} jobs and freelancers`}
              >
                <span className="text-3xl mb-2" aria-hidden="true">
                  {category.icon}
                </span>
                <h3 className="font-medium">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50" aria-labelledby="testimonials-heading">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tighter md:text-4xl">
                Success Stories
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Hear from freelancers and clients who have achieved great results with MGLink Connect.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center" aria-label="Five star rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "As a freelance developer, MGLink Connect has been a game-changer for me. The platform is intuitive,
                  clients are professional, and payments are always on time."
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 rounded-full bg-muted" aria-hidden="true"></div>
                <div className="ml-4">
                  <p className="text-sm font-medium">Alex Johnson</p>
                  <p className="text-sm text-muted-foreground">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center" aria-label="Five star rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Finding quality talent used to be a challenge until I discovered MGLink Connect. Now I can quickly
                  find skilled professionals for all my business needs."
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 rounded-full bg-muted" aria-hidden="true"></div>
                <div className="ml-4">
                  <p className="text-sm font-medium">Sarah Miller</p>
                  <p className="text-sm text-muted-foreground">Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-12 md:py-24 lg:py-32" aria-labelledby="stats-heading">
        <div className="container px-4 md:px-6">
          <h2 id="stats-heading" className="sr-only">
            Platform Statistics
          </h2>
          <div className="grid gap-6 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-6 shadow-sm">
              <Users className="h-12 w-12 text-primary" aria-hidden="true" />
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-center text-muted-foreground">Active Freelancers</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-6 shadow-sm">
              <CheckCircle className="h-12 w-12 text-primary" aria-hidden="true" />
              <h3 className="text-3xl font-bold">25K+</h3>
              <p className="text-center text-muted-foreground">Completed Projects</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-6 shadow-sm">
              <Globe className="h-12 w-12 text-primary" aria-hidden="true" />
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="text-center text-muted-foreground">Countries Served</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-6 shadow-sm">
              <Star className="h-12 w-12 text-primary" aria-hidden="true" />
              <h3 className="text-3xl font-bold">4.8/5</h3>
              <p className="text-center text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="w-full py-12 md:py-24 lg:py-32" aria-labelledby="about-heading">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 id="about-heading" className="text-3xl font-bold tracking-tighter md:text-4xl">
                Explore MGLink Connect
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Learn more about our platform, get in touch, and discover opportunities.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-6xl">
            <Image
              src="/images/mglink-sections.png"
              alt="Three panels showing About Us, Contact Us, and Explore sections with illustrations of people collaborating"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
        aria-labelledby="cta-heading"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 id="cta-heading" className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed">
                Join thousands of freelancers and businesses on MGLink Connect today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="px-8">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8"
                >
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

