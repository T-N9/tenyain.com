'use client'
import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  description: string;
  createdAt: string;
  tags: string[];
  image: string;
  href: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, createdAt, tags, image, href }) => {
  return (
    <div className=''>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-secondary">
        <Link href={`/writing/${href}`}>
          <Image className="rounded-t-lg w-full object-cover" src={image} alt={title} width={400} height={300} priority/>
        </Link>
        <div className="p-5">
          <Link href={`/writing/${href}`}>
            <h1 className="mb-2 text-2xl line-clamp-2 font-bold tracking-tight text-primary-600 dark:text-accent-600">{title}</h1>
          </Link>
          <p className="mb-3 font-normal line-clamp-3 text-secondary dark:text-secondary">{description}</p>
          <div className='flex justify-between items-center'>
            <div className=" flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <span key={tag} className="inline-block px-2 py-1 text-xs font-semibold bg-primary-50 text-primary-700 dark:bg-accent-100 dark:text-slate-700 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-secondary dark:text-secondary">{moment(createdAt).format('MMMM Do, YYYY')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
