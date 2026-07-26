import { assetPath } from "@/lib/utils"

// ─── Navigation ────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",       href: "#hero" },
  { label: "Solution",   href: "#who-its-for" },
  { label: "Process",    href: "#platform" },
  { label: "Industries", href: "#industries" },
  { label: "Platform",   href: "#platform" },
  { label: "Contact",    href: "#contact" },
]

// ─── Platform Preview Cards ─────────────────────────────────────────────────
export const PLATFORM_CARDS = [
  {
    id: 1,
    image: assetPath("/card1.png"),
    title: "Create verification cases instantly",
    description:
      "Add the applicant and issuer. Hit send. Lorem notifies everyone and tracks every step.",
  },
  {
    id: 2,
    image: assetPath("/card2.png"),
    title: "Track real-time verification status",
    description:
      "See precise status for each search. Real-time status tracking for all verification checks.",
  },
  {
    id: 3,
    image: assetPath("/card3.png"),
    title: "View applicant approval activity",
    description:
      "Trace all activity for applicant processing. See logged-in activity, status updates and user metrics.",
  },
  {
    id: 4,
    image: assetPath("/card4.png"),
    title: "Access issuer-verified documents",
    description:
      "Retrieve verified documents to your dashboard directly with complete cryptographic audit log.",
  },
]

// ─── Who It's For — Orbiting Badges ────────────────────────────────────────
export const WHO_BADGES = [
  { id: 1, type: "law", label: "Immigration\nLaw Firms" },
  { id: 2, type: "screening", label: "Background\nScreening" },
  { id: 3, type: "hr", label: "Global HR &\nRecruiting" },
  { id: 4, type: "gov", label: "Embassies &\nConsulates" },
  { id: 5, type: "univ", label: "Universities &\nCredential Evaluation" },
]
