import Image from "next/image"
import { Clock, User, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | StageFX - SEO & Web Development Insights",
  description:
    "Expert insights on SEO strategies, web development best practices, and digital marketing tips from the StageFX team.",
}

const blogPosts = [
  {
    id: "local-business-rank-1-google",
    title: "How I Got a Local Business to Rank #1 on Google (Case Study)",
    excerpt:
      "A local plumbing company reached out frustrated: they weren't showing up in Google searches. Here's how we got them to #1 in the map pack within 3 months.",
    image: "/images/blog/local-business-google-ranking-case-study.png",
    category: "SEO",
    readTime: "8 min read",
    author: "StageFX Team",
    date: "Dec 15, 2024",
    buttonText: "Read Case Study",
  },
  {
    id: "seo-vs-paid-ads",
    title: "SEO vs Paid Ads: What's Best for Small Businesses?",
    excerpt:
      "Should you spend money on ads or invest in SEO? The short answer: it depends on your goals and timeline. Let's break down the pros and cons of each approach.",
    image: "/images/blog/seo-vs-paid-ads-comparison.png",
    category: "SEO",
    readTime: "6 min read",
    author: "StageFX Team",
    date: "Dec 10, 2024",
    buttonText: "Read More",
  },
  {
    id: "blog-posts-that-rank",
    title: "How to Write Blog Posts That Actually Rank",
    excerpt:
      "You write blog posts, but nobody sees them. No traffic. No rankings. Just...crickets. Here's how to write blog posts that rank and bring in real traffic.",
    image: "/images/blog/blog-writing-seo-optimization.png",
    category: "SEO",
    readTime: "7 min read",
    author: "StageFX Team",
    date: "Dec 5, 2024",
    buttonText: "Read More",
  },
  {
    id: "websites-that-load-fast",
    title: "How I Build Websites That Actually Load Fast",
    excerpt:
      "Google ranks fast sites higher. Visitors trust them more. And slow websites lose business—every second counts. Here's my speed formula for building fast sites.",
    image: "/images/blog/website-speed-optimization-tools.png",
    category: "Web Development",
    readTime: "9 min read",
    author: "StageFX Team",
    date: "Nov 28, 2024",
    buttonText: "Read More",
  },
  {
    id: "mobile-friendly-web-design",
    title: "Beginner's Guide to Mobile-Friendly Web Design",
    excerpt:
      "Over half of all website traffic comes from mobile devices. If your site isn't mobile-friendly, you're losing visitors and rankings. Here's how to build mobile-first.",
    image: "/images/blog/mobile-responsive-design-examples.png",
    category: "Web Development",
    readTime: "10 min read",
    author: "StageFX Team",
    date: "Nov 20, 2024",
    buttonText: "Read More",
  },
]

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Featured Articles Section */}
        <section className="py-20 bg-gradient-to-br from-[#9baed9]/5 via-white to-[#9baed9]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-[#9baed9]/10 px-4 py-2 rounded-full mb-6">
                  <Star className="w-5 h-5 text-[#9baed9]" />
                  <span className="text-[#9baed9] font-semibold text-sm">Featured Content</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#9baed9]">
                  Latest <span className="text-gray-900">Insights</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Discover proven strategies, expert tips, and real-world case studies to help your business grow online
                </p>
                <div className="mt-8">
                  <Image
                    src="/images/blog/digital-marketing-insights-hero.png"
                    alt="Digital marketing insights and SEO strategies illustration"
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg mx-auto"
                  />
                </div>
              </div>

              {/* All Blog Posts - Horizontal Card Layout */}
              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                  >
                    <div className="grid md:grid-cols-3 gap-0">
                      {/* Image Section */}
                      <div className="md:col-span-1 relative">
                        <div className="h-48 md:h-full bg-gray-200 flex items-center justify-center relative">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={`${post.title} - ${post.category} blog post thumbnail`}
                            width={400}
                            height={250}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                                post.category === "SEO" ? "bg-green-500" : "bg-blue-500"
                              }`}
                            >
                              {post.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="md:col-span-2 p-6 flex flex-col justify-between">
                        <div>
                          {/* Meta Information */}
                          <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 leading-tight group-hover:text-[#9baed9] transition-colors">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                        </div>

                        {/* Bottom Section */}
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 text-sm">{post.date}</span>
                          <Button
                            className="bg-[#9baed9] text-white hover:bg-[#8a9dc8] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-full"
                            asChild
                          >
                            <Link href={`/blogs/${post.id}`}>{post.buttonText}</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

       
      </main>

      <Footer />
    </div>
  )
}
