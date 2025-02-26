
import React from 'react';
import { Briefcase, Building2, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Software Engineer",
      duration: "2021 - Present",
      description: "Led development of cloud-based applications, mentored junior developers, and implemented CI/CD pipelines.",
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      location: "San Francisco, CA"
    },
    {
      company: "Digital Innovations Ltd",
      position: "Full Stack Developer",
      duration: "2019 - 2021",
      description: "Developed and maintained multiple web applications using React, Node.js, and PostgreSQL.",
      icon: <Building2 className="w-6 h-6 text-primary" />,
      location: "Remote"
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and achievements
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card card-hover">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2 mb-2">
                  {exp.icon}
                  <CardTitle>{exp.company}</CardTitle>
                </div>
                <CardDescription className="text-base font-medium text-primary">
                  {exp.position}
                </CardDescription>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.duration}</span>
                </div>
                <CardDescription className="text-sm">{exp.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
