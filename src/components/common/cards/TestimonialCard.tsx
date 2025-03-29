import React from 'react';

interface TestimonialCardProps {
  testimonial: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, name, role }) => {
  return (
    <figure className="px-4 mx-auto mb-6">
      <svg
        className="h-12 mx-auto mb-3 text-primary-600 dark:text-accent-600"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="currentColor"
        />
      </svg>
      <blockquote>
        <p className="text-base text-left lg:text-xl font-thin text-secondary dark:text-gray-500 first-letter:text-primary-600 first-letter:font-bold first-letter:text-3xl dark:first-letter:text-accent-600">
        {testimonial}
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-start mt-6 space-x-3">
        
        <div className="flex items-center divide-x-2 divide-secondary/20 dark:divide-gray-500">
          <div className="pr-3 font-medium text-primary-600 dark:text-accent-600">{name}</div>
          <div className="pl-3 text-sm text-secondary dark:text-slate-200 font-medium">{role}</div>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
