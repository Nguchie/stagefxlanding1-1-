"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <Link
            href="/seo-services"
            className={`text-lg font-medium transition-colors ${
              isActive("/seo-services") ? "text-[#9baed9]" : "hover:text-[#9baed9]"
            }`}
            onClick={handleLinkClick}
          >
            SEO Services
          </Link>
          <Link
            href="/web-development"
            className={`text-lg font-medium transition-colors ${
              isActive("/web-development") ? "text-[#9baed9]" : "hover:text-[#9baed9]"
            }`}
            onClick={handleLinkClick}
          >
            Website Development
          </Link>
          <Link
            href="/case-studies"
            className={`text-lg font-medium transition-colors ${
              isActive("/case-studies") ? "text-[#9baed9]" : "hover:text-[#9baed9]"
            }`}
            onClick={handleLinkClick}
          >
            Case Studies
          </Link>
          <Link
            href="/blogs"
            className={`text-lg font-medium transition-colors ${
              isActive("/blogs") ? "text-[#9baed9]" : "hover:text-[#9baed9]"
            }`}
            onClick={handleLinkClick}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className={`text-lg font-medium transition-colors ${
              isActive("/contact") ? "text-[#9baed9]" : "hover:text-[#9baed9]"
            }`}
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
