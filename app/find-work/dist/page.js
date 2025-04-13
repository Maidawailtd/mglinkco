"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var button_1 = require("@/components/ui/button");
var card_1 = require("@/components/ui/card");
var input_1 = require("@/components/ui/input");
var select_1 = require("@/components/ui/select");
var slider_1 = require("@/components/ui/slider");
var badge_1 = require("@/components/ui/badge");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var error_handling_1 = require("@/lib/error-handling");
// Job category images mapping
var categoryImages = {
    "web-development": "/images/categories/web-development.png",
    design: "/images/categories/design.png",
    writing: "/images/categories/writing.png",
    marketing: "/images/categories/marketing.png",
    "mobile-development": "/images/categories/mobile-development.png",
    "data-analysis": "/images/categories/data-analysis.png",
    "default": "/images/logo-mglink.png"
};
// Mock job data with categories
var jobListings = [
    {
        id: 1,
        title: "Full Stack Web Developer Needed for E-commerce Project",
        type: "Fixed Price",
        featured: true,
        category: "web-development",
        description: "Looking for an experienced full stack developer to build a custom e-commerce platform. The ideal candidate should have experience with React, Node.js, and payment gateway integration.",
        skills: ["React", "Node.js", "MongoDB", "Stripe"],
        budget: "$1,000 - $2,000",
        duration: "1-3 months",
        experience: "Intermediate",
        location: "Remote, Worldwide",
        postedDays: 2
    },
    {
        id: 2,
        title: "UI/UX Designer for Mobile App Redesign",
        type: "Hourly Rate",
        featured: false,
        category: "design",
        description: "We're looking for a talented UI/UX designer to redesign our mobile application. You should have experience with modern design tools and mobile design patterns.",
        skills: ["Figma", "UI Design", "Mobile Design", "Prototyping"],
        budget: "$30 - $50 / hr",
        duration: "Less than 1 month",
        experience: "Expert",
        location: "Remote, Worldwide",
        postedDays: 1
    },
    {
        id: 3,
        title: "Content Writer for Technical Blog Posts",
        type: "Fixed Price",
        featured: true,
        category: "writing",
        description: "Seeking a content writer with technical background to create blog posts about software development, cloud computing, and emerging technologies.",
        skills: ["Technical Writing", "SEO", "Blog Writing", "Research"],
        budget: "$200 - $400 per article",
        duration: "Ongoing",
        experience: "Intermediate",
        location: "Remote, Worldwide",
        postedDays: 3
    },
    {
        id: 4,
        title: "Digital Marketing Specialist for SaaS Product",
        type: "Hourly Rate",
        featured: false,
        category: "marketing",
        description: "We need a digital marketing specialist to help promote our SaaS product. Experience with B2B marketing, SEO, and social media campaigns is required.",
        skills: ["Digital Marketing", "SEO", "Social Media", "Analytics"],
        budget: "$25 - $40 / hr",
        duration: "3+ months",
        experience: "Expert",
        location: "Remote, Worldwide",
        postedDays: 4
    },
    {
        id: 5,
        title: "Mobile App Developer for iOS and Android",
        type: "Fixed Price",
        featured: false,
        category: "mobile-development",
        description: "Looking for a mobile developer to build a cross-platform app for both iOS and Android. Experience with React Native or Flutter is preferred.",
        skills: ["React Native", "Flutter", "iOS", "Android"],
        budget: "$3,000 - $5,000",
        duration: "2-4 months",
        experience: "Expert",
        location: "Remote, Worldwide",
        postedDays: 2
    },
];
function FindWorkPage() {
    return (React.createElement("div", { className: "container py-10" },
        React.createElement("div", { className: "flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6" },
            React.createElement("div", { className: "w-full md:w-1/4 space-y-4" },
                React.createElement(card_1.Card, null,
                    React.createElement(card_1.CardHeader, null,
                        React.createElement(card_1.CardTitle, null, "Filters"),
                        React.createElement(card_1.CardDescription, null, "Refine your job search")),
                    React.createElement(card_1.CardContent, { className: "space-y-4" },
                        React.createElement("div", { className: "space-y-2" },
                            React.createElement(Label, null, "Keywords"),
                            React.createElement(input_1.Input, { placeholder: "e.g. web development" })),
                        React.createElement("div", { className: "space-y-2" },
                            React.createElement(Label, null, "Category"),
                            React.createElement(select_1.Select, { defaultValue: "all" },
                                React.createElement(select_1.SelectTrigger, null,
                                    React.createElement(select_1.SelectValue, { placeholder: "Select category" })),
                                React.createElement(select_1.SelectContent, null,
                                    React.createElement(select_1.SelectItem, { value: "all" }, "All Categories"),
                                    React.createElement(select_1.SelectItem, { value: "web-development" }, "Web Development"),
                                    React.createElement(select_1.SelectItem, { value: "design" }, "Graphic Design"),
                                    React.createElement(select_1.SelectItem, { value: "writing" }, "Content Writing"),
                                    React.createElement(select_1.SelectItem, { value: "marketing" }, "Digital Marketing"),
                                    React.createElement(select_1.SelectItem, { value: "mobile-development" }, "Mobile Development"),
                                    React.createElement(select_1.SelectItem, { value: "data-analysis" }, "Data Analysis")))),
                        React.createElement("div", { className: "space-y-2" },
                            React.createElement(Label, null, "Experience Level"),
                            React.createElement(select_1.Select, { defaultValue: "all" },
                                React.createElement(select_1.SelectTrigger, null,
                                    React.createElement(select_1.SelectValue, { placeholder: "Select level" })),
                                React.createElement(select_1.SelectContent, null,
                                    React.createElement(select_1.SelectItem, { value: "all" }, "All Levels"),
                                    React.createElement(select_1.SelectItem, { value: "entry" }, "Entry Level"),
                                    React.createElement(select_1.SelectItem, { value: "intermediate" }, "Intermediate"),
                                    React.createElement(select_1.SelectItem, { value: "expert" }, "Expert")))),
                        React.createElement("div", { className: "space-y-2" },
                            React.createElement("div", { className: "flex items-center justify-between" },
                                React.createElement(Label, null, "Hourly Rate ($)"),
                                React.createElement("span", { className: "text-sm text-muted-foreground" }, "$10 - $100+")),
                            React.createElement(slider_1.Slider, { defaultValue: [10, 100], min: 0, max: 200, step: 5 })),
                        React.createElement("div", { className: "space-y-2" },
                            React.createElement(Label, null, "Project Length"),
                            React.createElement(select_1.Select, { defaultValue: "all" },
                                React.createElement(select_1.SelectTrigger, null,
                                    React.createElement(select_1.SelectValue, { placeholder: "Select length" })),
                                React.createElement(select_1.SelectContent, null,
                                    React.createElement(select_1.SelectItem, { value: "all" }, "Any Duration"),
                                    React.createElement(select_1.SelectItem, { value: "short" }, "Less than 1 month"),
                                    React.createElement(select_1.SelectItem, { value: "medium" }, "1-3 months"),
                                    React.createElement(select_1.SelectItem, { value: "long" }, "3+ months")))),
                        React.createElement(button_1.Button, { className: "w-full" }, "Apply Filters")))),
            React.createElement("div", { className: "w-full md:w-3/4 space-y-4" },
                React.createElement("div", { className: "flex items-center justify-between" },
                    React.createElement("h1", { className: "text-2xl font-bold" }, "Available Jobs"),
                    React.createElement(select_1.Select, { defaultValue: "newest" },
                        React.createElement(select_1.SelectTrigger, { className: "w-[180px]" },
                            React.createElement(select_1.SelectValue, { placeholder: "Sort by" })),
                        React.createElement(select_1.SelectContent, null,
                            React.createElement(select_1.SelectItem, { value: "newest" }, "Newest First"),
                            React.createElement(select_1.SelectItem, { value: "oldest" }, "Oldest First"),
                            React.createElement(select_1.SelectItem, { value: "highest" }, "Highest Budget"),
                            React.createElement(select_1.SelectItem, { value: "lowest" }, "Lowest Budget")))),
                jobListings.map(function (job) { return (React.createElement(card_1.Card, { key: job.id, className: "hover:shadow-md transition-shadow" },
                    React.createElement(card_1.CardHeader, null,
                        React.createElement("div", { className: "flex justify-between items-start" },
                            React.createElement("div", { className: "flex gap-4" },
                                React.createElement("div", { className: "hidden sm:block" },
                                    React.createElement(image_1["default"], { src: categoryImages[job.category] || categoryImages["default"], alt: job.category, width: 60, height: 60, className: "rounded-md object-cover" })),
                                React.createElement("div", null,
                                    React.createElement(card_1.CardTitle, null, job.title),
                                    React.createElement(card_1.CardDescription, { className: "flex items-center mt-1" },
                                        React.createElement(lucide_react_1.Briefcase, { className: "h-4 w-4 mr-1" }),
                                        job.type))),
                            React.createElement(badge_1.Badge, { variant: job.featured ? "default" : "secondary" }, job.featured ? "Featured" : "New"))),
                    React.createElement(card_1.CardContent, null,
                        React.createElement("p", { className: "text-sm text-muted-foreground mb-4" }, job.description),
                        React.createElement("div", { className: "flex flex-wrap gap-2 mb-4" }, job.skills.map(function (skill) { return (React.createElement(badge_1.Badge, { key: skill, variant: "outline" }, skill)); })),
                        React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-2 text-sm" },
                            React.createElement("div", { className: "flex items-center" },
                                React.createElement(lucide_react_1.DollarSign, { className: "h-4 w-4 mr-1 text-muted-foreground" }),
                                React.createElement("span", null, job.budget)),
                            React.createElement("div", { className: "flex items-center" },
                                React.createElement(lucide_react_1.Clock, { className: "h-4 w-4 mr-1 text-muted-foreground" }),
                                React.createElement("span", null, job.duration)),
                            React.createElement("div", { className: "flex items-center" },
                                React.createElement(lucide_react_1.Star, { className: "h-4 w-4 mr-1 text-muted-foreground" }),
                                React.createElement("span", null, job.experience)),
                            React.createElement("div", { className: "flex items-center col-span-2 md:col-span-3" },
                                React.createElement(lucide_react_1.MapPin, { className: "h-4 w-4 mr-1 text-muted-foreground" }),
                                React.createElement("span", null, job.location)))),
                    React.createElement(card_1.CardFooter, { className: "flex justify-between" },
                        React.createElement("div", { className: "text-sm text-muted-foreground" },
                            "Posted ",
                            job.postedDays,
                            " days ago"),
                        React.createElement("div", { className: "flex gap-2" },
                            React.createElement(button_1.Button, { variant: "outline", onClick: function () { return handleSaveJob(job.id); } }, "Save"),
                            React.createElement(link_1["default"], { href: "/jobs/" + job.id },
                                React.createElement(button_1.Button, null, "View Details")))))); }),
                React.createElement("div", { className: "flex justify-center mt-8" },
                    React.createElement(button_1.Button, { variant: "outline", className: "mx-1" }, "Previous"),
                    React.createElement(button_1.Button, { variant: "outline", className: "mx-1" }, "1"),
                    React.createElement(button_1.Button, { className: "mx-1" }, "2"),
                    React.createElement(button_1.Button, { variant: "outline", className: "mx-1" }, "3"),
                    React.createElement(button_1.Button, { variant: "outline", className: "mx-1" }, "Next"))))));
}
exports["default"] = FindWorkPage;
function Label(_a) {
    var children = _a.children, htmlFor = _a.htmlFor;
    return (React.createElement("div", { className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" }, children));
}
// Function to handle saving a job
function handleSaveJob(jobId) {
    try {
        // In a real app, this would make an API call to save the job
        console.log("Job " + jobId + " saved");
        // You could also use toast notification here
    }
    catch (error) {
        error_handling_1.handleError(error, "Failed to save job. Please try again.");
    }
}
