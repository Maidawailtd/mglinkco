import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Scale } from "lucide-react"

export default function DisputeGuidePage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Dispute Resolution Guide</h1>
          <p className="text-gray-500 text-lg">
            Understanding how disputes are handled on MGLink Connect and how to reach fair resolutions.
          </p>
        </div>

        <div className="prose prose-blue max-w-none dark:prose-invert mb-8">
          <p>
            While most projects on MGLink Connect are completed successfully, we understand that disagreements can
            sometimes arise. Our dispute resolution process is designed to be fair, transparent, and efficient for both
            freelancers and clients.
          </p>

          <Alert className="my-6">
            <Scale className="h-4 w-4" />
            <AlertTitle>Fair Resolution Process</AlertTitle>
            <AlertDescription>
              Our dispute resolution team reviews all evidence impartially to reach fair outcomes based on project terms
              and submitted work.
            </AlertDescription>
          </Alert>

          <h2>When to Open a Dispute</h2>
          <p>
            Disputes should only be opened after you've made a good faith effort to resolve the issue directly with the
            other party. Common reasons for disputes include:
          </p>

          <ul>
            <li>Work delivered doesn't meet the agreed-upon requirements</li>
            <li>Significant delays beyond the agreed timeline</li>
            <li>Communication breakdown between parties</li>
            <li>Scope creep without agreement on additional compensation</li>
            <li>Intellectual property or confidentiality concerns</li>
          </ul>

          <h2>The Dispute Resolution Process</h2>

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
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">1. Direct Communication</h3>
                  <p className="text-gray-500">
                    First, try to resolve the issue directly through clear, professional communication with the other
                    party.
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
                  <h3 className="text-xl font-bold mb-2">2. Open a Dispute</h3>
                  <p className="text-gray-500">
                    If direct communication doesn't resolve the issue, open a formal dispute through your project
                    dashboard.
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
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">3. Submit Evidence</h3>
                  <p className="text-gray-500">
                    Both parties submit relevant evidence, including project agreements, communications, and work
                    samples.
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
                  <h3 className="text-xl font-bold mb-2">4. Mediator Review</h3>
                  <p className="text-gray-500">
                    A neutral mediator from our team reviews all submitted evidence and may request additional
                    information.
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
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">5. Proposed Resolution</h3>
                  <p className="text-gray-500">
                    The mediator proposes a fair resolution based on the evidence and project terms.
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
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">6. Resolution Implementation</h3>
                  <p className="text-gray-500">
                    The agreed resolution is implemented, which may include partial payment, revision requests, or other
                    actions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2>Tips for Avoiding Disputes</h2>

          <h3>For Freelancers:</h3>
          <ul>
            <li>Clearly define deliverables, timelines, and revision policies in your proposals</li>
            <li>Maintain regular communication and provide progress updates</li>
            <li>Document all project-related discussions and agreements</li>
            <li>Address scope changes promptly and discuss additional compensation if needed</li>
            <li>Deliver high-quality work that meets the agreed requirements</li>
          </ul>

          <h3>For Clients:</h3>
          <ul>
            <li>Provide detailed project briefs with clear requirements and expectations</li>
            <li>Respond promptly to questions and requests for clarification</li>
            <li>Give specific, constructive feedback on deliverables</li>
            <li>Avoid scope creep without discussing changes with the freelancer</li>
            <li>Release milestone payments promptly when work is satisfactorily completed</li>
          </ul>

          <h2>Common Dispute Resolutions</h2>
          <p>Depending on the nature of the dispute, resolutions may include:</p>

          <ul>
            <li>Full payment release to the freelancer if work meets requirements</li>
            <li>Partial payment based on completed work or value delivered</li>
            <li>Additional time for the freelancer to revise work to meet requirements</li>
            <li>Cancellation of the contract with partial or no payment</li>
            <li>Mediated agreement on revised project terms</li>
          </ul>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Our Commitment to Fairness</h3>
            <p>
              MGLink Connect is committed to fair dispute resolution that protects both freelancers and clients. Our
              mediators:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Review all evidence impartially</li>
              <li>Base decisions on project terms and submitted work</li>
              <li>Consider industry standards and best practices</li>
              <li>Aim for solutions that are fair to both parties</li>
              <li>Maintain confidentiality throughout the process</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-8 rounded-lg text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Questions About Dispute Resolution?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Our support team is available to help you understand the dispute resolution process and answer any questions
            you may have.
          </p>
          <Link href="/contact">
            <Button size="lg">Contact Support</Button>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Remember, clear communication and well-defined project terms are the best ways to avoid disputes and ensure
            successful collaborations.
          </p>
        </div>
      </div>
    </div>
  )
}

