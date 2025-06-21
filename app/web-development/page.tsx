import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Smartphone, Zap, Shield, Settings, CheckCircle, Layers, Globe, Monitor } from "lucide-react"
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
  title: "Web Development Services | StageFX - Fast, SEO-Optimized Websites",
  description:
    "Professional web development services that combine clean code with strategic SEO. We build fast, scalable websites that rank and convert.",
}

function WebDevFAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-semibold mb-3 text-[#9baed9]">
          How much does Web Development cost?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">
        The cost of our Custom Web Development generally begins at $2,500 for a basic but professionally built website.
         More complex projects—such as e-commerce platforms, web applications, or fully customized solutions—can range from $5,000 to $20,000+, depending on functionality, integrations, and design requirements.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-semibold mb-3 text-[#9baed9]">
          Can you optimize my existing website?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">
          Absolutely. We can refactor your site's structure, improve performance, and make it SEO-friendly without a
          full rebuild. We'll audit your current site and recommend the best approach for optimization.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-semibold mb-3 text-[#9baed9]">
          What platforms do you use?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">
          We work with plain code, React/Next.js, WordPress, Webflow, and other modern stacks depending on your needs.
          We choose the technology that best fits your project requirements and long-term goals.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-semibold mb-3 text-[#9baed9]">
          How long does a website take?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 leading-relaxed">
          Most builds take 3–12 weeks depending on scope, content, and feedback speed. We'll provide a detailed timeline
          during our initial consultation based on your specific requirements.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#9baed9] to-[#b8c5e0] py-20 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                A Website That's <span className="text-yellow-300">Built to Perform</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10">
              We craft fast, scalable, and SEO-tailored websites — focused on performance, speed, and simplicity
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#9baed9] hover:bg-gray-50 hover:text-[#8a9dc8] text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    Let's Build Your Site
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Floating Development Icons */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Code className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-32 right-20 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <div className="absolute bottom-20 left-20 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Zap className="w-7 h-7 text-white" />
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9baed9]">Custom Web Development Services</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  From planning to launch — we handle it all with modern technology and SEO-first approach.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-[#f8faff] p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Full Website Builds</h3>
                  <p className="text-gray-700">
                    From planning to launch — we handle it all, custom-coded or CMS-based, tailored to your specific
                    needs.
                  </p>
                </div>

                <div className="bg-[#f8faff] p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">SEO-Optimized Structure</h3>
                  <p className="text-gray-700">
                    We build your site to be search-friendly from day one — no plugins needed, just clean, semantic
                    code.
                  </p>
                </div>

                <div className="bg-[#f8faff] p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mb-6">
                    <Smartphone className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Responsive Design</h3>
                  <p className="text-gray-700">
                    Your site will look perfect and work seamlessly on every screen size, from mobile to desktop.
                  </p>
                </div>

                <div className="bg-[#f8faff] p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Site Speed & Core Web Vitals</h3>
                  <p className="text-gray-700">
                    We prioritize fast loads and smooth performance to boost rankings and user experience.
                  </p>
                </div>

                <div className="bg-[#f8faff] p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Web Maintenance</h3>
                  <p className="text-gray-700">
                    We keep your site updated, secure, and running smoothly over time with ongoing support.
                  </p>
                </div>

                <div className="bg-[#f8faff] p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mb-6">
                    <Settings className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">CMS Integration</h3>
                  <p className="text-gray-700">
                    Need WordPress, Webflow, or a headless setup? We'll build the stack that fits your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9baed9]">Why Choose StageFX?</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#9baed9] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#9baed9] mb-2">SEO-first builds</h3>
                        <p className="text-gray-700">
                          Baked in, not bolted on — every site is optimized from the ground up.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#9baed9] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#9baed9] mb-2">Clean, maintainable code</h3>
                        <p className="text-gray-700">
                          Using modern standards that make your site easy to update and scale.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#9baed9] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#9baed9] mb-2">Designed for conversions</h3>
                        <p className="text-gray-700">
                          Speed, scale, and user experience that turns visitors into customers.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#9baed9] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#9baed9] mb-2">Search and structure experts</h3>
                        <p className="text-gray-700">
                          Built by a team that understands both development and SEO strategy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#9baed9]/20 to-[#9baed9]/5 p-8 rounded-2xl">
                    <Image
                      src="/images/web-dev/modern-development-dashboard.png"
                      alt="Modern Web Development Dashboard showing code editor and responsive design"
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

        {/* Tech Stack Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9baed9]">What We Work With</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Modern technologies and proven platforms to build your perfect website.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#9baed9]">Languages & Frameworks</h3>
                  <p className="text-gray-700 text-sm">HTML, CSS, JS, React, Tailwind, Next.js</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#9baed9]">CMS</h3>
                  <p className="text-gray-700 text-sm">WordPress, Webflow, Sanity, Strapi</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#9baed9]">Hosting</h3>
                  <p className="text-gray-700 text-sm">Vercel, Netlify, DigitalOcean</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#9baed9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-[#9baed9]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#9baed9]">Site Audits</h3>
                  <p className="text-gray-700 text-sm">Lighthouse, GTmetrix, Core Web Vitals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Workflow Section */}
        <section className="py-20 bg-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9baed9]">How We Build Sites</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Our proven 5-step process ensures your website is delivered on time and exceeds expectations.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Discovery & Planning",
                    description:
                      "We learn your goals, content, and users to create a strategic foundation for your website.",
                    icon: CheckCircle,
                  },
                  {
                    step: "02",
                    title: "Design System Setup",
                    description: "We build a flexible layout system tailored to your brand and user experience needs.",
                    icon: Layers,
                  },
                  {
                    step: "03",
                    title: "Development",
                    description: "Fast, clean, responsive development — always SEO-aware and performance-optimized.",
                    icon: Code,
                  },
                  {
                    step: "04",
                    title: "Testing & Launch",
                    description:
                      "Cross-browser, mobile, speed-tested — and tracked from day one for optimal performance.",
                    icon: Monitor,
                  },
                  {
                    step: "05",
                    title: "Ongoing Support",
                    description:
                      "We offer retainers, audits, and maintenance after launch to keep your site performing.",
                    icon: Shield,
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9baed9]">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-700">
                  Get answers to the most common questions about our web development services.
                </p>
              </div>

              <WebDevFAQ />
            </div>
          </div>
        </section>

        {/* Projects CTA Section */}
        <section className="py-20 bg-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9baed9]">See What We've Built</h2>
              <p className="text-xl text-gray-700 mb-8">
                Take a look at projects to see how we combine clean code with strategic SEO.
              </p>
              <Button
                size="lg"
                className="bg-[#9baed9] text-white hover:bg-[#8a9dc8] hover:shadow-xl text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                asChild
              >
                <Link href="/case-studies">
                  View Web Projects
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Let's Build Something That Ranks and Converts
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Your next website should be your best marketing tool. Let's build it together.
              </p>
              <Button
                size="lg"
                className="bg-white text-[#9baed9] hover:bg-gray-50 hover:text-[#8a9dc8] text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                               <a href="tel:+18573925255">
                  Request a Free Consultation
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
