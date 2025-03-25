"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Upload, Loader2 } from "lucide-react"

const freelancerSchema = z.object({
  title: z.string().min(5, { message: "Professional title must be at least 5 characters" }),
  category: z.string({ required_error: "Please select a category" }),
  skills: z.array(z.string()).min(1, { message: "Please select at least one skill" }),
  hourlyRate: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid hourly rate",
  }),
  bio: z.string().min(50, { message: "Bio must be at least 50 characters" }),
  experience: z.string().min(10, { message: "Experience must be at least 10 characters" }),
  education: z.string().optional(),
  languages: z
    .array(
      z.object({
        language: z.string(),
        proficiency: z.string(),
      }),
    )
    .optional(),
})

// Skill options
const SKILL_OPTIONS = [
  { id: "react", label: "React" },
  { id: "node", label: "Node.js" },
  { id: "python", label: "Python" },
  { id: "ui_design", label: "UI Design" },
  { id: "ux_design", label: "UX Design" },
  { id: "graphic_design", label: "Graphic Design" },
  { id: "content_writing", label: "Content Writing" },
  { id: "seo", label: "SEO" },
  { id: "digital_marketing", label: "Digital Marketing" },
  { id: "mobile_dev", label: "Mobile Development" },
  { id: "wordpress", label: "WordPress" },
  { id: "shopify", label: "Shopify" },
]

export default function FreelancerOnboardingPage() {
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(25)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof freelancerSchema>>({
    resolver: zodResolver(freelancerSchema),
    defaultValues: {
      title: "",
      category: "",
      skills: [],
      hourlyRate: "",
      bio: "",
      experience: "",
      education: "",
      languages: [{ language: "English", proficiency: "Native" }],
    },
  })

  const nextStep = async () => {
    let fieldsToValidate: string[] = []

    switch (step) {
      case 1:
        fieldsToValidate = ["title", "category", "skills"]
        break
      case 2:
        fieldsToValidate = ["hourlyRate", "bio"]
        break
      case 3:
        fieldsToValidate = ["experience"]
        break
    }

    const isValid = await form.trigger(fieldsToValidate as any)
    if (isValid) {
      setStep(step + 1)
      setProgress((step + 1) * 25)
    }
  }

  const prevStep = () => {
    setStep(step - 1)
    setProgress((step - 1) * 25)
  }

  const onSubmit = (values: z.infer<typeof freelancerSchema>) => {
    setIsSubmitting(true)

    // In a real app, you would submit the form data to your API
    console.log(values)

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/dashboard")
    }, 2000)
  }

  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Set Up Your Freelancer Profile</h1>
          <p className="text-gray-500">Complete your profile to start finding work on MGLink Connect</p>
        </div>

        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Basic Info</span>
            <span>Skills & Rate</span>
            <span>Experience</span>
            <span>Portfolio</span>
          </div>
        </div>

        <Card className="tech-frame">
          <CardHeader>
            <CardTitle>
              {step === 1 && "Basic Information"}
              {step === 2 && "Skills & Rate"}
              {step === 3 && "Experience & Education"}
              {step === 4 && "Portfolio"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Tell us about yourself and your professional background"}
              {step === 2 && "Showcase your skills and set your hourly rate"}
              {step === 3 && "Share your work experience and education"}
              {step === 4 && "Upload samples of your work to attract clients"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 && (
                  <>
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Professional Title</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Senior Web Developer" {...field} />
                          </FormControl>
                          <FormDescription>
                            This will be displayed on your profile and in search results.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Main Category</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your main category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="web_development">Web Development</SelectItem>
                              <SelectItem value="mobile_development">Mobile Development</SelectItem>
                              <SelectItem value="design">Design</SelectItem>
                              <SelectItem value="writing">Writing</SelectItem>
                              <SelectItem value="marketing">Marketing</SelectItem>
                              <SelectItem value="business">Business</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>Choose the category that best represents your expertise.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="skills"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Skills</FormLabel>
                            <FormDescription>Select the skills you want to offer to clients.</FormDescription>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {SKILL_OPTIONS.map((skill) => (
                              <FormField
                                key={skill.id}
                                control={form.control}
                                name="skills"
                                render={({ field }) => {
                                  return (
                                    <FormItem key={skill.id} className="flex flex-row items-start space-x-3 space-y-0">
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(skill.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, skill.id])
                                              : field.onChange(field.value?.filter((value) => value !== skill.id))
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">{skill.label}</FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 2 && (
                  <>
                    <FormField
                      control={form.control}
                      name="hourlyRate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hourly Rate (USD)</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" placeholder="e.g., 50" {...field} />
                          </FormControl>
                          <FormDescription>
                            Set your hourly rate. You can adjust this for individual projects.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Professional Overview</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your experience, skills, and expertise..."
                              className="min-h-[200px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            This is your chance to introduce yourself to potential clients. Highlight your expertise,
                            experience, and what makes you unique.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 3 && (
                  <>
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Experience</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your relevant work experience..."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            List your relevant work experience, including job titles, companies, and key
                            responsibilities.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="education"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Education</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="List your educational background..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>Include degrees, certifications, and relevant courses.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 4 && (
                  <>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Portfolio Items</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          Upload samples of your work to showcase your skills and attract clients.
                        </p>

                        <div className="border-2 border-dashed rounded-lg p-6 text-center">
                          <Input type="file" id="portfolio" className="hidden" multiple />
                          <label htmlFor="portfolio" className="cursor-pointer">
                            <div className="flex flex-col items-center">
                              <Upload className="h-8 w-8 text-gray-400 mb-2" />
                              <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
                              <p className="text-xs text-gray-500">Upload portfolio items (PDF, JPG, PNG, MP4)</p>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">External Links</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          Add links to your website, GitHub, Dribbble, or other online portfolios.
                        </p>

                        <div className="space-y-3">
                          <div>
                            <label htmlFor="website" className="block text-sm font-medium mb-1">
                              Website
                            </label>
                            <Input id="website" placeholder="https://yourwebsite.com" />
                          </div>
                          <div>
                            <label htmlFor="github" className="block text-sm font-medium mb-1">
                              GitHub
                            </label>
                            <Input id="github" placeholder="https://github.com/yourusername" />
                          </div>
                          <div>
                            <label htmlFor="linkedin" className="block text-sm font-medium mb-1">
                              LinkedIn
                            </label>
                            <Input id="linkedin" placeholder="https://linkedin.com/in/yourusername" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={prevStep}>
                Previous
              </Button>
            ) : (
              <Link href="/dashboard">
                <Button variant="outline">Skip for Now</Button>
              </Link>
            )}

            {step < 4 ? (
              <Button onClick={nextStep}>Next</Button>
            ) : (
              <Button onClick={form.handleSubmit(onSubmit)} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Complete Profile"
                )}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

