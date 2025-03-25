import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock freelancer data
const FREELANCER = {
  id: "1",
  name: "Emma Johnson",
  title: "Senior UI/UX Designer",
  location: "San Francisco, CA",
  rating: 4.9,
  reviewCount: 128,
  hourlyRate: 85,
  totalEarnings: "$150,000+",
  completedProjects: 87,
  memberSince: "Jan 2020",
  lastActive: "2 hours ago",
  bio: "I'm a UI/UX designer with over 7 years of experience creating intuitive, user-centered digital experiences for a wide range of clients from startups to Fortune 500 companies. My expertise includes user research, wireframing, prototyping, and design system creation.",
  skills: [
    "UI Design",
    "UX Research",
    "Figma",
    "Adobe XD",
    "Prototyping",
    "Design Systems",
    "User Testing",
    "Information Architecture",
    "Wireframing",
    "Mobile Design",
  ],
  languages: [
    { name: "English", proficiency: "Native" },
    { name: "Spanish", proficiency: "Professional" },
    { name: "French", proficiency: "Conversational" },
  ],
  education: [
    { degree: "Master of Design", institution: "California Institute of Design", year: "2018" },
    { degree: "Bachelor of Fine Arts", institution: "University of Arts", year: "2016" },
  ],
  experience: [
    {
      title: "Senior UI/UX Designer",
      company: "TechCorp Inc.",
      period: "2020 - Present",
      description:
        "Lead designer for enterprise SaaS platform. Conducted user research, created wireframes and prototypes, and collaborated with engineering teams to implement designs.",
    },
    {
      title: "UI Designer",
      company: "DesignStudio",
      period: "2017 - 2020",
      description:
        "Designed mobile applications and websites for various clients in the finance, healthcare, and technology sectors.",
    },
  ],
  portfolio: [
    { id: 1, title: "E-commerce Redesign", image: "/images/portfolio-1.jpg", category: "UI Design" },
    { id: 2, title: "Health App", image: "/images/portfolio-2.jpg", category: "Mobile App" },
    { id: 3, title: "Banking Dashboard", image: "/images/portfolio-3.jpg", category: "Dashboard" },
    { id: 4, title: "Travel Booking Platform", image: "/images/portfolio-4.jpg", category: "Web Design" },
    { id: 5, title: "Design System", image: "/images/portfolio-5.jpg", category: "Design System" },
    { id: 6, title: "Social Media App", image: "/images/portfolio-6.jpg", category: "Mobile App" },
  ],
  reviews: [
    {
      id: 1,
      clientName: "Robert Smith",
      clientImage: "/images/client-1.jpg",
      rating: 5,
      date: "March 15, 2023",
      text: "Emma is an exceptional designer. She understood our requirements perfectly and delivered beyond our expectations. Her attention to detail and ability to create intuitive interfaces is impressive.",
    },
    {
      id: 2,
      clientName: "Sarah Chen",
      clientImage: "/images/client-2.jpg",
      rating: 5,
      date: "February 2, 2023",
      text: "Working with Emma was a great experience. She's professional, creative, and responsive. The design she created for our mobile app received positive feedback from our users.",
    },
    {
      id: 3,
      clientName: "Michael Johnson",
      clientImage: "/images/client-3.jpg",
      rating: 4,
      date: "December 10, 2022",
      text: "Emma delivered high-quality designs for our website redesign project. She's collaborative and takes feedback well. Would definitely work with her again.",
    },
  ],
}

export default function FreelancerProfilePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the freelancer data based on params.id
  const freelancer = FREELANCER

  return (
    <div className="container py-8 space-y-8">
      {/* Profile Header */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-44 h-44">
              <Image
                src="/images/freelancer-1.jpg"
                alt={freelancer.name}
                fill
                className="rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(freelancer.rating) ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm font-medium ml-1">{freelancer.rating}</span>
              <span className="text-sm text-gray-500">({freelancer.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">{freelancer.name}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">{freelancer.title}</p>
              <div className="flex items-center mt-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-1"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{freelancer.location}</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <Button>Contact</Button>
              <Button variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-2"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
                Save
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Hourly Rate</p>
              <p className="text-xl font-semibold">${freelancer.hourlyRate}/hr</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Total Earnings</p>
              <p className="text-xl font-semibold">{freelancer.totalEarnings}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Jobs Completed</p>
              <p className="text-xl font-semibold">{freelancer.completedProjects}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="text-xl font-semibold">{freelancer.memberSince}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="about"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-3"
          >
            About
          </TabsTrigger>
          <TabsTrigger
            value="portfolio"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-3"
          >
            Portfolio
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-3"
          >
            Reviews
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="pt-6 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300">{freelancer.bio}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {freelancer.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Languages</h2>
              <div className="space-y-3">
                {freelancer.languages.map((language, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{language.name}</span>
                    <span className="text-gray-500">{language.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                {freelancer.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-medium">{edu.degree}</h3>
                    <p className="text-gray-500">
                      {edu.institution}, {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
            <div className="space-y-6">
              {freelancer.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between">
                    <h3 className="font-medium">{exp.title}</h3>
                    <span className="text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  <p className="mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="portfolio" className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {freelancer.portfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image || `/placeholder.svg?height=400&width=400`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="pt-6 space-y-6">
          {freelancer.reviews.map((review) => (
            <div key={review.id} className="border-b pb-6 last:border-0">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={review.clientImage} alt={review.clientName} />
                  <AvatarFallback>{review.clientName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{review.clientName}</h3>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex mt-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p>{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

