"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/hooks/use-auth"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { handleError } from "@/lib/error-handling"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  const [accountType, setAccountType] = useState<"freelancer" | "client">("freelancer")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [primarySkill, setPrimarySkill] = useState("development")
  const [company, setCompany] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !password) {
      handleError(new Error("Please fill in all required fields"))
      return
    }

    if (password !== confirmPassword) {
      handleError(new Error("Passwords do not match"))
      return
    }

    if (!agreeTerms) {
      handleError(new Error("You must agree to the terms and conditions"))
      return
    }

    try {
      setIsSubmitting(true)
      await register({
        name,
        email,
        password,
        role: accountType,
      })
      // Redirect is handled in the register function
    } catch (error) {
      // Error is handled in the register function
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Image src="/images/mglink-logo.png" alt="MGLink Connect" width={60} height={60} className="h-15 w-auto" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Join MGLink Connect to start finding work or hiring talent
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-4">
              <Tabs
                defaultValue="freelancer"
                value={accountType}
                onValueChange={(value) => setAccountType(value as "freelancer" | "client")}
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="freelancer">I'm a Freelancer</TabsTrigger>
                  <TabsTrigger value="client">I'm a Client</TabsTrigger>
                </TabsList>
                <TabsContent value="freelancer" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="freelancer-name">Full Name</Label>
                    <Input
                      id="freelancer-name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="freelancer-email">Email</Label>
                    <Input
                      id="freelancer-email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="freelancer-password">Password</Label>
                    <Input
                      id="freelancer-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="freelancer-confirm-password">Confirm Password</Label>
                    <Input
                      id="freelancer-confirm-password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Primary Skills</Label>
                    <RadioGroup value={primarySkill} onValueChange={setPrimarySkill} disabled={isSubmitting}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="development" id="development" />
                        <Label htmlFor="development">Development</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="design" id="design" />
                        <Label htmlFor="design">Design</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="writing" id="writing" />
                        <Label htmlFor="writing">Writing</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="marketing" id="marketing" />
                        <Label htmlFor="marketing">Marketing</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </TabsContent>
                <TabsContent value="client" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="client-name">Full Name</Label>
                    <Input
                      id="client-name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-email">Email</Label>
                    <Input
                      id="client-email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-password">Password</Label>
                    <Input
                      id="client-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-confirm-password">Confirm Password</Label>
                    <Input
                      id="client-confirm-password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      placeholder="Company Name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex items-center space-x-2 pt-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  disabled={isSubmitting}
                  required
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? <LoadingSpinner text="Creating account..." /> : "Create Account"}
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4 hover:text-primary">
                Log in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

