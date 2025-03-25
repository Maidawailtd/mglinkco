"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle, Clock, ShieldCheck } from "lucide-react"

// Mock escrow data
const ESCROW_DATA = {
  id: "escrow-123",
  projectId: "project-1",
  projectTitle: "E-commerce Website Redesign",
  status: "in_progress", // pending, in_progress, completed, disputed, refunded
  amount: 4500,
  currency: "USD",
  fee: 225, // 5% platform fee
  totalAmount: 4725,
  createdAt: "2023-05-20T10:30:00Z",
  updatedAt: "2023-05-25T14:45:00Z",
  milestones: [
    {
      id: "milestone-1",
      title: "Initial Wireframes",
      amount: 1000,
      status: "released", // pending, funded, released, disputed
      dueDate: "2023-06-01",
      completedAt: "2023-05-28",
    },
    {
      id: "milestone-2",
      title: "Design System & Homepage",
      amount: 1500,
      status: "funded", // pending, funded, released, disputed
      dueDate: "2023-06-15",
      completedAt: null,
    },
    {
      id: "milestone-3",
      title: "Product Pages & Checkout Flow",
      amount: 2000,
      status: "pending", // pending, funded, released, disputed
      dueDate: "2023-07-01",
      completedAt: null,
    },
  ],
  client: {
    id: "client-1",
    name: "TechRetail Inc.",
    avatar: "/images/client-1.jpg",
  },
  freelancer: {
    id: "freelancer-1",
    name: "Emma Johnson",
    avatar: "/images/freelancer-1.jpg",
  },
  transactions: [
    {
      id: "transaction-1",
      type: "deposit",
      amount: 1000,
      status: "completed",
      date: "2023-05-20T10:30:00Z",
      description: "Initial milestone funding",
    },
    {
      id: "transaction-2",
      type: "release",
      amount: 1000,
      status: "completed",
      date: "2023-05-28T16:20:00Z",
      description: "Payment for completed wireframes",
    },
    {
      id: "transaction-3",
      type: "deposit",
      amount: 1500,
      status: "completed",
      date: "2023-05-30T09:15:00Z",
      description: "Second milestone funding",
    },
  ],
}

