"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { handleError } from "@/lib/error-handling"
import Link from "next/link"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("jobs")
  const [results, setResults] = useState({
    jobs: [],
    freelancers: [],
    projects: [],
  })

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true)
        // Simulate API call with timeout
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock search results
        setResults({
          jobs: Array.from({ length: 5 }, (_, i) => ({
            id: i + 1,
            title: `${query} Developer Position ${i + 1}`,
            company: `Company ${i + 1}`,
            location: "Remote",
            salary: `$${70 + i * 10}-${90 + i * 10}/hr`,
            tags: ["Remote", "Full-time", query],
          })),
          freelancers: Array.from({ length: 4 }, (_, i) => ({
            id: i + 1,
            name: `Freelancer ${i + 1}`,
            title: `${query} Expert`,
            rating: 4.5 + (i % 2) * 0.3,
            hourlyRate: `$${40 + i * 5}/hr`,
            skills: [query, "JavaScript", "React", "Node.js"].slice(0, 3 + (i % 2)),
          })),
          projects: Array.from({ length: 3 }, (_, i) => ({
            id: i + 1,
            title: `${query} Project ${i + 1}`,
            client: `Client ${i + 1}`,
            budget: `$${1000 + i * 500}`,
            duration: `${1 + i} month${i > 0 ? "s" : ""}`,
            status: i === 0 ? "In Progress" : "Completed",
          })),
        })
      } catch (error) {
        handleError(error, "Failed to fetch search results")
      } finally {
        setLoading(false)
      }
    }

    if (query) {
      fetchResults()
    } else {
      setLoading(false)
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (searchQuery.trim()) {
        const url = new URL(window.location.href)
        url.searchParams.set("q", searchQuery)
        window.history.pushState({}, "", url.toString())

        // Trigger the search again
        setLoading(true)
        // The useEffect will handle the actual search
      }
    } catch (error) {
      handleError(error, "Failed to perform search")
    }
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Search Results</h1>
          <p className="text-muted-foreground">
            {query ? `Showing results for "${query}"` : "Enter a search term to find jobs, freelancers, or projects"}
          </p>
        </div>

        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for jobs, freelancers, or projects..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit">Search</Button>
        </form>

        {loading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner size={32} text="Searching..." />
          </div>
        ) : query ? (
          <Tabs defaultValue="jobs" value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="jobs">Jobs ({results.jobs.length})</TabsTrigger>
                <TabsTrigger value="freelancers">Freelancers ({results.freelancers.length})</TabsTrigger>
                <TabsTrigger value="projects">Projects ({results.projects.length})</TabsTrigger>
              </TabsList>

              <Select defaultValue="relevance">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="highest">Highest Rated</SelectItem>
                  <SelectItem value="lowest">Lowest Price</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <TabsContent value="jobs" className="space-y-4 mt-6">
              {results.jobs.length > 0 ? (
                results.jobs.map((job: any) => (
                  <Card key={job.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle>
                            <Link href={`/jobs/${job.id}`} className="hover:text-primary">
                              {job.title}
                            </Link>
                          </CardTitle>
                          <CardDescription>
                            {job.company} • {job.location}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{job.salary}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {job.tags.map((tag: string) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No job results found for "{query}"</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="freelancers" className="space-y-4 mt-6">
              {results.freelancers.length > 0 ? (
                results.freelancers.map((freelancer: any) => (
                  <Card key={freelancer.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle>
                            <Link href={`/freelancers/${freelancer.id}`} className="hover:text-primary">
                              {freelancer.name}
                            </Link>
                          </CardTitle>
                          <CardDescription>{freelancer.title}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{freelancer.hourlyRate}</div>
                          <div className="text-sm text-muted-foreground">★ {freelancer.rating.toFixed(1)}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {freelancer.skills.map((skill: string) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No freelancer results found for "{query}"</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="projects" className="space-y-4 mt-6">
              {results.projects.length > 0 ? (
                results.projects.map((project: any) => (
                  <Card key={project.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle>
                            <Link href={`/projects/${project.id}`} className="hover:text-primary">
                              {project.title}
                            </Link>
                          </CardTitle>
                          <CardDescription>Client: {project.client}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{project.budget}</div>
                          <div className="text-sm text-muted-foreground">Duration: {project.duration}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Badge variant={project.status === "In Progress" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No project results found for "{query}"</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Enter a search term to find jobs, freelancers, or projects</p>
          </div>
        )}
      </div>
    </div>
  )
}

