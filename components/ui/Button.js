"use client"

/**
 * Reusable Button component matching wireframe Image 11:
 * - "gradient": Primary Amber gradient pill button with circular play icon badge.
 * - "glass" / "text": Secondary frosted white glass pill button with gold text & arrow.
 * - "outline": Navy outline button.
 */
export default function Button({
  variant = "gradient", // "gradient" | "glass" | "outline" | "text"
  children,
  onClick,
  className = "",
  ...props
}) {
  if (variant === "gradient") {
    return (
      <button
        onClick={onClick}
        className={`relative inline-flex items-center gap-3 py-2 pl-6 pr-2 rounded-full border-2 border-white/90 text-sm font-semibold text-white shadow-lg cursor-pointer whitespace-nowrap transition-transform active:scale-95 group ${className}`}
        style={{
          background: "linear-gradient(135deg, #F5B027 0%, #E68800 100%)",
        }}
        {...props}
      >
        <span>{children}</span>

        {/* Circular play icon badge matching Image 11 */}
        <span className="w-7 h-7 rounded-full bg-black/15 border border-white/40 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
          <svg className="w-3.5 h-3.5 fill-white translate-x-[1px]" viewBox="0 0 24 24">
            <polygon points="7,4 20,12 7,20" />
          </svg>
        </span>
      </button>
    )
  }

  if (variant === "glass" || variant === "text") {
    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-white/85 backdrop-blur-md border border-white/90 shadow-md text-sm font-semibold text-[#E68800] hover:text-[#C77300] hover:bg-white transition-[transform,background-color,color] cursor-pointer whitespace-nowrap active:scale-95 ${className}`}
        {...props}
      >
        <span>{children}</span>
        <span className="text-[#E68800] text-base font-bold">↗</span>
      </button>
    )
  }

  if (variant === "outline") {
    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-transparent border-2 border-[#0A192F] text-sm font-semibold text-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-all cursor-pointer whitespace-nowrap active:scale-95 ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }

  return null
}
