import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Case Studies | StageFX - Real Results for Real Businesses",
  description:
    "See how we've helped businesses grow through strategic SEO and custom web development. Real case studies with measurable results.",
}

const caseStudies = [
  {
    id: "vr-wave-seo",
    title: "VR Wave",
    industry: "eCommerce",
    type: "SEO",
    summary:
      "We transformed VR Wave's visibility through niche-targeted SEO, achieving first-page rankings for all targeted keywords.",
    image: "/images/case-studies/vr-wave-seo-results.png",
    badge: "SEO",
  },
  {
    id: "st-john-health-seo",
    title: "St John Health",
    industry: "Healthcare",
    type: "SEO",
    summary:
      "Built a fast, patient-friendly site and positioned it #1 for critical healthcare keywords in Western Australia.",
    image: "/images/case-studies/st-john-health-seo-rankings.png",
    badge: "SEO",
  },
  {
    id: "nottingham-cars-seo",
    title: "Nottingham Cars",
    industry: "Transport",
    type: "SEO",
    summary:
      "A 40-year-old brand finally ranked for taxi booking keywords through targeted on-site SEO and link building.",
    image: "/images/case-studies/nottingham-cars-seo-growth.png",
    badge: "SEO",
  },
  {
    id: "vr-wave-web-dev",
    title: "VR Wave",
    industry: "eCommerce",
    type: "Web Development",
    summary:
      "From scratch to premium VR eCommerce site — our dev team built performance into every pixel with advanced functionalities.",
    image: "/images/case-studies/vr-wave-website-design.PNG",
    badge: "Web Dev",
  },
  {
    id: "st-john-health-web-dev",
    title: "St John Health",
    industry: "Healthcare",
    type: "Web Development",
    summary: "Designed and developed a responsive health platform with booking, donations, and CMS capabilities.",
    image: "/images/case-studies/st-john-health-website-mockup.PNG",
    badge: "Web Dev",
  },
  {
    id: "cin7-web-dev",
    title: "Cin7 (DEAR Systems)",
    industry: "SaaS",
    type: "Web Development",
    summary:
      "Responsive B2B SaaS website for global users with complex integrations & CMS for inventory management solutions.",
    image: "/images/case-studies/cin7-saas-platform-dashboard.PNG",
    badge: "Web Dev",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#9baed9] to-[#b8c5e0] py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Client Success Stories</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10">
                Real businesses. Real results. See how our SEO and web development strategies drive measurable growth.
              </p>
              <div className="mb-8">
                <Image
                  src="/images/case-studies/success-stories-hero.png"
                  alt="Collage of successful client projects showing growth charts and website designs"
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study) => (
                  <div
                    key={study.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
                  >
                    <div className="relative">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={`${study.title} case study showing ${study.type.toLowerCase()} results`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            study.badge === "SEO" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {study.badge}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-[#9baed9]">{study.title}</h3>
                        <span className="text-sm text-gray-500">{study.industry}</span>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">{study.summary}</p>
                      <Link href={`/case-studies/${study.id}`} className="w-full">
                        <Button className="w-full bg-white text-black hover:bg-gray-100 border-2 border-gray-300 shadow-md px-6 py-3 rounded-lg transition-all duration-300 font-medium">
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#9baed9]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Be Our Next Success Story?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how we can help grow your business with proven SEO and web development strategies.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 border-2 border-gray-300 shadow-lg text-lg px-10 py-4 rounded-lg transition-all duration-300 font-semibold"
                asChild
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
