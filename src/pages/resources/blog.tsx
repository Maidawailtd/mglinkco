import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock blog posts data
const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Tips for Freelancers to Stay Productive While Working Remotely",
    excerpt:
      "Working remotely offers flexibility but comes with challenges. Learn how to maintain productivity and work-life balance.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Productivity",
    date: "June 15, 2023",
    readTime: "8 min read",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Content Strategist",
    },
  },
  {
    id: 2,
    title: "How to Build a Standout Freelance Portfolio That Wins Clients",
    excerpt:
      "Your portfolio is your most powerful marketing tool. Discover how to showcase your work to attract high-quality clients.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Marketing",
    date: "June 10, 2023",
    readTime: "10 min read",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "UX Designer",
    },
  },
  {
    id: 3,
    title: "The Future of Freelancing: Trends to Watch in 2023",
    excerpt:
      "The freelance landscape is constantly evolving. Stay ahead of the curve with these emerging trends and opportunities.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Industry Insights",
    date: "June 5, 2023",
    readTime: "12 min read",
    author: {
      name: "David Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Market Analyst",
    },
  },
  {
    id: 4,
    title: "How to Scale Your Freelance Business Beyond Solo Work",
    excerpt:
      "Ready to grow beyond individual projects? Learn strategies for expanding your freelance business into an agency model.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Business Growth",
    date: "May 28, 2023",
    readTime: "15 min read",
    author: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Business Coach",
    },
  },
  {
    id: 5,
    title: "Client Communication: Best Practices for Freelancers",
    excerpt:
      "Effective communication is key to successful client relationships. Master these techniques to improve collaboration.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Client Relations",
    date: "May 20, 2023",
    readTime: "9 min read",
    author: {
      name: "James Taylor",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Project Manager",
    },
  },
  {
    id: 6,
    title: "Tax Tips for Freelancers: Maximizing Deductions and Avoiding Pitfalls",
    excerpt:
      "Navigate the complexities of freelance taxes with confidence. Learn about deductions, quarterly payments, and more.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Finance",
    date: "May 15, 2023",
    readTime: "11 min read",
    author: {
      name: "Lisa Chang",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Financial Advisor",
    },
  },
]

// Featured post (first post)
const FEATURED_POST = BLOG_POSTS[0]
// Regular posts (remaining posts)
const REGULAR_POSTS = BLOG_POSTS.slice(1)

export default function BlogPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="text-gray-500">Insights, tips, and trends for freelancers and clients</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">All Posts</Button>
          <Button variant="outline">Productivity</Button>
          <Button variant="outline">Business</Button>
          <Button variant="outline">Marketing</Button>
        </div>
      </div>

      {/* Featured Post */}
      <Card className="tech-frame mb-12 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-full">
            <Image
              src={FEATURED_POST.image || "/placeholder.svg"}
              alt={FEATURED_POST.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col">
            <div className="mb-2">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                {FEATURED_POST.category}
              </Badge>
              <span className="text-xs text-gray-500 ml-2">{FEATURED_POST.date}</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">{FEATURED_POST.title}</h2>
            <p className="text-gray-500 mb-4 flex-grow">{FEATURED_POST.excerpt}</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={FEATURED_POST.author.avatar} alt={FEATURED_POST.author.name} />
                  <AvatarFallback>{FEATURED_POST.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{FEATURED_POST.author.name}</p>
                  <p className="text-xs text-gray-500">{FEATURED_POST.author.role}</p>
                </div>
              </div>
              <Link href={`/resources/blog/${FEATURED_POST.id}`}>
                <Button>Read Article</Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>

      {/* Regular Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REGULAR_POSTS.map((post) => (
          <Card key={post.id} className="tech-frame overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900">
                  {post.category}
                </Badge>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardFooter className="border-t p-4 flex justify-between items-center">
              <div className="flex items-center">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-xs">{post.author.name}</span>
              </div>
              <Link href={`/resources/blog/${post.id}`}>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-12 bg-blue-50 dark:bg-blue-950 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
          Get the latest freelancing tips, industry insights, and platform updates delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  )
}

