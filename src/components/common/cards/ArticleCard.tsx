'use client'
import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface ArticleCardProps {
  title: string;
  description: string;
  createdAt: string;
  tags: string[];
  image: string;
  href: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, createdAt, tags, image, href }) => {

  const locale = useLocale();

  return (
    <div className=''>
      <Link href={`/${locale}/writing/${href}`}>
        <div className="p-5 flex-col lg:flex-row hover:bg-primary-50 transition-all duration-300 border-gray-200 rounded-lg dark:hover:bg-gray-800 dark:border-secondary flex gap-3">
          <div className='flex-[3]'>

            <Image className="rounded-lg border  object-cover w-[150px] lg:w-full" src={image} alt={title} width={400} height={300} priority />

          </div>
          <div className="flex-[7]">

            <h1 className="mb-2 text-2xl line-clamp-2 font-bold tracking-tight text-primary-600 dark:text-accent-600">{title}</h1>

            <p className="mb-3 font-normal line-clamp-3 text-slate-500 dark:text-secondary">{description}</p>
            <div className='flex justify-between items-center'>
              <div className=" flex flex-wrap gap-2">
                {tags?.map((tag) => (
                  <span key={tag} className="inline-block px-2 py-1 text-xs font-semibold bg-primary-100 text-primary-700 dark:bg-accent-100 dark:text-slate-700 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-secondary dark:text-secondary">{moment(createdAt).format('MMMM Do, YYYY')}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
