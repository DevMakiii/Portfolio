const skillCategories = [
  {
    category: "Frontend",
    skills: ["Next.js", "React", "Nuxt", "Vue.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PHP", "Express.js", "REST APIs"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "Firebase", "Supabase"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Docker", "VS Code", "Figma"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-accent mb-2">Technical Expertise</p>
          <h2 className="text-4xl font-bold">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-background border border-border rounded-lg p-6 hover:border-accent transition-colors"
            >
              <h3 className="text-lg font-bold mb-4 text-accent">{category.category}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
