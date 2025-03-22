"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase, Calendar, Clock, DollarSign, MapPin, Star, User, Bookmark, Share2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { handleError } from "@/lib/error-handling"
import { toast } from "@/hooks/use-toast"
import Image from "next/image"

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

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const jobId = params.id
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [coverLetter, setCoverLetter] = useState("")
  const [bidAmount, setBidAmount] = useState("")
  const [estimatedDuration, setEstimatedDuration] = useState("")
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  // This would normally come from a database
  const job = {
    id: jobId,
    title: "Full Stack Web Developer Needed for E-commerce Project",
    description: `
      <p>We are looking for an experienced full stack developer to build a custom e-commerce platform for our growing business. The ideal candidate should have experience with React, Node.js, and payment gateway integration.</p>
      
      <h3>Requirements:</h3>
      <ul>
        <li>5+ years of experience in web development</li>
        <li>Strong proficiency in React.js and Node.js</li>
        <li>Experience with MongoDB or similar NoSQL databases</li>
        <li>Knowledge of payment gateway integration (Stripe preferred)</li>
        <li>Understanding of e-commerce workflows and best practices</li>
        <li>Excellent communication skills</li>
      </ul>
      
      <h3>Responsibilities:</h3>
      <ul>
        <li>Design and develop a custom e-commerce platform</li>
        <li>Implement secure payment processing</li>
        <li>Create an intuitive admin dashboard</li>
        <li>Ensure mobile responsiveness</li>
        <li>Optimize for performance and scalability</li>
        <li>Provide documentation and support</li>
      </ul>
    `,
    budget: "$1,000 - $2,000",
    duration: "1-3 months",
    postedDate: "Sep 28, 2023",
    proposals: 12,
    category: "web-development",
    skills: ["React", "Node.js", "MongoDB", "Stripe", "JavaScript", "E-commerce"],
    experienceLevel: "Intermediate",
    location: "Remote, Worldwide",
    client: {
      name: "Global Shop Inc.",
      location: "United States",
      memberSince: "Jan 2020",
      totalSpent: "$25,000+",
      projectsPosted: 18,
      hireRate: "85%",
      rating: 4.8,
      reviews: 15,
      verified: true,
    },
  }

  const handleSubmitProposal = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!coverLetter.trim()) {
      toast({
        title: "Error",
        description: "Please provide a cover letter",
        variant: "destructive",
      })
      return
    }

    if (!bidAmount.trim()) {
      toast({
        title: "Error",
        description: "Please enter your bid amount",
        variant: "destructive",
      })
      return
    }

    if (!estimatedDuration.trim()) {
      toast({
        title: "Error",
        description: "Please provide an estimated duration",
        variant: "destructive",
      })
      return
    }

    try {
      setIsSubmitting(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Success",
        description: "Your proposal has been submitted successfully!",
      })

      // Reset form
      setCoverLetter("")
      setBidAmount("")
      setEstimatedDuration("")
      setShowApplicationForm(false)
    } catch (error) {
      handleError(error, "Failed to submit proposal. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSaveJob = () => {
    try {
      // In a real app, this would make an API call to save the job
      toast({
        title: "Job Saved",
        description: "This job has been saved to your profile",
      })
    } catch (error) {
      handleError(error, "Failed to save job. Please try again.")
    }
  }

  const handleShareJob = () => {
    try {
      // In a real app, this would open a share dialog or copy link
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link Copied",
        description: "Job link has been copied to clipboard",
      })
    } catch (error) {
      handleError(error, "Failed to share job. Please try again.")
    }
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="hidden sm:block">
                    <Image
                      src={categoryImages[job.category] || categoryImages.default}
                      alt={job.category}
                      width={80}
                      height={80}
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {job.category}
                    </CardDescription>
                  </div>
                </div>
                <Badge>Featured</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Budget</span>
                  <div className="flex items-center mt-1">
                    <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="font-medium">{job.budget}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Duration</span>
                  <div className="flex items-center mt-1">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="font-medium">{job.duration}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Experience</span>
                  <div className="flex items-center mt-1">
                    <User className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="font-medium">{job.experienceLevel}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground">Location</span>
                  <div className="flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="font-medium">{job.location}</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Job Description</h3>
                <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: job.description }} />
              </div>

              <div>
                <h3 className="font-medium mb-2">Skills Required</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Posted {job.postedDate}</span>
                </div>
                <div>{job.proposals} proposals</div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {!showApplicationForm ? (
                <>
                  <Button onClick={() => setShowApplicationForm(true)}>Submit a Proposal</Button>
                  <Button variant="outline" onClick={handleSaveJob}>
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save Job
                  </Button>
                  <Button variant="outline" onClick={handleShareJob}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </>
              ) : (
                <Button variant="outline" onClick={() => setShowApplicationForm(false)}>
                  Cancel Application
                </Button>
              )}
            </CardFooter>
          </Card>

          {showApplicationForm && (
            <Card>
              <CardHeader>
                <CardTitle>Submit Your Proposal</CardTitle>
                <CardDescription>Tell the client why you're the best fit for this job</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmitProposal}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bid-amount">Your Bid (USD)</Label>
                    <Input
                      id="bid-amount"
                      type="text"
                      placeholder="e.g. $1,500"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      disabled={isSubmitting}
                    />
                    <p className="text-xs text-muted-foreground">Client's budget: {job.budget}</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="estimated-duration">Estimated Duration</Label>
                    <Input
                      id="estimated-duration"
                      type="text"
                      placeholder="e.g. 2 weeks"
                      value={estimatedDuration}
                      onChange={(e) => setEstimatedDuration(e.target.value)}
                      disabled={isSubmitting}
                    />
                    <p className="text-xs text-muted-foreground">Client's expectation: {job.duration}</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cover-letter">Cover Letter</Label>
                    <Textarea
                      id="cover-letter"
                      placeholder="Introduce yourself and explain why you're a good fit for this job"
                      className="min-h-[200px]"
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Proposal"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Activity on this job</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="proposals">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="proposals">Proposals</TabsTrigger>
                  <TabsTrigger value="hired">Hired</TabsTrigger>
                </TabsList>
                <TabsContent value="proposals" className="pt-4">
                  <div className="text-center py-6">
                    <p className="text-muted-foreground">Submit a proposal to see other freelancers' bids</p>
                    {!showApplicationForm && (
                      <Button className="mt-4" onClick={() => setShowApplicationForm(true)}>
                        Submit a Proposal
                      </Button>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="hired" className="pt-4">
                  <div className="text-center py-6">
                    <p className="text-muted-foreground">No freelancers have been hired for this job yet</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About the Client</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt={job.client.name} />
                  <AvatarFallback>
                    {job.client.name.split(" ")[0][0]}
                    {job.client.name.split(" ")[1][0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium flex items-center">
                    {job.client.name}
                    {job.client.verified && (
                      <Badge variant="outline" className="ml-2">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{job.client.location}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Member Since</div>
                  <div>{job.client.memberSince}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Total Spent</div>
                  <div>{job.client.totalSpent}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Projects Posted</div>
                  <div>{job.client.projectsPosted}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Hire Rate</div>
                  <div>{job.client.hireRate}</div>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= Math.floor(job.client.rating) ? "fill-primary text-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm">
                    {job.client.rating} ({job.client.reviews} reviews)
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Similar Jobs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map((similarJob) => (
                <div key={similarJob} className="border-b pb-4 last:border-0 last:pb-0">
                  <Link href={`/jobs/${similarJob}`} className="font-medium hover:text-primary">
                    {similarJob === 1
                      ? "React Developer for E-commerce Dashboard"
                      : similarJob === 2
                        ? "MERN Stack Developer Needed"
                        : "Full Stack Developer for Startup"}
                  </Link>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <DollarSign className="h-3 w-3" />
                    <span>
                      {similarJob === 1 ? "$1,500 - $3,000" : similarJob === 2 ? "$30-50/hr" : "$2,000 - $4,000"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {["React", "Node.js", similarJob === 1 ? "Redux" : similarJob === 2 ? "MongoDB" : "AWS"].map(
                      (skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Link href="/find-work" className="text-sm text-primary hover:underline w-full text-center">
                View More Jobs
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

