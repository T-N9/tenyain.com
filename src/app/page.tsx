import Divider from "@/components/common/divider/Divider";
import ArticleSection from "@/components/HomePage/ArticleSection";
import ContactSection from "@/components/HomePage/ContactSection";
import HeroSection from "@/components/HomePage/HeroSection";
import { MottoSection } from "@/components/HomePage/MottoSection";
import ProjectsSection from "@/components/HomePage/ProjectsSection";
import SkillSection from "@/components/HomePage/SkillSection";
import TestimonialSection from "@/components/HomePage/TestimonialSection";


export default function Home() {
  return (
    <main>
      <HeroSection/>
      <ProjectsSection/>
      <Divider/>
      <TestimonialSection/>
      <Divider/>
      <SkillSection/>
      <Divider/>
      <MottoSection/>
      <Divider/>
      <ArticleSection/>
      <Divider/>
      <ContactSection/>
    </main>
  );
}
