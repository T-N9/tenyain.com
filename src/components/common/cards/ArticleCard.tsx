import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'flowbite-react';

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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-secondary">
      <Link href={`/writing/${href}`}>
        <Image className="rounded-t-lg" src={image} alt={title} width={400} height={300} />
      </Link>
      <div className="p-5">
        <Link href={`/writing/${href}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secondary dark:text-white">{title}</h5>
        </Link>
        <p className="mb-3 font-normal text-secondary dark:text-gray-400">{description}</p>
        <div className='flex justify-between items-center'>
            <div className=" flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <span key={tag} className="inline-block px-2 py-1 text-xs font-semibold bg-primary-100 text-primary-600 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{moment(createdAt).format('MMMM Do, YYYY')}</p>
        </div>
        <Link href={`/writing/${href}`} >
          <Button className="mt-4 flex items-center" color='gray' pill size='lg'>
            Read more
           
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
