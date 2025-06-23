import Link from "next/link"
import Image from "next/image"
import React from 'react'
import { ArrowLeft, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { MobileNav } from "@/components/mobile-nav"
import type { Metadata } from "next"
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
  title: "St John Health SEO Case Study | StageFX - Healthcare SEO Success",
  description:
    "See how we helped St John Health achieve #1 rankings for healthcare keywords in Western Australia through strategic SEO optimization.",
}

export default function StJohnHealthSEOCaseStudy() {
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
                <h1 className="text-4xl md:text-5xl font-bold text-[#9baed9]">St John Health</h1>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">Healthcare</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">SEO</span>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Optimizing a new healthcare website to achieve top rankings for critical healthcare keywords in Western
                Australia.
              </p>
              <div className="bg-gradient-to-r from-[#9baed9]/10 to-[#9baed9]/5 p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://stjohnhealth.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9baed9] hover:underline"
                  >
                    stjohnhealth.com.au
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
                  St John Health is a premier health provider in Western Australia, seamlessly integrating General
                  Practice, Urgent Care, and Dental services. Their co-located offerings create a convenient, all-in-one
                  healthcare destination for their patients.
                </p>
                <div className="mb-8">
                  <Image
                    src="/images/case-studies/st-john-health-seo/stJ-landing.png"
                    alt="VR Wave prescription lens inserts for virtual reality headsets"
                    width={700}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  After we had completed developing the website, the client took it upon herself to interact with the
                  website to ensure it behaved as she wanted. One week later, she approached us to help them optimize
                  the new website to enable funneling search results across all search engines. They also had trouble
                  with indexing the new website to Google Search Console.
                </p>
                <p className="text-gray-700 leading-relaxed">
                At StageFX, we recognize that traditional SEO is evolving rapidly as AI Overviews reshape how users engage with search results. Instead of relying solely on ranking in the top organic spots, we focus on structuring our content to be AI-readable and easily summarized by generative systems. This means prioritizing clarity, authority, and direct answers—ensuring our brand stays visible even when AI takes the lead.
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
                    Since the website was in its infancy, it lacked any organic rankings. That was the only challenge,
                    since we invested a good amount of time when in the Development phase.
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
                    We commenced our strategy with comprehensive keyword research, identifying specific pages to enhance
                    their rankings based on the chosen keywords.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Next, we meticulously optimized the Meta tags and enriched the pages with relevant, keyword-focused
                    content, incorporating compelling calls-to-action (CTAs) to drive engagement.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    To ensure a seamless user experience, we developed a well-structured site architecture by
                    implementing effective internal linking across the website's pages.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Our efforts included thorough on-page optimization, which encompassed improving webpage speed,
                    reducing load times, and optimizing image alt tags for better visibility.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Furthermore, we launched our off-site optimization by establishing local business listings on
                    .com.au domains and securing backlinks from high Domain Authority (DA) and Trust Flow (TF) websites,
                    such as wn.com, boredpanda.com, buzzfeed.com, and onmogul.com.
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
                  Our comprehensive SEO strategy delivered exceptional results for St John Health, establishing them as
                  a prominent online presence in the Western Australian healthcare sector.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="bg-gradient-to-r from-[#9baed9]/10 to-[#9baed9]/5 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Key Achievement</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9baed9] mb-2">Position 1</div>
                    <p className="text-sm text-gray-600">chronic disease management in perth western australia</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9baed9] mb-2">75</div>
                    <p className="text-sm text-gray-600">Monthly Search Volume</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9baed9] mb-2">90%</div>
                    <p className="text-sm text-gray-600">Keywords in Top 10</p>
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
                    src="/images/case-studies/st-john-health-seo/organic-growth-overview.png"
                    alt="Organic Growth Overview chart showing steady increase in healthcare keyword rankings"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#9baed9]">Organic Overview</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our strategic SEO implementation resulted in consistent organic growth for St John Health. The graph
                    shows the steady climb from zero visibility to dominant positions for healthcare-related keywords in
                    Western Australia.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Key Metrics:</p>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• 20+ keywords ranking on page 1</li>
                      <li>• 250% increase in organic visibility</li>
                      <li>• 75% of target keywords in top 5 positions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Analytics Row 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-4 text-[#9baed9]">Backlinks Profile</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our link building strategy focused on high-authority domains relevant to healthcare and local
                    Australian businesses. Each backlink was carefully placed to maximize relevance and authority
                    transfer.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Link Building Results:</p>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• 35+ high-quality backlinks acquired</li>
                      <li>• Average domain authority: 60+</li>
                      <li>• Focus on .com.au domains for local relevance</li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <ExpandableImage
                    src="/images/case-studies/st-john-health-seo/backlinks-profile-analysis.png"
                    alt="Backlinks Profile Analysis showing growth in healthcare and local Australian domains"
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
                    src="/images/case-studies/st-john-health-seo/keyword-tracking-search-volume.png"
                    alt="Keyword Tracking and Search Volume chart for healthcare-related keywords in Western Australia"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#9baed9]">Keyword Tracking & Search Volume</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Real-time tracking of our primary target keyword shows consistent position 1 ranking with strong
                    search volume, driving qualified traffic to St John Health's specialized healthcare services.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Top Performing Keyword:</p>
                    <div className="mt-2">
                      <p className="font-semibold text-[#9baed9]">
                        "chronic disease management in perth western australia"
                      </p>
                      <p className="text-sm text-gray-700">Monthly Volume: 75 | Position: 1</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Keywords Row */}
              <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-8 text-center text-[#9baed9]">Top Ranking Keywords</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <ExpandableImage
                      src="/images/case-studies/st-john-health-seo/keyword-ranking-chronic-disease.png"
                      alt="Keyword ranking screenshot for chronic disease management in Perth"
                      width={150}
                      height={320}
                      className="w-full h-66 object-cover rounded-lg mb-4"
                    />
                          <h4 className="font-semibold text-[#9baed9] mb-2">
                        <a href="https://www.google.com/search?q=chronic+disease+management+in+perth+western+australia&oq=chronic+disease+management+in+perth+western+australia&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigAdIBBzkxOGowajmoAgCwAgE&sourceid=chrome&ie=UTF-8"
                            target="_blank" 
                            rel="noopener noreferrer"
                        className="hover:underline">
                        chronic disease management in perth western australia
                                </a>
                    </h4>
                    <p className="text-sm text-gray-600">Position 1 • 75 monthly searches</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <ExpandableImage
                      src="/images/case-studies/st-john-health-seo/keyword-ranking-urgent-care.png"
                      alt="Keyword ranking screenshot for urgent care clinic perth"
                      width={150}
                      height={320}
                      className="w-full h-66 object-cover rounded-lg mb-4"
                    />
                          <h4 className="font-semibold text-[#9baed9] mb-2">
                        <a href="https://www.google.com/search?q=urgent+care+clinic+perth&oq=urgent+care+clinic+perth&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzM1MWowajmoAgCwAgA&sourceid=chrome&ie=UTF-8"
                            target="_blank" 
                            rel="noopener noreferrer"
                        className="hover:underline">
                        urgent care clinic perth
                                </a>
                    </h4>
                    <p className="text-sm text-gray-600">Position 3 • 120 monthly searches</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <ExpandableImage
                      src="/images/case-studies/st-john-health-seo/pham.PNG"
                      alt="Keyword ranking screenshot for dental services western australia"
                      width={150}
                      height={320}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                         <h4 className="font-semibold text-[#9baed9] mb-2">
                        <a href="https://www.google.com/search?q=Pharmaceutical+transport+in+perth+western+australia+cost&oq=Pharmaceutical+transport+in+perth+western+australia+cost&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCDE1MzdqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8"
                            target="_blank" 
                            rel="noopener noreferrer"
                        className="hover:underline">
                        Pharmaceutical transport in perth western australia cost
                                </a>
                    </h4>
                    <p className="text-sm text-gray-600">Position 2 • 95 monthly searches</p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready for Similar Results?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how we can help your healthcare business achieve top rankings and drive qualified traffic.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#9baed9] hover:bg-[#f0f4ff] text-lg px-8">
                  Start Your Healthcare SEO Project
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