"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Expand, X } from "lucide-react"

export function ExpandableImage({
  src,
  alt,
  width,
  height,
  className = "",
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isExpanded])

  return (
    <>
      <div className="relative group">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-auto rounded-lg shadow-md cursor-pointer ${className}`}
          onClick={() => setIsExpanded(true)}
        />
        <button
          className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => setIsExpanded(true)}
          aria-label="Expand image"
        >
          <Expand className="w-4 h-4 text-gray-800" />
        </button>
      </div>

      {/* Modal - Now uses z-[9999] to ensure it's always on top */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setIsExpanded(false)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-auto max-h-[90vh] object-contain"
              priority
            />
            <button
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setIsExpanded(false)
              }}
              aria-label="Close expanded image"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}