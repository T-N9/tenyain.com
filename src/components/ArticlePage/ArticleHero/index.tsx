import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import { Badge, Breadcrumb } from 'flowbite-react';
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
      <h1 className='text-3xl lg:text-5xl leading-normal font-bold text-primary-600 dark:text-accent-600'>{title}</h1>
      <div className='flex justify-between'>
        <p className='text-gray-500'>{moment(createdAt).format('MMMM Do, YYYY')}</p>
        <div className='flex gap-2'>
          {tags.map((tag) => (
            <Badge key={tag} size="sm" className='bg-primary-100 dark:bg-accent-100 text-lg' href="#">
              {tag}
            </Badge>

          ))}
        </div>
      </div>
      <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-100 rounded-md px-5 py-3 dark:bg-gray-800">
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
