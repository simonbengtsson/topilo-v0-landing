import { Button } from "@/components/ui/button"
import { ArrowRight, Apple } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now launched
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance font-display">
            Capture thousands of thoughts and make them useful
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            A note app reimagined for capturing thousands of thoughts, ideas and plans while providing ways of making
            them useful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 group" asChild>
              <a href="https://topilo.expo.app">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
              <a href="https://apps.apple.com/us/app/notes/id1110145109">
                <Apple className="mr-2 h-4 w-4" />
                Get App
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
