import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="#" className="text-xl font-bold text-primary hover:text-accent transition-colors mb-4 block">
              {"<Dev />"}
            </Link>
            <p className="text-sm text-muted-foreground">Building modern web experiences with passion and precision.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Resume <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Blog <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Dribbble <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/DevMakiii"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/devmaki"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:dev.palomares@gmail.com"
                className="p-2 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} Marc Angelo Palomares. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
