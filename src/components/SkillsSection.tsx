
import { Card } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools",
    skills: ["Git", "VS Code", "Docker", "Figma"],
  },
  {
    category: "Soft Skills",
    skills: ["Communication", "Leadership", "Problem Solving", "Teamwork"],
  },
];

export const SkillsSection = () => {
  return (
    <section className="py-24 bg-background/50">
      <div className="section-container">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <Card key={skillGroup.category} className="glass-card p-6 card-hover">
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1 rounded-full bg-primary/10 text-sm inline-block mr-2 mb-2"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
