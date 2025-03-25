import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { VerificationBadge } from "@/components/verification-badge"

// Mock data for freelancers
const FREELANCERS = [
  {
    id: 1,
    name: "Emma Johnson",
    title: "UI/UX Designer",
    image: "/images/freelancer-1.jpg",
    rating: 4.9,
    reviewCount: 128,
    skills: ["UI Design", "UX Research", "Prototyping"],
    hourlyRate: 85,
    location: "San Francisco, CA",
    description:
      "I'm a passionate UI/UX designer with 7+ years of experience creating intuitive digital experiences across web and mobile platforms.",
    isVerified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Full Stack Developer",
    image: "/images/freelancer-2.jpg",
    rating: 4.8,
    reviewCount: 96,
    skills: ["React", "Node.js", "MongoDB"],
    hourlyRate: 95,
    location: "New York, NY",
    description:
      "Full stack developer specializing in React and Node.js with a focus on building scalable web applications and RESTful APIs.",
    isVerified: true,
  },
  {
    id: 3,
    name: "Sofia Rodriguez",
    title: "Digital Marketing Specialist",
    image: "/images/freelancer-3.jpg",
    rating: 4.7,
    reviewCount: 72,
    skills: ["SEO", "Content Strategy", "Social Media"],
    hourlyRate: 75,
    location: "Miami, FL",
    description:
      "Digital marketing expert helping businesses increase their online presence through SEO, content strategy, and targeted social media campaigns.",
    isVerified: false,
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Mobile App Developer",
    image: "/images/freelancer-4.jpg",
    rating: 4.9,
    reviewCount: 104,
    skills: ["iOS", "Android", "Flutter"],
    hourlyRate: 90,
    location: "Austin, TX",
    description:
      "Mobile app developer with expertise in iOS, Android, and cross-platform development using Flutter. Focus on creating seamless user experiences.",
    isVerified: true,
  },
  {
    id: 5,
    name: "Olivia Martinez",
    title: "Graphic Designer",
    image: "/images/freelancer-5.jpg",
    rating: 4.6,
    reviewCount: 88,
    skills: ["Brand Design", "Illustration", "Adobe Suite"],
    hourlyRate: 70,
    location: "Chicago, IL",
    description:
      "Creative graphic designer specializing in brand identity, illustration, and print design. Proficient in the entire Adobe Creative Suite.",
    isVerified: false,
  },
  {
    id: 6,
    name: "Daniel Park",
    title: "Backend Developer",
    image: "/images/freelancer-6.jpg",
    rating: 4.8,
    reviewCount: 115,
    skills: ["Python", "Django", "AWS"],
    hourlyRate: 85,
    location: "Seattle, WA",
    description:
      "Backend developer with expertise in Python and Django. Experienced in cloud architecture with AWS and database optimization.",
    isVerified: true,
  },
  {
    id: 7,
    name: "Emily Taylor",
    title: "Content Writer",
    image: "/images/freelancer-7.jpg",
    rating: 4.7,
    reviewCount: 93,
    skills: ["Copywriting", "Blog Writing", "SEO Writing"],
    hourlyRate: 60,
    location: "Portland, OR",
    description:
      "Professional content writer with experience in creating engaging blog posts, website copy, and SEO-optimized content for various industries.",
    isVerified: false,
  },
  {
    id: 8,
    name: "Robert Johnson",
    title: "DevOps Engineer",
    image: "/images/freelancer-8.jpg",
    rating: 4.9,
    reviewCount: 76,
    skills: ["Docker", "Kubernetes", "CI/CD"],
    hourlyRate: 100,
    location: "Denver, CO",
    description:
      "DevOps engineer focused on container orchestration, automation, and building robust CI/CD pipelines for software delivery.",
    isVerified: true,
  },
]

// Skill categories for filtering
const SKILL_CATEGORIES = [
  {
    name: "Development",
    skills: ["React", "Node.js", "Python", "Java", "Flutter", "iOS", "Android", "PHP", "Ruby", "AWS"],
  },
  {
    name: "Design",
    skills: [
      "UI Design",
      "UX Research",
      "Graphic Design",
      "Illustration",
      "Adobe Suite",
      "Figma",
      "Sketch",
      "Product Design",
    ],
  },
  {
    name: "Marketing",
    skills: ["SEO", "Content Strategy", "Social Media", "Email Marketing", "PPC", "Analytics", "Brand Strategy"],
  },
  {
    name: "Writing",
    skills: ["Copywriting", "Blog Writing", "Technical Writing", "Editing", "Proofreading", "Content Creation"],
  },
]

