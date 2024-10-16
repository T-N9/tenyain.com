import React from 'react';
import moment from 'moment';
import Image from 'next/image';

interface ArticleHeroProps {
  title: string;
  createdAt: string;
  tags: string[];
  image: string;
}

const ArticleHero: React.FC<ArticleHeroProps> = ({ title, createdAt, tags, image }) => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-5xl leading-relaxed text-center font-bold text-primary-600'>{title}</h1>
      <div className='flex justify-between'>
        <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
        <div>
          {tags.map((tag) => (
            <span key={tag} className='inline-block px-2 py-1 text-xs font-semibold bg-primary-100 text-primary-600 rounded-full'>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Image className='w-full shadow' src={image} width={840} height={473} alt={title} />
    </div>
  );
};

export default ArticleHero;
