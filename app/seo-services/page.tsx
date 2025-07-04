import Link from "next/link"
import Image from "next/image"
import { ArrowRight, TrendingUp, Target, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
  title: "SEO Services | StageFX - Drive Organic Traffic & Rankings",
  description:
    "Professional SEO services that deliver results. Learn how our proven strategies help businesses rank higher, drive more traffic, and grow revenue.",
}

function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-semibold mb-3 text-[#9baed9]">
          How long does SEO take to show results?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">
          SEO is a long-term strategy. While some improvements (like fixing technical issues) can show benefits within a
          few weeks, most businesses see significant ranking and traffic gains within 6 to 9 months, depending on the
          competition in their niche.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-semibold mb-3 text-[#9baed9]">
          Do you guarantee first-page rankings?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">
          No ethical SEO agency can guarantee specific rankings — and you should be cautious of those who do. What we do
          guarantee is a transparent, proven strategy that aligns with Google's best practices, and monthly reporting
          that tracks measurable progress over time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-semibold mb-3 text-[#9baed9]">
          Can you work on my existing website?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">
          Yes. Whether you're on WordPress, Webflow, Shopify, or a custom CMS, we can audit your current site and apply
          SEO improvements without rebuilding from scratch — unless you'd like us to.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-semibold mb-3 text-[#9baed9]">
          How much does SEO cost?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">
        Professional SEO services typically start at $1,000 per month and can scale significantly depending on the scope,
         competition, and specific business goals.
         For competitive industries or comprehensive strategies, monthly retainers may range from $1,500 to $5,000+
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg font-semibold mb-3 text-[#9baed9]">
          Do you provide content as part of SEO?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">
          Yes. We include content strategy, optimization, and creation in our SEO plans. That means blog posts, landing
          pages, and service pages are written with both humans and search engines in mind.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-lg font-semibold mb-3 text-[#9baed9]">
          Will I get reports and updates?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">
          Absolutely. We provide monthly SEO reports that include traffic, keyword rankings, technical fixes completed,
          and what's planned for the next cycle — so you always know what's happening.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default function SEOServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#9baed9] to-[#b8c5e0] py-20 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Professional SEO Services to <span className="text-yellow-300">Boost Your Visibility</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10">
                Stop guessing. Start ranking. Our data-driven SEO strategies help businesses dominate search results and
                grow revenue.
              </p>
              <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3 rounded-lg shadow-md"
                asChild
              >
                <Link href="/contact">
                  Get an SEO Audit
                </Link>
              </Button>
              </div>
            </div>
          </div>

          <div className="absolute top-32 right-20 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="absolute bottom-20 left-20 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Target className="w-7 h-7 text-white" />
          </div>
        </section>

        {/* What is SEO Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9baed9]">What is SEO, Really?</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    SEO (Search Engine Optimization) is the art and science of making your website irresistible to
                    search engines like Google. Think of it as your digital storefront's location on the busiest street
                    in town.
                  </p>
                  <p className="text-lg text-gray-700 mb-8">
                    When someone searches for what you offer, SEO ensures your business appears at the top of the
                    results — not buried on page 10 where nobody looks.
                  </p>
                  <div className="flex items-center gap-4 p-4 bg-[#f0f4ff] rounded-lg">
                    <div className="w-12 h-12 bg-[#9baed9] rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#9baed9]">93% of online experiences</p>
                      <p className="text-gray-600">begin with a search engine</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#9baed9]/20 to-[#9baed9]/5 p-8 rounded-2xl">
                    <Image
                      src="/images/seo/keyword-research-dashboard.png"
                      alt="SEO Keyword Research Dashboard showing search volume and competition data"
                      width={500}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why SEO Matters Section */}
        <section className="py-20 bg-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9baed9]">Why Your Business Needs SEO</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  In today's digital world, being invisible online means being invisible to your customers. Here's why
                  SEO isn't optional anymore.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Increase Organic Traffic</h3>
                  <p className="text-gray-700 mb-4">
                    Get more qualified visitors to your website without paying for ads. SEO brings in traffic that
                    converts.
                  </p>
                  <div className="text-2xl font-bold text-[#9baed9]">+150%</div>
                  <p className="text-sm text-gray-600">Average traffic increase</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Build Trust & Credibility</h3>
                  <p className="text-gray-700 mb-4">
                    Ranking high on Google signals authority and trustworthiness to potential customers.
                  </p>
                  <div className="text-2xl font-bold text-[#9baed9]">75%</div>
                  <p className="text-sm text-gray-600">Trust top search results</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Long-term ROI</h3>
                  <p className="text-gray-700 mb-4">
                    Unlike paid ads, SEO keeps working 24/7. Once you rank, you get ongoing traffic without ongoing
                    costs.
                  </p>
                  <div className="text-2xl font-bold text-[#9baed9]">5.66x</div>
                  <p className="text-sm text-gray-600">ROI compared to paid ads</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our SEO Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9baed9]">How We Carry Out SEO</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Our proven 6-step process ensures your website climbs the rankings and stays there.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "SEO Audit & Analysis",
                    description:
                      "We analyze your current website, identify opportunities, and benchmark against competitors to create a winning strategy.",
                    icon: CheckCircle,
                  },
                  {
                    step: "02",
                    title: "Keyword Research",
                    description:
                      "We find the exact terms your customers are searching for and prioritize keywords that drive revenue, not just traffic.",
                    icon: Target,
                  },
                  {
                    step: "03",
                    title: "Technical SEO",
                    description:
                      "We fix the behind-the-scenes issues that prevent search engines from properly crawling and indexing your site.",
                    icon: CheckCircle,
                  },
                  {
                    step: "04",
                    title: "Content Optimization",
                    description:
                      "We create and optimize content that both search engines and humans love, focusing on user intent and engagement.",
                    icon: Users,
                  },
                  {
                    step: "05",
                    title: "Link Building",
                    description:
                      "We build high-quality backlinks from authoritative websites to boost your domain authority and rankings.",
                    icon: TrendingUp,
                  },
                  {
                    step: "06",
                    title: "Monitor & Optimize",
                    description:
                      "We continuously track performance, adjust strategies, and provide detailed monthly reports on your progress.",
                    icon: TrendingUp,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#9baed9] rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-[#9baed9]">{item.title}</h3>
                      <p className="text-lg text-gray-700">{item.description}</p>
                    </div>
                    <div className="flex-shrink-0 hidden md:block">
                      <div className="w-12 h-12 bg-[#9baed9]/10 rounded-full flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[#9baed9]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9baed9]">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-700">
                  Get answers to the most common questions about our SEO services.
                </p>
              </div>

              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* Case Studies CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9baed9]">
                See How We've Helped Other Businesses Succeed
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Want to see the results for yourself?
                <br />
                Browse real client case studies and learn how our SEO strategies delivered measurable growth.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 border-2 border-gray-300 shadow-lg text-lg px-10 py-4 rounded-lg transition-all duration-300 font-semibold"
                asChild
              >
                <Link href="/case-studies">
                  View SEO Case Studies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 bg-[#9baed9]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Dominate Search Results?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let's create an SEO strategy that drives real business growth.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 border-2 border-gray-300 shadow-lg text-lg px-10 py-4 rounded-lg transition-all duration-300 font-semibold"
                asChild
              >
                             <a href="tel:+18573925255">
                  Get an SEO Consultation
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
