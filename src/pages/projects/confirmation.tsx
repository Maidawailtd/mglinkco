import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ProjectConfirmationPage() {
  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        <Card className="tech-frame">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 p-4 rounded-full">
                <CheckCircle className="h-12 w-12" />
              </div>
            </div>
            <CardTitle className="text-2xl">Project Posted Successfully!</CardTitle>
            <CardDescription>Your project is now live and visible to freelancers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-medium mb-2">What happens next?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full h-5 w-5 flex items-center justify-center text-xs mt-0.5">
                    1
                  </span>
                  <span>Freelancers will review your project and submit proposals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full h-5 w-5 flex items-center justify-center text-xs mt-0.5">
                    2
                  </span>
                  <span>You'll receive notifications as proposals come in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full h-5 w-5 flex items-center justify-center text-xs mt-0.5">
                    3
                  </span>
                  <span>Review proposals and message freelancers to discuss details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full h-5 w-5 flex items-center justify-center text-xs mt-0.5">
                    4
                  </span>
                  <span>Select a freelancer and begin working together</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects/post">Post Another Project</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

