import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MessageCircle, Facebook, X, Instagram, Youtube, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { MobileNav } from "@/components/mobile-nav"
import type { Metadata } from "next"

// Custom Pinterest icon component
function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.624 0 11.999-5.373 11.999-12C24 5.372 18.626.001 12.001.001z" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: "St John Health Web Development Case Study | StageFX - Healthcare Website Development",
  description:
    "See how we built a comprehensive healthcare website for St John Health with patient portal, appointment booking, and HIPAA compliance.",
}

export default function StJohnHealthWebDevCaseStudy() {
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
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">Healthcare</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">Web Dev</span>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Building a comprehensive healthcare website with patient portal, appointment booking, and
                HIPAA-compliant data handling.
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
                  St John Health is a multi-specialty healthcare provider serving communities across the region with
                  over 15 locations and 200+ healthcare professionals. They approached us to modernize their digital
                  presence and create a comprehensive platform that would improve patient experience and streamline
                  their operations.
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
                  The project required building a sophisticated healthcare website that could handle complex patient
                  interactions, appointment scheduling, secure messaging, and integration with their existing Electronic
                  Health Record (EHR) system, all while maintaining strict HIPAA compliance standards.
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
                    Ensuring HIPAA compliance throughout the entire platform, including secure data transmission,
                    storage, and user authentication.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Integrating with multiple existing systems including EHR, billing software, and appointment
                    scheduling platforms.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Creating a user-friendly interface that could serve both tech-savvy and less technical patients
                    across all age groups.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Building a complex appointment scheduling system that could handle multiple providers, locations,
                    and appointment types.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Implementing a secure patient portal with access to medical records, test results, and prescription
                    management.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Ensuring the platform could handle high traffic volumes and maintain performance during peak usage
                    times.
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
                    We built a custom healthcare platform using Next.js with a robust backend infrastructure hosted on
                    HIPAA-compliant cloud services with end-to-end encryption.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We implemented a comprehensive patient portal with secure login, two-factor authentication, and
                    role-based access control for different user types.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We developed a sophisticated appointment scheduling system with real-time availability, automated
                    reminders, and integration with provider calendars.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We created secure APIs for EHR integration, allowing seamless data flow between the website and
                    existing healthcare systems.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We implemented a telemedicine platform with video conferencing capabilities, secure messaging, and
                    digital prescription management.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We designed an intuitive user interface with accessibility features, ensuring the platform is usable
                    by patients with varying technical abilities and disabilities.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We built a comprehensive content management system for healthcare providers to update services,
                    provider information, and health resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-[#9baed9]">⚙️ Technical Features</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#f8faff] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Security & Compliance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">HIPAA-compliant infrastructure and data handling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">End-to-end encryption for all data transmission</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Multi-factor authentication and role-based access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Audit logging and compliance monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Regular security assessments and penetration testing</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Patient Portal Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Secure access to medical records and test results</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Online appointment scheduling and management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Prescription refill requests and management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Secure messaging with healthcare providers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Billing and insurance information management</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Integration Capabilities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">EHR system integration (Epic, Cerner, Allscripts)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Practice management software integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Insurance verification and billing systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Laboratory and imaging system connections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Pharmacy networks for e-prescribing</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Performance & Accessibility</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">WCAG 2.1 AA accessibility compliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Mobile-responsive design for all devices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">High-performance caching and CDN implementation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Multi-language support for diverse patient populations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">24/7 monitoring and automated backup systems</span>
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
                  The comprehensive healthcare platform we built for St John Health has transformed their patient
                  experience and operational efficiency, leading to significant improvements across all key metrics.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-[#9baed9] mb-2">78%</div>
                  <p className="text-gray-600">Increase in online appointment bookings</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-[#9baed9] mb-2">65%</div>
                  <p className="text-gray-600">Reduction in phone call volume</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-[#9baed9] mb-2">92%</div>
                  <p className="text-gray-600">Patient satisfaction score</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Operational Improvements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">45% reduction in administrative workload through automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">83% of patients now use the online portal regularly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">60% increase in prescription refill efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">99.9% uptime with zero security incidents</span>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[300px] aspect-[3/2] relative bg-white">
            <Image
              src="/images/case-studies/st-john-health-web-dev/appointment-scheduling-interface.PNG"
              alt="Appointment Scheduling"
              fill
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
          <p className="text-center text-gray-600 mt-2">Online Appointment Scheduling</p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[300px] aspect-[3/2] relative bg-white">
            <Image
              src="/images/case-studies/st-john-health-web-dev/stmobiler.png"
              alt="Mobile Experience"
              fill
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
          <p className="text-center text-gray-600 mt-2">Mobile-Optimized Experience</p>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[300px] aspect-[3/2] relative bg-white">
            <Image
              src="/images/case-studies/st-john-health-web-dev/mobile-responsive-design.PNG"
              alt="Responsive Design"
              fill
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
          <p className="text-center text-gray-600 mt-2">Quick links to every St. John service</p>
        </div>

      </div>
    </div>
  </div>
</section>

        {/* Testimonial */}
        <section className="py-16 bg-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-[#9baed9]/10 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#9baed9]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl text-[#9baed9]">❝</span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 italic mb-6">
                      "StageFX delivered a healthcare platform that exceeded our expectations in every way. The patient
                      portal has revolutionized how our patients interact with our services, and the HIPAA-compliant
                      infrastructure gives us complete confidence in data security. Our staff productivity has increased
                      significantly, and patient satisfaction scores have reached an all-time high. The platform's
                      integration with our existing systems was seamless, and the ongoing support has been exceptional."
                    </p>
                    <div>
                      <p className="font-semibold text-[#9baed9]">Dr. Sarah Mitchell</p>
                      <p className="text-sm text-gray-600">Marketing Director, St John Health</p>
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
                Ready to Transform Your Healthcare Practice?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how we can build a secure, compliant healthcare platform tailored to your organization's
                needs.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#9baed9] hover:bg-[#f0f4ff] text-lg px-8">
                  Start Your Healthcare Project
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
