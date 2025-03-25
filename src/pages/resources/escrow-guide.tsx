import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ShieldCheck } from "lucide-react"

export default function EscrowGuidePage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Escrow Payment Protection Guide</h1>
          <p className="text-gray-500 text-lg">
            Learn how our secure escrow system protects both freelancers and clients throughout the project lifecycle.
          </p>
        </div>

        <div className="prose prose-blue max-w-none dark:prose-invert mb-8">
          <p>
            MGLink Connect's escrow system is designed to provide security and peace of mind for both parties in a
            freelance transaction. This guide explains how our escrow system works and how it protects your interests.
          </p>

          <Alert className="my-6">
            <ShieldCheck className="h-4 w-4" />
            <AlertTitle>Secure Transactions</AlertTitle>
            <AlertDescription>
              All payments on MGLink Connect are processed through our secure escrow system, ensuring that funds are
              only released when work is completed and approved.
            </AlertDescription>
          </Alert>

          <h2>What is Escrow?</h2>
          <p>
            Escrow is a financial arrangement where a third party (MGLink Connect) holds and regulates payment of funds
            on behalf of two parties in a transaction. This provides security by keeping the payment in a secure account
            until all terms of the agreement are met.
          </p>

          <h2>How Our Escrow System Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
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
                  <h3 className="text-xl font-bold mb-2">1. Project Agreement</h3>
                  <p className="text-gray-500">
                    Client and freelancer agree on project scope, deliverables, timeline, and payment terms.
                  </p>
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
                  <h3 className="text-xl font-bold mb-2">2. Client Funds Escrow</h3>
                  <p className="text-gray-500">
                    Client deposits the agreed amount into escrow before work begins, showing commitment and ability to
                    pay.
                  </p>
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
                  <h3 className="text-xl font-bold mb-2">3. Freelancer Works</h3>
                  <p className="text-gray-500">
                    Freelancer completes the work knowing that payment is secured in escrow and ready to be released.
                  </p>
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">4. Client Approves</h3>
                  <p className="text-gray-500">
                    Client reviews the completed work and approves it if it meets the agreed requirements.
                  </p>
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
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">5. Payment Released</h3>
                  <p className="text-gray-500">
                    Funds are released from escrow to the freelancer after client approval of the completed work.
                  </p>
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">6. Dispute Resolution (if needed)</h3>
                  <p className="text-gray-500">
                    If issues arise, our mediation team helps resolve disputes fairly based on project terms and
                    evidence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2>Milestone-Based Projects</h2>
          <p>
            For larger projects, we recommend breaking the work into milestones. Each milestone can be funded
            separately, allowing for incremental approval and payment as the project progresses. This approach reduces
            risk for both parties and provides clear checkpoints for project progress.
          </p>

          <h2>Hourly Projects</h2>
          <p>
            For hourly projects, freelancers submit weekly time logs that clients review and approve. Once approved, the
            payment for those hours is automatically processed. Our system includes work diary functionality that tracks
            time and activity levels to verify hours worked.
          </p>

          <h2>Dispute Resolution</h2>
          <p>
            In the rare case that a dispute arises, our dedicated resolution team will review the project details,
            communications, and submitted work to help reach a fair resolution. Both parties can submit evidence to
            support their case, and our team will make a determination based on the project terms and evidence provided.
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Benefits of Our Escrow System</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-2">For Freelancers</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Guaranteed payment for completed work</li>
                  <li>Protection from non-payment or payment disputes</li>
                  <li>Clear project terms and expectations</li>
                  <li>Professional mediation if issues arise</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">For Clients</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Work is completed before final payment is released</li>
                  <li>Quality assurance through approval process</li>
                  <li>Protection from incomplete or substandard work</li>
                  <li>Clear milestones and deliverables</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-8 rounded-lg text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Work with Confidence?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Our escrow system ensures secure transactions for both freelancers and clients. Start your next project with
            peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects/post">
              <Button size="lg">Post a Project</Button>
            </Link>
            <Link href="/browse">
              <Button variant="outline" size="lg">
                Find Freelancers
              </Button>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Have more questions about our escrow system?{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

