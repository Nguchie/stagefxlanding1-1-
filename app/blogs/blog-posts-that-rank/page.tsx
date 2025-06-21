import Link from "next/link"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { ArrowLeft, Clock, User, MessageCircle, Facebook, X, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
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
  title: "How to Write Blog Posts That Actually Rank | StageFX",
  description:
    "Learn the proven strategies for creating SEO-optimized blog content that ranks high in search results and drives organic traffic.",
}

export default function BlogPostsThatRankPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
        
        </div>
        
        
      </header>

      <main>
        {/* Back Navigation */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link
              href="/blogs"
              className="inline-flex items-center text-[#9baed9] hover:text-[#8a9dc8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">SEO</span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />7 min read
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <User className="w-4 h-4 mr-1" />
                  StageFX Team
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#9baed9] leading-tight">
                How to Write Blog Posts That Actually Rank
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                You write blog posts, but nobody sees them. No traffic. No rankings. Just...crickets. Here's how to
                write blog posts that rank and bring in real traffic.
              </p>
              <div className="mb-8">
                <Image
                  src="/images/blog/blog-posts-that-rank/seo-content-writing-process.png"
                  alt="SEO content writing process with keyword research, content planning, and optimization"
                  width={700}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-[#f8faff]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Creating blog content that ranks well in search engines isn't just about writing great content—it's
                  about understanding how search engines work and what your audience is actually searching for. After
                  helping hundreds of businesses improve their content rankings, I've developed a proven system that
                  consistently delivers results.
                </p>

                <h2 className="text-3xl font-bold text-[#9baed9] mt-12 mb-6">
                  The Foundation: Keyword Research Done Right
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Before you write a single word, you need to understand what your audience is searching for. But
                  keyword research goes far beyond just finding high-volume keywords. Here's my step-by-step process:
                </p>

                <div className="mb-8">
                  <Image
                    src="/images/blog/blog-posts-that-rank/keyword research tools.jpeg"
                    alt="Comparison of popular keyword research tools showing features and data metrics"
                    width={700}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Start with Seed Keywords</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Begin with 3-5 broad topics related to your business. For example, if you're a fitness coach, your
                  seed keywords might be "weight loss," "muscle building," "nutrition," "workout routines," and "fitness
                  motivation."
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Use the Right Tools</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While there are many keyword research tools available, here are my top recommendations:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong>Google Keyword Planner</strong> - Free and directly from Google
                  </li>
                  <li>
                    <strong>Ahrefs</strong> - Best for competitive analysis
                  </li>
                  <li>
                    <strong>SEMrush</strong> - Great for finding content gaps
                  </li>
                  <li>
                    <strong>AnswerThePublic</strong> - Perfect for question-based keywords
                  </li>
                  <li>
                    <strong>Google Search Console</strong> - Shows what you already rank for
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Focus on Search Intent</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Understanding search intent is crucial. There are four main types of search intent:
                </p>

                <div className="mb-8">
                  <Image
                    src="/images/blog/blog-posts-that-rank/types of search intent.jpeg"
                    alt="Diagram showing the four types of search intent: informational, navigational, commercial, and transactional"
                    width={700}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Informational Intent</h4>
                    <p className="text-gray-700 text-sm">Users want to learn something</p>
                    <p className="text-gray-600 text-sm mt-2">Example: "how to lose weight"</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Navigational Intent</h4>
                    <p className="text-gray-700 text-sm">Users want to find a specific website</p>
                    <p className="text-gray-600 text-sm mt-2">Example: "facebook login"</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Commercial Intent</h4>
                    <p className="text-gray-700 text-sm">Users are researching before buying</p>
                    <p className="text-gray-600 text-sm mt-2">Example: "best protein powder"</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Transactional Intent</h4>
                    <p className="text-gray-700 text-sm">Users are ready to purchase</p>
                    <p className="text-gray-600 text-sm mt-2">Example: "buy protein powder online"</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-[#9baed9] mt-12 mb-6">Content Structure That Google Loves</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  The way you structure your content has a massive impact on how well it ranks. Here's how to create a
                  structure that both Google and readers will love:
                </p>

                <div className="mb-8">
                  <Image
                    src="/images/blog/blog-posts-that-rank/headertags.jpeg"
                    alt="Visual example of proper content hierarchy with H1, H2, and H3 headings properly structured"
                    width={700}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>

               
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-[#9baed9]">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Link href="/blogs/seo-vs-paid-ads" className="group">
                  <div className="bg-[#f8faff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                      SEO
                    </span>
                    <h3 className="text-lg font-semibold mt-4 mb-2 text-[#9baed9] group-hover:text-[#8a9dc8]">
                      SEO vs Paid Ads: What's Best for Small Businesses?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Should you spend money on ads or invest in SEO? Let's break it down.
                    </p>
                  </div>
                </Link>
                <Link href="/blogs/websites-that-load-fast" className="group">
                  <div className="bg-[#f8faff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      Web Dev
                    </span>
                    <h3 className="text-lg font-semibold mt-4 mb-2 text-[#9baed9] group-hover:text-[#8a9dc8]">
                      How I Build Websites That Actually Load Fast
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Speed matters for rankings and conversions. Here's my formula.
                    </p>
                  </div>
                </Link>
                <Link href="/blogs/mobile-friendly-web-design" className="group">
                  <div className="bg-[#f8faff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      Web Dev
                    </span>
                    <h3 className="text-lg font-semibold mt-4 mb-2 text-[#9baed9] group-hover:text-[#8a9dc8]">
                      Beginner's Guide to Mobile-Friendly Web Design
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Over half of all website traffic comes from mobile devices. Here's how to build mobile-first.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
       
      </main>

      <Footer />

      {/* Floating Back Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <Link
          href="/blogs"
          className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200 text-[#9baed9] hover:bg-[#9baed9] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    </div>
  )
}
