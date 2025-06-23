import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check } from "lucide-react"
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
  title: "Cin7 Web Development Case Study | StageFX - Enterprise SaaS Platform",
  description:
    "See how we built a comprehensive enterprise SaaS platform for Cin7 with advanced inventory management and multi-tenant architecture.",
}

export default function Cin7WebDevCaseStudy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          
        </div>
       
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
                <h1 className="text-4xl md:text-5xl font-bold text-[#9baed9]">Cin7</h1>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">Saas</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">Web Dev</span>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Building an enterprise-grade SaaS platform for inventory management with multi-tenant architecture and
                real-time synchronization.
              </p>
              <div className="bg-gradient-to-r from-[#9baed9]/10 to-[#9baed9]/5 p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://dearsystems.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9baed9] hover:underline"
                  >
                    dearsystems.com
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
                  Cin7 is a leading cloud-based inventory management platform that serves thousands of businesses
                  worldwide. They needed to rebuild their core platform to handle exponential growth, improve
                  performance, and add advanced features for enterprise clients.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The project involved creating a scalable, multi-tenant SaaS architecture that could handle complex
                  inventory operations, real-time synchronization across multiple sales channels, and provide advanced
                  analytics and reporting capabilities for businesses of all sizes.
                </p>
                <div className="mb-8">
                  <Image
                    src="/images/case-studies/cin7-web-dev/ci7landing.PNG"
                    alt="ci7 landing page"
                    width={700}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
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
                    Building a multi-tenant architecture that could scale to support thousands of businesses with
                    varying data volumes and usage patterns.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Implementing real-time inventory synchronization across multiple sales channels (eCommerce, POS,
                    marketplaces) without data conflicts.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Creating a complex permission system that could handle different user roles and access levels within
                    organizations.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Ensuring 99.9% uptime and data consistency for mission-critical business operations.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Building advanced reporting and analytics capabilities that could process large datasets in
                    real-time.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Integrating with hundreds of third-party services including eCommerce platforms, accounting
                    software, and shipping providers.
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
                    We architected a microservices-based platform using Node.js and React, with a robust API layer that
                    could handle high-volume transactions and real-time data processing.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We implemented a sophisticated multi-tenant database architecture with data isolation and automatic
                    scaling capabilities.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We built a real-time synchronization engine using WebSockets and message queues to ensure inventory
                    data consistency across all channels.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We developed a comprehensive role-based access control system with granular permissions and audit
                    logging.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We created an advanced analytics engine with customizable dashboards and automated reporting
                    capabilities.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We built a flexible integration framework that could easily connect with new third-party services
                    through standardized APIs.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We implemented comprehensive monitoring, logging, and alerting systems to ensure platform
                    reliability and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-[#9baed9]">⚙️ Technical Architecture</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#f8faff] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Frontend Technologies</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">React with TypeScript for type safety</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Redux for state management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Material-UI for consistent design system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">WebSocket integration for real-time updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Progressive Web App capabilities</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Backend Infrastructure</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Node.js microservices architecture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">PostgreSQL with read replicas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Redis for caching and session management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">RabbitMQ for message queuing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Docker containerization with Kubernetes</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Security & Compliance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">OAuth 2.0 and JWT authentication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">End-to-end encryption for sensitive data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">SOC 2 Type II compliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Regular security audits and penetration testing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">GDPR and data privacy compliance</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Integrations & APIs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">RESTful API with GraphQL endpoints</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Shopify, WooCommerce, Magento integrations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">QuickBooks, Xero accounting integrations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Amazon, eBay marketplace connections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Shipping provider APIs (FedEx, UPS, DHL)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-[#9baed9]">📈 Results</h2>
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  The enterprise SaaS platform we built for Cin7 has transformed their business capabilities and market
                  position, enabling them to serve enterprise clients while maintaining excellent performance for
                  smaller businesses.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-[#9baed9] mb-2">300%</div>
                  <p className="text-gray-600">Increase in platform capacity</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-[#9baed9] mb-2">99.9%</div>
                  <p className="text-gray-600">Platform uptime achieved</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-[#9baed9] mb-2">85%</div>
                  <p className="text-gray-600">Reduction in processing time</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Business Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Successfully onboarded 500+ enterprise clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Processed over 10 million transactions monthly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Achieved 95% customer satisfaction score</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reduced customer churn by 40%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

{/* Visual Showcase */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#9baed9]">
        Platform Showcase
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-[3/2] rounded-lg shadow-lg overflow-hidden mb-4">
            <Image
              src="/images/case-studies/cin7-web-dev/dashboard-overview.png"
              alt="Cin7 Dashboard Overview showing real-time inventory analytics and sales metrics"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-center text-gray-600">
            Main Dashboard with Real-time Analytics
          </p>
        </div>

        {/* Image 2 */}
       
       
        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-[3/2] rounded-lg shadow-lg overflow-hidden mb-4">
            <Image
              src="/images/case-studies/cin7-web-dev/cmobilre.png"
              alt="Cin7 Mobile Responsive Design"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-center text-gray-600">
            Mobile Responsive Design
          </p>
        </div>
 {/* Image 3 */}
        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-[3/2] rounded-lg shadow-lg overflow-hidden mb-4">
            <Image
              src="/images/case-studies/cin7-web-dev/inventory-management.png"
              alt="Cin7 Inventory Management interface showing product catalog and stock levels"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-center text-gray-600">
            Advanced Inventory Management Interface
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

      </main>
      <Footer />
    </div>
  )
}
