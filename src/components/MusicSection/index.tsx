import React from 'react'
import SectionWrapper from '../common/wrappers/SectionWrapper'
import Heading from '../common/headings/Heading'

type YouTubeEmbedProps = {
  videoId: string;
  title?: string;
  className?: string;
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title = 'YouTube video', className = '' }) => {
  return (
    <div className={`relative w-full aspect-video ${className} border-4 border-primary-600 rounded-lg overflow-hidden dark:border-accent-600`}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

function MusicSection() {
  return (
    <SectionWrapper>
        <Heading title='Music' align='center'/>

        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/3ZV8uDaErYg?si=z9yv8v5SlId0XHGK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

        <YouTubeEmbed videoId="3ZV8uDaErYg" title="Music Video" className="mt-4" />

        <p className='text-center my-5'>More Music Coming Soon...</p>
    </SectionWrapper>
  )
}

export default MusicSection