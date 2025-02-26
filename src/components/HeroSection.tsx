
import { Github, Linkedin, Mail } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="section-container text-center relative z-10">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold">
            Welcome to my portfolio
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-gradient">John Doe</span>
          </h1>
          <div className="h-20 overflow-hidden">
            <div className="animate-text-slide">
              <div className="h-20 text-2xl md:text-3xl font-light">Frontend Developer</div>
              <div className="h-20 text-2xl md:text-3xl font-light">UI/UX Designer</div>
              <div className="h-20 text-2xl md:text-3xl font-light">React Specialist</div>
              <div className="h-20 text-2xl md:text-3xl font-light">Problem Solver</div>
              <div className="h-20 text-2xl md:text-3xl font-light">Tech Enthusiast</div>
              <div className="h-20 text-2xl md:text-3xl font-light">Frontend Developer</div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I create beautiful, responsive, and user-friendly web applications
            with modern technologies and best practices.
          </p>
          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
    </section>
  );
};
