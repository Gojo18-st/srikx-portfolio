
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ExperienceSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
