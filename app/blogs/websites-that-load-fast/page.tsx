import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Zap, Clock, TrendingUp, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "How I Build Websites That Actually Load Fast | StageFX",
  description:
    "Discover the techniques and tools I use to create lightning-fast websites that improve user experience and search rankings.",
}

export default function WebsitesThatLoadFastPage() {
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
                <span>How I Build Websites That Actually Load Fast</span>
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
                  How I Build Websites That Actually Load Fast
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Discover the techniques and tools I use to create lightning-fast websites that improve user experience
                  and search rankings.
                </p>
                <div className="flex items-center justify-center gap-6 text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>February 28, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>Alex Rodriguez</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-12">
              <img
  src="/images/blog/websites-that-load-fast/website-speed-optimization-dashboard.png"
  alt="Website speed optimization dashboard showing performance metrics and load time improvements"
  className="w-full h-64 md:h-96 object-cover object-top rounded-2xl shadow-lg"
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
                  Website speed isn't just a nice-to-have feature—it's a business necessity. A one-second delay in page
                  load time can reduce conversions by 7%, and 40% of users abandon a website that takes more than 3
                  seconds to load. After building hundreds of high-performance websites, I've developed a systematic
                  approach that consistently delivers sub-2-second load times.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-[#9baed9]/10 p-6 rounded-lg text-center">
                    <Zap className="w-12 h-12 text-[#9baed9] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                    <p className="text-gray-700">Average load time under 2 seconds</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Better Rankings</h3>
                    <p className="text-gray-700">Improved SEO performance</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg text-center">
                    <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Higher Conversions</h3>
                    <p className="text-gray-700">Up to 25% increase in conversions</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Why Website Speed Matters More Than Ever
                </h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Before diving into the technical details, let's understand why website speed is crucial for your
                  business success:
                </p>

                <div className="bg-red-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">The Cost of Slow Websites</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Amazon loses $1.6 billion annually for every second of delay</li>
                    <li>• Google found that 53% of mobile users abandon sites that take over 3 seconds</li>
                    <li>• A 100ms delay can hurt conversion rates by up to 7%</li>
                    <li>• Page speed is a direct Google ranking factor since 2010</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">My 8-Step Speed Optimization Framework</h2>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Over the years, I've refined my approach to website optimization into a systematic 8-step framework
                  that addresses every aspect of website performance. Here's exactly how I do it:
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  Step 1: Performance Audit and Baseline
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Before making any changes, I establish a baseline using multiple testing tools. This gives me concrete
                  data to measure improvements against.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Essential Testing Tools:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Free Tools:</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Google PageSpeed Insights</li>
                        <li>• GTmetrix</li>
                        <li>• WebPageTest</li>
                        <li>• Google Lighthouse</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Premium Tools:</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Pingdom</li>
                        <li>• New Relic</li>
                        <li>• KeyCDN Performance Test</li>
                        <li>• Uptrends</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  Step 2: Choose the Right Hosting Foundation
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Your hosting choice is the foundation of website speed. I've tested dozens of hosting providers, and
                  here are my top recommendations based on performance:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="border border-green-200 bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                        1
                      </span>
                      Premium Managed Hosting
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Best for:</strong> High-traffic business websites
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Recommendations:</strong> WP Engine, Kinsta, SiteGround
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Average load time:</strong> 1.2-1.8 seconds
                    </p>
                  </div>

                  <div className="border border-blue-200 bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                        2
                      </span>
                      Cloud Hosting
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Best for:</strong> Scalable applications
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Recommendations:</strong> DigitalOcean, AWS, Google Cloud
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Average load time:</strong> 1.5-2.2 seconds
                    </p>
                  </div>

                  <div className="border border-yellow-200 bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                        3
                      </span>
                      Budget-Friendly Options
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Best for:</strong> Small businesses and startups
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Recommendations:</strong> Cloudways, A2 Hosting
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Average load time:</strong> 2.0-3.0 seconds
                    </p>
                  </div>
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
