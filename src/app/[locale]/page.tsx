import { Divider } from "@/components";
import {
  HeroSection,
  ArticleSection,
  ContactSection,
  ProjectsSection,
  SkillSection,
} from "@/components/HomePage";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <Divider />
      <SkillSection />
      <Divider />
      <ArticleSection />
      <Divider />
      <ContactSection />
    </main>
  );
}