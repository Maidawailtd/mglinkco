import Link from "next/link"

export default function AccessibilityPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Accessibility Statement</h1>

        <div className="prose prose-blue max-w-none dark:prose-invert">
          <p>Last Updated: June 1, 2023</p>

          <p>
            MGLink Connect is committed to ensuring digital accessibility for people with disabilities. We are
            continually improving the user experience for everyone, and applying the relevant accessibility standards.
          </p>

          <h2>Conformance Status</h2>

          <p>
            The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve
            accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and
            Level AAA.
          </p>

          <p>
            MGLink Connect is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of
            the content do not fully conform to the accessibility standard.
          </p>

          <h2>Accessibility Features</h2>

          <p>MGLink Connect includes the following accessibility features:</p>

          <ul>
            <li>Semantic HTML structure with appropriate headings and landmarks</li>
            <li>Keyboard navigation support for all interactive elements</li>
            <li>Color contrast that meets WCAG 2.1 AA standards</li>
            <li>Text alternatives for non-text content</li>
            <li>Resizable text without loss of functionality</li>
            <li>ARIA attributes where appropriate</li>
            <li>Dark mode for users with light sensitivity</li>
          </ul>

          <h2>Limitations and Alternatives</h2>

          <p>
            Despite our best efforts to ensure accessibility of MGLink Connect, there may be some limitations. Below is
            a description of known limitations, and potential solutions. Please contact us if you observe an issue not
            listed below.
          </p>

          <p>Known limitations:</p>

          <ul>
            <li>
              <strong>Complex data visualizations:</strong> Some charts and graphs may be difficult to interpret with
              screen readers. We provide text alternatives and data tables where possible.
            </li>
            <li>
              <strong>Third-party content:</strong> Some content provided by third-party services may not be fully
              accessible. We work with our partners to improve accessibility.
            </li>
            <li>
              <strong>Legacy content:</strong> Older content may not meet current accessibility standards. We are
              working to update this content.
            </li>
          </ul>

          <h2>Feedback</h2>

          <p>
            We welcome your feedback on the accessibility of MGLink Connect. Please let us know if you encounter
            accessibility barriers:
          </p>

          <ul>
            <li>
              Email:{" "}
              <a href="mailto:accessibility@mglinkconnect.com" className="text-blue-600 hover:underline">
                accessibility@mglinkconnect.com
              </a>
            </li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Visitor address: 123 Main Street, Suite 100, San Francisco, CA 94105</li>
            <li>Postal address: PO Box 12345, San Francisco, CA 94105</li>
          </ul>

          <p>We try to respond to feedback within 3 business days.</p>

          <h2>Assessment Approach</h2>

          <p>MGLink Connect assessed the accessibility of our platform by the following approaches:</p>

          <ul>
            <li>Self-evaluation</li>
            <li>External evaluation using automated tools</li>
            <li>User testing with assistive technologies</li>
          </ul>

          <h2>Compatibility with Browsers and Assistive Technology</h2>

          <p>MGLink Connect is designed to be compatible with the following assistive technologies:</p>

          <ul>
            <li>Screen readers (including NVDA, JAWS, VoiceOver, and TalkBack)</li>
            <li>Screen magnification software</li>
            <li>Speech recognition software</li>
            <li>Keyboard-only navigation</li>
          </ul>

          <p>MGLink Connect is compatible with recent versions of major browsers including:</p>

          <ul>
            <li>Chrome</li>
            <li>Firefox</li>
            <li>Safari</li>
            <li>Edge</li>
          </ul>

          <h2>Technical Specifications</h2>

          <p>
            Accessibility of MGLink Connect relies on the following technologies to work with the particular combination
            of web browser and any assistive technologies or plugins installed on your computer:
          </p>

          <ul>
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <p>These technologies are relied upon for conformance with the accessibility standards used.</p>

          <h2>Continuous Improvement</h2>

          <p>
            We are committed to continually improving the accessibility of our platform. We will prioritize issues based
            on severity and impact, and will address them as part of our development roadmap.
          </p>

          <p>
            If you have any questions or need assistance, please{" "}
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

