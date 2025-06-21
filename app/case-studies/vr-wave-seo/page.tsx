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
  title: "VR Wave SEO Case Study | StageFX - From Zero to First Page Rankings",
  description:
    "See how we helped VR Wave achieve first-page rankings for all targeted keywords through strategic niche SEO optimization.",
}

export default function VRWaveSEOCaseStudy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - Only one navigation bar */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
      
        <MobileNav />
      </header>

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
                <h1 className="text-4xl md:text-5xl font-bold text-[#9baed9]">VR Wave</h1>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">eCommerce</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">SEO</span>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Transforming a new VR lens eCommerce site from zero visibility to first-page rankings through strategic
                niche SEO.
              </p>
              <div className="bg-gradient-to-r from-[#9baed9]/10 to-[#9baed9]/5 p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.vr-wave.store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9baed9] hover:underline"
                  >
                    vr-wave.store
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
                  VR Wave specializes in selling lens inserts for virtual reality headsets, which are custom-made to
                  correct nearsightedness, farsightedness, and astigmatism, allowing users to enjoy VR without the need
                  for glasses. They feature a magnetic design for easy application, in addition to offering blue light
                  filter and anti-glare options to reduce eye strain.
                </p>
                <div className="mb-8">
                  <Image
                    src="/images/case-studies/vr-wave-website-design.png"
                    alt="VR Wave prescription lens inserts for virtual reality headsets"
                    width={700}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  After successfully completing the development of their website, VR Wave approached us to help them
                  gain visibility in search engines for their niche VR lens products. The challenge was to establish
                  their presence in a specialized market with very specific search terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                Rather than viewing AI Overviews as a threat, we see them as a new channel for brand exposure. When VR-Wave is referenced or summarized in AI-driven results, it builds trust and awareness at the very top of the funnel. We complement this with strong branding, product differentiation, and compelling CTAs on our site to convert that passive visibility into active engagement.
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
            We had successfully completed the development of the website, resulting in a fresh platform that
            lacked substantial Domain Authority and Trust Flow.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700 leading-relaxed">
            Given their focus on niche products tailored to particular sectors, it was essential to
            strategically substitute the general industry keywords with more relevant, moderately competitive
            keywords.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
          <p className="text-gray-700 leading-relaxed">
            At that point, the site was generating no traffic and had yet to achieve any rankings.The image below shows how visibility rates were in the red zone.
          </p>
        </div>
      </div>
      <div className="mt-8 max-w-2xl mx-auto"> {/* Added max-w-2xl and mx-auto to constrain width */}
        <Image
          src="/images/case-studies/vr-wave-seo/challenge.jpeg"
          alt="Graph showing zero visibility and rankings before SEO implementation"
          width={500}  // Reduced from 600
          height={292} // Reduced proportionally (350 * 500/600 ≈ 292)
          className="w-full h-auto rounded-lg shadow-md"
        />
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
                    We initiated the campaign by conducting thorough keyword research, focusing on niche-specific terms
                    such as "prescription lenses for quest 3," "Best prescription lenses for Quest 3S," and "Pimax
                    Crystal Light Prescription Lenses," with a keen emphasis on models of the lenses.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We conducted a comprehensive site audit and addressed a range of onsite issues, including website
                    load times, speed, URL structure, image alt tags, robots.txt, and sitemap configurations.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    To enhance our SEO strategy, we organized specific pages around focused keywords and meticulously
                    optimized the on-page content to align with the targeted keywords for each page.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We proposed tailored landing pages to our client, fine-tuning them according to relevant keywords to
                    improve their visibility and ranking potential in Google SERPs.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Additionally, we crafted engaging meta tags for the service pages and incorporated keyword-optimized
                    on-page content where applicable, ensuring maximum effectiveness.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We also established local citations, optimizing the website for local search visibility.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Moreover, we consistently generated high-quality contextual links, posting them on reputable
                    websites with strong authority metrics such as goodreads.com, boredpanda.com, onmogul.com,
                    patch.com, buzzfeed.com, and storify.com.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Our overarching goal was to secure 5-7 high-quality backlinks each week, reinforcing our commitment
                    to enhancing the website's online presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progress */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-[#9baed9]">📈 Progress</h2>
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our efforts have truly yielded results, as we now see all our targeted keywords prominently featured
                  on the first page of Google's search results.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="bg-gradient-to-r from-[#9baed9]/10 to-[#9baed9]/5 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Key Achievement</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9baed9] mb-2">Position 3</div>
                    <p className="text-sm text-gray-600">prescription lenses for quest 3</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9baed9] mb-2">357</div>
                    <p className="text-sm text-gray-600">Monthly Search Volume</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#9baed9] mb-2">100%</div>
                    <p className="text-sm text-gray-600">First Page Rankings</p>
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
                    src="/images/case-studies/vr-wave-seo/organic-keyword-growth-chart.png"
                    alt="Organic Keyword Growth Chart showing steady increase in rankings over time"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#9baed9]">Organic Keyword Growth</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our strategic keyword targeting resulted in consistent growth across all targeted terms. The graph
                    shows the steady climb from zero visibility to first-page rankings for niche VR lens keywords.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Key Metrics:</p>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• 15+ keywords ranking on page 1</li>
                      <li>• 300% increase in organic visibility</li>
                      <li>• 85% of target keywords in top 5 positions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Analytics Row 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-4 text-[#9baed9]">Backlinks Profile</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our link building strategy focused on high-authority domains relevant to technology and eCommerce.
                    Each backlink was carefully placed to maximize relevance and authority transfer.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Link Building Results:</p>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• 45+ high-quality backlinks acquired</li>
                      <li>• Average domain authority: 65+</li>
                      <li>• 5-7 new links per week consistently</li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <ExpandableImage
                    src="/images/case-studies/vr-wave-seo/backlinks-profile-analysis.png"
                    alt="Backlinks Profile Analysis showing growth in high-quality referring domains"
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
                    src="/images/case-studies/vr-wave-seo/keyword-tracking-search-volume.png"
                    alt="Keyword Tracking and Search Volume chart for primary target keywords"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#9baed9]">Keyword Tracking & Search Volume</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Real-time tracking of our primary target keyword shows consistent position 3 ranking with strong
                    search volume, driving qualified traffic to VR Wave's specialized products.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Top Performing Keyword:</p>
                    <div className="mt-2">
                      <p className="font-semibold text-[#9baed9]">"prescription lenses for quest 3"</p>
                      <p className="text-sm text-gray-700">Monthly Volume: 357 | Position: 3</p>
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
                      src="/images/case-studies/vr-wave-seo/keyword-ranking-screenshot-1.png"
                      alt="Keyword ranking screenshot showing position 3 for 'prescription lenses for quest 3'"
                      width={150}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                     <h4 className="font-semibold text-[#9baed9] mb-2">
                        <a href="https://www.google.com/search?q=prescription+lenses+for+quest+3&oq=prescription+lenses+for+quest+3&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzkwMWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
                            target="_blank" 
                            rel="noopener noreferrer"
                        className="hover:underline">
                        prescription lenses for quest 3
                                </a>
                    </h4>
                    <p className="text-sm text-gray-600">Position 3 • 357 monthly searches</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <ExpandableImage
                      src="/images/case-studies/vr-wave-seo/keyword-ranking-screenshot-2.png"
                      alt="Keyword ranking screenshot showing position 2 for 'Best prescription lenses Quest 3S'"
                      width={150}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                     <h4 className="font-semibold text-[#9baed9] mb-2">
                        <a href="https://www.google.com/search?q=Best+prescription+lenses+Quest+3S&oq=Best+prescription+lenses+Quest+3S&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzgxOGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        className="hover:underline">
                        Best prescription lenses Quest 3S
                        
                                </a>
                    </h4>
                    <p className="text-sm text-gray-600">Position 2 • 280 monthly searches</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <ExpandableImage
                      src="/images/case-studies/vr-wave-seo/keyword-ranking-screenshot-3.png"
                      alt="Keyword ranking screenshot showing position 1 for 'Pimax Crystal Light Prescription'"
                      width={150}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h4 className="font-semibold text-[#9baed9] mb-2">
                        <a href="https://www.google.com/search?q=Pimax+Crystal+Light+Prescription&oq=Pimax+Crystal+Light+Prescription&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzY1MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        className="hover:underline">
                              Pimax Crystal Light Prescription
                                </a>
                    </h4>

                    <p className="text-sm text-gray-600">Position 1 • 195 monthly searches</p>
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
                Let's discuss how we can help your business achieve first-page rankings and drive qualified traffic.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#9baed9] hover:bg-[#f0f4ff] text-lg px-8">
                  Start Your SEO Project
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

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

      <Footer />
    </div>
  )
}