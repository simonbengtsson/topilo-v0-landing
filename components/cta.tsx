import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance font-display">
            Ready to capture your thoughts?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Join early adopters who are already organizing thousands of thoughts with Topilo Notes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 group" asChild>
              <a href="https://topilo.expo.app">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Topilo Notes is created by{" "}
                <a
                  href="https://simonbengtsson.com"
                  className="hover:text-foreground transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Simon Bengtsson
                </a>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://topilo.expo.app/privacypolicy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy
              </a>
              <a
                href="mailto:dev@simonbengtsson.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
