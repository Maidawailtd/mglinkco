"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Clock, DollarSign, MapPin, Star } from "lucide-react"
import Image from "next/image"
import { handleError } from "@/lib/error-handling"
import { Toast } from "@/components/ui/toast"

// Job category images mapping
const categoryImages: Record<string, string> = {
  "web-development": "/images/categories/web-development.png",
  design: "/images/categories/design.png",
  writing: "/images/categories/writing.png",
  marketing: "/images/categories/marketing.png",
  "mobile-development": "/images/categories/mobile-development.png",
  "data-analysis": "/images/categories/data-analysis.png",
  default: "/images/logo-mglink.png",
}

// Mock job data with categories
const jobListings = [
  {
    id: 1,
    title: "Full Stack Web Developer Needed for E-commerce Project",
    type: "Fixed Price",
    featured: true,
    category: "web-development",
    description:
      "Looking for an experienced full stack developer to build a custom e-commerce platform. The ideal candidate should have experience with React, Node.js, and payment gateway integration.",
    skills: ["React", "Node.js", "MongoDB", "Stripe"],
    budget: "$1,000 - $2,000",
    duration: "1-3 months",
    experience: "Intermediate",
    location: "Remote, Worldwide",
    postedDays: 2,
  },
  {
    id: 2,
    title: "UI/UX Designer for Mobile App Redesign",
    type: "Hourly Rate",
    featured: false,
    category: "design",
    description:
      "We're looking for a talented UI/UX designer to redesign our mobile application. You should have experience with modern design tools and mobile design patterns.",
    skills: ["Figma", "UI Design", "Mobile Design", "Prototyping"],
    budget: "$30 - $50 / hr",
    duration: "Less than 1 month",
    experience: "Expert",
    location: "Remote, Worldwide",
    postedDays: 1,
  },
  {
    id: 3,
    title: "Content Writer for Technical Blog Posts",
    type: "Fixed Price",
    featured: true,
    category: "writing",
    description:
      "Seeking a content writer with technical background to create blog posts about software development, cloud computing, and emerging technologies.",
    skills: ["Technical Writing", "SEO", "Blog Writing", "Research"],
    budget: "$200 - $400 per article",
    duration: "Ongoing",
    experience: "Intermediate",
    location: "Remote, Worldwide",
    postedDays: 3,
  },
  {
    id: 4,
    title: "Digital Marketing Specialist for SaaS Product",
    type: "Hourly Rate",
    featured: false,
    category: "marketing",
    description:
      "We need a digital marketing specialist to help promote our SaaS product. Experience with B2B marketing, SEO, and social media campaigns is required.",
    skills: ["Digital Marketing", "SEO", "Social Media", "Analytics"],
    budget: "$25 - $40 / hr",
    duration: "3+ months",
    experience: "Expert",
    location: "Remote, Worldwide",
    postedDays: 4,
  },
  {
    id: 5,
    title: "Mobile App Developer for iOS and Android",
    type: "Fixed Price",
    featured: false,
    category: "mobile-development",
    description:
      "Looking for a mobile developer to build a cross-platform app for both iOS and Android. Experience with React Native or Flutter is preferred.",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    budget: "$3,000 - $5,000",
    duration: "2-4 months",
    experience: "Expert",
    location: "Remote, Worldwide",
    postedDays: 2,
  },
]

export default function FindWorkPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
        {/* Filters */}
        <div className="w-full md:w-1/4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <CardDescription>Refine your job search</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Keywords</Label>
                <Input placeholder="e.g. web development" />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="design">Graphic Design</SelectItem>
                    <SelectItem value="writing">Content Writing</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                    <SelectItem value="mobile-development">Mobile Development</SelectItem>
                    <SelectItem value="data-analysis">Data Analysis</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Experience Level</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Hourly Rate ($)</Label>
                  <span className="text-sm text-muted-foreground">$10 - $100+</span>
                </div>
                <Slider defaultValue={[10, 100]} min={0} max={200} step={5} />
              </div>
              <div className="space-y-2">
                <Label>Project Length</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Duration</SelectItem>
                    <SelectItem value="short">Less than 1 month</SelectItem>
                    <SelectItem value="medium">1-3 months</SelectItem>
                    <SelectItem value="long">3+ months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>

        {/* Job Listings */}
        <div className="w-full md:w-3/4 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Available Jobs</h1>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="highest">Highest Budget</SelectItem>
                <SelectItem value="lowest">Lowest Budget</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Job Cards */}
          {jobListings.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="hidden sm:block">
                      <Image
                        src={categoryImages[job.category] || categoryImages.default}
                        alt={job.category}
                        width={60}
                        height={60}
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.type}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant={job.featured ? "default" : "secondary"}>{job.featured ? "Featured" : "New"}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{job.budget}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{job.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center col-span-2 md:col-span-3">
                    <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{job.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Posted {job.postedDays} days ago</div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => handleSaveJob(job.id)}>
                    Save
                  </Button>
                  <Link href={`/jobs/${job.id}`}>
                    <Button>View Details</Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mx-1">
              Previous
            </Button>
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button className="mx-1">2</Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="mx-1">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {children}
    </div>
  )
}

// Function to handle saving a job
function handleSaveJob(jobId: number) {
  try {
    // In a real app, this would make an API call to save the job
    console.log(`Job ${jobId} saved`)
    Toast({
      title: "Job Saved",
      description: "This job has been saved to your profile",
    })
  } catch (error) {
    handleError(error, "Failed to save job. Please try again.")
  }
}

