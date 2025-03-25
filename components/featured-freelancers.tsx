import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for featured freelancers
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
  },
]

export default function FeaturedFreelancers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {FREELANCERS.map((freelancer) => (
        <Card key={freelancer.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-48 w-full">
              <Image
                src={freelancer.image || `/placeholder.svg?height=400&width=400`}
                alt={freelancer.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{freelancer.name}</h3>
              <p className="text-gray-500 text-sm">{freelancer.title}</p>
              <div className="flex items-center mt-2 mb-3">
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
              <div className="flex flex-wrap gap-2 mb-3">
                {freelancer.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
              <p className="font-semibold mt-2">${freelancer.hourlyRate}/hr</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

