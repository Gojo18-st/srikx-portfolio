
import React from 'react';
import { GraduationCap, School } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const EducationSection = () => {
  const education = [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      duration: "2019 - 2023",
      description: "Specialized in Software Engineering and Data Structures. Achieved Dean's List recognition.",
      icon: <GraduationCap className="w-6 h-6 text-primary" />
    },
    {
      school: "Tech Institute",
      degree: "Full Stack Development Certification",
      duration: "2018 - 2019",
      description: "Intensive program covering modern web technologies and development practices.",
      icon: <School className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <section id="education" className="section-container">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic journey and qualifications
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {education.map((edu, index) => (
            <Card key={index} className="glass-card card-hover">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2 mb-2">
                  {edu.icon}
                  <CardTitle>{edu.school}</CardTitle>
                </div>
                <CardDescription className="text-base font-medium text-primary">
                  {edu.degree}
                </CardDescription>
                <CardDescription>{edu.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
