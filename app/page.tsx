import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold neon-gradient">
            &lt;dev/&gt;
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link href="/blog">
              <Button
                variant="outline"
                size="sm"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 bg-transparent"
              >
                Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <Badge
              variant="outline"
              className="border-primary/30 text-primary mb-4"
            >
              Available for freelance
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-balance">
              Building Digital Experiences for the
            </span>{" "}
            <span className="neon-gradient neon-glow text-balance">
              Modern Web
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Full-stack software developer crafting exceptional user experiences
            with clean code and modern technologies.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="#projects">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 hover:bg-secondary bg-transparent"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="neon-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing modern web development
              and creative problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/modern-saas-dashboard.png"
                    alt="E-commerce Platform"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>E-commerce Platform</CardTitle>
                <CardDescription>
                  Full-stack marketplace with real-time inventory and payment
                  processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Link href="#" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link href="#" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Project 2 */}
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/ai-chatbot-interface-mobile.jpg"
                    alt="AI Chat Assistant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>AI Chat Assistant</CardTitle>
                <CardDescription>
                  Intelligent conversational AI with contextual memory and API
                  integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">OpenAI</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">WebSocket</Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Link href="#" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link href="#" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Project 3 */}
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/analytics-dashboard-visualization.png"
                    alt="Analytics Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Real-time data visualization with interactive charts and
                  metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">D3.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Link href="#" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link href="#" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Project 4 */}
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/mobile-fitness-tracking-app.jpg"
                    alt="Fitness Tracker"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Fitness Tracker</CardTitle>
                <CardDescription>
                  Cross-platform mobile app for workout logging and progress
                  tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                  <Badge variant="secondary">Redux</Badge>
                  <Badge variant="secondary">Expo</Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Link href="#" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link href="#" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Project 5 */}
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/weather-forecast-app.png"
                    alt="Weather Forecast App"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Weather Forecast App</CardTitle>
                <CardDescription>
                  Beautiful weather app with location-based forecasts and alerts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Svelte</Badge>
                  <Badge variant="secondary">TailwindCSS</Badge>
                  <Badge variant="secondary">API</Badge>
                  <Badge variant="secondary">PWA</Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Link href="#" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link href="#" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Project 6 */}
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/task-management-kanban.png"
                    alt="Task Management"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Task Management</CardTitle>
                <CardDescription>
                  Collaborative project management tool with drag-and-drop
                  interface
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Angular</Badge>
                  <Badge variant="secondary">NestJS</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                  <Badge variant="secondary">Redis</Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Link href="#" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link href="#" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="neon-gradient">Me</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate software developer with expertise in building
                scalable web applications and delivering exceptional user
                experiences. With a strong foundation in both frontend and
                backend technologies, I thrive on solving complex problems and
                turning ideas into reality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me writing technical articles,
                contributing to open-source projects, or exploring the latest
                technologies in web development and AI.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  JavaScript
                </Badge>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  TypeScript
                </Badge>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  React
                </Badge>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Next.js
                </Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30">
                  Node.js
                </Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30">
                  Python
                </Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30">
                  PostgreSQL
                </Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30">
                  Docker
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dv0gpxae9/image/upload/v1767187976/foto-arangelme.jpg"
                  alt="Developer Portrait"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
          <CardHeader className="text-center space-y-4 pb-8">
            <CardTitle className="text-3xl md:text-4xl font-bold">
              Tutorials, Stories and Ideas for the{" "}
              <span className="neon-gradient neon-glow">Curious Developer</span>
            </CardTitle>
            <CardDescription className="text-lg max-w-2xl mx-auto">
              Join me on a journey where every post brings a fresh perspective.
              This blog is for those who are driven by curiosity and a desire to
              learn.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Link href="/blog">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
              >
                Read the Blog
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's <span className="neon-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out through any of the platforms
              below.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="mailto:contact@example.com">
              <Button
                variant="outline"
                size="lg"
                className="border-border/50 hover:bg-secondary bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-border/50 hover:bg-secondary bg-transparent"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-border/50 hover:bg-secondary bg-transparent"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-border/50 hover:bg-secondary bg-transparent"
              >
                <Twitter className="mr-2 h-5 w-5" />
                Twitter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Developer Portfolio. Built with Next.js and passion.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
