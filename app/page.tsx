"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { Footer } from "@/components/footer"
import { useState, useRef } from "react"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = async () => {
    if (videoRef.current) {
      try {
        // First ensure the video is unmuted (if needed)
        videoRef.current.muted = false;
        
        // Attempt to play
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Error attempting to play:", err);
        // Handle browsers that block autoplay
        videoRef.current.muted = true;
        await videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };
  
  const toggleVideo = async () => {
    if (!videoRef.current) return;
  
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      await handlePlay();
    }
  };

  const testimonials = [
    {
      quote:
        "StageFX doubled our traffic in just six months. Their SEO strategy was exactly what we needed to grow our online presence.",
      author: "Jamie R.",
      role: "Creative Director",
      image: "/images/testimonials/whiteh.PNG",
      imageAlt: "Jamie R., Creative Director at a design agency, professional headshot",
    },
    {
      quote:
        "We started ranking on page one within four months. The keyword research was thorough and the implementation was flawless.",
      author: "Kamal P.",
      role: "Marketing Lead",
      image: "/images/testimonials/indian.PNG",
      imageAlt: "Kamal P., Marketing Lead at a tech company, professional portrait",
    },
    {
      quote:
        "Our site is now faster, cleaner, and converting better. The development team delivered exactly what we needed on time and on budget.",
      author: "Lisa H.",
      role: "Small Business Owner",
      image: "/images/testimonials/blackw.PNG",
      imageAlt: "Lisa H., Small Business Owner of a retail store, smiling profile photo",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-[#9baed9] py-20 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                We Build Websites That Rank.
              </h2>
              <p className="text-xl md:text-2xl text-black/90 mb-10">
                SEO strategy and Custom Web Development to grow your business.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3 rounded-lg shadow-md"
                asChild
              >
                <Link href="/contact">
                  Get a Free SEO Audit
                </Link>
              </Button>
            </div>
          </div>

          {/* Overlapping Image - Adjust positioning */}
          <div className="absolute -bottom-32 right-0 md:right-10 lg:right-20 w-full max-w-md md:max-w-sm lg:max-w-md z-0">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9baed9]/80 to-[#9baed9]/20 rounded-full overflow-hidden">
                <Image
                  src="/images/hero/seo-analytics-dashboard-visualization.png"
                  alt="SEO Analytics Dashboard showing traffic growth and keyword rankings"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl transform rotate-6 border border-white/20">
                  <div className="w-full h-full bg-gradient-to-br from-[#9baed9]/30 to-transparent p-4 rounded-2xl">
                    <div className="w-full h-2 bg-white/30 rounded-full mb-4"></div>
                    <div className="grid grid-cols-2 gap-2 h-1/3">
                      <div className="bg-white/20 rounded-lg"></div>
                      <div className="bg-white/10 rounded-lg"></div>
                    </div>
                    <div className="mt-4 h-1/2 bg-white/15 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Move up to connect with hero */}
        <section className="py-12 bg-white -mt-16 relative z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-[#9baed9]">9+</div>
                  <p className="text-gray-600 text-sm">Years in Business</p>
                </div>
               
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-[#9baed9]">$15M+</div>
                  <p className="text-gray-600 text-sm">Revenue Generated Through Serp Funnelling</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-[#9baed9]">22</div>
                  <p className="text-gray-600 text-sm">Websites Launched</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-[#9baed9]">15K+</div>
                  <p className="text-gray-600 text-sm">Top 10 Keyword Rankings Achieved</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quicklinks - Adjust to flow better */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#9baed9]">Our Expertise</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#f0f4ff] p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <Image
                    src="/images/services/seo.png"
                    alt="SEO keyword research and optimization tools"
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-[#9baed9]">Explore SEO Services</h3>
                  <p className="text-gray-600 mb-4">Learn how we optimize your site for growth</p>
                  <Link
                    href="/seo-services"
                    className="inline-flex items-center bg-white text-black hover:bg-gray-100 border border-gray-200 shadow-sm px-6 py-2 rounded-lg transition-colors"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-[#f0f4ff] p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <Image
                    src="/images/services/web.png"
                    alt="Web development code and responsive design"
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-[#9baed9]">Web Development Work</h3>
                  <p className="text-gray-600 mb-4">See what we've built from scratch</p>
                  <Link
                    href="/web-development"
                    className="inline-flex items-center bg-white text-black hover:bg-gray-100 border border-gray-200 shadow-sm px-6 py-2 rounded-lg transition-colors"
                  >
                    View portfolio <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

       <section id="about" className="py-20 bg-[#f8faff]">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#9baed9]">
        About StageFX
      </h2>

      <div className="flex flex-col md:flex-row items-stretch gap-8">
        {/* Image on left - modified to remove all extra space */}
        <div className="w-full md:w-1/2 overflow-hidden">
          <div className="relative aspect-video w-full h-full">
            <Image
              src="/images/about/about.jpeg"
              alt="StageFX team working in modern office environment"
              fill
              className="object-cover rounded-lg shadow-lg w-full h-full"
              priority
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>

        {/* Text content on right */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4 text-[#7a92c4]">
            Driving Digital Success Since 2015
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            StageFX is a premier digital agency in Boston Massachusetts specializing in strategic SEO solutions and high-performance web development. 
            We combine technical expertise with creative vision to deliver measurable results for our clients.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our team of certified SEO specialists and full-stack developers work collaboratively to create websites that 
            not only look stunning but also rank well and convert visitors into customers.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            From technical SEO audits to lightning-fast custom web applications, we implement solutions that drive sustainable 
            growth for businesses of all sizes.
          </p>
          <div className="space-y-2">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#9baed9]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Search Engine Optimization</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#9baed9]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Custom Web Development</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#9baed9]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Performance Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Services Overview */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#9baed9]">Our Services</h2>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="bg-gradient-to-br from-[#9baed9]/5 to-[#9baed9]/10 p-8 rounded-2xl">
                  <div className="w-16 h-16 bg-[#9baed9] rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-6 text-[#9baed9]">SEO Services</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#9baed9] rounded-full"></div>
                      <span className="text-gray-700">Keyword research & strategy building</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#9baed9] rounded-full"></div>
                      <span className="text-gray-700">On page Optimisation & Technical SEO</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#9baed9] rounded-full"></div>
                      <span className="text-gray-700">Off page SEO  and Link Building & Research</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#9baed9] rounded-full"></div>
                      <span className="text-gray-700">PPF, PDF & Copywriting + Press Release</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#9baed9] rounded-full"></div>
                      <span className="text-gray-700">Keywords jumps, performance reports</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#9baed9]/5 to-[#9baed9]/10 p-8 rounded-2xl">
                  <div className="w-16 h-16 bg-[#9baed9] rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-6 text-[#9baed9]">Web Development</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#9baed9] rounded-full"></div>
                      <span className="text-gray-700">Custom Website Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#9baed9] rounded-full"></div>
                      <span className="text-gray-700">Responsive Mobile Design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#9baed9] rounded-full"></div>
                      <span className="text-gray-700">Performance Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#9baed9] rounded-full"></div>
                      <span className="text-gray-700">CMS Integration & Training</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#9baed9] rounded-full"></div>
                      <span className="text-gray-700">Ongoing Maintenance & Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Video Section */}
<section className="py-20 bg-[#f0f4ff] relative">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-[#9baed9]">How Keyword Research Works</h2>
      <p className="text-lg text-gray-600 mb-10 text-center">
        A quick look at how we build data-backed SEO campaigns.
      </p>
      
      <div 
        className="aspect-video bg-[#9baed9]/20 rounded-lg relative overflow-hidden group"
        onContextMenu={(e) => e.preventDefault()} // Disable right-click
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="/images/video/research.jpeg"
          playsInline
          controlsList="nodownload noremoteplayback noplaybackrate" // Disable download options
          disablePictureInPicture // Disable PiP
          onClick={toggleVideo}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          muted={false} // Ensure sound is enabled
        >
          <source src="/images/video/keyword-research-process-tutorial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Big Play Button (when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handlePlay} // Use the new handler
              className="h-20 w-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
              aria-label="Play video"
            >
              <Play className="h-10 w-10 text-[#9baed9] ml-1" />
            </button>
          </div>
        )}

        {/* Bottom Controls Bar */}
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 transition-opacity duration-300 ${
          isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleVideo}
              className="text-white hover:text-[#9baed9] p-1.5"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </button>
            <div className="flex-1 h-1.5 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-[#9baed9]" style={{ width: '75%' }}></div>
            </div>
            <div className="text-white text-xs font-mono">
              1:23 / 2:45
            </div>
            <button
              onClick={() => videoRef.current?.requestFullscreen()}
              className="text-white hover:text-[#9baed9] p-1.5"
              aria-label="Fullscreen"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Testimonials - Bigger block with retained styling */}
        <section id="testimonials" className="py-32 bg-white relative">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-left text-[#9baed9]">Proof It Works</h2>
            </div>

            {/* Content Section with Bigger Slider */}
            <div className="relative">
              <TestimonialSlider testimonials={testimonials} />
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 bg-[#9baed9]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Need help with SEO or Website Development?</h2>
              <p className="text-xl text-white/90 mb-8">Let's grow your business with StageFX.</p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3 rounded-lg shadow-md"
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
