import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, User, Smartphone, Tablet, Monitor, CheckCircle2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export const metadata: Metadata = {
  title: "Beginner's Guide to Mobile-Friendly Web Design | StageFX",
  description:
    "Everything you need to know about creating websites that work perfectly on mobile devices. Learn responsive design principles and best practices.",
}

export default function MobileFriendlyWebDesignPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
       
        </div>
       
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-[#9baed9]/5 via-white to-[#9baed9]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                <Link href="/" className="hover:text-[#9baed9] transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/blogs" className="hover:text-[#9baed9] transition-colors">
                  Blogs
                </Link>
                <span>/</span>
                <span>Mobile-Friendly Web Design</span>
              </div>

              {/* Back Button */}
              <div className="mb-8">
                <Link
                  href="/blogs"
                  className="inline-flex items-center text-[#9baed9] hover:text-[#8a9dc8] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blogs
                </Link>
              </div>

              {/* Title and Meta */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  Beginner's Guide to Mobile-Friendly Web Design
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Everything you need to know about creating websites that work perfectly on mobile devices. Learn
                  responsive design principles and best practices.
                </p>
                <div className="flex items-center justify-center gap-6 text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>February 20, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>Emma Thompson</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-12">
              <img
  src="/images/blog/mobile-friendly-web-design/blogres.jpeg"
  alt="Mobile-friendly web design examples showing the same website on desktop, tablet, and smartphone devices"
  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
/>

              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  With over 60% of web traffic now coming from mobile devices, having a mobile-friendly website isn't
                  optional—it's essential. Google has made mobile-friendliness a ranking factor, and users expect
                  websites to work flawlessly on their phones and tablets. This comprehensive guide will teach you
                  everything you need to know about creating mobile-friendly websites that provide excellent user
                  experiences across all devices.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-[#9baed9]/10 p-6 rounded-lg text-center">
                    <Smartphone className="w-12 h-12 text-[#9baed9] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile First</h3>
                    <p className="text-gray-700">Design for mobile devices first, then scale up</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <Tablet className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsive Design</h3>
                    <p className="text-gray-700">One website that adapts to all screen sizes</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg text-center">
                    <Monitor className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cross-Device</h3>
                    <p className="text-gray-700">Consistent experience across all devices</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Mobile-Friendly Design Matters</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Before diving into the how-to, let's understand why mobile-friendly design is crucial for your
                  business success:
                </p>

                <div className="bg-red-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">The Mobile Revolution in Numbers</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="text-gray-700 space-y-2">
                      <li>• 60.67% of web traffic comes from mobile devices</li>
                      <li>• 57% of users won't recommend a business with a poor mobile site</li>
                      <li>• 40% of users will visit a competitor's site after a bad mobile experience</li>
                      <li>• Mobile-friendly sites rank higher in Google search results</li>
                    </ul>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 61% of users are unlikely to return to a mobile site they had trouble accessing</li>
                      <li>• 74% of users are more likely to return to mobile-friendly sites</li>
                      <li>• Mobile commerce accounts for 45% of all e-commerce sales</li>
                      <li>• Google uses mobile-first indexing for all websites</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Responsive Web Design</h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Responsive web design is the foundation of mobile-friendly websites. It's an approach that makes web
                  pages render well on various devices and screen sizes by using flexible layouts, images, and CSS media
                  queries.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  The Three Pillars of Responsive Design
                </h3>

                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-[#9baed9] pl-6">
                    <h4 className="font-semibold text-gray-800 mb-2">1. Flexible Grid Layouts</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Use relative units (percentages) instead of fixed units (pixels) for layout elements.
                    </p>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                      <pre>{`.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.column {
  width: 50%; /* Instead of width: 400px; */
  float: left;
}`}</pre>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-semibold text-gray-800 mb-2">2. Flexible Images and Media</h4>
                    <p className="text-gray-700 text-sm mb-2">Make images and videos scale with the container width.</p>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                      <pre>{`img, video {
  max-width: 100%;
  height: auto;
}

/* For background images */
.hero-image {
  background-size: cover;
  background-position: center;
}`}</pre>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-semibold text-gray-800 mb-2">3. CSS Media Queries</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Apply different styles based on device characteristics like screen width.
                    </p>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                      <pre>{`/* Mobile styles (default) */
.column {
  width: 100%;
}

/* Tablet styles */
@media (min-width: 768px) {
  .column {
    width: 50%;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .column {
    width: 33.33%;
  }
}`}</pre>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Touch-Friendly Interface Design</h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Mobile users interact with your site using their fingers, not a mouse cursor. Design elements need to
                  be large enough and spaced appropriately for touch interaction.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                      Touch-Friendly Best Practices
                    </h4>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>• Minimum button size: 44x44 pixels</li>
                      <li>• Adequate spacing between clickable elements</li>
                      <li>• Large, easy-to-tap navigation menus</li>
                      <li>• Swipe gestures for image galleries</li>
                      <li>• Form fields large enough for easy typing</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">Common Touch Interface Mistakes</h4>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>• Tiny buttons that are hard to tap</li>
                      <li>• Links too close together</li>
                      <li>• Hover effects that don't work on touch</li>
                      <li>• Small form input fields</li>
                      <li>• No visual feedback for touch interactions</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#9baed9]/10 p-8 rounded-lg mt-12">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Ready to Make Your Site Mobile-Friendly?</h3>
                  <p className="text-gray-700 mb-6">
                    Creating a truly mobile-friendly website requires expertise and attention to detail. If you need
                    help implementing these best practices, our team is here to help you create a website that works
                    perfectly on all devices.
                  </p>
                  <Button asChild className="bg-[#9baed9] text-white hover:bg-[#8a9dc8]">
                    <Link href="/contact">Get Your Mobile Audit</Link>
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
       
      </main>

      <Footer />

      {/* Floating Back Button */}
      <Link
        href="/blogs"
        className="fixed bottom-6 left-6 bg-[#9baed9] text-white p-3 rounded-full shadow-lg hover:bg-[#8a9dc8] transition-colors z-50"
      >
        <ArrowLeft className="w-6 h-6" />
      </Link>
    </div>
  )
}
