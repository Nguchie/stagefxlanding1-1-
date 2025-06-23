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
  title: "VR Wave Web Development Case Study | StageFX - Premium eCommerce Development",
  description:
    "See how we built a high-performance eCommerce site for VR Wave with advanced functionalities and optimized user experience.",
}

export default function VRWaveWebDevCaseStudy() {
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
                <h1 className="text-4xl md:text-5xl font-bold text-[#9baed9]">VR Wave</h1>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">eCommerce</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">Web Dev0</span>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Building a high-performance eCommerce site with advanced product configuration and prescription input for VR lens inserts.
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
                  VR Wave specializes in selling lens inserts for virtual reality headsets, which are custom-made to correct nearsightedness, 
                  farsightedness, and astigmatism, allowing users to enjoy VR without the need for glasses. They feature a magnetic design 
                  for easy application, in addition to offering blue light filter and anti-glare options to reduce eye strain.
                </p>
                <div className="mb-8">
                  <Image
                    src="/images/case-studies/vr-wave-website-design.PNG"
                    alt="VR Wave prescription lens inserts for virtual reality headsets"
                    width={700}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  VR WAVE relied heavily on Stagefx to create their inaugural website, enabling them to present their portfolio of VR lenses 
                  to a global audience. Collaborating intimately with their marketing team, we enhanced the user experience of their design 
                  and constructed a cutting-edge site, featuring a wide array of sophisticated functionalities, mostly in the product pages.
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
                    Establish an intuitive navigation framework tailored specifically for mobile users.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Incorporate distinct calls to action and readily available resources to facilitate access to essential information.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Implement a user-friendly, open-source Content Management System (CMS) to manage website content effectively.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Integrate an email subscription form to enhance the email marketing database and capture valuable lead information.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Facilitate the administration of programs and support website members efficiently.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Prioritize responsive usability, recognizing that an increasing number of visitors will engage with the website via mobile devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Strategy */}
        <section className="py-16 bg-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-[#9baed9]">🔍 Research & Strategy</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Project Objectives:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Develop a distinct brand identity for the existing company portal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Emphasize relevance and professionalism with an innovative, sophisticated design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Reflect core values and aspirations of the company</span>
                    </li>
                  </ul>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    Our client's brief emphasized the importance of positioning VR WAVE as a premium brand, prompting us to conduct extensive 
                    research into strategies from other industries. Tal Monique, the Director of VR Wave, expressed enthusiasm for the opportunity 
                    to design a website that would highlight high-end icons suitable for mobile applications, web design, user interfaces, and beyond.
                  </p>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    Stagefx assembled a skilled team of developers to create a professional website for VR Wave, aiming to enhance their online 
                    brand presence. Recognizing the importance of mobile accessibility, we prioritized a responsive design to cater to users who 
                    would likely be searching for their products on mobile devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-[#9baed9]">🛠️ Solution</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Our UX designers collaborated closely with the development team, ensuring meticulous oversight of the design and interaction 
                    features. We crafted a tailored design that effectively highlighted the company's scale and expertise, presenting a sleek, 
                    modern aesthetic.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We integrated a WordPress CMS, empowering the client to manage their website effortlessly and upload new products with ease.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Built on the robust Bootstrap framework, the website utilizes cutting-edge CSS3 and HTML5 technologies for optimal performance.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    We implemented secure onsite payment solutions to guarantee a shopping experience that is not only safe but also user-friendly 
                    and intuitive, with a focus on optimizing the product search process.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#9baed9] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    The solution included an interactive portfolio, multilingual support, and onsite contact and search forms for lead generation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-16 bg-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-[#9baed9]">⚙️ Key Features</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Product Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Customizable product configuration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Prescription input with visual guides</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">3D product preview</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Mobile-optimized checkout flow</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Integration with multiple payment gateways</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Technical Implementation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">WordPress CMS for easy content management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Bootstrap framework for responsive design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Advanced CSS3 and HTML5 technologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Secure payment processing system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Multilingual support for global audience</span>
                    </li>
                  </ul>
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
                  The outcome is an impressive and visually appealing eCommerce website that offers robust reporting 
                  capabilities and an efficient online customer management system. The performance metrics from the 
                  initial six months have surpassed all anticipations:
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-[#f8faff] p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-[#9baed9] mb-2">73%</div>
                  <p className="text-gray-600">Increase in organic sessions</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-[#9baed9] mb-2">9M</div>
                  <p className="text-gray-600">Pageviews in first six months</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl font-bold text-[#9baed9] mb-2">32%</div>
                  <p className="text-gray-600">Bounce rate (17% decrease)</p>
                </div>
              </div>

              <div className="bg-[#f8faff] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#9baed9]">Additional Improvements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">93 pages per session (48% increase)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Significant improvement in mobile conversion rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Enhanced brand perception as a premium VR accessory provider</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

{/* Visual Showcase */}
<section className="py-16 bg-[#f8faff]">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#9baed9]">
        Platform Showcase
      </h2>
      <div className="grid md:grid-cols-3 gap-8">

        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[300px] aspect-[3/2] relative bg-white">
            <Image
              src="/images/case-studies/vr-wave-web-dev/product-configuration-interface.PNG"
              alt="VR Wave Product Configuration Interface showing lens customization options"
              fill
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
          <p className="text-center text-gray-600 mt-2">
            Product Configuration Interface
          </p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[300px] aspect-[3/2] relative bg-white">
            <Image
              src="/images/case-studies/vr-wave-web-dev/vrmobiler.png"
              alt="VR Wave Prescription Input Form with visual guides for entering prescription details"
              fill
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
          <p className="text-center text-gray-600 mt-2">
            Mobile responsive design
          </p>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[300px] aspect-[3/2] relative bg-white">
            <Image
              src="/images/case-studies/vr-wave-web-dev/3d-product-preview.PNG"
              alt="VR Wave 3D Product Preview showing interactive lens visualization"
              fill
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
          <p className="text-center text-gray-600 mt-2">
            3D Product Preview
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


        {/* Testimonial */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#f8faff] p-8 rounded-2xl border border-[#9baed9]/10 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#9baed9]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl text-[#9baed9]">❝</span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 italic mb-6">
                      "StageFX delivered an eCommerce platform that perfectly captures our brand's premium positioning while 
                      providing an exceptional user experience. The intuitive product configuration and prescription input 
                      features have significantly reduced customer support requests while increasing conversion rates. Our 
                      mobile traffic has grown substantially, and the responsive design ensures all users have a seamless 
                      shopping experience regardless of device."
                    </p>
                    <div>
                      <p className="font-semibold text-[#9baed9]">Tal Monique</p>
                      <p className="text-sm text-gray-600">Director, VR Wave</p>
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
                Ready to Build Your Premium eCommerce Platform?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how we can create a high-performance online store tailored to your unique products and customers.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#9baed9] hover:bg-[#f0f4ff] text-lg px-8">
                  Start Your eCommerce Project
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