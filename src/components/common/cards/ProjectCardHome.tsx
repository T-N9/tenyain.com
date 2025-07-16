import { Button } from 'flowbite-react';
import React, { useEffect, useRef } from 'react';
import { technologyLogoMap } from '../logos';
import Link from 'next/link';
import Image from 'next/image';
import { heading_font } from "@/fonts/fonts";
import ScrambleHover from '@/components/animation/ScrableHover';
import VerticalCutReveal, { VerticalCutRevealRef } from '@/components/animation/VerticalCutReveal';
import { useInView } from 'framer-motion';
import { useLocale } from 'next-intl';

interface ProjectCardProps {
  logoSrc: string;
  logoAlt: string;
  title: string;
  livePreviewLink: string;
  description: string;
  onViewCaseStudy?: () => void;
  technologies: string[];
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  logoSrc,
  logoAlt,
  title,
  livePreviewLink,
  description,
  onViewCaseStudy,
  technologies,
  slug
}) => {

  const ref = useRef(null)
  const textRef = useRef<VerticalCutRevealRef>(null)
  const isInView = useInView(ref, { once: false })

  useEffect(() => {
    if (isInView) {
      textRef.current?.startAnimation()
    } else {
      textRef.current?.reset()
    }
  }, [isInView])

  const locale = useLocale();
  return (
    <div className="flex flex-col lg:flex-row lg:gap-5 xl:px-0 mb-5 lg:mb-0">

      <div className='flex-[3]'>
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={200}
          height={200}
          className="w-2/3 lg:w-full"
        />
      </div>

      <div className='flex flex-[7] flex-col gap-4 xl:px-0'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center'>
          <h1 className={`${heading_font.className} uppercase mb-2 text-4xl font-extrabold tracking-tight leading-none text-primary-600 md:text-5xl lg:text-5xl dark:text-accent-600`}>
            <div ref={ref}>
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.02}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 35,
                  delay: 0.1,
                }}
                containerClassName="text-[#00000] leading-snug"
                ref={textRef}
                autoStart={false}
              >
                {title}
              </VerticalCutReveal>
            </div>

          </h1>
          <div className="text-primary-600 dark:text-accent-600 ">
            <a aria-hidden="false" href={livePreviewLink} target="_blank" rel="noopener noreferrer" className="text-base flex gap-4 items-center">
              <ScrambleHover
                text={"> Live Preview"}
                scrambleSpeed={40}
                sequential={true}
                revealDirection="center"
                useOriginalCharsOnly={false}
                characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
              />
            </a>
          </div>
        </div>

        <p className="text-slate-500 text-base lg:text-xl">{description}</p>

        <div className='flex gap-4 flex-wrap'>
          {technologies.map((tech, index) => {
            return (
              <React.Fragment key={index}> {technologyLogoMap[tech]}</React.Fragment>
            )
          })}
        </div>

        <Link href={`/${locale}/works/${slug}`}>
          <Button aria-hidden="false" className="secondary-btn rounded-full" color="gray" size="lg" onClick={onViewCaseStudy}>
            View Detail
          </Button>

          {/* <TNButton size={'sm'} onClick={onViewCaseStudy} label='View Detail' withArrow={false}/> */}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