export default function EscrowPage() {
  const params = useParams()
  const escrowId = params.id as string

  // In a real app, you would fetch the escrow data based on the ID
  const escrow = ESCROW_DATA

  const [activeTab, setActiveTab] = useState("overview")

  // Calculate progress
  const totalMilestones = escrow.milestones.length
  const completedMilestones = escrow.milestones.filter((m) => m.status === "released").length
  const progressPercentage = (completedMilestones / totalMilestones) * 100

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: escrow.currency,
    }).format(amount)
  }

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-900"
          >
            Pending
          </Badge>
        )
      case "in_progress":
        return (
          <Badge
            variant="outline"
            className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900"
          >
            In Progress
          </Badge>
        )
      case "completed":
        return (
          <Badge
            variant="outline"
            className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-900"
          >
            Completed
          </Badge>
        )
      case "disputed":
        return (
          <Badge
            variant="outline"
            className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-900"
          >
            Disputed
          </Badge>
        )
      case "refunded":
        return (
          <Badge
            variant="outline"
            className="bg-gray-100 text-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Refunded
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // Get milestone status badge
  const getMilestoneStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline">Pending</Badge>
      case "funded":
        return (
          <Badge
            variant="outline"
            className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900"
          >
            Funded
          </Badge>
        )
      case "released":
        return (
          <Badge
            variant="outline"
            className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-900"
          >
            Released
          </Badge>
        )
      case "disputed":
        return (
          <Badge
            variant="outline"
            className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-900"
          >
            Disputed
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Escrow Details</h1>
          <p className="text-gray-500">ID: {escrow.id}</p>
        </div>
        <div className="flex items-center gap-2">
          {getStatusBadge(escrow.status)}
          <Button variant="outline" asChild>
            <Link href={`/projects/${escrow.projectId}`}>View Project</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="tech-frame">
            <CardHeader>
              <CardTitle>Project: {escrow.projectTitle}</CardTitle>
              <CardDescription>Secure payment management for your project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Project Progress</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>
                        {completedMilestones} of {totalMilestones} milestones completed
                      </span>
                      <span>{progressPercentage.toFixed(0)}%</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Escrow Amount</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Total Amount</p>
                      <p className="text-xl font-semibold">{formatCurrency(escrow.amount)}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Platform Fee</p>
                      <p className="text-xl font-semibold">{formatCurrency(escrow.fee)}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Parties</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border p-4 rounded-lg">
                      <p className="text-sm text-gray-500 mb-2">Client</p>
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={escrow.client.avatar} alt={escrow.client.name} />
                          <AvatarFallback>{escrow.client.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{escrow.client.name}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <p className="text-sm text-gray-500 mb-2">Freelancer</p>
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={escrow.freelancer.avatar} alt={escrow.freelancer.name} />
                          <AvatarFallback>{escrow.freelancer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{escrow.freelancer.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert>
                  <ShieldCheck className="h-4 w-4" />
                  <AlertTitle>Secure Escrow Protection</AlertTitle>
                  <AlertDescription>
                    Funds are held securely until work is completed and approved. Both parties are protected by our
                    escrow system.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="milestones" className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="milestones">Milestones</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="disputes">Disputes</TabsTrigger>
            </TabsList>
            <TabsContent value="milestones" className="space-y-4 pt-4">
              {escrow.milestones.map((milestone) => (
                <Card key={milestone.id}>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{milestone.title}</h3>
                          {getMilestoneStatusBadge(milestone.status)}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          Due: {formatDate(milestone.dueDate)}
                          {milestone.completedAt && ` • Completed: ${formatDate(milestone.completedAt)}`}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-semibold">{formatCurrency(milestone.amount)}</p>
                        {milestone.status === "funded" && <Button size="sm">Release Funds</Button>}
                        {milestone.status === "pending" && (
                          <Button size="sm" variant="outline">
                            Fund Milestone
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="transactions" className="space-y-4 pt-4">
              {escrow.transactions.map((transaction) => (
                <Card key={transaction.id}>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium capitalize">{transaction.type}</h3>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-900"
                          >
                            {transaction.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {formatDate(transaction.date)} • {transaction.description}
                        </p>
                      </div>
                      <p className="font-semibold">{formatCurrency(transaction.amount)}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="disputes" className="pt-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center justify-center py-8">
                    <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                    <h3 className="text-xl font-medium mb-2">No Disputes</h3>
                    <p className="text-gray-500 max-w-md">
                      There are no active disputes for this escrow. If you encounter any issues, you can open a dispute
                      from the milestone section.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="tech-frame">
            <CardHeader>
              <CardTitle>Escrow Protection</CardTitle>
              <CardDescription>How our escrow system works</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-2 rounded-full mt-0.5">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium">Client Funds Milestone</h4>
                  <p className="text-sm text-gray-500">
                    Client deposits funds for a milestone, which are held securely in escrow.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-2 rounded-full mt-0.5">
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
                    className="h-4 w-4"
                  >
                    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Freelancer Works</h4>
                  <p className="text-sm text-gray-500">
                    Freelancer completes the work knowing that payment is secured in escrow.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-2 rounded-full mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium">Client Approves</h4>
                  <p className="text-sm text-gray-500">Client reviews and approves the completed work.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-2 rounded-full mt-0.5">
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
                    className="h-4 w-4"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Funds Released</h4>
                  <p className="text-sm text-gray-500">Funds are released to the freelancer after client approval.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-2 rounded-full mt-0.5">
                  <AlertCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium">Dispute Resolution</h4>
                  <p className="text-sm text-gray-500">
                    If issues arise, our dispute resolution team helps mediate and find a fair solution.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/resources/escrow-guide">Learn More About Escrow</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/support">Contact Support</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/resources/faq">View FAQs</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

