import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { SidebarProvider } from "@/components/dashboard/sidebar-provider"

// Mock data for dashboard
const EARNINGS_DATA = [
  { month: "Jan", earnings: 1200 },
  { month: "Feb", earnings: 1800 },
  { month: "Mar", earnings: 2400 },
  { month: "Apr", earnings: 2000 },
  { month: "May", earnings: 2800 },
  { month: "Jun", earnings: 3600 },
  { month: "Jul", earnings: 4200 },
]

const ACTIVE_PROJECTS = [
  {
    id: "1",
    title: "E-commerce Website Redesign",
    client: "TechRetail Inc.",
    dueDate: "Jun 20, 2023",
    status: "In Progress",
    progress: 65,
    budget: "$4,500",
    milestones: [
      { title: "Wireframes", completed: true },
      { title: "Design System", completed: true },
      { title: "Homepage Design", completed: true },
      { title: "Product Pages", completed: false },
      { title: "Checkout Flow", completed: false },
    ],
  },
  {
    id: "2",
    title: "Mobile App Development",
    client: "HealthTrack",
    dueDate: "Aug 15, 2023",
    status: "In Progress",
    progress: 35,
    budget: "$10,000",
    milestones: [
      { title: "UI Design", completed: true },
      { title: "Frontend Development", completed: true },
      { title: "Backend Integration", completed: false },
      { title: "Testing", completed: false },
      { title: "Deployment", completed: false },
    ],
  },
  {
    id: "3",
    title: "Content Marketing Strategy",
    client: "GreenTech Solutions",
    dueDate: "Jul 5, 2023",
    status: "In Progress",
    progress: 80,
    budget: "$3,000",
    milestones: [
      { title: "Research", completed: true },
      { title: "Strategy Document", completed: true },
      { title: "Content Calendar", completed: true },
      { title: "Initial Articles", completed: true },
      { title: "Social Media Plan", completed: false },
    ],
  },
]

const RECENT_PROPOSALS = [
  {
    id: "1",
    title: "Brand Identity Design",
    client: "StartupX",
    submittedDate: "May 22, 2023",
    budget: "$2,500",
    status: "Pending",
  },
  {
    id: "2",
    title: "Corporate Website Development",
    client: "Global Industries",
    submittedDate: "May 18, 2023",
    budget: "$7,500",
    status: "Under Review",
  },
  {
    id: "3",
    title: "Social Media Management",
    client: "Fashion Boutique",
    submittedDate: "May 15, 2023",
    budget: "$1,500/month",
    status: "Rejected",
  },
]

const MESSAGES = [
  {
    id: "1",
    from: "Emma Johnson",
    project: "Website Redesign",
    message: "Hi there! I've reviewed your proposal and I'm interested in discussing further.",
    time: "10:32 AM",
    unread: true,
  },
  {
    id: "2",
    from: "Michael Chen",
    project: "Mobile App Development",
    message: "Thank you for the update. The progress looks great so far.",
    time: "Yesterday",
    unread: false,
  },
]

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <DashboardSidebar userType="freelancer" />
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold">Freelancer Dashboard</h1>
          <div className="flex gap-2">
            <Link href="/projects/find">
              <Button variant="outline">Find Projects</Button>
            </Link>
            <Link href="/proposals/create">
              <Button>Create Proposal</Button>
            </Link>
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24,500</div>
              <p className="text-xs text-green-500 mt-1 flex items-center">
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
                  className="h-3 w-3 mr-1"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Active Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-gray-500 mt-1">2 due this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Pending Proposals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-gray-500 mt-1">2 submitted this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Completion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-green-500 mt-1 flex items-center">
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
                  className="h-3 w-3 mr-1"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                +2% from last quarter
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Earnings Chart - Simplified to avoid potential issues */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Earnings Overview</CardTitle>
            <CardDescription>Your earnings over the last 7 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p>Earnings chart visualization</p>
                <p className="text-sm">Total earnings: $24,500</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects and Proposals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Active Projects</CardTitle>
                <CardDescription>Currently working projects and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {ACTIVE_PROJECTS.map((project) => (
                    <div key={project.id} className="border-b pb-6 last:border-0 last:pb-0">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <Link href={`/projects/${project.id}`} className="hover:text-blue-600">
                          <h3 className="font-semibold">{project.title}</h3>
                        </Link>
                        <Badge className="mt-1 md:mt-0 bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900 w-fit">
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex flex-col md:flex-row text-sm text-gray-500 gap-2 md:gap-6 mb-3">
                        <div>Client: {project.client}</div>
                        <div>Due: {project.dueDate}</div>
                        <div>Budget: {project.budget}</div>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Milestones</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.milestones.map((milestone, index) => (
                            <Badge
                              key={index}
                              variant={milestone.completed ? "default" : "outline"}
                              className={
                                milestone.completed
                                  ? "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-900"
                                  : ""
                              }
                            >
                              {milestone.title}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Tabs defaultValue="proposals" className="h-full flex flex-col">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="proposals">Proposals</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
              </TabsList>
              <TabsContent value="proposals" className="flex-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Recent Proposals</CardTitle>
                    <CardDescription>Status of your recent project proposals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {RECENT_PROPOSALS.map((proposal) => (
                        <div key={proposal.id} className="border-b pb-4 last:border-0 last:pb-0">
                          <div className="flex justify-between items-start">
                            <Link href={`/proposals/${proposal.id}`} className="hover:text-blue-600">
                              <h3 className="font-medium">{proposal.title}</h3>
                            </Link>
                            <Badge
                              className={`
                              ${proposal.status === "Pending" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" : ""}
                              ${proposal.status === "Under Review" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" : ""}
                              ${proposal.status === "Rejected" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" : ""}
                            `}
                            >
                              {proposal.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {proposal.client} • {proposal.budget}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">Submitted: {proposal.submittedDate}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Link href="/proposals">
                        <Button variant="outline" className="w-full">
                          View All Proposals
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="messages" className="flex-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Recent Messages</CardTitle>
                    <CardDescription>Latest communications from clients</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {MESSAGES.map((message) => (
                        <div key={message.id} className="border-b pb-4 last:border-0 last:pb-0">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium">{message.from}</h3>
                            <span className="text-xs text-gray-500">{message.time}</span>
                          </div>
                          <div className="text-xs text-gray-400 mt-1">Re: {message.project}</div>
                          <p className="text-sm mt-1 line-clamp-2">{message.message}</p>
                          {message.unread && (
                            <div className="mt-2">
                              <Badge className="bg-blue-600">New</Badge>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Link href="/messages">
                        <Button variant="outline" className="w-full">
                          View All Messages
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

