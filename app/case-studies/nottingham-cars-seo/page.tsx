import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MessageCircle, Facebook, X, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Expand } from "lucide-react"
import { ExpandableImage } from "@/components/expandable-image"

// Custom Pinterest icon component
function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.624 0 11.999-5.373 11.999-12C24 5.372 18.626.001 12.001.001z" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: "Nottingham Cars SEO Case Study | StageFX - Local Transport SEO Success",
  description:
    "See how we helped a 40-year-old taxi brand finally rank for key taxi booking keywords through targeted on-site SEO and link building.",
}

export default function NottinghamCarsSEOCaseStudy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        
        <MobileNav />
      </header>

      {/* Floating Back Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <Link
          href="/case-studies"
          className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200 text-[#9baed9] hover:bg-[#9baed9] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>
      </div>

      <main>
        {/* Back Navigation */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-[#9baed9] hover:text-[#8a9dc8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-[#9baed9]">Nottingham Cars</h1>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">Transport</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">SEO</span>
              </div>
              
              <p className="text-xl text-gray-600 mb-8">
                Helping a 40-year-old taxi brand finally rank for taxi booking keywords through targeted on-site SEO and
                strategic link building.
              </p>
              <div className="bg-gradient-to-r from-[#9baed9]/10 to-[#9baed9]/5 p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.nottinghamcars.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9baed9] hover:underline"
                  >
                    nottinghamcars.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Brief */}
        <section className="py-16 bg-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-[#9baed9]">📘 Project Brief</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Nottingham Cars is one of the oldest and most established taxi services in Nottingham, UK, with a
                  history spanning over 40 years. Despite their strong local presence and reputation, they were
                  struggling to compete in the digital landscape against newer, more tech-savvy competitors.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The company approached us after noticing that despite their long-standing reputation, they weren't
                  appearing in search results for key terms like "taxi Nottingham" or "book a taxi Nottingham." They
                  needed a comprehensive SEO strategy to improve their online visibility and drive more bookings through
                  their website rather than relying solely on their phone booking system.
                </p>
                <div className="mb-8">
                  <Image
                    src="/images/case-studies/nottingham-cars-seo/not-landing.png"
                    alt="VR Wave prescription lens inserts for virtual reality headsets"
                    width={700}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-md"
                  />

                </div>
                <p className="text-gray-700 leading-relaxed">
                We’ve shifted our content strategy to create value-rich, semantically structured content that AI systems can confidently surface in overviews. By using schema markup, concise explanations, and trustworthy sources, our content becomes a reliable input for AI-generated answers. This ensures StageFX is consistently represented as a knowledgeable voice in our niche, even when users don’t click through.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-[#9baed9]">🚧 Challenges</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    The website was outdated and not optimized for search engines, with minimal content and poor
                    technical SEO implementation.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Despite being in business for 40 years, they had virtually no online presence or backlink profile.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    They were facing stiff competition from both local taxi services and ride-sharing apps that had
                    invested heavily in digital marketing.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    The client had limited understanding of digital marketing and needed education on the importance of
                    SEO alongside implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 bg-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-[#9baed9]">🛠️ Solution</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We began with comprehensive keyword research to identify the most valuable search terms in the local
                    taxi market, focusing on terms with high search volume and commercial intent.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We conducted a thorough technical SEO audit and implemented fixes for issues including slow page
                    speed, missing meta tags, and mobile responsiveness problems.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We developed a content strategy that included creating service pages for different types of taxi
                    services (airport transfers, corporate accounts, etc.) and location-specific pages for areas within
                    Nottingham.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We implemented local SEO best practices, including optimizing their Google Business Profile,
                    creating consistent NAP (Name, Address, Phone) citations across local directories, and encouraging
                    customer reviews.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We developed a link building strategy focused on local relevance, targeting Nottingham-based
                    businesses, local news sites, and community organizations for backlinks.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We created a blog with locally relevant content about Nottingham events, transportation tips, and
                    company news to improve engagement and provide link-building opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-[#9baed9]">📈 Results</h2>
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our comprehensive SEO strategy transformed Nottingham Cars' online presence, delivering significant
                  improvements in visibility, traffic, and most importantly, bookings.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="bg-gradient-to-r from-[#9baed9]/10 to-[#9baed9]/5 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Key Achievements</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9baed9] mb-2">Position 2</div>
                    <p className="text-sm text-gray-600">for "taxi Nottingham"</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9baed9] mb-2">185%</div>
                    <p className="text-sm text-gray-600">Increase in Organic Traffic</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9baed9] mb-2">73%</div>
                    <p className="text-sm text-gray-600">Increase in Online Bookings</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Analytics */}
        <section className="py-16 bg-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-[#9baed9]">📊 Visual Analytics</h2>

              {/* Analytics Row 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <ExpandableImage
                    src="/images/case-studies/nottingham-cars-seo/organic-traffic-growth-chart.png"
                    alt="Organic Traffic Growth Chart showing 185% increase over 6 months"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#9baed9]">Organic Traffic Growth</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our SEO strategy resulted in a steady increase in organic traffic over a 6-month period. The graph
                    shows the dramatic improvement from virtually no organic traffic to a significant daily flow of
                    potential customers.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Key Metrics:</p>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• 185% increase in organic traffic</li>
                      <li>• 73% increase in online bookings</li>
                      <li>• 4.2 minute average session duration (up from 1.8 minutes)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Analytics Row 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-4 text-[#9baed9]">Local SEO Performance</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our local SEO efforts significantly improved Nottingham Cars' visibility in the local pack and
                    Google Maps results. The business now appears prominently for location-specific searches throughout
                    Nottingham.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Local SEO Results:</p>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• 240% increase in Google Business Profile views</li>
                      <li>• 112% increase in direction requests</li>
                      <li>• 95% increase in phone calls from Google listings</li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <ExpandableImage
                    src="/images/case-studies/nottingham-cars-seo/local-seo-performance-chart.png"
                    alt="Local SEO Performance Chart showing improvements in Google Business Profile visibility"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Analytics Row 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <ExpandableImage
                    src="/images/case-studies/nottingham-cars-seo/keyword-ranking-improvements.png"
                    alt="Keyword Ranking Improvements chart showing progress for key taxi-related search terms"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#9baed9]">Keyword Ranking Improvements</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our targeted keyword strategy resulted in significant ranking improvements for high-value search
                    terms. Nottingham Cars now ranks on page 1 for all their primary target keywords.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Top Performing Keywords:</p>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• "taxi Nottingham" - Position 2 (from position 110)</li>
                      <li>• "Nottingham airport taxi" - Position 3 (from position 18)</li>
                      <li>• "taxi service Nottingham" - Position 4 (from not ranking)</li>
                      <li>• "book taxi Nottingham" - Position 3 (from not ranking)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#f8faff] p-8 rounded-2xl border border-[#9baed9]/10">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#9baed9]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl text-[#9baed9]">❝</span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 italic mb-6">
                      "After 40 years in business, we thought we could rely on our reputation alone. StageFX showed us
                      that we needed to adapt to the digital age. Their SEO work has transformed our business, bringing
                      in a steady stream of new customers who find us online. Our online bookings have increased
                      dramatically, and we're now competing effectively with the newer taxi services in Nottingham."
                    </p>
                    <div>
                      <p className="font-semibold text-[#9baed9]">James Thompson</p>
                      <p className="text-sm text-gray-600">Operations Manager, Nottingham Cars</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#9baed9]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Transform Your Local Business?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how we can help your established business compete effectively in the digital landscape.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#9baed9] hover:bg-[#f0f4ff] text-lg px-8">
                  Start Your Local SEO Project
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
