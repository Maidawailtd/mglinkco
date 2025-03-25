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

const clientSchema = z.object({
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  industry: z.string({ required_error: "Please select an industry" }),
  companySize: z.string({ required_error: "Please select a company size" }),
  website: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  description: z.string().min(50, { message: "Description must be at least 50 characters" }),
  location: z.string().min(2, { message: "Location must be at least 2 characters" }),
  interests: z.array(z.string()).min(1, { message: "Please select at least one interest" }),
})

// Interest options
const INTEREST_OPTIONS = [
  { id: "web_development", label: "Web Development" },
  { id: "mobile_development", label: "Mobile Development" },
  { id: "ui_ux_design", label: "UI/UX Design" },
  { id: "graphic_design", label: "Graphic Design" },
  { id: "content_writing", label: "Content Writing" },
  { id: "digital_marketing", label: "Digital Marketing" },
  { id: "seo", label: "SEO" },
  { id: "social_media", label: "Social Media Management" },
  { id: "video_production", label: "Video Production" },
  { id: "data_analysis", label: "Data Analysis" },
  { id: "virtual_assistance", label: "Virtual Assistance" },
  { id: "consulting", label: "Consulting" },
]

export default function ClientOnboardingPage() {
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      companyName: "",
      industry: "",
      companySize: "",
      website: "",
      description: "",
      location: "",
      interests: [],
    },
  })

  const nextStep = async () => {
    let fieldsToValidate: string[] = []

    switch (step) {
      case 1:
        fieldsToValidate = ["companyName", "industry", "companySize", "website"]
        break
      case 2:
        fieldsToValidate = ["description", "location"]
        break
    }

    const isValid = await form.trigger(fieldsToValidate as any)
    if (isValid) {
      setStep(step + 1)
      setProgress((step + 1) * 33)
    }
  }

  const prevStep = () => {
    setStep(step - 1)
    setProgress((step - 1) * 33)
  }

  const onSubmit = (values: z.infer<typeof clientSchema>) => {
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
          <h1 className="text-3xl font-bold mb-2">Set Up Your Client Profile</h1>
          <p className="text-gray-500">Complete your profile to start hiring talented freelancers on MGLink Connect</p>
        </div>

        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Company Info</span>
            <span>About Your Business</span>
            <span>Project Interests</span>
          </div>
        </div>

        <Card className="tech-frame">
          <CardHeader>
            <CardTitle>
              {step === 1 && "Company Information"}
              {step === 2 && "About Your Business"}
              {step === 3 && "Project Interests"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Tell us about your company or organization"}
              {step === 2 && "Provide more details about your business"}
              {step === 3 && "Select the types of projects you're interested in"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 && (
                  <>
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Acme Corporation" {...field} />
                          </FormControl>
                          <FormDescription>Enter the name of your company or organization.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="media">Media & Entertainment</SelectItem>
                              <SelectItem value="nonprofit">Nonprofit</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>Select the industry your business operates in.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="companySize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Size</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">Just me</SelectItem>
                              <SelectItem value="2-10">2-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201-500">201-500 employees</SelectItem>
                              <SelectItem value="501+">501+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>How many people work at your company?</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Website</FormLabel>
                          <FormControl>
                            <Input placeholder="https://www.example.com" {...field} />
                          </FormControl>
                          <FormDescription>Enter your company website URL (optional).</FormDescription>
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
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your company, what you do, and your mission..."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Provide a brief description of your company and what you do.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., San Francisco, CA, USA" {...field} />
                          </FormControl>
                          <FormDescription>Where is your company headquartered?</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div>
                      <h3 className="text-lg font-medium mb-2">Company Logo</h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Upload your company logo to make your profile more recognizable.
                      </p>

                      <div className="border-2 border-dashed rounded-lg p-6 text-center">
                        <Input type="file" id="logo" className="hidden" accept="image/*" />
                        <label htmlFor="logo" className="cursor-pointer">
                          <div className="flex flex-col items-center">
                            <Upload className="h-8 w-8 text-gray-400 mb-2" />
                            <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-500">Upload your company logo (PNG, JPG, SVG)</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <FormField
                      control={form.control}
                      name="interests"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Project Interests</FormLabel>
                            <FormDescription>
                              Select the types of projects you're interested in hiring freelancers for.
                            </FormDescription>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {INTEREST_OPTIONS.map((interest) => (
                              <FormField
                                key={interest.id}
                                control={form.control}
                                name="interests"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={interest.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(interest.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, interest.id])
                                              : field.onChange(field.value?.filter((value) => value !== interest.id))
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">{interest.label}</FormLabel>
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

                    <div className="space-y-4 mt-6">
                      <h3 className="text-lg font-medium">Payment Methods</h3>
                      <p className="text-sm text-gray-500">
                        Add a payment method to fund projects and hire freelancers.
                      </p>

                      <div className="border rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-10 h-6 mr-3 flex items-center justify-center">
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
                                className="h-6 w-6"
                              >
                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                <line x1="2" x2="22" y1="10" y2="10" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">Credit Card</p>
                              <p className="text-sm text-gray-500">Add a credit or debit card</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Add Card
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-6 mr-3 flex items-center justify-center">
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
                                className="h-6 w-6"
                              >
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                                <path d="M4 22h16" />
                                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">PayPal</p>
                              <p className="text-sm text-gray-500">Connect your PayPal account</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Connect
                          </Button>
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

            {step < 3 ? (
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

