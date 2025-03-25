"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, FileText, Shield, Upload, User } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

export default function VerificationPage() {
  const { user, updateUser } = useAuth()
  const router = useRouter()

  const [activeTab, setActiveTab] = useState("identity")
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  // Mock verification status
  const verificationStatus = {
    identity: "pending", // pending, in_review, verified, rejected
    professional: "not_started", // not_started, pending, in_review, verified, rejected
    payment: "verified", // not_started, pending, in_review, verified, rejected
  }

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "not_started":
        return "text-gray-500"
      case "pending":
        return "text-yellow-500"
      case "in_review":
        return "text-blue-500"
      case "verified":
        return "text-green-500"
      case "rejected":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  // Handle verification submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    // In a real app, you would submit the form data to your API
    // For now, we'll simulate a successful submission
    setActiveTab("professional")
  }

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Account Verification</h1>
            <p className="text-gray-500">Complete verification to unlock all platform features</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Verification Steps</CardTitle>
                <CardDescription>Complete all steps to get verified</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${getStatusColor(verificationStatus.identity)} bg-opacity-10`}>
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Identity Verification</h4>
                    <p className="text-xs text-gray-500 capitalize">
                      Status: {verificationStatus.identity.replace("_", " ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${getStatusColor(verificationStatus.professional)} bg-opacity-10`}>
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Professional Verification</h4>
                    <p className="text-xs text-gray-500 capitalize">
                      Status: {verificationStatus.professional.replace("_", " ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${getStatusColor(verificationStatus.payment)} bg-opacity-10`}>
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
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Payment Verification</h4>
                    <p className="text-xs text-gray-500 capitalize">
                      Status: {verificationStatus.payment.replace("_", " ")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Verification Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-2 rounded-full">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Trust Badge</h4>
                    <p className="text-sm text-gray-500">Display a verification badge on your profile</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-2 rounded-full">
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
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Higher Withdrawal Limits</h4>
                    <p className="text-sm text-gray-500">Enjoy increased payment withdrawal limits</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 p-2 rounded-full">
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
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Featured Visibility</h4>
                    <p className="text-sm text-gray-500">Priority placement in search results</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="tech-frame">
              <CardHeader>
                <CardTitle>Complete Your Verification</CardTitle>
                <CardDescription>Provide the required information to verify your account</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="identity">Identity</TabsTrigger>
                    <TabsTrigger value="professional">Professional</TabsTrigger>
                    <TabsTrigger value="payment">Payment</TabsTrigger>
                  </TabsList>

                  <TabsContent value="identity" className="space-y-4 pt-4">
                    <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
                      <User className="h-4 w-4" />
                      <AlertTitle>Identity Verification</AlertTitle>
                      <AlertDescription>
                        We need to verify your identity to ensure the security of our platform. Please provide a
                        government-issued ID.
                      </AlertDescription>
                    </Alert>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="full-name">Full Legal Name</Label>
                          <Input id="full-name" placeholder="As it appears on your ID" />
                        </div>
                        <div>
                          <Label htmlFor="date-of-birth">Date of Birth</Label>
                          <Input id="date-of-birth" type="date" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="Street address" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input id="city" />
                        </div>
                        <div>
                          <Label htmlFor="state">State/Province</Label>
                          <Input id="state" />
                        </div>
                        <div>
                          <Label htmlFor="postal-code">Postal Code</Label>
                          <Input id="postal-code" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" />
                      </div>

                      <Separator />

                      <div>
                        <Label className="block mb-2">ID Document</Label>
                        <div className="border-2 border-dashed rounded-lg p-6 text-center">
                          <Input
                            type="file"
                            id="id-document"
                            className="hidden"
                            accept="image/*,.pdf"
                            onChange={handleFileUpload}
                          />
                          <Label htmlFor="id-document" className="cursor-pointer">
                            <div className="flex flex-col items-center">
                              <Upload className="h-8 w-8 text-gray-400 mb-2" />
                              <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
                              <p className="text-xs text-gray-500">
                                Passport, Driver's License, or National ID (PDF, JPG, PNG)
                              </p>
                            </div>
                          </Label>

                          {isUploading && (
                            <div className="mt-4">
                              <p className="text-xs text-gray-500 mb-1">Uploading...</p>
                              <Progress value={uploadProgress} className="h-2" />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button type="submit">Submit for Verification</Button>
                      </div>
                    </form>
                  </TabsContent>

                  <TabsContent value="professional" className="space-y-4 pt-4">
                    <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
                      <FileText className="h-4 w-4" />
                      <AlertTitle>Professional Verification</AlertTitle>
                      <AlertDescription>
                        Verify your professional credentials to build trust with potential clients and unlock additional
                        features.
                      </AlertDescription>
                    </Alert>

                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="education">Education</Label>
                        <Input id="education" placeholder="Highest degree earned" />
                      </div>

                      <div>
                        <Label htmlFor="institution">Institution</Label>
                        <Input id="institution" placeholder="School or university name" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="field-of-study">Field of Study</Label>
                          <Input id="field-of-study" />
                        </div>
                        <div>
                          <Label htmlFor="graduation-year">Graduation Year</Label>
                          <Input id="graduation-year" type="number" min="1900" max="2099" />
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <Label className="block mb-2">Professional Certifications</Label>
                        <div className="border-2 border-dashed rounded-lg p-6 text-center">
                          <Input
                            type="file"
                            id="certifications"
                            className="hidden"
                            accept="image/*,.pdf"
                            multiple
                            onChange={handleFileUpload}
                          />
                          <Label htmlFor="certifications" className="cursor-pointer">
                            <div className="flex flex-col items-center">
                              <Upload className="h-8 w-8 text-gray-400 mb-2" />
                              <p className="text-sm font-medium mb-1">Upload certifications</p>
                              <p className="text-xs text-gray-500">
                                Professional certifications, licenses, or credentials (PDF, JPG, PNG)
                              </p>
                            </div>
                          </Label>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button>Submit Professional Credentials</Button>
                      </div>
                    </form>
                  </TabsContent>

                  <TabsContent value="payment" className="space-y-4 pt-4">
                    <div className="flex items-center justify-center py-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 p-4 rounded-full mb-4">
                          <CheckCircle className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-medium mb-2">Payment Method Verified</h3>
                        <p className="text-gray-500 max-w-md mb-4">
                          Your payment method has been successfully verified. You can now receive payments and withdraw
                          funds.
                        </p>
                        <Button variant="outline" asChild>
                          <Link href="/settings/payment">Manage Payment Methods</Link>
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

