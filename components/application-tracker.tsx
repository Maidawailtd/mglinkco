"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, DollarSign, MessageSquare } from "lucide-react"
import Link from "next/link"
import { handleError } from "@/lib/error-handling"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { Progress } from "@/components/ui/progress"

type Application = {
  id: number
  jobId: number
  jobTitle: string
  company: string
  appliedDate: string
  status: "pending" | "viewed" | "interviewing" | "offered" | "rejected"
  bidAmount: string
}

export function ApplicationTracker() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true)
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock data
        const mockApplications: Application[] = [
          {
            id: 1,
            jobId: 101,
            jobTitle: "Frontend Developer for E-commerce Website",
            company: "Global Shop Inc.",
            appliedDate: "Oct 15, 2023",
            status: "interviewing",
            bidAmount: "$2,000",
          },
          {
            id: 2,
            jobId: 102,
            jobTitle: "React Native Mobile App Developer",
            company: "Tech Innovations",
            appliedDate: "Oct 12, 2023",
            status: "viewed",
            bidAmount: "$3,500",
          },
          {
            id: 3,
            jobId: 103,
            jobTitle: "Full Stack Developer for SaaS Platform",
            company: "SaaS Solutions",
            appliedDate: "Oct 10, 2023",
            status: "pending",
            bidAmount: "$4,000",
          },
          {
            id: 4,
            jobId: 104,
            jobTitle: "JavaScript Developer for Financial Dashboard",
            company: "FinTech Corp",
            appliedDate: "Oct 5, 2023",
            status: "rejected",
            bidAmount: "$2,500",
          },
          {
            id: 5,
            jobId: 105,
            jobTitle: "Node.js Backend Developer",
            company: "Data Systems Inc.",
            appliedDate: "Oct 1, 2023",
            status: "offered",
            bidAmount: "$3,000",
          },
        ]

        setApplications(mockApplications)
      } catch (error) {
        handleError(error, "Failed to load applications")
      } finally {
        setLoading(false)
      }
    }

    fetchApplications()
  }, [])

  const getStatusColor = (status: Application["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500"
      case "viewed":
        return "bg-blue-500"
      case "interviewing":
        return "bg-purple-500"
      case "offered":
        return "bg-green-500"
      case "rejected":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: Application["status"]) => {
    return status.charAt(0).toUpperCase() + status.slice(1)
  }

  const getStatusVariant = (status: Application["status"]) => {
    switch (status) {
      case "pending":
        return "outline"
      case "viewed":
        return "secondary"
      case "interviewing":
        return "default"
      case "offered":
        return "default"
      case "rejected":
        return "destructive"
      default:
        return "outline"
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Applications</CardTitle>
          <CardDescription>Track the status of your job applications</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <LoadingSpinner size={24} text="Loading applications..." />
        </CardContent>
      </Card>
    )
  }

  if (applications.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Applications</CardTitle>
          <CardDescription>Track the status of your job applications</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-6">
          <p className="text-muted-foreground mb-4">You haven't applied to any jobs yet.</p>
          <Link href="/find-work">
            <Button>Browse Jobs</Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  // Calculate application statistics
  const totalApplications = applications.length
  const pendingApplications = applications.filter((app) => app.status === "pending").length
  const interviewingApplications = applications.filter((app) => app.status === "interviewing").length
  const offeredApplications = applications.filter((app) => app.status === "offered").length
  const rejectedApplications = applications.filter((app) => app.status === "rejected").length

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Applications</CardTitle>
        <CardDescription>Track the status of your job applications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Application Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground">Total</div>
            <div className="font-medium text-lg">{totalApplications}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Pending</div>
            <div className="font-medium text-lg">{pendingApplications}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Interviewing</div>
            <div className="font-medium text-lg">{interviewingApplications}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Offered</div>
            <div className="font-medium text-lg">{offeredApplications}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Application Progress</span>
            <span>{Math.round((offeredApplications / totalApplications) * 100)}% success rate</span>
          </div>
          <Progress value={(offeredApplications / totalApplications) * 100} className="h-2" />
        </div>

        {/* Application List */}
        <div className="space-y-4">
          {applications.map((application) => (
            <div key={application.id} className="border-b pb-4 last:border-0 last:pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <Link href={`/jobs/${application.jobId}`} className="font-medium hover:text-primary">
                    {application.jobTitle}
                  </Link>
                  <div className="text-sm text-muted-foreground">{application.company}</div>
                </div>
                <Badge variant={getStatusVariant(application.status)}>{getStatusText(application.status)}</Badge>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Applied: {application.appliedDate}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  <span>Bid: {application.bidAmount}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Link href={`/jobs/${application.jobId}`}>
                  <Button variant="outline" size="sm">
                    View Job
                  </Button>
                </Link>
                <Link href={`/messages/job/${application.jobId}`}>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Message
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

