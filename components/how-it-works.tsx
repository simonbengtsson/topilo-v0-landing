export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance font-display">How does it work?</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              In Topilo, notes are grouped by{" "}
              <span className="text-foreground font-medium">topics instead of folders and tags</span>. Start by just
              jotting down something without thinking of what exactly it is.
            </p>
            <p>
              Later refine and organize it and think about why the idea or thought resonated with you and place it in
              that topic. Sometimes a topic becomes too big to quickly review - a perfect time to split it up into
              smaller topics.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 text-6xl font-bold text-primary/10 font-display">1</div>
              <div className="relative pl-8">
                <h3 className="text-lg font-semibold mb-2 font-display">Capture</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Quickly jot down thoughts without categorizing
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 text-6xl font-bold text-accent/10 font-display">2</div>
              <div className="relative pl-8">
                <h3 className="text-lg font-semibold mb-2 font-display">Organize</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Group related thoughts into topics</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 text-6xl font-bold text-primary/10 font-display">3</div>
              <div className="relative pl-8">
                <h3 className="text-lg font-semibold mb-2 font-display">Refine</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Split large topics as they grow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
