import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <div className="prose prose-blue max-w-none dark:prose-invert">
          <p>Last Updated: June 1, 2023</p>

          <p>
            Welcome to MGLink Connect. These Terms of Service ("Terms") govern your access to and use of the MGLink
            Connect website, services, and applications (collectively, the "Service"). Please read these Terms carefully
            before using the Service.
          </p>

          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of
            the Terms, you may not access or use the Service.
          </p>

          <h2>1. Accounts</h2>

          <p>
            When you create an account with us, you must provide accurate, complete, and current information. Failure to
            do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </p>

          <p>
            You are responsible for safeguarding the password that you use to access the Service and for any activities
            or actions under your password. You agree not to disclose your password to any third party. You must notify
            us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>

          <h2>2. User Content</h2>

          <p>
            Our Service allows you to post, link, store, share and otherwise make available certain information, text,
            graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or
            through the Service, including its legality, reliability, and appropriateness.
          </p>

          <p>
            By posting Content on or through the Service, you represent and warrant that: (i) the Content is yours (you
            own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and
            (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity
            rights, copyrights, contract rights or any other rights of any person.
          </p>

          <h2>3. Service Fees</h2>

          <p>
            MGLink Connect charges service fees for the use of the platform. Clients pay a 5% service fee on top of the
            project cost. Freelancers pay a 10% service fee on their earnings. These fees cover platform maintenance,
            payment processing, customer support, and dispute resolution services.
          </p>

          <p>All fees are non-refundable except as required by law or as explicitly stated in these Terms.</p>

          <h2>4. Payments and Escrow</h2>

          <p>
            All payments on MGLink Connect are processed through our secure escrow system. Clients fund projects or
            milestones before work begins, and funds are released to freelancers only after the client approves the
            completed work.
          </p>

          <p>
            For fixed-price projects, clients fund milestones before work begins. For hourly projects, clients are
            billed weekly based on the hours logged by the freelancer.
          </p>

          <h2>5. Dispute Resolution</h2>

          <p>
            If a dispute arises between a client and freelancer, our dispute resolution team will review the case and
            make a determination based on the evidence provided by both parties. Both parties agree to abide by the
            decision of the dispute resolution team.
          </p>

          <h2>6. Intellectual Property</h2>

          <p>
            Unless otherwise specified, all intellectual property rights in relation to the Service and its Content
            (excluding user Content) are reserved by MGLink Connect.
          </p>

          <p>
            For client-freelancer relationships, the ownership of intellectual property created during a project is
            determined by the agreement between the client and freelancer. We recommend clearly specifying intellectual
            property rights in project agreements.
          </p>

          <h2>7. Termination</h2>

          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if you breach the Terms.
          </p>

          <p>
            Upon termination, your right to use the Service will immediately cease. If you wish to terminate your
            account, you may simply discontinue using the Service or contact our support team to request account
            deletion.
          </p>

          <h2>8. Limitation of Liability</h2>

          <p>
            In no event shall MGLink Connect, nor its directors, employees, partners, agents, suppliers, or affiliates,
            be liable for any indirect, incidental, special, consequential or punitive damages, including without
            limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access
            to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on
            the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of
            your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other
            legal theory, whether or not we have been informed of the possibility of such damage.
          </p>

          <h2>9. Changes to Terms</h2>

          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material we will try to provide at least 30 days' notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole discretion.
          </p>

          <p>
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by
            the revised terms. If you do not agree to the new terms, please stop using the Service.
          </p>

          <h2>10. Contact Us</h2>

          <p>
            If you have any questions about these Terms, please{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

