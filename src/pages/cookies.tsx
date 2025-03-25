import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

        <div className="prose prose-blue max-w-none dark:prose-invert">
          <p>Last Updated: June 1, 2023</p>

          <p>
            This Cookie Policy explains how MGLink Connect ("we", "our", or "us") uses cookies and similar technologies
            to recognize you when you visit our website and use our services. It explains what these technologies are
            and why we use them, as well as your rights to control our use of them.
          </p>

          <h2>1. What Are Cookies?</h2>

          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
            Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well
            as to provide reporting information.
          </p>

          <p>
            Cookies set by the website owner (in this case, MGLink Connect) are called "first-party cookies". Cookies
            set by parties other than the website owner are called "third-party cookies". Third-party cookies enable
            third-party features or functionality to be provided on or through the website (e.g., advertising,
            interactive content, and analytics).
          </p>

          <h2>2. Types of Cookies We Use</h2>

          <h3>2.1 Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function and cannot be switched off in our systems. They are
            usually only set in response to actions made by you which amount to a request for services, such as setting
            your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you
            about these cookies, but some parts of the site will not then work.
          </p>

          <h3>2.2 Performance Cookies</h3>
          <p>
            These cookies allow us to count visits and traffic sources so we can measure and improve the performance of
            our site. They help us to know which pages are the most and least popular and see how visitors move around
            the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow
            these cookies we will not know when you have visited our site, and will not be able to monitor its
            performance.
          </p>

          <h3>2.3 Functional Cookies</h3>
          <p>
            These cookies enable the website to provide enhanced functionality and personalization. They may be set by
            us or by third-party providers whose services we have added to our pages. If you do not allow these cookies
            then some or all of these services may not function properly.
          </p>

          <h3>2.4 Targeting Cookies</h3>
          <p>
            These cookies may be set through our site by our advertising partners. They may be used by those companies
            to build a profile of your interests and show you relevant advertisements on other sites. They do not store
            directly personal information, but are based on uniquely identifying your browser and internet device. If
            you do not allow these cookies, you will experience less targeted advertising.
          </p>

          <h2>3. How to Control Cookies</h2>

          <p>
            You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies,
            you may still use our website though your access to some functionality and areas of our website may be
            restricted. As the means by which you can refuse cookies through your web browser controls vary from browser
            to browser, you should visit your browser's help menu for more information.
          </p>

          <p>
            In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like
            to find out more information, please visit{" "}
            <a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:underline">
              http://www.aboutads.info/choices/
            </a>{" "}
            or{" "}
            <a href="http://www.youronlinechoices.com" className="text-blue-600 hover:underline">
              http://www.youronlinechoices.com
            </a>
            .
          </p>

          <h2>4. Cookies We Use</h2>

          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Name</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Duration</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">_session</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Used to maintain your session state
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Session</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Essential</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">_csrf</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Used to prevent cross-site request forgery
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Session</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Essential</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">_ga</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Used to distinguish users for analytics
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">2 years</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Performance</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">_gid</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Used to distinguish users for analytics
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">24 hours</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Performance</td>
              </tr>
            </tbody>
          </table>

          <h2>5. Changes to This Cookie Policy</h2>

          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies
            we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy
            regularly to stay informed about our use of cookies and related technologies.
          </p>

          <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

          <h2>6. Contact Us</h2>

          <p>
            If you have any questions about our use of cookies or other technologies, please{" "}
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

