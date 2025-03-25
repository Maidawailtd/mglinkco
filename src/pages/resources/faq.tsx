import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

// Mock FAQ data
const FREELANCER_FAQS = [
  {
    question: "How do I create a freelancer profile?",
    answer:
      "To create a freelancer profile, sign up for an account, select 'Work as a freelancer' during registration, and follow the onboarding process. You'll be able to add your skills, experience, portfolio, and set your rates.",
  },
  {
    question: "How much does it cost to join as a freelancer?",
    answer:
      "Creating an account and setting up your profile is completely free. MGLink Connect charges a 10% service fee only when you successfully complete a project and get paid.",
  },
  {
    question: "How do I get my first client?",
    answer:
      "To get your first client, complete your profile with detailed information about your skills and experience, upload portfolio samples, set competitive rates, and start submitting proposals to relevant projects. Personalize each proposal to the specific project requirements.",
  },
  {
    question: "When and how do I get paid?",
    answer:
      "Payments are processed through our secure escrow system. For fixed-price projects, clients fund milestones before work begins, and release payment when the work is approved. For hourly projects, you'll submit time logs weekly, and payment is processed after client review.",
  },
  {
    question: "What if a client doesn't pay?",
    answer:
      "Our escrow system protects freelancers by requiring clients to fund milestones before work begins. If there's a dispute, our mediation team will review the work and communications to ensure fair resolution.",
  },
  {
    question: "How do I withdraw my earnings?",
    answer:
      "You can withdraw your earnings through various payment methods including bank transfer, PayPal, or Wise. Go to your Dashboard > Finances > Withdraw to set up your preferred payment method and request a withdrawal.",
  },
]

const CLIENT_FAQS = [
  {
    question: "How do I post a project?",
    answer:
      "To post a project, sign in to your account, click on 'Post a Project' in the navigation menu, fill out the project details including description, budget, timeline, and required skills, then submit it for freelancers to view and send proposals.",
  },
  {
    question: "How much does it cost to hire a freelancer?",
    answer:
      "Posting projects and receiving proposals is free. When you hire a freelancer, there's a 5% service fee added to the project cost to cover platform services, payment processing, and support.",
  },
  {
    question: "How do I choose the right freelancer?",
    answer:
      "Review each freelancer's profile, portfolio, ratings, and reviews. Evaluate their proposals for understanding of your requirements, relevant experience, and communication quality. You can also interview top candidates before making a decision.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes, all payments are processed through our secure escrow system. You fund milestones before work begins, but money is only released to the freelancer when you approve the completed work, ensuring you get what you paid for.",
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer:
      "If you're not satisfied with the work, communicate your concerns with the freelancer first. Most issues can be resolved through clear communication. If needed, you can request revisions based on your original requirements. For unresolved issues, our dispute resolution team can help mediate.",
  },
  {
    question: "Can I hire a team of freelancers?",
    answer:
      "Yes, you can hire multiple freelancers for different aspects of your project, or hire an agency that provides team-based services. For large projects, you might consider our Enterprise Solutions for additional support in managing multiple freelancers.",
  },
]

const PAYMENT_FAQS = [
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for funding projects. Freelancers can withdraw funds via bank transfer, PayPal, or Wise.",
  },
  {
    question: "How does the escrow system work?",
    answer:
      "Our escrow system holds the client's payment securely until the work is completed and approved. For milestone-based projects, clients fund each milestone before work begins, and release payment when satisfied with the deliverables.",
  },
  {
    question: "What fees does MGLink Connect charge?",
    answer:
      "Clients pay a 5% service fee on top of the project cost. Freelancers pay a 10% service fee on their earnings. These fees cover platform maintenance, payment processing, customer support, and dispute resolution services.",
  },
  {
    question: "When are freelancers paid?",
    answer:
      "For fixed-price projects, freelancers are paid when the client approves the milestone or deliverable. For hourly projects, freelancers submit weekly time logs that clients review, with payment processed after approval.",
  },
]

export default function FAQPage() {
  return (
    <div className="container py-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-500">
          Find answers to common questions about using MGLink Connect as a freelancer or client.
        </p>
      </div>

      <Tabs defaultValue="freelancers" className="mb-12">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="freelancers">For Freelancers</TabsTrigger>
            <TabsTrigger value="clients">For Clients</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="freelancers">
          <Card>
            <CardHeader>
              <CardTitle>Freelancer FAQs</CardTitle>
              <CardDescription>Common questions about working as a freelancer on MGLink Connect</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {FREELANCER_FAQS.map((faq, index) => (
                  <AccordionItem key={index} value={`freelancer-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clients">
          <Card>
            <CardHeader>
              <CardTitle>Client FAQs</CardTitle>
              <CardDescription>Common questions about hiring freelancers on MGLink Connect</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {CLIENT_FAQS.map((faq, index) => (
                  <AccordionItem key={index} value={`client-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle>Payment FAQs</CardTitle>
              <CardDescription>Common questions about payments, fees, and the escrow system</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {PAYMENT_FAQS.map((faq, index) => (
                  <AccordionItem key={index} value={`payment-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-6">
          If you couldn't find the answer you were looking for, our support team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button>Contact Support</Button>
          </Link>
          <Link href="/resources/guides">
            <Button variant="outline">Browse Guides</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

