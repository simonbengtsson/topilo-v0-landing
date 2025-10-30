import { Zap, Target, Layers } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance font-display">What makes Topilo special?</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Topilo is optimized for thought capture and review - quickly note down all your thoughts and organize them
            later.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group relative">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-colors" />
            <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-display">Quick Capture</h3>
              <p className="text-muted-foreground leading-relaxed">
                Instantly jot down thoughts without worrying about organization. Focus on capturing ideas as they come.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-accent/5 rounded-2xl blur-xl group-hover:bg-accent/10 transition-colors" />
            <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-display">Topic-Based</h3>
              <p className="text-muted-foreground leading-relaxed">
                Organize notes by topics instead of rigid folders. Let your ideas naturally group together.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-colors" />
            <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-display">Easy Review</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quickly review and refine your thoughts. Split large topics into smaller ones as they grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
