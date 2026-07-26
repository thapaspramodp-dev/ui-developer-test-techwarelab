"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { WHO_BADGES } from "@/constants/data"

// Badge icons mapping matching wireframe screenshot
function BadgeIcon({ type }) {
  if (type === "law" || type === "finance") {
    // Balance / Scales icon
    return (
      <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M3 6l9-3 9 3m-9-3v18m-6-6l6 6 6-6M6 9l-3 6h6L6 9zm12 0l-3 6h6l-3-6z"
        />
      </svg>
    )
  }

  if (type === "education") {
    // Graduation cap icon
    return (
      <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    )
  }

  if (type === "hr") {
    // Office chair / Briefcase icon
    return (
      <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    )
  }

  // Compliance / Users icon
  return (
    <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  )
}

// Angles spaced evenly for 5 badges around 360°
const BASE_ANGLES = WHO_BADGES.map((_, i) => (360 / WHO_BADGES.length) * i - 72)

export default function WhoItsFor() {
  const [radius, setRadius] = useState(210)
  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const update = () => setRadius(window.innerWidth < 768 ? 130 : 210)
    update()
    setMounted(true)
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  // Step-by-step orbital movement with a ~1 second pause at each step
  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setStep((prev) => prev + 1)
    }, 2200) // 0.8s smooth move + 1.4s pause

    return () => clearInterval(interval)
  }, [mounted])

  const rotationAngle = step * 72

  // Calculate dynamic shadow offsets to rotate the drop shadow around the center card
  const shadowAngleRad = (-rotationAngle * Math.PI) / 180
  const shadowX = 12 * Math.cos(shadowAngleRad)
  const shadowY = 24 * Math.sin(shadowAngleRad)
  const dynamicShadow = `${shadowX}px ${shadowY}px 60px -15px rgba(10, 25, 47, 0.18), 0 0 40px -5px rgba(232, 143, 0, 0.22)`

  return (
    <section id="who-its-for" className="relative bg-bg overflow-hidden py-24 px-4 md:px-8">

      {/* Soft ambient background glow on left */}
      <div
        className="absolute left-[-12%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(245, 197, 88, 0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">

        {/* Section Tag */}
        <p className="text-xs font-semibold text-amber tracking-wide mb-2 flex items-center gap-1.5">
          <span className="text-amber text-base">•</span> Who It&apos;s For
        </p>

        {/* Heading */}
        <h2 className="font-outfit text-4xl md:text-5xl font-semibold text-ink text-center mb-3 max-w-2xl leading-tight">
          Built for workflows where<br />trust is non-negotiable.
        </h2>

        {/* Subtitle */}
        <p className="font-serif italic text-gray-500 text-sm md:text-base text-center max-w-md mb-16">
          Wherever credentials matter, Lorem handles the verification
        </p>

        {/* ── CONCENTRIC TRACKS & CENTER GLOW CONTAINER ── */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: radius * 2 + 160, height: radius * 2 + 160 }}
        >

          {/* Ring 4 (Outermost Concentric Track — Radius Factor 1.24) */}
          <div
            className="absolute border-2 border-white/70 shadow-sm pointer-events-none"
            style={{
              width: radius * 2.48,
              height: radius * 2.48,
              borderRadius: "68px",
            }}
          />

          {/* Ring 3 (Concentric Track — Radius Factor 0.97) */}
          <div
            className="absolute border-2 border-white/75 shadow-sm pointer-events-none"
            style={{
              width: radius * 1.94,
              height: radius * 1.94,
              borderRadius: "48px",
            }}
          />

          {/* Center Rounded-Rectangle Glowing Container (2nd Rectangle) */}
          <motion.div
            className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-[44px] md:rounded-[56px] border-2 border-white/90 flex items-center justify-center overflow-hidden backdrop-blur-3xl"
            animate={{ boxShadow: dynamicShadow }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Rotating frosted-glass linear gradient fill */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(254, 244, 218, 0.5) 35%, rgba(245, 197, 88, 0.3) 70%, rgba(232, 143, 0, 0.2) 100%)",
                scale: 1.45,
              }}
              animate={{ rotate: -rotationAngle }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            />

            {/* Ring 1 (Innermost Concentric Track — Inside Card — Filled) */}
            <div
              className="absolute border border-white/60 shadow-sm pointer-events-none z-5"
              style={{
                width: radius * 0.7,
                height: radius * 0.7,
                borderRadius: "20px",
                background: "rgba(254, 244, 218, 0.45)",
              }}
            />

            {/* Ring 2 (Concentric Track — Inside Card — Outline Only) */}
            <div
              className="absolute border border-white/50 shadow-sm pointer-events-none z-5"
              style={{
                width: radius * 1.4,
                height: radius * 1.4,
                borderRadius: "36px",
              }}
            />

            {/* Glowing outer halo */}
            <div
              className="absolute -inset-4 rounded-[60px] pointer-events-none"
              style={{
                background: "radial-gradient(circle at center, rgba(245, 197, 88, 0.35) 0%, transparent 70%)",
                filter: "blur(24px)",
              }}
            />

            {/* Small center logo square badge — frosted glass */}
            <div className="relative z-10 w-14 h-14 md:w-18 md:h-18 rounded-[20px] md:rounded-[24px] bg-white/45 backdrop-blur-xl border border-white/80 shadow-md flex items-center justify-center">
              <Image src="/logo.png" width={32} height={32} alt="Logo" />
            </div>
          </motion.div>

          {/* ── STEP-PAUSED ROTATING ORBIT CONTAINER WITH CONCENTRIC PATHS ── */}
          {mounted && (
            <motion.div
              className="absolute"
              style={{ width: radius * 2, height: radius * 2 }}
              animate={{ rotate: rotationAngle }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              {WHO_BADGES.map((badge, i) => {
                // All badges orbit on the 4th (outermost) ring (factor 1.24)
                const badgeRadius = radius * 1.24
                
                const angleDeg = BASE_ANGLES[i]
                const angleRad = (angleDeg * Math.PI) / 180
                const x = radius + badgeRadius * Math.cos(angleRad) - 100
                const y = radius + badgeRadius * Math.sin(angleRad) - 24

                return (
                  <motion.div
                    key={badge.id}
                    className="absolute"
                    animate={{ left: x, top: y }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {/* Counter-rotate smoothly so badge text stays upright */}
                    <motion.div
                      animate={{ rotate: -rotationAngle }}
                      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                      className="flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-100 px-4 py-2.5 shrink-0 whitespace-nowrap"
                    >
                      <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                        <BadgeIcon type={badge.type} />
                      </div>
                      <span className="font-outfit text-xs font-semibold text-ink leading-tight whitespace-pre-line text-left">
                        {badge.label}
                      </span>
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}

        </div>

      </div>
    </section>
  )
}
