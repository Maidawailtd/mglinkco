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
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Clock, FileText, MessageSquare, Scale, Upload } from "lucide-react"

// Mock dispute data
const DISPUTE_DATA = {
  id: "dispute-123",
  escrowId: "escrow-123",
  projectId: "project-1",
  projectTitle: "E-commerce Website Redesign",
  status: "in_review", // opened, in_review, resolved, closed
  reason: "work_quality",
  description:
    "The delivered wireframes do not match the agreed-upon requirements. Several key features are missing, and the layout does not follow the brand guidelines provided.",
  amount: 1000,
  currency: "USD",
  createdAt: "2023-06-05T14:30:00Z",
  updatedAt: "2023-06-07T09:15:00Z",
  resolvedAt: null,
  resolution: null,
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
  mediator: {
    id: "mediator-1",
    name: "Alex Thompson",
    avatar: "/images/mediator-1.jpg",
  },
  messages: [
    {
      id: "message-1",
      sender: {
        id: "client-1",
        name: "TechRetail Inc.",
        avatar: "/images/client-1.jpg",
        role: "client",
      },
      content:
        "I am opening this dispute because the delivered wireframes do not match our requirements. Several key features are missing, and the layout does not follow our brand guidelines.",
      attachments: [{ id: "attachment-1", name: "requirements.pdf", size: "1.2 MB", url: "#" }],
      createdAt: "2023-06-05T14:30:00Z",
    },
    {
      id: "message-2",
      sender: {
        id: "freelancer-1",
        name: "Emma Johnson",
        avatar: "/images/freelancer-1.jpg",
        role: "freelancer",
      },
      content:
        "I believe there might be a misunderstanding. The wireframes I delivered follow the requirements we discussed. Could you please specify which features are missing?",
      attachments: [{ id: "attachment-2", name: "wireframes_v1.pdf", size: "3.5 MB", url: "#" }],
      createdAt: "2023-06-05T16:45:00Z",
    },
    {
      id: "message-3",
      sender: {
        id: "mediator-1",
        name: "Alex Thompson",
        avatar: "/images/mediator-1.jpg",
        role: "mediator",
      },
      content:
        "Hello both. I've been assigned to help resolve this dispute. I've reviewed the initial materials. Could both parties please share the original project brief and any communication regarding the requirements?",
      attachments: [],
      createdAt: "2023-06-07T09:15:00Z",
    },
  ],
  evidence: [
    {
      id: "evidence-1",
      submittedBy: "client",
      title: "Original Project Requirements",
      description: "The document outlining all required features and brand guidelines.",
      files: [{ id: "file-1", name: "project_requirements.pdf", size: "1.2 MB", url: "#" }],
      submittedAt: "2023-06-05T14:35:00Z",
    },
    {
      id: "evidence-2",
      submittedBy: "freelancer",
      title: "Delivered Wireframes",
      description: "The wireframes I delivered based on our discussions and requirements.",
      files: [
        { id: "file-2", name: "wireframes_v1.pdf", size: "3.5 MB", url: "#" },
        { id: "file-3", name: "design_notes.pdf", size: "0.8 MB", url: "#" },
      ],
      submittedAt: "2023-06-05T16:50:00Z",
    },
    {
      id: "evidence-3",
      submittedBy: "freelancer",
      title: "Communication History",
      description: "Screenshots of our conversations discussing the requirements.",
      files: [{ id: "file-4", name: "chat_screenshots.pdf", size: "2.3 MB", url: "#" }],
      submittedAt: "2023-06-06T10:20:00Z",
    },
  ],
}

