
import { Card } from "@/components/ui/card";
import { Github, Link } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and TypeScript",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Two",
    description: "Full-stack application with Next.js and PostgreSQL",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "Project Three",
    description: "Mobile-first e-commerce platform",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["React Native", "Redux", "Node.js"],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-24">
      <div className="section-container">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects I've worked on
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="glass-card overflow-hidden card-hover">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Link className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
