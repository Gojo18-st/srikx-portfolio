
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </Layout>
  );
};

export default Index;
