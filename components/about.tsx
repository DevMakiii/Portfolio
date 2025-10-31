export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-mono text-accent mb-2">About Me</p>
              <h2 className="text-4xl font-bold">Building the Future, One Line at a Time</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science student at Gordon College with a deep interest in web development and
              software engineering. My journey in tech started with curiosity and has evolved into a commitment to
              creating elegant, performant solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in modern web technologies including Next.js, Nuxt, and PHP, with a focus on building
              responsive, user-centric applications. I believe in writing clean code, following best practices, and
              continuously learning new technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-lg p-6 hover:border-accent transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6 hover:border-accent transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <p className="text-sm text-muted-foreground">Technologies Mastered</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6 hover:border-accent transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Responsive Design</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6 hover:border-accent transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">CS</div>
              <p className="text-sm text-muted-foreground">Gordon College</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
