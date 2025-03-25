import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock guides data
const GUIDES = [
  {
    id: 1,
    title: "Getting Started as a Freelancer",
    description: "Learn how to set up your profile, find your first clients, and start your freelancing journey.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Freelancer",
    readTime: "8 min read",
    date: "May 15, 2023",
  },
  {
    id: 2,
    title: "How to Write Winning Proposals",
    description: "Tips and strategies to create proposals that stand out and win more projects.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Freelancer",
    readTime: "10 min read",
    date: "June 2, 2023",
  },
  {
    id: 3,
    title: "Hiring Your First Freelancer",
    description: "A comprehensive guide for businesses looking to hire freelancers for the first time.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Client",
    readTime: "12 min read",
    date: "April 28, 2023",
  },
  {
    id: 4,
    title: "Managing Remote Freelance Teams",
    description: "Best practices for coordinating and managing freelancers across different time zones.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Client",
    readTime: "15 min read",
    date: "May 10, 2023",
  },
  {
    id: 5,
    title: "Setting the Right Rates for Your Services",
    description: "How to price your freelance services competitively while ensuring profitability.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Freelancer",
    readTime: "9 min read",
    date: "June 15, 2023",
  },
  {
    id: 6,
    title: "Creating an Effective Project Brief",
    description: "Learn how to write clear project briefs that attract the right freelancers.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Client",
    readTime: "7 min read",
    date: "May 22, 2023",
  },
]

export default function GuidesPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Freelancing Guides</h1>
          <p className="text-gray-500">Helpful resources to navigate the world of freelancing</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">All Guides</Button>
          <Button variant="outline">For Freelancers</Button>
          <Button variant="outline">For Clients</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GUIDES.map((guide) => (
          <Card key={guide.id} className="tech-frame overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={guide.image || "/placeholder.svg"} alt={guide.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <Badge
                  className={
                    guide.category === "Freelancer"
                      ? "bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900"
                      : "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-900"
                  }
                >
                  {guide.category}
                </Badge>
                <span className="text-xs text-gray-500">{guide.readTime}</span>
              </div>
              <CardTitle className="text-xl">{guide.title}</CardTitle>
              <CardDescription>{guide.description}</CardDescription>
            </CardHeader>
            <CardFooter className="border-t p-4 flex justify-between">
              <span className="text-xs text-gray-500">{guide.date}</span>
              <Link href={`/resources/guides/${guide.id}`}>
                <Button variant="outline" size="sm">
                  Read Guide
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-950 p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our support team is here to help. Reach out with any questions about freelancing or using our platform.
            </p>
            <Link href="/contact">
              <Button>Contact Support</Button>
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-square">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Support team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

