"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Paperclip, Send, Smile } from "lucide-react"

// Mock data for conversations
const CONVERSATIONS = [
  {
    id: "1",
    user: {
      id: "user1",
      name: "Emma Johnson",
      avatar: "/images/freelancer-1.jpg",
      lastActive: "Online",
    },
    project: {
      id: "project1",
      title: "Website Redesign",
    },
    lastMessage: {
      text: "Hi there! I've reviewed your proposal and I'm interested in discussing further.",
      time: "10:32 AM",
      unread: true,
    },
  },
  {
    id: "2",
    user: {
      id: "user2",
      name: "Michael Chen",
      avatar: "/images/freelancer-2.jpg",
      lastActive: "5 min ago",
    },
    project: {
      id: "project2",
      title: "Mobile App Development",
    },
    lastMessage: {
      text: "Thank you for the update. The progress looks great so far.",
      time: "Yesterday",
      unread: false,
    },
  },
  {
    id: "3",
    user: {
      id: "user3",
      name: "Sophia Rodriguez",
      avatar: "/images/freelancer-3.jpg",
      lastActive: "2 hours ago",
    },
    project: {
      id: "project3",
      title: "Marketing Campaign",
    },
    lastMessage: {
      text: "I've attached the marketing assets you requested. Let me know if you need anything else!",
      time: "Yesterday",
      unread: false,
    },
  },
  {
    id: "4",
    user: {
      id: "user4",
      name: "James Wilson",
      avatar: "/images/freelancer-4.jpg",
      lastActive: "3 hours ago",
    },
    project: {
      id: "project4",
      title: "Logo Design",
    },
    lastMessage: {
      text: "What do you think about the color palette? Should we go with the blue or green option?",
      time: "May 20",
      unread: false,
    },
  },
]

// Mock data for messages in a conversation
const MESSAGES = [
  {
    id: "1",
    sender: "user1",
    text: "Hi there! I'm interested in your proposal for the Website Redesign project.",
    time: "10:15 AM",
    read: true,
  },
  {
    id: "2",
    sender: "self",
    text: "Hello! Thank you for considering my proposal. I'm excited about the opportunity to work on your website redesign.",
    time: "10:18 AM",
    read: true,
  },
  {
    id: "3",
    sender: "user1",
    text: "Your portfolio looks impressive. I particularly liked the e-commerce projects you've worked on.",
    time: "10:20 AM",
    read: true,
  },
  {
    id: "4",
    sender: "self",
    text: "Thank you! Yes, I've worked on several e-commerce sites with a focus on improving user experience and conversion rates.",
    time: "10:22 AM",
    read: true,
  },
  {
    id: "5",
    sender: "user1",
    text: "Great! Can you tell me more about your approach to this project? How would you handle the responsive design aspects?",
    time: "10:25 AM",
    read: true,
  },
  {
    id: "6",
    sender: "self",
    text: "Of course! I follow a mobile-first approach to ensure seamless experiences across all devices. I'd start by analyzing your current site's performance and user flows, then create wireframes for key pages with a focus on improving the checkout process. I use Figma for design and prototyping, which allows for easy collaboration and feedback.",
    time: "10:30 AM",
    read: true,
  },
  {
    id: "7",
    sender: "user1",
    text: "Hi there! I've reviewed your proposal and I'm interested in discussing further.",
    time: "10:32 AM",
    read: false,
  },
]

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState(CONVERSATIONS[0])
  const [messageText, setMessageText] = useState("")

  const handleSendMessage = () => {
    if (messageText.trim() === "") return

    // In a real app, you'd send this message to your API
    console.log("Sending message:", messageText)
    setMessageText("")
  }

  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(80vh-6rem)]">
        {/* Conversations List */}
        <div className="md:col-span-1 border rounded-lg overflow-hidden">
          <div className="p-3 border-b bg-gray-50 dark:bg-gray-800">
            <Input placeholder="Search conversations..." className="bg-white dark:bg-gray-700" />
          </div>

          <ScrollArea className="h-[calc(80vh-10rem)]">
            <div className="divide-y">
              {CONVERSATIONS.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer ${
                    activeConversation.id === conversation.id ? "bg-gray-50 dark:bg-gray-800" : ""
                  }`}
                  onClick={() => setActiveConversation(conversation)}
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conversation.user.avatar} />
                      <AvatarFallback>{conversation.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold truncate">{conversation.user.name}</h3>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                          {conversation.lastMessage.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{conversation.lastMessage.text}</p>
                      <p className="text-xs text-gray-400 mt-1">{conversation.project.title}</p>
                    </div>
                  </div>
                  {conversation.lastMessage.unread && (
                    <div className="flex justify-end mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Area */}
        <div className="md:col-span-2 border rounded-lg flex flex-col">
          {activeConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-3 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={activeConversation.user.avatar} />
                    <AvatarFallback>{activeConversation.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{activeConversation.user.name}</h3>
                    <p className="text-xs text-gray-500">{activeConversation.user.lastActive}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/projects/${activeConversation.project.id}`}>
                    <Button variant="outline" size="sm">
                      View Project
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "self" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          message.sender === "self" ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800"
                        }`}
                      >
                        <p>{message.text}</p>
                        <p className={`text-xs mt-1 ${message.sender === "self" ? "text-blue-100" : "text-gray-500"}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="border-t p-3">
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <Paperclip className="h-5 w-5" />
                    <span className="sr-only">Attach file</span>
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                    className="flex-1"
                  />
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <Smile className="h-5 w-5" />
                    <span className="sr-only">Add emoji</span>
                  </Button>
                  <Button className="shrink-0" onClick={handleSendMessage} disabled={messageText.trim() === ""}>
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a conversation to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

