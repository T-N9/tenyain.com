/* Section components */
import {
  Divider,
} from "@/components";
import {
  HeroSection,
  ArticleSection,
  ContactSection,
  MottoSection,
  ProjectsSection,
  SkillSection,
  TestimonialSection
} from "@/components/HomePage";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <SkillSection />
      <Divider />
      <TestimonialSection />

      <Divider />
      <MottoSection />
      <Divider />
      <ArticleSection />
      <Divider />
      <ContactSection />
    </main>
  );
}
