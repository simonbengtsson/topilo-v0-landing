import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Baseline } from "@/components/baseline"
import { FuturePlans } from "@/components/future-plans"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Baseline />
      <FuturePlans />
      <CTA />
    </main>
  )
}