export default function BrowseFreelancersPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Browse Freelancers</h1>
      <p className="text-gray-500 mb-8">Find talented professionals for your next project</p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <Label htmlFor="search" className="mb-2 block">
                    Search
                  </Label>
                  <Input id="search" placeholder="Search by name or skill..." />
                </div>

                {/* Category */}
                <div>
                  <Label htmlFor="category" className="mb-2 block">
                    Category
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="writing">Writing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Skills */}
                <Accordion type="multiple" className="w-full">
                  {SKILL_CATEGORIES.map((category, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-sm font-medium hover:no-underline">
                        {category.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pt-1">
                          {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center space-x-2">
                              <Checkbox id={`skill-${index}-${skillIndex}`} />
                              <Label
                                htmlFor={`skill-${index}-${skillIndex}`}
                                className="text-sm font-normal cursor-pointer"
                              >
                                {skill}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Budget Range */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Hourly Rate</Label>
                    <span className="text-sm">$10 - $150+</span>
                  </div>
                  <Slider defaultValue={[10, 150]} max={150} min={10} step={5} />
                </div>

                {/* Location */}
                <div>
                  <Label htmlFor="location" className="mb-2 block">
                    Location
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Anywhere" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="anywhere">Anywhere</SelectItem>
                      <SelectItem value="north-america">North America</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="asia">Asia</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Rating */}
                <div className="space-y-2">
                  <Label className="block">Minimum Rating</Label>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <Label
                          htmlFor={`rating-${rating}`}
                          className="text-sm font-normal cursor-pointer flex items-center"
                        >
                          {Array(rating)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          <span className="ml-1">{`& Up`}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verification */}
                <div className="space-y-2">
                  <Label className="block">Verification</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="verified-only" />
                    <Label htmlFor="verified-only" className="text-sm font-normal cursor-pointer">
                      Verified freelancers only
                    </Label>
                  </div>
                </div>

                {/* Apply Filters Button */}
                <Button className="w-full">Apply Filters</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Freelancers Grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-500">{FREELANCERS.length} freelancers found</p>
            <div className="flex items-center gap-2">
              <Label htmlFor="sort" className="text-sm whitespace-nowrap">
                Sort by:
              </Label>
              <Select>
                <SelectTrigger id="sort" className="w-[180px]">
                  <SelectValue placeholder="Relevance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="rating-high">Rating: High to Low</SelectItem>
                  <SelectItem value="rate-low">Rate: Low to High</SelectItem>
                  <SelectItem value="rate-high">Rate: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FREELANCERS.map((freelancer) => (
              <Card key={freelancer.id} className="tech-frame overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16 rounded-md">
                        <AvatarImage
                          src={freelancer.image || `/placeholder.svg?height=64&width=64`}
                          alt={freelancer.name}
                        />
                        <AvatarFallback className="rounded-md">{freelancer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <Link href={`/profile/${freelancer.id}`} className="hover:text-blue-600">
                            <h3 className="font-semibold text-lg">{freelancer.name}</h3>
                          </Link>
                          {freelancer.isVerified && <VerificationBadge isVerified={freelancer.isVerified} />}
                        </div>
                        <p className="text-gray-500">{freelancer.title}</p>
                        <div className="flex items-center mt-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(freelancer.rating) ? "text-yellow-400" : "text-gray-300"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="ml-1 text-sm text-gray-500">
                              {freelancer.rating} ({freelancer.reviewCount})
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${freelancer.hourlyRate}/hr</p>
                        <p className="text-xs text-gray-500">{freelancer.location}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm line-clamp-2">{freelancer.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {freelancer.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="border-t p-4 flex justify-between items-center">
                    <Link
                      href={`/profile/${freelancer.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View Profile
                    </Link>
                    <Button size="sm">Contact</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

