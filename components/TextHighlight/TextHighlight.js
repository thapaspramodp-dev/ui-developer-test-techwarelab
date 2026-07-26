"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import FolderShape from "@/components/ui/FolderShape"

const TEXT_BLOCKS = [
  {
    id: 1,
    heading: "PDFs get forged. Emails get lost. Manual checks create liability.",
    body: "Yaatra replaces static documents with cryptographically signed credentials issued directly from the source, with a full audit trail.",
  },
  {
    id: 2,
    heading: "Verification happens in seconds, not weeks.",
    body: "Lorem replaces static documents with cryptographically signed credentials issued directly from the source, with a full audit trail.",
  },
  {
    id: 3,
    heading: "One platform for every credential type.",
    body: "Lorem replaces static documents with cryptographically signed credentials issued directly from the source, with a full audit trail.",
  },
]

export default function TextHighlight() {
  const [active, setActive] = useState(0)

  return (
    <section id="solution" className="relative bg-bg py-12 px-4 lg:px-12 flex justify-center">
      <FolderShape
        className="w-full max-w-5xl"
        tabWidthRatio={0.52}
        tabInset={44}
        tabHeight={80}
        radius={40}
        tabRadius={26}
        jointRadius={22}
      >
        <div className="pt-20 pb-16 px-8 lg:px-20 max-w-4xl">
          {TEXT_BLOCKS.map((block, index) => {
            const isActive = active === index

            return (
              <div
                key={block.id}
                onClick={() => setActive(index)}
                className="mb-10 cursor-pointer group"
              >
                {/* Heading */}
                <motion.h2
                  className="font-outfit text-3xl lg:text-4xl font-semibold leading-tight select-none mb-2"
                  animate={{
                    color: isActive ? "#111827" : "#A3A3A3",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {block.heading}
                </motion.h2>

                {/* Subtext / Body */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.p
                      key={`body-${block.id}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="font-outfit text-xl lg:text-2xl font-normal text-gray-500 leading-relaxed max-w-3xl"
                    >
                      {block.body}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </FolderShape>
    </section>
  )
}
