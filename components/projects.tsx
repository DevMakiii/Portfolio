import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "SmartScribe",
    description:
      "A modern, responsive note-taking app with AI-powered summarization and OCR capabilities for enhanced learning and productivity.",
    tags: ["Vue.js", "Pinia", "PHP", "Node.js", "Tailwind CSS", "TypeScript", "Express.js", "SupaBase", "Google Gemini API", "Tesseract.js"],
    image: "/smartscribe.png",
    liveUrl: "#",
    githubUrl: "https://github.com/DevMakiii/SmartScribe",
  },
  {
    id: 2,
    title: "Drip Fit Co.",
    description: "The system supports inventory operations like stock in/out transactions, item CRUD operations, category management, and provides visual analytics for inventory health and trends.",
    tags: ["Nuxt.js", "Vue.js", "Prisma", "Tailwind CSS", "PostgreSQL", "TypeScript", "Node.js"],
    image: "/dripfitco.png",
    liveUrl: "https://dripfitco.vercel.app/",
    githubUrl: "https://github.com/DevMakiii/Drip-Fit-Co.",
  },
  {
    id: 3,
    title: "Serenote",
    description: "Serenote is a Next.js mood tracking app where users log daily moods with emojis and notes, view history and calendar visualizations, track streaks, get AI-powered insights and affirmations, and export data. Features include authentication, profiles, achievements, reminders, and analytics, built with Supabase, Tailwind CSS, and Radix UI.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SupaBase", "PostgreSQL", "AI SDK Google"],
    image: "/serenote.png",
    liveUrl: "serenote.vercel.app",
    githubUrl: "https://github.com/DevMakiii/MoodJournalTracker",
  },
  {
    id: 4,
    title: "Portfolio",
    description: "A personal portfolio website for Marc Angelo N. Palomares, a Computer Science student at Gordon College. Built with Next.js and Tailwind CSS, it showcases his web development projects and skills in technologies like React, Vue.js, and TypeScript.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: "/portfolio.png",
    liveUrl: "#",
    githubUrl: "https://github.com/DevMakiii/Portfolio",
  },
  {
    id: 5,
    title: "LinkGuard",
    description:
      "LinkGuard is a Nuxt.js web app for checking URL safety using Google's Safe Browsing API, featuring a responsive UI with threat analysis and check history.",
    tags: ["Nuxt.js", "Vue.js", "Tailwind CSS", "Node.js", "Google APIs", "TypeScript"],
    image: "/linkguard.png",
    liveUrl: "#",
    githubUrl: "https://github.com/DevMakiii/LinkGuard",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-accent mb-2">Featured Work</p>
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects that showcase my skills in full-stack development and UI/UX design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <Link
                    href={project.liveUrl}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-accent hover:text-accent-foreground transition-all text-sm font-medium"
                  >
                    Live Site
                    <ExternalLink size={16} />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-border rounded hover:bg-muted transition-colors text-sm font-medium"
                  >
                    Code
                    <Github size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
