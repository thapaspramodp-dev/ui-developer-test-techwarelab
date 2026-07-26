"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import { PLATFORM_CARDS } from "@/constants/data"

const HEADER_HEIGHT = 118 // Height reserved to keep the full 2-line title 100% visible (matching Image 17)
const BASE_TOP = 96        // Base sticky top position

function StackCard({ card, index, totalCards, scrollYProgress }) {
  const isLast = index === totalCards - 1
  const cardStart = index / totalCards
  const cardEnd   = (index + 1) / totalCards

  // Sticky top calculation:
  // Cards 0, 1, 2 stop right below the previous slide's full title (BASE_TOP + index * HEADER_HEIGHT)
  // The last card (Card 3) slides all the way to BASE_TOP, covering and merging on top of all slides
  const topOffset = isLast ? BASE_TOP : BASE_TOP + index * HEADER_HEIGHT

  // Scale down previous cards slightly as new card stacks
  const scale = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [1, isLast ? 1 : 0.96]
  )

  // Darken background slightly when stacked under
  const opacity = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [1, isLast ? 1 : 0.85]
  )

  return (
    <motion.div
      style={{
        scale,
        opacity,
        zIndex: (index + 1) * 10,
        top: `${topOffset}px`,
      }}
      className="sticky w-full mb-8"
    >
      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xl mx-auto max-w-5xl">
        {/* Slide Content matching Image 16 */}
        <div className="flex flex-col lg:flex-row items-start gap-8 px-8 lg:px-12 pt-6 pb-10 bg-white">
          {/* Text side matching Image 16 */}
          <div className="flex-1 order-2 lg:order-1 flex flex-col justify-start pt-1">
            <h3 className="font-outfit text-2xl lg:text-3xl font-semibold text-ink leading-snug mb-2 min-h-[64px]">
              {card.title}
            </h3>
            <p className="font-serif italic text-gray-400 text-sm md:text-base leading-snug max-w-sm mt-1">
              {card.description}
            </p>
          </div>

          {/* Image side */}
          <div className="flex-1 order-1 lg:order-2 w-full rounded-2xl overflow-hidden border border-gray-100 shadow-md mt-2">
            <Image
              src={card.image}
              width={600}
              height={380}
              alt={card.title}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function PlatformPreview() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section
      id="platform"
      ref={containerRef}
      style={{ minHeight: `${PLATFORM_CARDS.length * 90}vh` }}
      className="relative bg-bg px-6 pt-24 pb-32"
    >
      {/* Section header matching wireframe Image 14 */}
      <div className="max-w-5xl mx-auto mb-16 px-4">
        <p className="text-xs tracking-widest uppercase text-amber font-semibold mb-3">
          • Platform Preview
        </p>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <h2 className="font-outfit text-4xl lg:text-5xl font-semibold text-ink leading-tight max-w-xl">
            Verify documents from a single dashboard.
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xs md:text-right pt-2 font-normal">
            One dashboard to request, track, and receive verified credentials, with full audit trail access.
          </p>
        </div>
      </div>

      {/* Stacking cards */}
      <div className="relative max-w-5xl mx-auto flex flex-col">
        {PLATFORM_CARDS.map((card, index) => (
          <StackCard
            key={card.id}
            card={card}
            index={index}
            totalCards={PLATFORM_CARDS.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
