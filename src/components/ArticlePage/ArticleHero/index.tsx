import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import { Badge, Breadcrumb } from 'flowbite-react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface ArticleHeroProps {
  title: string;
  createdAt: string;
  tags: string[];
  image: string;
}

const ArticleHero: React.FC<ArticleHeroProps> = ({ title, createdAt, tags, image }) => {
  const locale = useLocale();
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-3xl lg:text-5xl leading-normal font-bold text-primary-600 dark:text-accent-600'>{title}</h1>
      <div className='flex justify-between mt-5'>
        <p className='text-gray-500'>{moment(createdAt).format('MMMM Do, YYYY')}</p>
        <div className='flex gap-2'>
          {tags.map((tag) => (
              <Link key={tag} href={`/writing/tag/${tag}`}>
                  <Badge  key={tag} size="sm" className='bg-primary-100 hover:bg-primary-200 font-thin dark:bg-accent-100 dark:hover:bg-accent-200 text-md'>
                      {tag}
                  </Badge>
              </Link>


          ))}
        </div>
      </div>
      <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-100 rounded-md px-5 py-3 dark:bg-gray-800">
        <Breadcrumb.Item>
          <Link href={`/${locale}`}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item><Link href={`/${locale}/writing`}>Writing</Link></Breadcrumb.Item>
          <Breadcrumb.Item className="opacity-70"><span className={'line-clamp-1'}>{title}</span></Breadcrumb.Item>
      </Breadcrumb>
      <Image className='w-full shadow' src={image} width={840} height={473} alt={title} />
    </div>
  );
};

export default ArticleHero;
