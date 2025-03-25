"use client"

import { Label } from "@/components/ui/label"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Loader2, Upload } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

// Form schema
const projectSchema = z.object({
  title: z
    .string()
    .min(10, { message: "Title must be at least 10 characters" })
    .max(100, { message: "Title must be less than 100 characters" }),
  category: z.string({ required_error: "Please select a category" }),
  description: z.string().min(50, { message: "Description must be at least 50 characters" }),
  skills: z.array(z.string()).min(1, { message: "Please select at least one skill" }),
  budgetType: z.enum(["fixed", "hourly"]),
  budgetAmount: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, { message: "Please enter a valid budget amount" }),
  duration: z.string({ required_error: "Please select a duration" }),
  experienceLevel: z.string({ required_error: "Please select an experience level" }),
  attachments: z.array(z.any()).optional(),
  termsAgreed: z.boolean().refine((val) => val === true, { message: "You must agree to the terms and conditions" }),
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

export default function PostProjectPage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("details")

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      category: "",
      description: "",
      skills: [],
      budgetType: "fixed",
      budgetAmount: "",
      duration: "",
      experienceLevel: "",
      attachments: [],
      termsAgreed: false,
    },
  })

  function onSubmit(values: z.infer<typeof projectSchema>) {
    setIsSubmitting(true)

    // In a real app, you would submit the form data to your API
    console.log(values)

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/projects/confirmation")
    }, 2000)
  }

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    // In a real app, you would upload the files to your storage service
    // For now, we'll just update the form state
    form.setValue("attachments", Array.from(files))
  }

  // Navigate to next tab
  const goToNextTab = () => {
    if (activeTab === "details") {
      // Validate the fields in the current tab
      form.trigger(["title", "category", "description", "skills"]).then((isValid) => {
        if (isValid) {
          setActiveTab("budget")
        }
      })
    } else if (activeTab === "budget") {
      form.trigger(["budgetType", "budgetAmount", "duration", "experienceLevel"]).then((isValid) => {
        if (isValid) {
          setActiveTab("review")
        }
      })
    }
  }

  // Navigate to previous tab
  const goToPreviousTab = () => {
    if (activeTab === "budget") {
      setActiveTab("details")
    } else if (activeTab === "review") {
      setActiveTab("budget")
    }
  }

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Post a Project</h1>
            <p className="text-gray-500">Find the perfect freelancer for your project</p>
          </div>
        </div>

        <Card className="tech-frame">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>Provide information about your project to attract the right freelancers</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="details">Project Details</TabsTrigger>
                <TabsTrigger value="budget">Budget & Timeline</TabsTrigger>
                <TabsTrigger value="review">Review & Post</TabsTrigger>
              </TabsList>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-6">
                  <TabsContent value="details" className="space-y-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Title</FormLabel>
                          <FormControl>
                            <Input placeholder="E.g., Website Redesign for E-commerce Store" {...field} />
                          </FormControl>
                          <FormDescription>
                            A clear title will help freelancers understand your project.
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
                          <FormLabel>Category</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your project in detail..."
                              className="min-h-[200px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Include specific requirements, goals, and any relevant background information.
                          </FormDescription>
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
                            <FormLabel>Required Skills</FormLabel>
                            <FormDescription>Select the skills needed for this project.</FormDescription>
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

                    <div className="flex justify-end">
                      <Button type="button" onClick={goToNextTab}>
                        Next: Budget & Timeline
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="budget" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="budgetType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select budget type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="fixed">Fixed Price</SelectItem>
                                <SelectItem value="hourly">Hourly Rate</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="budgetAmount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Amount (USD)</FormLabel>
                            <FormControl>
                              <Input type="number" min="1" placeholder="E.g., 500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Duration</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select duration" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="less_than_1_week">Less than 1 week</SelectItem>
                                <SelectItem value="1_to_2_weeks">1-2 weeks</SelectItem>
                                <SelectItem value="2_to_4_weeks">2-4 weeks</SelectItem>
                                <SelectItem value="1_to_3_months">1-3 months</SelectItem>
                                <SelectItem value="3_to_6_months">3-6 months</SelectItem>
                                <SelectItem value="more_than_6_months">More than 6 months</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="experienceLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Experience Level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select experience level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="entry">Entry Level</SelectItem>
                                <SelectItem value="intermediate">Intermediate</SelectItem>
                                <SelectItem value="expert">Expert</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div>
                      <Label className="block mb-2">Attachments (Optional)</Label>
                      <div className="border-2 border-dashed rounded-lg p-6 text-center">
                        <Input type="file" id="attachments" className="hidden" multiple onChange={handleFileUpload} />
                        <Label htmlFor="attachments" className="cursor-pointer">
                          <div className="flex flex-col items-center">
                            <Upload className="h-8 w-8 text-gray-400 mb-2" />
                            <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-500">
                              Upload project files, specifications, or examples (PDF, DOC, JPG, PNG)
                            </p>
                          </div>
                        </Label>

                        {form.watch("attachments").length > 0 && (
                          <div className="mt-4 text-left">
                            <p className="text-xs text-gray-500 mb-2">Uploaded files:</p>
                            <ul className="space-y-1">
                              {Array.from(form.watch("attachments")).map((file: any, index) => (
                                <li key={index} className="text-sm flex items-center gap-2">
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
                                    className="h-4 w-4 text-gray-500"
                                  >
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                    <polyline points="14 2 14 8 20 8" />
                                  </svg>
                                  {file.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={goToPreviousTab}>
                        Back: Project Details
                      </Button>
                      <Button type="button" onClick={goToNextTab}>
                        Next: Review & Post
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="review" className="space-y-6">
                    <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
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
                        className="h-4 w-4"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                      <AlertTitle>Review Your Project</AlertTitle>
                      <AlertDescription>
                        Please review your project details before posting. Once posted, freelancers will be able to
                        submit proposals.
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">Project Details</h3>
                        <Separator className="my-2" />
                        <dl className="space-y-2">
                          <div className="flex justify-between">
                            <dt className="font-medium">Title:</dt>
                            <dd>{form.watch("title")}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="font-medium">Category:</dt>
                            <dd className="capitalize">{form.watch("category").replace("_", " ")}</dd>
                          </div>
                          <div>
                            <dt className="font-medium">Description:</dt>
                            <dd className="mt-1 whitespace-pre-line">{form.watch("description")}</dd>
                          </div>
                          <div>
                            <dt className="font-medium">Skills:</dt>
                            <dd className="mt-1">
                              <div className="flex flex-wrap gap-2">
                                {form.watch("skills").map((skillId) => {
                                  const skill = SKILL_OPTIONS.find((s) => s.id === skillId)
                                  return (
                                    <Badge key={skillId} variant="secondary">
                                      {skill?.label}
                                    </Badge>
                                  )
                                })}
                              </div>
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium">Budget & Timeline</h3>
                        <Separator className="my-2" />
                        <dl className="space-y-2">
                          <div className="flex justify-between">
                            <dt className="font-medium">Budget Type:</dt>
                            <dd className="capitalize">{form.watch("budgetType")}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="font-medium">Budget Amount:</dt>
                            <dd>${form.watch("budgetAmount")}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="font-medium">Duration:</dt>
                            <dd className="capitalize">{form.watch("duration")?.replace(/_/g, " ")}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="font-medium">Experience Level:</dt>
                            <dd className="capitalize">{form.watch("experienceLevel")}</dd>
                          </div>
                          <div>
                            <dt className="font-medium">Attachments:</dt>
                            <dd className="mt-1">
                              {form.watch("attachments").length > 0 ? (
                                <ul className="space-y-1">
                                  {Array.from(form.watch("attachments")).map((file: any, index) => (
                                    <li key={index} className="text-sm">
                                      {file.name}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <span className="text-gray-500">No attachments</span>
                              )}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name="termsAgreed"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the{" "}
                              <a href="/terms" className="text-blue-600 hover:underline">
                                Terms of Service
                              </a>{" "}
                              and{" "}
                              <a href="/privacy" className="text-blue-600 hover:underline">
                                Privacy Policy
                              </a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={goToPreviousTab}>
                        Back: Budget & Timeline
                      </Button>
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Posting...
                          </>
                        ) : (
                          "Post Project"
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                </form>
              </Form>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

