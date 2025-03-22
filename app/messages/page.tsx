"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Paperclip, MoreHorizontal } from "lucide-react"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(0)

  const conversations = [
    {
      id: 0,
      name: "Sarah Miller",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I've reviewed your proposal and I have a few questions.",
      time: "10:30 AM",
      unread: true,
      online: true,
    },
    {
      id: 1,
      name: "John Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "The project is coming along nicely. I'll send an update tomorrow.",
      time: "Yesterday",
      unread: false,
      online: false,
    },
    {
      id: 2,
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for the quick response!",
      time: "Yesterday",
      unread: false,
      online: true,
    },
    {
      id: 3,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Let me know when you're available for a call.",
      time: "Sep 25",
      unread: false,
      online: false,
    },
    {
      id: 4,
      name: "Jessica Taylor",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I've sent the files you requested.",
      time: "Sep 24",
      unread: false,
      online: false,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "Sarah Miller",
      content: "Hi there! I saw your profile and I'm interested in your web development services.",
      time: "10:00 AM",
      isMe: false,
    },
    {
      id: 2,
      sender: "Me",
      content: "Hello Sarah! Thank you for reaching out. I'd be happy to discuss your project needs.",
      time: "10:05 AM",
      isMe: true,
    },
    {
      id: 3,
      sender: "Sarah Miller",
      content:
        "Great! I'm looking to build an e-commerce website for my small business. Do you have experience with that?",
      time: "10:10 AM",
      isMe: false,
    },
    {
      id: 4,
      sender: "Me",
      content:
        "Yes, I've built several e-commerce sites using various platforms like Shopify, WooCommerce, and custom solutions. Could you tell me more about your business and what features you're looking for?",
      time: "10:15 AM",
      isMe: true,
    },
    {
      id: 5,
      sender: "Sarah Miller",
      content:
        "I sell handmade jewelry and currently have about 50 products. I need a site with product categories, a shopping cart, secure checkout, and maybe a blog section.",
      time: "10:20 AM",
      isMe: false,
    },
    {
      id: 6,
      sender: "Me",
      content:
        "That sounds like a great project. I can definitely help you build that. Would you like me to prepare a proposal with some options and pricing?",
      time: "10:25 AM",
      isMe: true,
    },
    {
      id: 7,
      sender: "Sarah Miller",
      content: "I've reviewed your proposal and I have a few questions.",
      time: "10:30 AM",
      isMe: false,
    },
  ]

  return (
    <div className="container py-10">
      <Card className="h-[calc(100vh-200px)] min-h-[500px]">
        <CardHeader className="px-4 py-3 border-b">
          <CardTitle>Messages</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex h-[calc(100%-60px)]">
          {/* Conversations List */}
          <div className="w-full md:w-1/3 lg:w-1/4 border-r h-full flex flex-col">
            <div className="p-3 border-b">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search conversations..." className="pl-8" />
              </div>
            </div>
            <div className="overflow-y-auto flex-grow">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-muted/50 ${selectedConversation === conversation.id ? "bg-muted" : ""}`}
                  onClick={() => setSelectedConversation(conversation.id)}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={conversation.avatar} alt={conversation.name} />
                      <AvatarFallback>
                        {conversation.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                    )}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-center">
                      <span className="font-medium truncate">{conversation.name}</span>
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                      {conversation.unread && (
                        <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                          <span className="sr-only">Unread messages</span>
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="hidden md:flex md:w-2/3 lg:w-3/4 flex-col h-full">
            {/* Chat Header */}
            <div className="p-3 border-b flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={conversations[selectedConversation].avatar}
                    alt={conversations[selectedConversation].name}
                  />
                  <AvatarFallback>
                    {conversations[selectedConversation].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{conversations[selectedConversation].name}</div>
                  <div className="text-xs text-muted-foreground">
                    {conversations[selectedConversation].online ? "Online" : "Offline"}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[70%] ${message.isMe ? "bg-primary text-primary-foreground" : "bg-muted"} rounded-lg p-3`}
                  >
                    <p>{message.content}</p>
                    <div
                      className={`text-xs mt-1 ${message.isMe ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                    >
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-3 border-t">
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Paperclip className="h-5 w-5" />
                  <span className="sr-only">Attach file</span>
                </Button>
                <Input placeholder="Type a message..." className="flex-grow" />
                <Button size="icon">
                  <Send className="h-5 w-5" />
                  <span className="sr-only">Send message</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

