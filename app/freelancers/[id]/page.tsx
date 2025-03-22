import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle, Clock, DollarSign, MapPin, MessageSquare, Star } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"

export default function FreelancerProfilePage({ params }: { params: { id: string } }) {
  const freelancerId = params.id

  // This would normally come from a database
  const freelancer = {
    id: freelancerId,
    name: "Sarah Johnson",
    title: "Full Stack Developer",
    avatar: "/placeholder.svg?height=150&width=150",
    hourlyRate: "$45/hr",
    location: "United States",
    memberSince: "Jan 2020",
    lastActive: "2 hours ago",
    bio: `
      <p>I'm a full stack developer with 5+ years of experience building web applications using React, Node.js, and MongoDB. I specialize in creating responsive, user-friendly interfaces and robust backend systems.</p>
      
      <p>My approach is to understand your business needs first, then deliver clean, maintainable code that solves your specific problems. I'm passionate about creating software that not only works well but is also a joy to use.</p>
    `,
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "Express", "Redux", "GraphQL", "AWS"],
    languages: [
      { name: "English", proficiency: "Native" },
      { name: "Spanish", proficiency: "Conversational" },
    ],
    education: [{ degree: "B.S. Computer Science", institution: "University of California, Berkeley", year: "2018" }],
    workHistory: [
      {
        title: "E-commerce Website Development",
        client: "Global Shop Inc.",
        completed: "Aug 2023",
        rating: 5,
        feedback:
          "Sarah was exceptional to work with. She delivered the project ahead of schedule and exceeded our expectations. Highly recommended!",
      },
      {
        title: "CRM System Integration",
        client: "Tech Solutions Ltd.",
        completed: "May 2023",
        rating: 4.8,
        feedback:
          "Great communication and technical skills. Sarah helped us integrate our CRM system with our website, which has significantly improved our workflow.",
      },
      {
        title: "Mobile App Development",
        client: "Startup Innovations",
        completed: "Feb 2023",
        rating: 5,
        feedback:
          "Sarah is a talented developer who understands both the technical and business aspects of a project. Would definitely hire again.",
      },
    ],
    stats: {
      jobSuccess: 98,
      completedJobs: 42,
      hoursWorked: 2150,
      onBudget: 100,
      onTime: 95,
      repeatHireRate: 85,
    },
    portfolio: [
      {
        title: "E-commerce Platform",
        image: "/placeholder.svg?height=200&width=300",
        description:
          "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      },
      {
        title: "Task Management App",
        image: "/placeholder.svg?height=200&width=300",
        description: "A collaborative task management application with real-time updates and team features.",
      },
      {
        title: "Healthcare Portal",
        image: "/placeholder.svg?height=200&width=300",
        description:
          "A secure patient portal for a healthcare provider, featuring appointment scheduling and medical record access.",
      },
    ],
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Content */}
        <div className="w-full md:w-2/3 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center md:items-start">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
                    <AvatarFallback>
                      {freelancer.name.split(" ")[0][0]}
                      {freelancer.name.split(" ")[1][0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="mt-4 flex flex-col items-center md:items-start">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="ml-1 font-medium">4.9</span>
                      <span className="text-muted-foreground ml-1">(38 reviews)</span>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
                <div className="flex-grow space-y-2 text-center md:text-left">
                  <div>
                    <h1 className="text-2xl font-bold">{freelancer.name}</h1>
                    <p className="text-muted-foreground">{freelancer.title}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{freelancer.location}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{freelancer.hourlyRate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>Last active: {freelancer.lastActive}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                    {freelancer.skills.slice(0, 5).map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                    {freelancer.skills.length > 5 && (
                      <Badge variant="outline">+{freelancer.skills.length - 5} more</Badge>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4 md:mt-0">
                  <Button>Hire Me</Button>
                  <Button variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="work-history">Work History</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div dangerouslySetInnerHTML={{ __html: freelancer.bio }} />
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {freelancer.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {freelancer.languages.map((language) => (
                        <li key={language.name} className="flex justify-between">
                          <span>{language.name}</span>
                          <span className="text-muted-foreground">{language.proficiency}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {freelancer.education.map((edu, index) => (
                      <li key={index}>
                        <div className="font-medium">{edu.degree}</div>
                        <div className="text-sm text-muted-foreground">
                          {edu.institution}, {edu.year}
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Work Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Job Success</div>
                      <div className="flex items-center gap-2">
                        <Progress value={freelancer.stats.jobSuccess} className="h-2" />
                        <span className="font-medium">{freelancer.stats.jobSuccess}%</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Completed Jobs</div>
                      <div className="font-medium">{freelancer.stats.completedJobs}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Hours Worked</div>
                      <div className="font-medium">{freelancer.stats.hoursWorked}+</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">On Budget</div>
                      <div className="flex items-center gap-2">
                        <Progress value={freelancer.stats.onBudget} className="h-2" />
                        <span className="font-medium">{freelancer.stats.onBudget}%</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">On Time</div>
                      <div className="flex items-center gap-2">
                        <Progress value={freelancer.stats.onTime} className="h-2" />
                        <span className="font-medium">{freelancer.stats.onTime}%</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Repeat Hire Rate</div>
                      <div className="flex items-center gap-2">
                        <Progress value={freelancer.stats.repeatHireRate} className="h-2" />
                        <span className="font-medium">{freelancer.stats.repeatHireRate}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="work-history" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Work History</CardTitle>
                  <CardDescription>Completed projects and client feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {freelancer.workHistory.map((work, index) => (
                      <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{work.title}</h3>
                            <p className="text-sm text-muted-foreground">Client: {work.client}</p>
                          </div>
                          <div className="text-sm text-muted-foreground">Completed {work.completed}</div>
                        </div>
                        <div className="flex items-center mt-2">
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${star <= Math.floor(work.rating) ? "fill-primary text-primary" : "text-muted"}`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm">{work.rating}</span>
                        </div>
                        <p className="mt-2 text-muted-foreground">"{work.feedback}"</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="portfolio" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio</CardTitle>
                  <CardDescription>Showcase of previous work</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {freelancer.portfolio.map((item, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={300}
                          height={200}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Client Reviews</CardTitle>
                  <CardDescription>Feedback from previous clients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {freelancer.workHistory.map((work, index) => (
                      <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{work.client}</h3>
                            <p className="text-sm text-muted-foreground">Project: {work.title}</p>
                          </div>
                          <div className="text-sm text-muted-foreground">{work.completed}</div>
                        </div>
                        <div className="flex items-center mt-2">
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${star <= Math.floor(work.rating) ? "fill-primary text-primary" : "text-muted"}`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm">{work.rating}</span>
                        </div>
                        <p className="mt-2 text-muted-foreground">"{work.feedback}"</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Current Availability</span>
                <Badge variant="outline" className="text-green-500">
                  Available
                </Badge>
              </div>
              <div className="flex justify-between">
                <span>Hours per week</span>
                <span>30+ hrs</span>
              </div>
              <div className="flex justify-between">
                <span>Response time</span>
                <span>Within a few hours</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Member since</span>
                <span>{freelancer.memberSince}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Invite to Job</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Similar Freelancers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map((similarFreelancer) => (
                <div key={similarFreelancer} className="flex items-center gap-3 border-b pb-4 last:border-0 last:pb-0">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt="Freelancer" />
                    <AvatarFallback>
                      {similarFreelancer === 1 ? "MC" : similarFreelancer === 2 ? "JD" : "AW"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <Link href={`/freelancers/${similarFreelancer}`} className="font-medium hover:text-primary">
                      {similarFreelancer === 1
                        ? "Michael Chen"
                        : similarFreelancer === 2
                          ? "Jessica Davis"
                          : "Alex Wilson"}
                    </Link>
                    <div className="text-sm text-muted-foreground">
                      {similarFreelancer === 1
                        ? "UI/UX Designer"
                        : similarFreelancer === 2
                          ? "Full Stack Developer"
                          : "Backend Developer"}
                    </div>
                    <div className="flex items-center mt-1">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span className="text-xs ml-1">
                        {similarFreelancer === 1 ? "4.7" : similarFreelancer === 2 ? "4.9" : "4.8"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Link href="/find-talent" className="text-sm text-primary hover:underline w-full text-center">
                View More Freelancers
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

