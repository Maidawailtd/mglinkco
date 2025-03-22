"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, DollarSign } from "lucide-react"
import Link from "next/link"
import { handleError } from "@/lib/error-handling"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
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

type JobSuggestion = {
  id: number
  title: string
  category: string
  budget: string
  skills: string[]
}

interface JobSuggestionsProps {
  userSkills?: string[]
  limit?: number
  title?: string
  description?: string
}

export function JobSuggestions({
  userSkills = ["React", "JavaScript", "Node.js"],
  limit = 3,
  title = "Recommended Jobs",
  description = "Based on your skills and preferences",
}: JobSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<JobSuggestion[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        setLoading(true)
        // In a real app, this would be an API call with the user's skills
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock data
        const mockSuggestions: JobSuggestion[] = [
          {
            id: 1,
            title: "Frontend Developer for React Application",
            category: "web-development",
            budget: "$2,000 - $3,000",
            skills: ["React", "JavaScript", "CSS", "Redux"],
          },
          {
            id: 2,
            title: "Full Stack Developer for E-commerce Site",
            category: "web-development",
            budget: "$3,500 - $5,000",
            skills: ["React", "Node.js", "MongoDB", "Express"],
          },
          {
            id: 3,
            title: "React Native Mobile App Developer",
            category: "mobile-development",
            budget: "$4,000 - $6,000",
            skills: ["React Native", "JavaScript", "Mobile Development"],
          },
          {
            id: 4,
            title: "MERN Stack Developer for SaaS Platform",
            category: "web-development",
            budget: "$30-50/hr",
            skills: ["MongoDB", "Express", "React", "Node.js"],
          },
          {
            id: 5,
            title: "JavaScript Developer for Financial Dashboard",
            category: "web-development",
            budget: "$2,500 - $4,000",
            skills: ["JavaScript", "D3.js", "React", "Data Visualization"],
          },
        ]

        // Filter based on user skills (in a real app, this would be done server-side)
        const filteredSuggestions = mockSuggestions
          .filter((job) => job.skills.some((skill) => userSkills.includes(skill)))
          .slice(0, limit)

        setSuggestions(filteredSuggestions)
      } catch (error) {
        handleError(error, "Failed to load job suggestions")
      } finally {
        setLoading(false)
      }
    }

    fetchSuggestions()
  }, [userSkills, limit])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <LoadingSpinner size={24} text="Loading suggestions..." />
        </CardContent>
      </Card>
    )
  }

  if (suggestions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-6">
          <p className="text-muted-foreground">No job suggestions found. Try updating your skills profile.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestions.map((job) => (
          <div key={job.id} className="flex gap-3 border-b pb-4 last:border-0 last:pb-0">
            <div className="hidden sm:block flex-shrink-0">
              <Image
                src={categoryImages[job.category] || categoryImages.default}
                alt={job.category}
                width={40}
                height={40}
                className="rounded-md object-cover"
              />
            </div>
            <div className="flex-grow">
              <Link href={`/jobs/${job.id}`} className="font-medium hover:text-primary">
                {job.title}
              </Link>
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <Briefcase className="h-3 w-3" />
                <span>{job.category.replace("-", " ")}</span>
                <span>•</span>
                <DollarSign className="h-3 w-3" />
                <span>{job.budget}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

