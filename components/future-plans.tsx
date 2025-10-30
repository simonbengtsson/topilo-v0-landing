import { Database, BookOpen, Search, Sparkles, ImageIcon, Mic } from "lucide-react"

const plans = [
  {
    icon: Database,
    title: "Topic properties and layouts",
    description: "Database-like options for advanced organization",
  },
  {
    icon: BookOpen,
    title: "Writing prompts",
    description: "Daily notes, journaling templates and more",
  },
  {
    icon: Search,
    title: "Improved navigation",
    description: "Full text search, quick find and smart filters",
  },
  {
    icon: Sparkles,
    title: "AI companion",
    description: "Summarize topics and discover connections",
  },
  {
    icon: ImageIcon,
    title: "Rich attachments",
    description: "Images, recordings and other note attachments",
  },
  {
    icon: Mic,
    title: "Voice capture",
    description: "Voice capture and automatic transcription",
  },
]

export function FuturePlans() {
  return (
    <section id="future" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance font-display">Future plans</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Some exciting areas to explore for the future
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="absolute top-4 right-4 text-xs text-muted-foreground/50 font-mono">Coming soon</div>
                <Icon className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2 font-display">{plan.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
