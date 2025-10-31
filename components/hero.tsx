import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-mono text-accent">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                Crafting Digital Experiences
              </h1>
              <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                I'm a Computer Science student at Gordon College passionate about building modern web applications with
                Next.js, Nuxt, and cutting-edge technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-all font-medium"
              >
                View My Work
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
              >
                Get In Touch
              </Link>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/DevMakiii"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/devmaki"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:dev.palomares@gmail.com"
                className="p-3 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-4 font-mono text-sm">
                  <div className="text-accent">{"<portfolio />"}</div>
                  <div className="text-muted-foreground">
                    <span className="text-primary">const</span> developer = {"{"}
                  </div>
                  <div className="text-muted-foreground ml-4">
                    <span className="text-primary">name</span>: <span className="text-accent">"Marc Angelo N. Palomares"</span>,
                  </div>
                  <div className="text-muted-foreground ml-4">
                    <span className="text-primary">skills</span>: [
                    <span className="text-accent">"Next.js", "Nuxt", "PHP"</span>],
                  </div>
                  <div className="text-muted-foreground ml-4">
                    <span className="text-primary">passion</span>:{" "}
                    <span className="text-accent">"Web Development"</span>
                  </div>
                  <div className="text-muted-foreground">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
