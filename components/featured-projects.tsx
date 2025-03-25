import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for featured projects
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
]

export default function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {PROJECTS.map((project) => (
        <Card key={project.id} className="flex flex-col h-full">
          <CardContent className="flex-grow p-6">
            <div className="mb-2">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                {project.category}
              </Badge>
            </div>
            <Link href={`/projects/${project.id}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">{project.title}</h3>
            </Link>
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.description}</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-gray-500">Budget</p>
                <p className="font-medium">{project.budget}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Timeline</p>
                <p className="font-medium">{project.duration}</p>
              </div>
            </div>
            <div className="mt-4">
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
  )
}

