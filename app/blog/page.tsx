import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold neon-gradient">
            &lt;dev/&gt;
          </Link>
          <Link href="/">
            <Button variant="outline" size="sm" className="border-border/50 hover:bg-secondary bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-balance">Tutorials, Stories and Ideas for the </span>
            <span className="neon-gradient neon-glow text-balance">Curious Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Join me on a journey where every post brings a fresh perspective. This blog is for those who are driven by
            curiosity and a desire to learn.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Featured Post */}
          <Card className="bg-card border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/30 to-accent/30 overflow-hidden">
                <img src="/modern-web-development-code-editor.jpg" alt="Featured Post" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-primary/20 text-primary border-primary/30">Featured</Badge>
                <CardTitle className="text-3xl mb-4">Building Scalable React Applications in 2025</CardTitle>
                <CardDescription className="text-base mb-6">
                  Deep dive into modern React architecture patterns, state management strategies, and performance
                  optimization techniques for large-scale applications.
                </CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>12 min read</span>
                  </div>
                </div>
                <Button className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Recent Posts Grid */}
          <div className="pt-8">
            <h2 className="text-3xl font-bold mb-8">
              Recent <span className="neon-gradient">Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4 overflow-hidden">
                    <img
                      src="/typescript-programming-code.jpg"
                      alt="TypeScript Article"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Best Practices</Badge>
                    </div>
                    <CardTitle className="text-xl">Mastering TypeScript Advanced Types</CardTitle>
                    <CardDescription>
                      Explore conditional types, mapped types, and template literal types to write more type-safe code.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Jan 12, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>8 min read</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 overflow-hidden">
                    <img
                      src="/nextjs-server-components.jpg"
                      alt="Next.js Article"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">React</Badge>
                    </div>
                    <CardTitle className="text-xl">Next.js App Router: Complete Guide</CardTitle>
                    <CardDescription>
                      Everything you need to know about Server Components, streaming, and the new App Router
                      architecture.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Jan 8, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>15 min read</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4 overflow-hidden">
                    <img src="/css-animations-modern-design.jpg" alt="CSS Article" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">CSS</Badge>
                      <Badge variant="secondary">Animation</Badge>
                    </div>
                    <CardTitle className="text-xl">Creating Smooth Animations with CSS</CardTitle>
                    <CardDescription>
                      Learn how to create performant, buttery-smooth animations using modern CSS techniques and best
                      practices.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Jan 5, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>10 min read</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 overflow-hidden">
                    <img
                      src="/database-optimization-performance.jpg"
                      alt="Database Article"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Database</Badge>
                      <Badge variant="secondary">Performance</Badge>
                    </div>
                    <CardTitle className="text-xl">Database Optimization Strategies</CardTitle>
                    <CardDescription>
                      Practical tips for optimizing database queries, indexing strategies, and improving overall
                      performance.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Jan 1, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>11 min read</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4 overflow-hidden">
                    <img
                      src="/testing-unit-tests-code-quality.jpg"
                      alt="Testing Article"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Testing</Badge>
                      <Badge variant="secondary">Quality</Badge>
                    </div>
                    <CardTitle className="text-xl">Testing React Components Effectively</CardTitle>
                    <CardDescription>
                      A comprehensive guide to writing effective unit and integration tests for React applications.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Dec 28, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>14 min read</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 overflow-hidden">
                    <img
                      src="/web-accessibility-inclusive-design.png"
                      alt="Accessibility Article"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Accessibility</Badge>
                      <Badge variant="secondary">UX</Badge>
                    </div>
                    <CardTitle className="text-xl">Building Accessible Web Applications</CardTitle>
                    <CardDescription>
                      Essential accessibility principles and practical implementations for creating inclusive web
                      experiences.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Dec 24, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>9 min read</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Load More */}
          <div className="flex justify-center pt-8">
            <Button variant="outline" size="lg" className="border-border/50 hover:bg-secondary bg-transparent">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 max-w-3xl mx-auto">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-3xl font-bold">
              Stay <span className="neon-gradient">Updated</span>
            </CardTitle>
            <CardDescription className="text-lg">
              Get the latest articles and tutorials delivered straight to your inbox.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Developer Blog. Built with Next.js and passion.</p>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                RSS Feed
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Newsletter
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
