import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/icon.png" alt="Topilo Notes" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-semibold font-display">Topilo Notes</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="#future" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Future Plans
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button size="sm" asChild>
              <a href="https://topilo.expo.app">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
