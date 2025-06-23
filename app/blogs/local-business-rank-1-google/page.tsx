import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, User, TrendingUp, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { Footer } from "@/components/footer"

// WhatsApp icon component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: "How We Got a Melbourne Plumbing Business to Rank #1 on Google | StageFX Blog",
  description:
    "Case study: How we helped Smart Plumbing (Professional Melbourne Plumbers) achieve #1 rankings in Google's local pack and organic results within 90 days.",
}

export default function LocalBusinessRankBlogPost() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Back Navigation */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link
              href="/blogs"
              className="inline-flex items-center text-[#9baed9] hover:text-[#8a9dc8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">SEO</span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />8 min read
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <User className="w-4 h-4 mr-1" />
                  StageFX Team
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#9baed9] leading-tight">
                How We Got Professional Melbourne Plumbers to Rank #1 on Google
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Smart Plumbing came to us struggling to rank for even basic searches like "plumber Melbourne." Here's how we transformed their local SEO and got them to #1 in both map pack and organic results within 3 months.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {/* The Problem */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-lg">🧩</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#9baed9] m-0">The Challenge</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    When Smart Plumbing first approached us, their online visibility was virtually non-existent. Despite serving Melbourne for over a decade, they were buried deep in search results. Our initial analysis revealed:
                  </p>
                  
                  <div className="my-8">
                  <Image
  src="/images/blog/local-business-rank-1-google/Organic competitors.jpeg"
  alt="Organic competitors analysis showing Smart Plumbing's poor positioning"
  width={800}
  height={400}
  className="w-full h-64 md:h-96 object-contain rounded-lg shadow-lg"
/>
-
                    <p className="text-center text-gray-500 text-sm mt-2">
                      Competitor analysis showing Smart Plumbing's weak organic presence compared to competitors
                    </p>
                  </div>

                  <div className="my-8">
                    <Image
                      src="/images/blog/local-business-rank-1-google/Competitor positioning map.jpeg"
                      alt="Competitor positioning map showing market gaps"
                      width={800}
                      height={400}
                      className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-center text-gray-500 text-sm mt-2">
                      Positioning map revealing opportunities in the Melbourne plumbing market
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 mb-2">
                        <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Average position of 47 for "Melbourne plumber"</span>
                      </li>
                      <li className="flex items-start gap-3 mb-2">
                        <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Not appearing in local map pack for any major plumbing terms</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Only 12 backlinks from low-quality directories</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Keyword Research */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">🔍</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#9baed9] m-0">Keyword Opportunities Analysis</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our comprehensive keyword research uncovered several high-opportunity terms that competitors were neglecting:
                  </p>

                  <div className="my-8">
                    <Image
                      src="/images/blog/local-business-rank-1-google/Keywords oportunuties.jpeg"
                      alt="Keyword opportunities analysis showing high-potential terms"
                      width={800}
                      height={400}
                      className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-center text-gray-500 text-sm mt-2">
                      Keyword opportunity analysis revealing gaps in competitor coverage
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">"emergency plumber Melbourne" - High intent, low competition</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">"blocked drain [suburb]" - Location-specific opportunities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">"24 hour plumber" - Untapped by major competitors</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Google Maps Optimization */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#9baed9] m-0">Google Maps Optimization Strategy</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We completely overhauled their Google Maps presence with these key tactics:
                  </p>

                  <div className="my-8">
                    <Image
                      src="/images/blog/local-business-rank-1-google/Google maps image.jpeg"
                      alt="Optimized Google Maps listing showing improved visibility"
                      width={800}
                      height={400}
                      className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-center text-gray-500 text-sm mt-2">
                      Optimized Google Maps listing after our interventions
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Complete business profile with service areas and attributes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Regular Google Posts with special offers and updates</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Optimized photos with geo-tagged before/after work images</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Organic Results */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#9baed9] m-0">Organic Search Results Transformation</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our content and technical SEO strategy yielded dramatic improvements in organic rankings:
                  </p>

                  <div className="my-8">
                    <Image
                      src="/images/blog/local-business-rank-1-google/Organic search results Positions.jpeg"
                      alt="SERP tracking showing position improvements"
                      width={800}
                      height={400}
                      className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                    />
                    <p className="text-center text-gray-500 text-sm mt-2">
                      Position tracking showing upward movement across key terms
                    </p>
                  </div>

                  <div className="my-8">
                  <Image
  src="/images/blog/local-business-rank-1-google/organic grapgh.jpeg"
  alt="Organic traffic growth graph"
  width={800}
  height={400}
  className="w-full h-64 md:h-96 object-contain rounded-lg shadow-lg"
/>

                    <p className="text-center text-gray-500 text-sm mt-2">
                      Steady organic traffic growth over the campaign period
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                      <div className="text-3xl font-bold text-[#9baed9] mb-2">#1</div>
                      <p className="text-gray-600">"Emergency plumber Melbourne"</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                      <div className="text-3xl font-bold text-[#9baed9] mb-2">#3</div>
                      <p className="text-gray-600">"Melbourne plumber"</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                      <div className="text-3xl font-bold text-[#9baed9] mb-2">#1-3</div>
                      <p className="text-gray-600">For 12 suburb-specific terms</p>
                    </div>
                  </div>
                </div>

                {/* Results Summary */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 font-bold text-lg">🏆</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#9baed9] m-0">Final Results</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    After 90 days of implementing our local SEO strategy:
                  </p>
                  <div className="bg-gradient-to-r from-[#9baed9]/10 to-[#9baed9]/5 p-6 rounded-lg">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">320% increase in organic traffic</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">#1 ranking for 8 high-value plumbing keywords</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">Appearing in map pack for 92% of target searches</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">217% more calls from Google Business Profile</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  
      </main>

      {/* Floating Back Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <Link
          href="/blogs"
          className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200 text-[#9baed9] hover:bg-[#9baed9] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
               {/* Related Articles */}
               <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-[#9baed9]">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Link href="/blogs/seo-vs-paid-ads" className="group">
                  <div className="bg-[#f8faff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                      SEO
                    </span>
                    <h3 className="text-lg font-semibold mt-4 mb-2 text-[#9baed9] group-hover:text-[#8a9dc8]">
                      SEO vs Paid Ads: What's Best for Small Businesses?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Should you spend money on ads or invest in SEO? Let's break it down.
                    </p>
                  </div>
                </Link>
                <Link href="/blogs/websites-that-load-fast" className="group">
                  <div className="bg-[#f8faff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      Web Dev
                    </span>
                    <h3 className="text-lg font-semibold mt-4 mb-2 text-[#9baed9] group-hover:text-[#8a9dc8]">
                      How I Build Websites That Actually Load Fast
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Speed matters for rankings and conversions. Here's my formula.
                    </p>
                  </div>
                </Link>
                <Link href="/blogs/mobile-friendly-web-design" className="group">
                  <div className="bg-[#f8faff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      Web Dev
                    </span>
                    <h3 className="text-lg font-semibold mt-4 mb-2 text-[#9baed9] group-hover:text-[#8a9dc8]">
                      Beginner's Guide to Mobile-Friendly Web Design
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Over half of all website traffic comes from mobile devices. Here's how to build mobile-first.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
      <Footer />
    </div>
  )
}