import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <div className="prose prose-blue max-w-none dark:prose-invert">
          <p>Last Updated: June 1, 2023</p>

          <p>
            This Privacy Policy describes how MGLink Connect ("we", "our", or "us") collects, uses, and shares your
            personal information when you use our website, services, and applications (collectively, the "Service").
          </p>

          <h2>1. Information We Collect</h2>

          <h3>1.1 Personal Information</h3>
          <p>
            We collect personal information that you voluntarily provide to us when you register for the Service,
            express an interest in obtaining information about us or our products and services, participate in
            activities on the Service, or otherwise contact us. This information may include:
          </p>
          <ul>
            <li>Name, email address, and contact information</li>
            <li>Username and password</li>
            <li>Profile information (skills, experience, portfolio, etc.)</li>
            <li>Payment information (processed securely through our payment processors)</li>
            <li>Communication preferences</li>
            <li>Other information you choose to provide</li>
          </ul>

          <h3>1.2 Automatically Collected Information</h3>
          <p>
            We automatically collect certain information when you visit, use, or navigate the Service. This information
            does not reveal your specific identity but may include:
          </p>
          <ul>
            <li>Device and usage information (IP address, browser type, operating system, etc.)</li>
            <li>Location information</li>
            <li>Cookies and similar technologies</li>
          </ul>

          <h2>2. How We Use Your Information</h2>

          <p>We use your personal information for the following purposes:</p>
          <ul>
            <li>To provide and maintain the Service</li>
            <li>To process transactions and manage your account</li>
            <li>To match freelancers with clients and projects</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To send administrative information, updates, and marketing communications</li>
            <li>To personalize your experience and deliver content relevant to your interests</li>
            <li>To protect the security and integrity of the Service</li>
            <li>To comply with legal obligations and enforce our terms</li>
          </ul>

          <h2>3. How We Share Your Information</h2>

          <p>We may share your personal information in the following situations:</p>
          <ul>
            <li>
              <strong>With Other Users:</strong> Information such as your profile, portfolio, and public activity is
              visible to other users of the Service.
            </li>
            <li>
              <strong>With Service Providers:</strong> We may share your information with third-party vendors, service
              providers, contractors, or agents who perform services for us.
            </li>
            <li>
              <strong>For Business Transfers:</strong> We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion
              of our business.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with
              your consent.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in
              response to valid requests by public authorities.
            </li>
          </ul>

          <h2>4. Cookies and Tracking Technologies</h2>

          <p>
            We use cookies and similar tracking technologies to track activity on our Service and store certain
            information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>

          <p>
            For more information about the cookies we use, please see our{" "}
            <Link href="/cookies" className="text-blue-600 hover:underline">
              Cookie Policy
            </Link>
            .
          </p>

          <h2>5. Data Security</h2>

          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the
            security of any personal information we process. However, despite our safeguards, no security system is
            impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that information you
            supply will not be intercepted while being transmitted to us over the Internet.
          </p>

          <h2>6. International Data Transfers</h2>

          <p>
            Your information may be transferred to, and maintained on, computers located outside of your state,
            province, country, or other governmental jurisdiction where the data protection laws may differ from those
            in your jurisdiction. If you are located outside the United States and choose to provide information to us,
            please note that we transfer the data to the United States and process it there.
          </p>

          <h2>7. Your Data Protection Rights</h2>

          <p>Depending on your location, you may have the following rights:</p>
          <ul>
            <li>The right to access, update, or delete your personal information</li>
            <li>The right to rectification if your information is inaccurate or incomplete</li>
            <li>The right to object to our processing of your personal data</li>
            <li>The right to request restriction of processing your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>

          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section
            below.
          </p>

          <h2>8. Children's Privacy</h2>

          <p>
            Our Service is not directed to individuals under the age of 18. We do not knowingly collect personal
            information from children under 18. If you are a parent or guardian and you are aware that your child has
            provided us with personal information, please contact us.
          </p>

          <h2>9. Changes to This Privacy Policy</h2>

          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
            Policy periodically for any changes.
          </p>

          <h2>10. Contact Us</h2>

          <p>
            If you have any questions about this Privacy Policy, please{" "}
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

