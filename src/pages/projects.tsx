import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Mock data for projects (using the same data from featured-projects.tsx)
const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    description:
      "Looking for an experienced UI/UX designer to revamp our online store with a focus on improving the user experience and conversion rates.",
    budget: "$3,000 - $5,000",
    duration: "4-6 weeks",
    skills: ["Web Design", "UI/UX", "Shopify"],
    proposals: 12,
    category: "Web Design",
  },
  {
    id: 2,
    title: "Mobile App Development for Fitness Tracking",
    description:
      "Need a developer to build a fitness tracking app for iOS and Android that includes workout plans, progress tracking, and social features.",
    budget: "$8,000 - $12,000",
    duration: "2-3 months",
    skills: ["iOS", "Android", "API Integration"],
    proposals: 24,
    category: "Mobile Development",
  },
  {
    id: 3,
    title: "Content Marketing Strategy",
    description:
      "Seeking a marketing expert to develop a comprehensive content strategy including blog posts, social media content, and email campaigns.",
    budget: "$2,000 - $4,000",
    duration: "Ongoing",
    skills: ["Content Strategy", "SEO", "Social Media"],
    proposals: 18,
    category: "Marketing",
  },
  {
    id: 4,
    title: "Brand Identity Design",
    description:
      "Looking for a talented graphic designer to create a complete brand identity including logo, color palette, typography, and brand guidelines.",
    budget: "$1,500 - $3,000",
    duration: "3-4 weeks",
    skills: ["Logo Design", "Branding", "Illustrator"],
    proposals: 31,
    category: "Graphic Design",
  },
  {
    id: 5,
    title: "WordPress Website Development",
    description:
      "Need a WordPress developer to build a custom website for a small business with e-commerce functionality and content management.",
    budget: "$2,500 - $4,000",
    duration: "4-6 weeks",
    skills: ["WordPress", "PHP", "WooCommerce"],
    proposals: 15,
    category: "Web Development",
  },
  {
    id: 6,
    title: "Social Media Management",
    description:
      "Looking for a social media manager to handle our Instagram, Facebook, and Twitter accounts with regular posting and engagement.",
    budget: "$800 - $1,200/month",
    duration: "Ongoing",
    skills: ["Social Media", "Content Creation", "Community Management"],
    proposals: 22,
    category: "Marketing",
  },
  {
    id: 7,
    title: "Video Editing for YouTube Channel",
    description:
      "Seeking a video editor to produce weekly content for our tech review YouTube channel, including intros, transitions, and effects.",
    budget: "$50 - $100/video",
    duration: "Ongoing",
    skills: ["Video Editing", "After Effects", "Premiere Pro"],
    proposals: 19,
    category: "Video Production",
  },
  {
    id: 8,
    title: "Frontend Development for SaaS Dashboard",
    description:
      "Need a React developer to build a responsive dashboard interface for our SaaS product with charts, tables, and interactive elements.",
    budget: "$5,000 - $8,000",
    duration: "6-8 weeks",
    skills: ["React", "TypeScript", "Data Visualization"],
    proposals: 27,
    category: "Web Development",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Find Projects</h1>
          <p className="text-gray-500">Discover opportunities that match your skills and interests</p>
        </div>
        <Link href="/projects/post">
          <Button>Post a Project</Button>
        </Link>
      </div>

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
                  <Input id="search" placeholder="Search projects..." />
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
                      <SelectItem value="web-design">Web Design</SelectItem>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="mobile-development">Mobile Development</SelectItem>
                      <SelectItem value="design">Graphic Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="writing">Writing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget Range */}
                <div>
                  <Label htmlFor="budget" className="mb-2 block">
                    Budget Range
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Budget</SelectItem>
                      <SelectItem value="under-1000">Under $1,000</SelectItem>
                      <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                      <SelectItem value="over-10000">Over $10,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <Label className="block mb-2">Project Type</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="fixed-price" />
                      <Label htmlFor="fixed-price" className="text-sm font-normal cursor-pointer">
                        Fixed Price
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hourly" />
                      <Label htmlFor="hourly" className="text-sm font-normal cursor-pointer">
                        Hourly Rate
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <Label htmlFor="duration" className="mb-2 block">
                    Duration
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Duration</SelectItem>
                      <SelectItem value="less-than-1-week">Less than 1 week</SelectItem>
                      <SelectItem value="1-4-weeks">1-4 weeks</SelectItem>
                      <SelectItem value="1-3-months">1-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="more-than-6-months">More than 6 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Apply Filters Button */}
                <Button className="w-full">Apply Filters</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-500">{PROJECTS.length} projects found</p>
            <div className="flex items-center gap-2">
              <Label htmlFor="sort" className="text-sm whitespace-nowrap">
                Sort by:
              </Label>
              <Select>
                <SelectTrigger id="sort" className="w-[180px]">
                  <SelectValue placeholder="Newest First" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="budget-high">Budget: High to Low</SelectItem>
                  <SelectItem value="budget-low">Budget: Low to High</SelectItem>
                  <SelectItem value="proposals">Fewest Proposals</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {PROJECTS.map((project) => (
              <Card key={project.id} className="tech-frame">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                      {project.category}
                    </Badge>
                  </div>
                  <Link href={`/projects/${project.id}`}>
                    <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-gray-500 text-sm mb-4">{project.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Budget</p>
                      <p className="font-medium">{project.budget}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Timeline</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Skills Required</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-4">
                  <div className="flex items-center justify-between w-full text-sm">
                    <span className="text-gray-500">{project.proposals} proposals</span>
                    <Link href={`/projects/${project.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                      View Project
                    </Link>
                  </div>
                </CardFooter>
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

