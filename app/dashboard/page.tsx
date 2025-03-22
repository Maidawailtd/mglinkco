"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, Briefcase, CheckCircle, Clock, DollarSign, MessageSquare, Star, User } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/hooks/use-auth"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { handleError } from "@/lib/error-handling"
import { JobSuggestions } from "@/components/job-suggestions"
import { ApplicationTracker } from "@/components/application-tracker"

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const [dashboardData, setDashboardData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeView, setActiveView] = useState<"freelancer" | "client">("freelancer")

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true)
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock dashboard data
        setDashboardData({
          freelancer: {
            stats: {
              totalEarnings: "$4,550.00",
              activeProjects: 3,
              successRate: "94%",
              profileViews: 142,
            },
            activeProjects: [
              {
                title: "E-commerce Website Redesign",
                client: "Global Shop Inc.",
                progress: 75,
                dueDate: "Oct 15, 2023",
                budget: "$2,500",
              },
              {
                title: "Mobile App Development",
                client: "TechStart",
                progress: 40,
                dueDate: "Nov 30, 2023",
                budget: "$4,000",
              },
              {
                title: "Content Management System",
                client: "Media Group",
                progress: 90,
                dueDate: "Oct 5, 2023",
                budget: "$1,800",
              },
            ],
            proposals: [
              {
                title: "WordPress Website Development",
                status: "pending",
                date: "Sep 28, 2023",
                bid: "$1,200",
              },
              {
                title: "Logo Design for Startup",
                status: "viewed",
                date: "Sep 25, 2023",
                bid: "$350",
              },
              {
                title: "Social Media Marketing Campaign",
                status: "rejected",
                date: "Sep 20, 2023",
                bid: "$800",
              },
            ],
          },
          client: {
            stats: {
              totalSpent: "$12,450.00",
              activeJobs: 4,
              totalHires: 18,
              avgRating: "4.8",
            },
            activeJobs: [
              {
                title: "Senior React Developer",
                applicants: 12,
                posted: "Sep 15, 2023",
                budget: "$30-50/hr",
                status: "active",
              },
              {
                title: "Graphic Designer for Brand Identity",
                applicants: 8,
                posted: "Sep 20, 2023",
                budget: "$1,500",
                status: "active",
              },
              {
                title: "Content Writer for Blog Posts",
                applicants: 15,
                posted: "Sep 10, 2023",
                budget: "$25/hr",
                status: "interviewing",
              },
              {
                title: "Social Media Manager",
                applicants: 6,
                posted: "Sep 25, 2023",
                budget: "$1,200/mo",
                status: "active",
              },
            ],
            hiredFreelancers: [
              {
                name: "Alex Johnson",
                role: "Full Stack Developer",
                project: "E-commerce Website",
                rating: 5,
                status: "active",
              },
              {
                name: "Sarah Miller",
                role: "UI/UX Designer",
                project: "Mobile App Redesign",
                rating: 4.8,
                status: "active",
              },
              {
                name: "Michael Chen",
                role: "Content Writer",
                project: "Blog Articles",
                rating: 4.5,
                status: "active",
              },
            ],
          },
        })
      } catch (error) {
        handleError(error, "Failed to load dashboard data")
      } finally {
        setIsLoading(false)
      }
    }

    if (!loading && user) {
      fetchDashboardData()
      // Set the initial view based on user role
      if (user.role === "client") {
        setActiveView("client")
      }
    }
  }, [loading, user])

  if (loading || isLoading) {
    return (
      <div className="container flex items-center justify-center min-h-[calc(100vh-200px)]">
        <LoadingSpinner size={40} text="Loading dashboard..." />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="container py-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Authentication Required</h1>
        <p className="mb-6">Please log in to access your dashboard</p>
        <Button asChild>
          <Link href="/login">Log In</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user.name}! Here's what's happening with your projects.
          </p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="outline" size="icon">
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">Messages</span>
          </Button>
          <Link href="/post-job">
            <Button>Post a Job</Button>
          </Link>
        </div>
      </div>

      <Tabs
        defaultValue={user.role === "client" ? "client" : "freelancer"}
        value={activeView}
        onValueChange={(value) => setActiveView(value as "freelancer" | "client")}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="freelancer">Freelancer View</TabsTrigger>
          <TabsTrigger value="client">Client View</TabsTrigger>
        </TabsList>

        {/* Freelancer Dashboard */}
        <TabsContent value="freelancer" className="space-y-6">
          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData?.freelancer.stats.totalEarnings}</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData?.freelancer.stats.activeProjects}</div>
                <p className="text-xs text-muted-foreground">2 due this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData?.freelancer.stats.successRate}</div>
                <p className="text-xs text-muted-foreground">+2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData?.freelancer.stats.profileViews}</div>
                <p className="text-xs text-muted-foreground">+12% from last week</p>
              </CardContent>
            </Card>
          </div>

          {/* Job Suggestions and Application Tracker */}
          <div className="grid gap-6 md:grid-cols-2">
            <JobSuggestions userSkills={["React", "JavaScript", "Node.js"]} limit={3} />
            <ApplicationTracker />
          </div>

          {/* Active Projects */}
          <Card>
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
              <CardDescription>Your ongoing projects and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {dashboardData?.freelancer.activeProjects.map((project: any, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="space-y-1">
                      <div className="font-medium">{project.title}</div>
                      <div className="text-sm text-muted-foreground">Client: {project.client}</div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                      <div className="flex items-center gap-2 min-w-[140px]">
                        <Progress value={project.progress} className="h-2 w-[100px]" />
                        <span className="text-sm font-medium">{project.progress}%</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground min-w-[120px]">
                        <Clock className="h-4 w-4" />
                        <span>Due {project.dueDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground min-w-[80px]">
                        <DollarSign className="h-4 w-4" />
                        <span>{project.budget}</span>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/projects/${index + 1}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Proposals */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Proposals</CardTitle>
              <CardDescription>Track your submitted proposals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dashboardData?.freelancer.proposals.map((proposal: any, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="space-y-1">
                      <div className="font-medium">{proposal.title}</div>
                      <div className="text-sm text-muted-foreground">Submitted: {proposal.date}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>{proposal.bid}</span>
                      </div>
                      <Badge
                        variant={
                          proposal.status === "pending"
                            ? "outline"
                            : proposal.status === "viewed"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                      </Badge>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/proposals/${index + 1}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Client Dashboard */}
        <TabsContent value="client" className="space-y-6">
          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData?.client.stats.totalSpent}</div>
                <p className="text-xs text-muted-foreground">+5.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData?.client.stats.activeJobs}</div>
                <p className="text-xs text-muted-foreground">2 ending this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Hires</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData?.client.stats.totalHires}</div>
                <p className="text-xs text-muted-foreground">+3 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Rating Given</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData?.client.stats.avgRating}</div>
                <p className="text-xs text-muted-foreground">From 15 reviews</p>
              </CardContent>
            </Card>
          </div>

          {/* Active Jobs */}
          <Card>
            <CardHeader>
              <CardTitle>Active Jobs</CardTitle>
              <CardDescription>Your currently open positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {dashboardData?.client.activeJobs.map((job: any, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="space-y-1">
                      <div className="font-medium">{job.title}</div>
                      <div className="text-sm text-muted-foreground">Posted: {job.posted}</div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground min-w-[100px]">
                        <User className="h-4 w-4" />
                        <span>{job.applicants} applicants</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground min-w-[100px]">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.budget}</span>
                      </div>
                      <Badge variant={job.status === "active" ? "default" : "secondary"}>
                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                      </Badge>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/jobs/${index + 1}`}>View</Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/jobs/${index + 1}/edit`}>Edit</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hired Freelancers */}
          <Card>
            <CardHeader>
              <CardTitle>Hired Freelancers</CardTitle>
              <CardDescription>Your current team of freelancers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {dashboardData?.client.hiredFreelancers.map((freelancer: any, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={freelancer.name} />
                        <AvatarFallback>
                          {freelancer.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{freelancer.name}</div>
                        <div className="text-sm text-muted-foreground">{freelancer.role}</div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                      <div className="text-sm min-w-[150px]">
                        Project: <span className="text-muted-foreground">{freelancer.project}</span>
                      </div>
                      <div className="flex items-center gap-1 min-w-[80px]">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span>{freelancer.rating}</span>
                      </div>
                      <Badge variant="outline">Active</Badge>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/messages/user/${index + 1}`}>Message</Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/freelancers/${index + 1}`}>View</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

