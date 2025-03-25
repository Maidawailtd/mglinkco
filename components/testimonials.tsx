import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TESTIMONIALS = [
  {
    id: 1,
    content:
      "MGLink Connect transformed how I find clients. The platform's escrow system gives me peace of mind, and the verification process ensures I'm working with legitimate businesses.",
    author: {
      name: "Emma Johnson",
      title: "UI/UX Designer",
      avatar: "/images/freelancer-1.jpg",
    },
  },
  {
    id: 2,
    content:
      "As a business owner, finding reliable freelancers was always challenging until I discovered MGLink Connect. The quality of talent and the secure payment system make it my go-to platform.",
    author: {
      name: "Robert Smith",
      title: "CEO, TechRetail Inc.",
      avatar: "/images/client-1.jpg",
    },
  },
  {
    id: 3,
    content:
      "The dispute resolution system saved my project when communication broke down with a client. The MGLink team mediated professionally and ensured a fair outcome for both parties.",
    author: {
      name: "Michael Chen",
      title: "Full Stack Developer",
      avatar: "/images/freelancer-2.jpg",
    },
  },
]

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from freelancers and clients who have found success on our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.id} className="tech-frame">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
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
                        className="h-8 w-8 text-blue-600 mb-4 opacity-50"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                      <p className="text-gray-700 dark:text-gray-300">{testimonial.content}</p>
                    </div>
                    <div className="flex items-center mt-6">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
                        <AvatarFallback>{testimonial.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.author.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.author.title}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

