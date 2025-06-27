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
