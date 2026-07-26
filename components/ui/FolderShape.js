"use client"
import { useEffect, useRef, useState } from "react"

/**
 * FolderShape
 * -----------
 * Replicates the wireframe folder card:
 * 1. Warm amber-to-cream gradient base + soft horizontal silver/gray metallic sheen matching Image 15.
 * 2. Outer glowing white border line.
 * 3. Inner dashed accent line following the contour.
 * 4. SVG clip-path for concave tab joints.
 */

function buildFolderPath(w, h, { tabWidthRatio, tabInset, tabHeight, radius, tabRadius, jointRadius }) {
  const R  = radius
  const Rt = tabRadius
  const C  = jointRadius

  const tabLeft  = tabInset
  const tabRight = tabInset + w * tabWidthRatio

  return `
    M ${tabLeft + Rt} 0
    L ${tabRight - Rt} 0
    A ${Rt} ${Rt} 0 0 1 ${tabRight} ${Rt}
    L ${tabRight} ${tabHeight - C}
    A ${C} ${C} 0 0 0 ${tabRight + C} ${tabHeight}
    L ${w - R} ${tabHeight}
    A ${R} ${R} 0 0 1 ${w} ${tabHeight + R}
    L ${w} ${h - R}
    A ${R} ${R} 0 0 1 ${w - R} ${h}
    L ${R} ${h}
    A ${R} ${R} 0 0 1 0 ${h - R}
    L 0 ${tabHeight + R}
    A ${R} ${R} 0 0 1 ${R} ${tabHeight}
    L ${tabLeft - C} ${tabHeight}
    A ${C} ${C} 0 0 0 ${tabLeft} ${tabHeight - C}
    L ${tabLeft} ${Rt}
    A ${Rt} ${Rt} 0 0 1 ${tabLeft + Rt} 0
    Z
  `.replace(/\s+/g, " ").trim()
}

export default function FolderShape({
  className = "",
  tabWidthRatio = 0.52,
  tabInset = 56,
  tabHeight = 84,
  radius = 48,
  tabRadius = 28,
  jointRadius = 24,
  children,
}) {
  const ref  = useRef(null)
  const [size, setSize] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ w: width, h: height })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const path = size.w && size.h
    ? buildFolderPath(size.w, size.h, { tabWidthRatio, tabInset, tabHeight, radius, tabRadius, jointRadius })
    : ""

  return (
    <div className={`relative ${className}`}>
      {/* Clipped background container */}
      <div
        ref={ref}
        className="relative w-full h-full overflow-hidden shadow-2xl"
        style={path ? { clipPath: `path('${path}')` } : undefined}
      >
        {/* Frosted glass blurred gradient background matching WhoIt'sFor center object */}
        <div
          className="absolute inset-0 backdrop-blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 82% 20%, rgba(255, 253, 249, 0.6) 0%, rgba(254, 244, 218, 0.45) 35%, rgba(247, 205, 106, 0.35) 75%, rgba(241, 170, 52, 0.25) 100%)",
          }}
        />

        {/* Soft horizontal silver/gray metallic sheen */}
        <div
          className="absolute inset-0 pointer-events-none backdrop-blur-3xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(240, 240, 240, 0.15) 0%, rgba(210, 210, 210, 0.28) 38%, rgba(230, 230, 230, 0.18) 70%, transparent 100%)",
          }}
        />

        <div className="relative h-full w-full">{children}</div>
      </div>

      {/* SVG overlay for Outer White Border & Inner Dashed Line */}
      {path && size.w && size.h && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-30"
          viewBox={`0 0 ${size.w} ${size.h}`}
        >
          {/* Outer glowing white border */}
          <path
            d={path}
            fill="none"
            stroke="rgba(255, 255, 255, 0.95)"
            strokeWidth="3.5"
          />
          {/* Inner dashed accent line */}
          <path
            d={path}
            fill="none"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="1.5"
            strokeDasharray="6 5"
            style={{ transform: "scale(0.992)", transformOrigin: "center" }}
          />
        </svg>
      )}
    </div>
  )
}