export default function DisputePage() {
  const params = useParams()
  const disputeId = params.id as string

  // In a real app, you would fetch the dispute data based on the ID
  const dispute = DISPUTE_DATA

  const [newMessage, setNewMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: dispute.currency,
    }).format(amount)
  }

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "opened":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-900"
          >
            Opened
          </Badge>
        )
      case "in_review":
        return (
          <Badge
            variant="outline"
            className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900"
          >
            In Review
          </Badge>
        )
      case "resolved":
        return (
          <Badge
            variant="outline"
            className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-900"
          >
            Resolved
          </Badge>
        )
      case "closed":
        return (
          <Badge
            variant="outline"
            className="bg-gray-100 text-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Closed
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
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Handle send message
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    setIsSubmitting(true)

    // In a real app, you would send the message to your API
    setTimeout(() => {
      setNewMessage("")
      setIsSubmitting(false)

      // Optimistically update the UI
      // In a real app, you would update the state with the response from the API
    }, 1000)
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dispute Details</h1>
          <p className="text-gray-500">ID: {dispute.id}</p>
        </div>
        <div className="flex items-center gap-2">
          {getStatusBadge(dispute.status)}
          <Button variant="outline" asChild>
            <Link href={`/projects/${dispute.projectId}`}>View Project</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="tech-frame">
            <CardHeader>
              <CardTitle>Dispute: {dispute.projectTitle}</CardTitle>
              <CardDescription>Amount in dispute: {formatCurrency(dispute.amount)}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Dispute Reason</h3>
                  <p className="text-gray-700 dark:text-gray-300">{dispute.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Parties Involved</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border p-4 rounded-lg">
                      <p className="text-sm text-gray-500 mb-2">Client</p>
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={dispute.client.avatar} alt={dispute.client.name} />
                          <AvatarFallback>{dispute.client.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{dispute.client.name}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <p className="text-sm text-gray-500 mb-2">Freelancer</p>
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={dispute.freelancer.avatar} alt={dispute.freelancer.name} />
                          <AvatarFallback>{dispute.freelancer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{dispute.freelancer.name}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <p className="text-sm text-gray-500 mb-2">Mediator</p>
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={dispute.mediator.avatar} alt={dispute.mediator.name} />
                          <AvatarFallback>{dispute.mediator.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{dispute.mediator.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert>
                  <Scale className="h-4 w-4" />
                  <AlertTitle>Fair Resolution Process</AlertTitle>
                  <AlertDescription>
                    Our dispute resolution team will review all evidence and communications to reach a fair resolution.
                    Both parties will have equal opportunity to present their case.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="messages" className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="evidence">Evidence</TabsTrigger>
            </TabsList>
            <TabsContent value="messages" className="space-y-4 pt-4">
              <div className="space-y-4 max-h-[600px] overflow-y-auto p-1">
                {dispute.messages.map((message) => (
                  <div key={message.id} className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
                        <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{message.sender.name}</p>
                          <Badge variant="outline" className="text-xs">
                            {message.sender.role === "client"
                              ? "Client"
                              : message.sender.role === "freelancer"
                                ? "Freelancer"
                                : "Mediator"}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">{formatDate(message.createdAt)}</p>
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{message.content}</p>

                        {message.attachments.length > 0 && (
                          <div className="mt-3">
                            <p className="text-xs text-gray-500 mb-1">Attachments:</p>
                            <div className="space-y-2">
                              {message.attachments.map((attachment) => (
                                <div key={attachment.id} className="flex items-center gap-2 text-sm">
                                  <FileText className="h-4 w-4 text-gray-500" />
                                  <a href={attachment.url} className="text-blue-600 hover:underline">
                                    {attachment.name} ({attachment.size})
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Type your message here..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="min-h-[100px] mt-1"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Attach Files
                      </Button>
                      <Button onClick={handleSendMessage} disabled={newMessage.trim() === "" || isSubmitting}>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="evidence" className="space-y-4 pt-4">
              <div className="flex justify-end mb-2">
                <Button>
                  <Upload className="h-4 w-4 mr-2" />
                  Submit New Evidence
                </Button>
              </div>

              {dispute.evidence.map((evidence) => (
                <Card key={evidence.id}>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{evidence.title}</h3>
                          <Badge variant="outline" className="capitalize">
                            {evidence.submittedBy}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-500">{formatDate(evidence.submittedAt)}</p>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{evidence.description}</p>

                      {evidence.files.length > 0 && (
                        <div className="mt-3">
                          <p className="text-xs text-gray-500 mb-1">Files:</p>
                          <div className="space-y-2">
                            {evidence.files.map((file) => (
                              <div key={file.id} className="flex items-center gap-2 text-sm">
                                <FileText className="h-4 w-4 text-gray-500" />
                                <a href={file.url} className="text-blue-600 hover:underline">
                                  {file.name} ({file.size})
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="tech-frame">
            <CardHeader>
              <CardTitle>Dispute Timeline</CardTitle>
              <CardDescription>Current status: {dispute.status.replace("_", " ")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 p-2 rounded-full mt-0.5">
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Dispute Opened</h4>
                  <p className="text-sm text-gray-500">{formatDate(dispute.createdAt)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 p-2 rounded-full mt-0.5">
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Mediator Assigned</h4>
                  <p className="text-sm text-gray-500">{formatDate(dispute.updatedAt)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-2 rounded-full mt-0.5">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium">Evidence Review</h4>
                  <p className="text-sm text-gray-500">In progress</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-gray-100 text-gray-500 dark:bg-gray-800 p-2 rounded-full mt-0.5">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-500">Decision</h4>
                  <p className="text-sm text-gray-500">Pending</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-gray-100 text-gray-500 dark:bg-gray-800 p-2 rounded-full mt-0.5">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-500">Resolution</h4>
                  <p className="text-sm text-gray-500">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dispute Resolution Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Our dispute resolution process is designed to be fair and transparent. Both parties have the opportunity
                to present evidence and communicate their perspective.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                A mediator will review all evidence and communications to reach a fair resolution. The mediator may
                request additional information if needed.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Most disputes are resolved within 5-7 business days, depending on the complexity and responsiveness of
                both parties.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/resources/dispute-guide">Learn More About Disputes</Link>
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

