import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, DollarSign, MapPin, Star, User } from "lucide-react"
import Image from "next/image"

export default function FindTalentPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
        {/* Filters */}
        <div className="w-full md:w-1/4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <CardDescription>Find the perfect freelancer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Skills</Label>
                <Input placeholder="e.g. React, Python" />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="design">Graphic Design</SelectItem>
                    <SelectItem value="writing">Content Writing</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Experience Level</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Hourly Rate ($)</Label>
                  <span className="text-sm text-muted-foreground">$10 - $100+</span>
                </div>
                <Slider defaultValue={[10, 100]} min={0} max={200} step={5} />
              </div>
              <div className="space-y-2">
                <Label>Location</Label>
                <Select defaultValue="anywhere">
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anywhere">Anywhere</SelectItem>
                    <SelectItem value="north-america">North America</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="africa">Africa</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>

        {/* Freelancer Listings */}
        <div className="w-full md:w-3/4 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Top Freelancers</h1>
            <Select defaultValue="rating">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="hourly-asc">Hourly Rate: Low to High</SelectItem>
                <SelectItem value="hourly-desc">Hourly Rate: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Freelancer Cards */}
          {[1, 2, 3, 4, 5].map((freelancer) => (
            <Card key={freelancer} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=96&width=96`}
                        alt="Freelancer profile"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                      {freelancer % 2 === 0 && (
                        <div className="absolute bottom-0 right-0">
                          <CheckCircle className="h-5 w-5 text-primary bg-background rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-grow space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">
                          {freelancer % 2 === 0 ? "Sarah Johnson" : "Michael Chen"}
                          {freelancer % 2 === 0 && <Badge className="ml-2">Top Rated</Badge>}
                        </h3>
                        <p className="text-muted-foreground">
                          {freelancer % 2 === 0 ? "Full Stack Developer" : "UI/UX Designer"}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="ml-1 font-medium">{4 + (freelancer % 2) * 0.5}</span>
                        <span className="text-muted-foreground ml-1">({20 + freelancer * 5})</span>
                      </div>
                    </div>
                    <p className="text-sm">
                      {freelancer % 2 === 0
                        ? "Experienced full stack developer with 5+ years of experience in React, Node.js, and MongoDB. Specialized in building scalable web applications."
                        : "Creative UI/UX designer focused on creating intuitive and beautiful user experiences. Expert in Figma, Adobe XD, and implementing designs with HTML/CSS."}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {freelancer % 2 === 0 ? (
                        <>
                          <Badge variant="outline">React</Badge>
                          <Badge variant="outline">Node.js</Badge>
                          <Badge variant="outline">MongoDB</Badge>
                          <Badge variant="outline">TypeScript</Badge>
                        </>
                      ) : (
                        <>
                          <Badge variant="outline">UI Design</Badge>
                          <Badge variant="outline">Figma</Badge>
                          <Badge variant="outline">Adobe XD</Badge>
                          <Badge variant="outline">HTML/CSS</Badge>
                        </>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-sm">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>${20 + freelancer * 5}/hr</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{freelancer % 2 === 0 ? "United States" : "Singapore"}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{freelancer % 2 === 0 ? "Expert" : "Intermediate"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center md:items-end gap-2">
                    <Link href={`/freelancers/${freelancer}`}>
                      <Button>View Profile</Button>
                    </Link>
                    <Link href={`/messages/new?user=${freelancer}`}>
                      <Button variant="outline">Contact</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mx-1">
              Previous
            </Button>
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button className="mx-1">2</Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="mx-1">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {children}
    </div>
  )
}

