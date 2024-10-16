import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import { Breadcrumb } from 'flowbite-react';
import Link from 'next/link';

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
      <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
        <Breadcrumb.Item>
          <Link href={'/'}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item><Link href={'/writing'}>Writing</Link></Breadcrumb.Item>
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>
      <Image className='w-full shadow' src={image} width={840} height={473} alt={title} />
    </div>
  );
};

export default ArticleHero;
