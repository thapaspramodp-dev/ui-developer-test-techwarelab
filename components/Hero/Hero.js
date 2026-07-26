"use client"
import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import Button from "@/components/ui/Button"
import FolderShape from "@/components/ui/FolderShape"

const REVEAL_PARTS = [
  {
    id: 0,
    text: "PDFs get forged. Emails get lost. Manual checks create liability. ",
  },
  {
    id: 1,
    text: "Yaatra replaces static documents with cryptographically ",
  },
  {
    id: 2,
    text: "signed credentials issued directly from the source, with a full audit trail.",
  },
]

export default function Hero() {
  const heroRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // ── Phone rises from inside folder → final position ──────────
  const phoneY     = useTransform(heroScroll, [0, 0.65], [195, -170])
  const phoneScale = useTransform(heroScroll, [0, 0.65], [0.88, 1])

  // ── Hero copy fades out uniformly & slides up gently as phone rises ──
  const copyOpacity    = useTransform(heroScroll, [0, 0.10], [1, 0])
  const copyY          = useTransform(heroScroll, [0, 0.10], [0, -35])
  const copyVisibility = useTransform(copyOpacity, (v) => (v <= 0.005 ? "hidden" : "visible"))
  const pointerEvents  = useTransform(copyOpacity, (v) => (v <= 0.05 ? "none" : "auto"))

  // ── Amber glow fades in behind phone ──────────────────────────
  const glowOpacity = useTransform(heroScroll, [0, 0.4], [0.1, 0.85])

  // ── Staggered bottom-to-top motion for side stat cards ───────
  const leftCardY       = useTransform(heroScroll, [0, 0.45], [30, 0])
  const leftCardOpacity = useTransform(heroScroll, [0, 0.25], [1, 1])

  const rightCardY       = useTransform(heroScroll, [0, 0.45], [45, 0])
  const rightCardOpacity = useTransform(heroScroll, [0, 0.25], [1, 1])

  const handleNextStep = () => {
    setActiveStep((prev) => (prev + 1) % REVEAL_PARTS.length)
  }

  // Auto-scrolls the phone transition on clicking phone/hero area
  const handleScrollToPhone = (e) => {
    e?.stopPropagation()
    if (heroRef.current) {
      const targetY = heroRef.current.offsetTop + heroRef.current.offsetHeight * 0.45
      window.scrollTo({ top: targetY, behavior: "smooth" })
    }
  }

  // Auto-scrolls precisely to the start of the highlighted text folder section
  const handleScrollToFolderText = (e) => {
    e?.stopPropagation()
    const el = document.getElementById("solution")
    if (el) {
      const rect = el.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const targetY = rect.top + scrollTop - 40
      window.scrollTo({ top: targetY, behavior: "smooth" })
    }
  }

  return (
    <section id="hero" ref={heroRef} className="relative bg-bg">

      {/* ── STICKY HERO VIEWPORT ─────────────────────────── */}
      <div className="relative min-h-[260vh]">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Full uncropped hero_gradient.png image asset */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute right-0 top-0 w-[58vw] max-w-[850px] h-screen opacity-95">
              <Image
                src="/hero_gradient.png"
                fill
                alt=""
                style={{ objectFit: "contain", objectPosition: "right top" }}
                priority
              />
            </div>
          </div>

          {/* ── HERO COPY — Tightly grouped unit above phone ─── */}
          <motion.div
            style={{
              opacity: copyOpacity,
              y: copyY,
              visibility: copyVisibility,
              pointerEvents,
              paddingTop: "88px",
            }}
            className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center justify-start px-6 gap-3"
          >
            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-center tracking-tight">
              <span className="text-ink">Verification That</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #E7B100, #FEE289, #E7B100)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Starts At The Source.
              </span>
            </h1>

            <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-snug text-center font-normal">
              Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum
              lorem ipsum Lorem ipsum lorem ipsum
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto px-4 sm:px-0">
              <Button variant="gradient" className="w-full sm:w-auto justify-center" onClick={handleScrollToPhone}>Book a Demo</Button>
              <Button variant="text" className="w-full sm:w-auto justify-center" onClick={handleScrollToFolderText}>See how it works</Button>
            </div>
          </motion.div>

          {/* ── PHONE + STAT CARDS + FOLDER TAB MASK ───────────── */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center">

            {/* Amber glow — behind phone */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                opacity: glowOpacity,
                bottom: "100px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "740px",
                height: "360px",
                background: "radial-gradient(ellipse at center, rgba(232,143,0,0.30) 0%, transparent 70%)",
                zIndex: 3,
              }}
            />

            {/* ── FOLDER TAB FRONT MASK — on top of phone (z-15) ── */}
            <div
              onClick={handleScrollToFolderText}
              className="absolute left-1/2 -translate-x-1/2 cursor-pointer group"
              title="Click to view folder text"
              style={{
                width: "min(98vw, 1140px)",
                height: "340px",
                bottom: "-230px",
                zIndex: 15,
              }}
            >
              <FolderShape
                className="w-full h-full group-hover:brightness-105 transition-all"
                tabWidthRatio={0.52}
                tabInset={56}
                tabHeight={84}
                radius={48}
                tabRadius={28}
                jointRadius={24}
              />
            </div>

            {/* ── PHONE + BOTH STAT CARDS — behind folder tab (z-5) ── */}
            <motion.div
              style={{ y: phoneY, scale: phoneScale, zIndex: 5 }}
              onClick={handleScrollToPhone}
              className="relative flex items-center justify-center cursor-pointer"
              title="Click to trigger phone emergence transition"
            >
              {/* Left stat card — fully visible on left of phone */}
              <motion.div
                style={{
                  y: leftCardY,
                  opacity: leftCardOpacity,
                  position: "absolute",
                  top: "20%",
                  right: "calc(100% + 12px)",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(225, 225, 225, 0.92) 50%, rgba(200, 200, 200, 0.85) 100%)",
                }}
                className="hidden lg:flex items-center gap-3 rounded-2xl shadow-xl border border-white/80 shrink-0 backdrop-blur-md px-4 py-3 min-w-[185px] z-20"
              >
                <div className="flex -space-x-2 shrink-0">
                  <div className="w-7 h-7 rounded-full bg-amber/30 border-2 border-white" />
                  <div className="w-7 h-7 rounded-full bg-amber/60 border-2 border-white" />
                  <div className="w-7 h-7 rounded-full bg-amber border-2 border-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink leading-none">250+</p>
                  <p className="text-xs text-gray-500 mt-1">trusted organisations</p>
                </div>
              </motion.div>

              {/* Phone image — enlarged */}
              <Image
                src="/iPhone 14 Pro.png"
                width={300}
                height={600}
                alt="Mobile app"
                className="drop-shadow-2xl w-60 md:w-[280px]"
                priority
              />

              {/* Right stat card — fully visible on right of phone */}
              <motion.div
                style={{
                  y: rightCardY,
                  opacity: rightCardOpacity,
                  position: "absolute",
                  top: "42%",
                  left: "calc(100% + 12px)",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(225, 225, 225, 0.92) 50%, rgba(200, 200, 200, 0.85) 100%)",
                }}
                className="hidden lg:flex flex-col gap-1 rounded-2xl shadow-xl border border-white/80 shrink-0 backdrop-blur-md px-4 py-3 min-w-[175px] z-20"
              >
                <p className="text-sm font-bold text-ink leading-none">10,000+</p>
                <p className="text-xs text-gray-500 mt-1 leading-tight">
                  credentials verified<br />securely
                </p>
              </motion.div>
            </motion.div>

          </div>



        </div>
      </div>

      {/* ── FOLDER CARD WITH CLICK-DRIVEN PROGRESSIVE TEXT REVEAL ── */}
      <div id="solution" className="relative z-30 -mt-20 pb-20 px-4 lg:px-12 flex justify-center">
        <FolderShape
          className="w-full max-w-6xl min-h-[480px]"
          tabWidthRatio={0.52}
          tabInset={56}
          tabHeight={84}
          radius={48}
          tabRadius={28}
          jointRadius={24}
        >
          <div
            onClick={handleNextStep}
            className="py-28 px-8 lg:px-20 max-w-4xl mx-auto flex flex-col justify-center items-center text-left cursor-pointer select-none group"
            title="Click to reveal next section"
          >
            <p className="font-outfit text-4xl lg:text-5xl font-normal leading-[1.38] tracking-tight text-left select-none">
              {REVEAL_PARTS.map((part, index) => {
                const isRevealed = index <= activeStep

                return (
                  <motion.span
                    key={part.id}
                    animate={{
                      color: isRevealed ? "#111827" : "#C5BEB5",
                    }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="inline transition-colors"
                  >
                    {part.text}
                  </motion.span>
                )
              })}
            </p>
          </div>
        </FolderShape>
      </div>

    </section>
  )
}