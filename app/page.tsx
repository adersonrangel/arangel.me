import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/brand-icons";
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
      <nav className="border-border/40 sticky top-0 z-50 border-b backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="neon-gradient text-xl font-bold">
            &lt;dev/&gt;
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
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
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="inline-block">
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Available for freelance
            </Badge>
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            <span className="text-balance">Building Digital Experiences for the</span>{" "}
            <span className="neon-gradient neon-glow text-balance">Modern Web</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl text-balance md:text-2xl">
            Full-stack software developer crafting exceptional user experiences with clean code and
            modern technologies.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="#projects">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/20 shadow-lg"
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
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              Featured <span className="neon-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              A selection of my recent work showcasing modern web development and creative
              problem-solving.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <Card className="bg-card border-border/50 hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="from-primary/20 to-accent/20 mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br">
                  <img
                    src="/modern-saas-dashboard.png"
                    alt="E-commerce Platform"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle>E-commerce Platform</CardTitle>
                <CardDescription>
                  Full-stack marketplace with real-time inventory and payment processing
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
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link href="#" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Project 2 */}
            <Card className="bg-card border-border/50 hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="from-accent/20 to-primary/20 mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br">
                  <img
                    src="/ai-chatbot-interface-mobile.jpg"
                    alt="AI Chat Assistant"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle>AI Chat Assistant</CardTitle>
                <CardDescription>
                  Intelligent conversational AI with contextual memory and API integration
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
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link href="#" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Project 3 */}
            <Card className="bg-card border-border/50 hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="from-primary/20 to-accent/20 mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br">
                  <img
                    src="/analytics-dashboard-visualization.png"
                    alt="Analytics Dashboard"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Real-time data visualization with interactive charts and metrics
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
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link href="#" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Project 4 */}
            <Card className="bg-card border-border/50 hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="from-accent/20 to-primary/20 mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br">
                  <img
                    src="/mobile-fitness-tracking-app.jpg"
                    alt="Fitness Tracker"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle>Fitness Tracker</CardTitle>
                <CardDescription>
                  Cross-platform mobile app for workout logging and progress tracking
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
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link href="#" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Project 5 */}
            <Card className="bg-card border-border/50 hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="from-primary/20 to-accent/20 mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br">
                  <img
                    src="/weather-forecast-app.png"
                    alt="Weather Forecast App"
                    className="h-full w-full object-cover"
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
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link href="#" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Project 6 */}
            <Card className="bg-card border-border/50 hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="from-accent/20 to-primary/20 mb-4 flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br">
                  <img
                    src="/task-management-kanban.png"
                    alt="Task Management"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle>Task Management</CardTitle>
                <CardDescription>
                  Collaborative project management tool with drag-and-drop interface
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
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link href="#" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
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
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              About <span className="neon-gradient">Me</span>
            </h2>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate software developer with expertise in building scalable web
                applications and delivering exceptional user experiences. With a strong foundation
                in both frontend and backend technologies, I thrive on solving complex problems and
                turning ideas into reality.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When I'm not coding, you'll find me writing technical articles, contributing to
                open-source projects, or exploring the latest technologies in web development and
                AI.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/20 text-primary border-primary/30">JavaScript</Badge>
                <Badge className="bg-primary/20 text-primary border-primary/30">TypeScript</Badge>
                <Badge className="bg-primary/20 text-primary border-primary/30">React</Badge>
                <Badge className="bg-primary/20 text-primary border-primary/30">Next.js</Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30">Node.js</Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30">Python</Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30">PostgreSQL</Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30">Docker</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="from-primary/30 to-accent/30 aspect-square overflow-hidden rounded-2xl bg-gradient-to-br">
                <Image
                  src="https://res.cloudinary.com/dv0gpxae9/image/upload/v1767187976/foto-arangelme.jpg"
                  alt="Developer Portrait"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-primary/10 absolute -right-6 -bottom-6 h-32 w-32 rounded-full blur-3xl" />
              <div className="bg-accent/10 absolute -top-6 -left-6 h-32 w-32 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="from-primary/10 to-accent/10 border-primary/30 bg-gradient-to-r">
          <CardHeader className="space-y-4 pb-8 text-center">
            <CardTitle className="text-3xl font-bold md:text-4xl">
              Tutorials, Stories and Ideas for the{" "}
              <span className="neon-gradient neon-glow">Curious Developer</span>
            </CardTitle>
            <CardDescription className="mx-auto max-w-2xl text-lg">
              Join me on a journey where every post brings a fresh perspective. This blog is for
              those who are driven by curiosity and a desire to learn.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Link href="/blog">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/20 shadow-lg"
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
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold md:text-5xl">
              Let's <span className="neon-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              I'm always interested in hearing about new projects and opportunities. Feel free to
              reach out through any of the platforms below.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
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
                <GithubIcon className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-border/50 hover:bg-secondary bg-transparent"
              >
                <LinkedinIcon className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-border/50 hover:bg-secondary bg-transparent"
              >
                <TwitterIcon className="mr-2 h-5 w-5" />
                Twitter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-border/40 mt-20 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-sm">
              © 2026 Developer Portfolio. Built with Next.js and passion.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
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
