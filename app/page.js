import Navbar          from "@/components/Navbar/Navbar"
import Hero            from "@/components/Hero/Hero"
import WhoItsFor       from "@/components/WhoItsFor/WhoItsFor"
import PlatformPreview from "@/components/PlatformPreview/PlatformPreview"
import Footer          from "@/components/Footer/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoItsFor />
      <PlatformPreview />
      <Footer />
    </main>
  )
}