"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { sendEmail } from "@/app/actions/send-email"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("message", formData.message)

      await sendEmail(formDataToSend)

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError("Failed to send message. Please try again.")
      console.error("Email send error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-accent mb-2">Get In Touch</p>
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? I'd love to hear about it. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card border border-border rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {error && (
                <div className="text-red-500 text-sm mt-2">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-all font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hi, feel free to get in touch!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:dev.palomares@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-accent/10 transition-colors">
                  <Mail size={24} className="text-primary group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">dev.palomares@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/devmaki"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-accent/10 transition-colors">
                  <Linkedin size={24} className="text-primary group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">Marc Angelo Palomares</p>
                </div>
              </a>

              <a
                href="https://github.com/DevMakiii"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-accent/10 transition-colors">
                  <Github size={24} className="text-primary group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium">DevMakiii</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
