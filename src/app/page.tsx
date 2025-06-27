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
      <ArticleSection />
      {/* <Divider />
      <TestimonialSection />

      <Divider />
      <MottoSection /> */}
      <ContactSection />
    </main>
  );
}
