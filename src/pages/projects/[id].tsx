import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock project data
const PROJECT = {
  id: "1",
  title: "E-commerce Website Redesign",
  description:
    "We are looking for an experienced UI/UX designer to revamp our online store with a focus on improving the user experience and conversion rates. The current website is outdated and needs a modern, responsive design that aligns with our brand identity. The project includes redesigning all key pages, optimizing the checkout process, and creating a cohesive design system for future updates.",
  budget: "$3,000 - $5,000",
  duration: "4-6 weeks",
  postedDate: "May 15, 2023",
  deadline: "June 20, 2023",
  status: "Open",
  category: "Web Design",
  skills: ["Web Design", "UI/UX", "Shopify", "Responsive Design", "E-commerce", "Wireframing", "Prototyping"],
  attachments: [
    { name: "project_brief.pdf", size: "1.2 MB", url: "#" },
    { name: "brand_guidelines.pdf", size: "3.5 MB", url: "#" },
    { name: "current_website_analysis.pdf", size: "2.1 MB", url: "#" },
  ],
  client: {
    id: "client1",
    name: "TechRetail Inc.",
    image: "/images/client-logo.png",
    location: "New York, NY",
    memberSince: "Jan 2019",
    projectsPosted: 12,
    hireRate: "85%",
    totalSpent: "$45,000+",
  },
  proposals: 18,
  views: 156,
  questions: [
    {
      id: 1,
      question: "Do you have any specific design inspirations or competitor websites you admire?",
      answer:
        "Yes, we like the clean design approach of Allbirds and the product presentation style of Apple's website. We'll provide a more detailed list of inspirations in the initial briefing.",
    },
    {
      id: 2,
      question: "Will you need help with implementing the design on Shopify or just the design files?",
      answer:
        "Initially, we only need the design files (Figma or XD), but there might be an opportunity for implementation help as a separate project afterward.",
    },
    {
      id: 3,
      question: "Do you have user research or analytics data that can inform the redesign?",
      answer:
        "Yes, we have 12 months of Google Analytics data and have conducted customer surveys that we can share with the selected designer.",
    },
  ],
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the project data based on params.id
  const project = PROJECT

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-900">
                {project.status}
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                {project.category}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <div className="flex flex-wrap gap-4 mt-4 text-gray-500 text-sm">
              <div className="flex items-center">
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
                  className="h-4 w-4 mr-1"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                Posted: {project.postedDate}
              </div>
              <div className="flex items-center">
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
                  className="h-4 w-4 mr-1"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Duration: {project.duration}
              </div>
              <div className="flex items-center">
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
                  className="h-4 w-4 mr-1"
                >
                  <path d="M12 2v2" />
                  <path d="M12 14v8" />
                  <path d="M4 4l2 2" />
                  <path d="M18 18l2 2" />
                  <path d="M2 12h2" />
                  <path d="M14 12h8" />
                  <path d="M4 20l2-2" />
                  <path d="M18 6l2-2" />
                </svg>
                Deadline: {project.deadline}
              </div>
              <div className="flex items-center">
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
                  className="h-4 w-4 mr-1"
                >
                  <line x1="12" x2="12" y1="2" y2="6" />
                  <line x1="12" x2="12" y1="18" y2="22" />
                  <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
                  <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
                  <line x1="2" x2="6" y1="12" y2="12" />
                  <line x1="18" x2="22" y1="12" y2="12" />
                  <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
                  <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
                </svg>
                Budget: {project.budget}
              </div>
            </div>
          </div>

          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-3"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="attachments"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-3"
              >
                Attachments
              </TabsTrigger>
              <TabsTrigger
                value="questions"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-3"
              >
                Q&A
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="pt-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Project Description</h2>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{project.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Skills Required</h2>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="attachments" className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Project Attachments</h2>
              <div className="space-y-3">
                {project.attachments.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
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
                        className="h-6 w-6 mr-3 text-blue-600"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-gray-500">{file.size}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={file.url} download>
                        Download
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="questions" className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Questions & Answers</h2>
              <div className="space-y-6">
                {project.questions.map((qa) => (
                  <div key={qa.id} className="border-b pb-6 last:border-0">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-2 rounded-full">
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
                          className="h-5 w-5"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <line x1="12" x2="12.01" y1="17" y2="17" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{qa.question}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 mt-3 ml-8">
                      <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 p-2 rounded-full">
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
                          className="h-5 w-5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p>{qa.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <Button className="w-full mb-4">Submit a Proposal</Button>
              <Button variant="outline" className="w-full">
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
                  className="h-4 w-4 mr-2"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
                Save Project
              </Button>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Proposals</span>
                  <span>{project.proposals}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Views</span>
                  <span>{project.views}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">About the Client</h3>
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 mr-3">
                  <Image
                    src={project.client.image || `/placeholder.svg?height=100&width=100`}
                    alt={project.client.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{project.client.name}</h4>
                  <p className="text-sm text-gray-500">{project.client.location}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Member since</span>
                  <span>{project.client.memberSince}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Projects posted</span>
                  <span>{project.client.projectsPosted}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Hire rate</span>
                  <span>{project.client.hireRate}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Total spent</span>
                  <span>{project.client.totalSpent}</span>
                </div>
              </div>

              <div className="mt-4">
                <Link href={`/clients/${project.client.id}`}>
                  <Button variant="outline" className="w-full">
                    View Client Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

