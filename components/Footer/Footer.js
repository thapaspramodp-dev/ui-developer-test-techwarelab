"use client"
import { useEffect, useRef, useState } from "react"

export default function Footer() {
  const footerRef = useRef(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // Respect user's prefers-reduced-motion accessibility setting
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
  }, [])

  return (
    <footer id="contact" ref={footerRef} className="relative bg-bg px-3 md:px-6 pb-4">
      {/* ── DARK ROUNDED CARD CONTAINER ── */}
      <div className="relative bg-[#090B10] rounded-t-[36px] md:rounded-t-[48px] overflow-hidden border-t border-white/10 shadow-2xl pt-16 pb-12 px-8 md:px-16">

        {/* 1. Blended Background Video (mixBlendMode: screen for vibrant blending on dark bg) */}
        {!reducedMotion && (
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            src="/ui-developer-test-techwarelab/footer_video.mp4"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
            style={{ mixBlendMode: "screen", opacity: 0.45 }}
          />
        )}



        {/* 3. Ambient bottom-left amber glow */}
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle at bottom left, rgba(235, 120, 0, 0.32) 0%, rgba(180, 75, 0, 0.15) 45%, transparent 75%)",
          }}
        />

        {/* 4. Ambient bottom-right deep cyan glow */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle at bottom right, rgba(14, 116, 144, 0.28) 0%, transparent 75%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* 4 COLUMNS LAYOUT MATCHING WIREFRAME IMAGE 12 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">

            {/* Column 1: Product */}
            <div>
              <h4 className="font-outfit text-base font-medium text-white mb-5">
                Product
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-400 font-normal">
                <li><a href="#hero" className="hover:text-white transition-colors">Overview</a></li>
                <li><a href="#solution" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#solution" className="hover:text-white transition-colors">Process</a></li>
                <li><a href="#platform" className="hover:text-white transition-colors">Platform Preview</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#hero" className="hover:text-white transition-colors">Request Demo</a></li>
              </ul>
            </div>

            {/* Column 2: Company & Resources */}
            <div>
              <h4 className="font-outfit text-base font-medium text-white mb-5">
                Company &amp; Resources
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-400 font-normal">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="font-outfit text-base font-medium text-white mb-5">
                Contact
              </h4>
              <ul className="flex flex-col gap-3 text-xs text-gray-400 font-normal">
                <li className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>USA</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+971 51 547 3625</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Connect */}
            <div>
              <h4 className="font-outfit text-base font-medium text-white mb-5">
                Connect
              </h4>
              <div className="flex items-center gap-2.5">
                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-[30px] h-[30px] rounded-full border border-white/50 flex items-center justify-center text-white text-xs font-semibold hover:border-white hover:bg-white/10 transition-all shrink-0"
                >
                  in
                </a>
                {/* Instagram — exact SVG */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-[30px] h-[30px] flex items-center justify-center hover:opacity-90 transition-opacity shrink-0"
                >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.25" y="0.25" width="29.5" height="29.5" rx="14.75" stroke="white" strokeWidth="0.5"/>
                    <path d="M14.7083 12.6963C13.99 12.6963 13.3012 12.9816 12.7933 13.4895C12.2853 13.9975 12 14.6863 12 15.4046C12 16.1229 12.2853 16.8118 12.7933 17.3197C13.3012 17.8276 13.99 18.113 14.7083 18.113C15.4266 18.113 16.1155 17.8276 16.6234 17.3197C17.1313 16.8118 17.4167 16.1229 17.4167 15.4046C17.4167 14.6863 17.1313 13.9975 16.6234 13.4895C16.1155 12.9816 15.4266 12.6963 14.7083 12.6963Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.3017 7.93696C13.1984 7.61607 16.1216 7.61607 19.0183 7.93696C20.6008 8.11363 21.8767 9.35946 22.0625 10.9478C22.4058 13.885 22.4058 16.8522 22.0625 19.7895C21.8767 21.3778 20.6008 22.6236 19.0192 22.8011C16.1222 23.1221 13.1986 23.1221 10.3017 22.8011C8.71918 22.6236 7.44334 21.3778 7.25751 19.7903C6.91416 16.8528 6.91416 13.8853 7.25751 10.9478C7.44334 9.35946 8.71918 8.11363 10.3017 7.93696ZM18.8267 10.3686C18.6057 10.3686 18.3937 10.4564 18.2374 10.6127C18.0811 10.769 17.9933 10.9809 17.9933 11.202C17.9933 11.423 18.0811 11.6349 18.2374 11.7912C18.3937 11.9475 18.6057 12.0353 18.8267 12.0353C19.0477 12.0353 19.2597 11.9475 19.4159 11.7912C19.5722 11.6349 19.66 11.423 19.66 11.202C19.66 10.9809 19.5722 10.769 19.4159 10.6127C19.2597 10.4564 19.0477 10.3686 18.8267 10.3686ZM10.7017 15.3686C10.7017 14.3188 11.1187 13.312 11.861 12.5697C12.6034 11.8273 13.6102 11.4103 14.66 11.4103C15.7098 11.4103 16.7166 11.8273 17.459 12.5697C18.2013 13.312 18.6183 14.3188 18.6183 15.3686C18.6183 16.4184 18.2013 17.4253 17.459 18.1676C16.7166 18.9099 15.7098 19.327 14.66 19.327C13.6102 19.327 12.6034 18.9099 11.861 18.1676C11.1187 17.4253 10.7017 16.4184 10.7017 15.3686Z" fill="white"/>
                  </svg>
                </a>
                {/* Mail — matching Image 13 */}
                <a
                  href="#"
                  aria-label="Email"
                  className="w-[30px] h-[30px] rounded-full border border-white/50 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all shrink-0"
                >
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="12" rx="2.5" fill="white" />
                    <path d="M1.5 2.5L8 7L14.5 2.5" stroke="#08090D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* BOTTOM COPYRIGHT LINE */}
          <div className="flex justify-end pt-4 border-t border-white/10">
            <p className="text-xs text-gray-500 font-normal">
              © 2026 Lorem.app. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
