import { Cloud, Smartphone, Type, Moon, Minimize, Zap } from "lucide-react"

const features = [
  {
    icon: Cloud,
    title: "Local first, Offline first",
    description: "Lightning fast, works without internet",
  },
  {
    icon: Smartphone,
    title: "Mobile and desktop sync",
    description: "Seamlessly sync across all your devices",
  },
  {
    icon: Type,
    title: "Rich text editor",
    description: "Internal links, bullet lists, and more",
  },
  {
    icon: Moon,
    title: "Dark mode",
    description: "Easy on the eyes, day or night",
  },
  {
    icon: Minimize,
    title: "Minimal and clean design",
    description: "Focus on your thoughts, not the interface",
  },
  {
    icon: Zap,
    title: "Quick navigation",
    description: "Fast browsing and tagging with keyboard shortcuts",
  },
]

export function Baseline() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance font-display">The Baseline</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Topilo has all the must-have features of a modern note app.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 font-display">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
