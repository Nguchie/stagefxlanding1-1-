"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  quote: string
  author: string
  role: string
  image: string
  imageAlt: string
}

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 5000)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative w-full bg-gradient-to-br from-[#9baed9] to-[#b8c5e0] overflow-hidden">
      <div className="max-w-7xl mx-auto relative min-h-[500px] md:min-h-[600px]">
        {/* Left side - Testimonial Content */}
        <div className="absolute left-0 top-0 w-full md:w-1/2 h-full flex items-center p-8 md:p-16 z-20">
          <div className="max-w-lg">
            {/* Large quotation mark */}
            <div className="text-6xl md:text-7xl text-white/30 font-serif leading-none mb-4">"</div>

            {/* Quote text */}
            <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 font-light">
              {testimonials[current].quote}
            </p>

            {/* Author section */}
            <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 overflow-hidden">
  <Image
    src={testimonials[current].image}
    alt={testimonials[current].imageAlt}
    width={64}
    height={64}
    className="w-full h-full object-cover"
  />
</div>
              <div>
                <p className="text-white font-semibold text-lg md:text-xl">{testimonials[current].author}</p>
                <p className="text-white/80 text-sm md:text-base">{testimonials[current].role}</p>
              </div>
            </div>

            {/* Large closing quotation mark */}
            <div className="text-6xl md:text-7xl text-white/30 font-serif leading-none mt-8 text-right">"</div>
          </div>
        </div>

        {/* Right side - 3D Floating Images */}
        <div
          className="absolute right-0 top-0 w-full md:w-1/2 h-full hidden md:block"
          style={{ perspective: "1000px" }}
        >
          <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Image 1 - Top right, rotated and elevated */}
                <div
                  className="absolute top-12 right-16 w-48 h-32 hover:scale-105 transition-transform duration-300"
                  style={{
                    transform: "rotateX(15deg) rotateY(-20deg) rotateZ(12deg) translateZ(40px)",
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
                  }}
                >
                  <Image
                    src="/images/testimonials/one.jpg"
                    alt="SEO Report Dashboard"
                    width={192}
                    height={128}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

        

                {/* Image 3 - Lower right, tilted */}
                <div
                  className="absolute bottom-32 right-20 w-44 h-36 hover:scale-105 transition-transform duration-300"
                  style={{
                    transform: "rotateX(20deg) rotateY(-15deg) rotateZ(6deg) translateZ(30px)",
                    filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.35))",
                  }}
                >
                  <Image
                    src="/images/testimonials/two.png"
                    alt="Analytics Dashboard"
                    width={176}
                    height={144}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Image 4 - Business card style, small and angled */}
                <div
                  className="absolute bottom-16 right-32 w-32 h-20 hover:scale-105 transition-transform duration-300"
                  style={{
                    transform: "rotateX(-15deg) rotateY(30deg) rotateZ(-12deg) translateZ(15px)",
                    filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.2))",
                  }}
                >
                  <Image
                    src="/images/testimonials/three.jpg"
                    alt="Business Card Design"
                    width={128}
                    height={80}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Image 5 - Square logo/brand element */}
                <div
                  className="absolute top-48 right-40 w-24 h-24 hover:scale-105 transition-transform duration-300"
                  style={{
                    transform: "rotateX(25deg) rotateY(-35deg) rotateZ(45deg) translateZ(25px)",
                    filter: "drop-shadow(0 18px 36px rgba(0,0,0,0.3))",
                  }}
                >
                  <Image
                    src="/images/testimonials/four.jpg"
                    alt="Logo Design"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Image 6 - Letterhead/document style */}
                <div
                  className="absolute top-24 right-4 w-36 h-48 hover:scale-105 transition-transform duration-300"
                  style={{
                    transform: "rotateX(10deg) rotateY(20deg) rotateZ(-15deg) translateZ(35px)",
                    filter: "drop-shadow(0 22px 44px rgba(0,0,0,0.28))",
                  }}
                >
                  <Image
                    src="/images/testimonials/seven.png"
                    alt="Letterhead Design"
                    width={144}
                    height={176}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* Image 7 - Small floating element */}
                <div
                  className="absolute bottom-48 right-8 w-28 h-20 hover:scale-105 transition-transform duration-300"
                  style={{
                    transform: "rotateX(-20deg) rotateY(-25deg) rotateZ(18deg) translateZ(10px)",
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
                  }}
                >
                  <Image
                    src="/images/testimonials/six.png"
                    alt="Brand Element"
                    width={112}
                    height={80}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Image 8 - Background element, larger and more subtle */}
                <div
                  className="absolute top-64 right-12 w-20 h-20 hover:scale-105 transition-transform duration-300"
                  style={{
                    transform: "rotateX(5deg) rotateY(-10deg) rotateZ(30deg) translateZ(5px)",
                    filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.15))",
                    opacity: 0.8,
                  }}
                >
                  <Image
                    src="/images/testimonials/eight.png"
                    alt="Icon Design"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-8 left-8 md:left-16 flex space-x-3 z-30">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === current ? "bg-white" : "bg-white/40"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors z-30"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors z-30"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  )
}
