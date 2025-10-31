import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js and Stripe integration for seamless payment processing.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    image: "/ecommerce-dashboard.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Real-time collaborative task management application with user authentication and data persistence.",
    tags: ["Nuxt", "Vue 3", "Firebase", "Tailwind CSS"],
    image: "/task-management-app.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Content Management System",
    description: "Custom CMS built with PHP and MySQL, featuring user roles, content scheduling, and analytics.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: "/cms-interface.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio showcasing projects and technical expertise with smooth animations.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/portfolio-website-design.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "Interactive weather application with real-time data, location services, and beautiful visualizations.",
    tags: ["React", "API Integration", "Chart.js", "Tailwind CSS"],
    image: "/weather-dashboard-application.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for tracking social media metrics with data visualization and reporting features.",
    tags: ["Next.js", "D3.js", "PostgreSQL", "TypeScript"],
    image: "/analytics-dashboard-charts.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-accent mb-2">Featured Work</p>
          <h2 className="text-4xl font-bold mb-4">Projects & Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects that showcase my skills in full-stack development, UI/UX design, and
            problem-solving.
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
