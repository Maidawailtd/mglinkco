import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {/* About Content */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2023, MGLINKCO connects businesses with top freelance professionals across various industries.
            </p>
            <img 
              src="/images/team.jpg" 
              alt="Our team" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-6">
              To create seamless connections between talent and opportunity through our innovative platform.
            </p>
            <img 
              src="/images/office.jpg" 
              alt="Our office" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
