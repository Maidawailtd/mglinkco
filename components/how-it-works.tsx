import { Card, CardContent } from "@/components/ui/card"

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Simple steps to find or become a freelancer on our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="tech-frame">
              <CardContent className="flex flex-col items-center p-6">
                <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-blue-900">
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
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Create Your Profile</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center mt-2">
                  Sign up and build a comprehensive profile showcasing your skills and experience.
                </p>
              </CardContent>
            </Card>
            <Card className="tech-frame">
              <CardContent className="flex flex-col items-center p-6">
                <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-blue-900">
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
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Connect and Collaborate</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center mt-2">
                  Find projects or freelancers, communicate securely, and establish work terms.
                </p>
              </CardContent>
            </Card>
            <Card className="tech-frame">
              <CardContent className="flex flex-col items-center p-6">
                <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-blue-900">
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
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Get Paid Securely</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center mt-2">
                  Work with confidence using our secure payment system with escrow protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

