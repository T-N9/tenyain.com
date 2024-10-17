import React from 'react'
import SectionWrapper from '../common/wrappers/SectionWrapper';
import Heading from '../common/headings/Heading';

const ListenRecommendation = () => {

    return (
        <SectionWrapper>
            <Heading align='left' title='My Playlist'/>

            <iframe
                title="Spotify Embed: Recommendation Playlist "
                src={`https://open.spotify.com/embed/playlist/${process.env.playlistId}?utm_source=generator&theme=0`}
                width="100%"
                height="100%"
                style={{ minHeight: '360px' }}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </SectionWrapper>
    )
}

export default ListenRecommendation