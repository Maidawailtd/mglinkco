import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HowItWorksPage() {
  return (
    <div className="container py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">How MGLink Connect Works</h1>
        <p className="text-gray-500 text-lg">
          Our platform connects talented freelancers with businesses looking for skilled professionals. Learn how to
          make the most of our platform whether you're hiring or looking for work.
        </p>
      </div>

      <Tabs defaultValue="freelancers" className="mb-12">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="freelancers">For Freelancers</TabsTrigger>
            <TabsTrigger value="clients">For Clients</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="freelancers">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="tech-frame">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-4 rounded-full mb-4">
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
                      className="h-6 w-6"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">1. Create Your Profile</h3>
                  <p className="text-gray-500 mb-4">
                    Sign up and build a comprehensive profile showcasing your skills, experience, and portfolio.
                  </p>
                  <Link href="/signup">
                    <Button variant="outline" size="sm">
                      Create Account
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="tech-frame">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-4 rounded-full mb-4">
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
                      className="h-6 w-6"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                      <path d="m9 16 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">2. Find Projects</h3>
                  <p className="text-gray-500 mb-4">
                    Browse available projects that match your skills and submit proposals to clients.
                  </p>
                  <Link href="/projects">
                    <Button variant="outline" size="sm">
                      Browse Projects
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="tech-frame">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-4 rounded-full mb-4">
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
                      className="h-6 w-6"
                    >
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">3. Get Paid Securely</h3>
                  <p className="text-gray-500 mb-4">
                    Work with confidence using our secure payment system with milestone-based escrow protection.
                  </p>
                  <Link href="/resources/escrow-guide">
                    <Button variant="outline" size="sm">
                      Learn About Payments
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Build Your Freelance Career</h3>
                <p className="text-gray-500 mb-6">
                  MGLink Connect provides all the tools you need to succeed as a freelancer. Create a standout profile,
                  showcase your portfolio, and connect with clients looking for your specific skills.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Access to global clients and projects</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Secure payment protection</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Build your reputation with reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Professional tools to manage your work</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup">
                    <Button>Get Started as a Freelancer</Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[400px] aspect-square">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Freelancer working"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="clients">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="tech-frame">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-4 rounded-full mb-4">
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
                      className="h-6 w-6"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">1. Post a Project</h3>
                  <p className="text-gray-500 mb-4">
                    Describe your project, set your budget, and specify the skills you're looking for.
                  </p>
                  <Link href="/projects/post">
                    <Button variant="outline" size="sm">
                      Post a Project
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="tech-frame">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-4 rounded-full mb-4">
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
                      className="h-6 w-6"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">2. Review Proposals</h3>
                  <p className="text-gray-500 mb-4">
                    Receive proposals from qualified freelancers and select the best match for your project.
                  </p>
                  <Link href="/resources/guides">
                    <Button variant="outline" size="sm">
                      Hiring Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="tech-frame">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-4 rounded-full mb-4">
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
                      className="h-6 w-6"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">3. Work with Confidence</h3>
                  <p className="text-gray-500 mb-4">
                    Use our secure milestone payment system to ensure quality work before releasing funds.
                  </p>
                  <Link href="/resources/escrow-guide">
                    <Button variant="outline" size="sm">
                      Payment Protection
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <div className="relative w-full max-w-[400px] aspect-square">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Client hiring"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Find the Perfect Talent</h3>
                <p className="text-gray-500 mb-6">
                  MGLink Connect makes it easy to find and hire skilled professionals for your projects. Post your
                  project, review proposals, and work with the best talent from around the world.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Access to a global talent pool</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Verified freelancers with proven skills</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Secure payment protection</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Dedicated support throughout your project</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/signup">
                    <Button>Hire Talent Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-blue-50 dark:bg-blue-950 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
          Join thousands of freelancers and businesses already using MGLink Connect to collaborate on projects
          worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="glow-effect">
              Create an Account
            </Button>
          </Link>
          <Link href="/browse">
            <Button variant="outline" size="lg">
              Browse Freelancers
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

