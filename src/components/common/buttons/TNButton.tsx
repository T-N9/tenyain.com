'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonStyles = cva(
  'relative overflow-hidden group border-2 transition-colors duration-300 inline-flex items-center justify-center rounded-md',
  {
    variants: {
      color: {
        primary: 'border-primary-600 text-primary-600 bg-white dark:bg-secondary dark:border-accent-600 dark:text-accent-600',
        secondary: 'border-gray-700 text-gray-700 bg-white dark:bg-secondary dark:border-accent-600 dark:text-accent-600',
      },
      size: {
        sm: 'text-base px-4 py-2',
        md: 'text-base px-5 py-2.5',
        xl: 'text-xl px-6 py-3',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
    },
  }
);

type TNButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    label: string;
    withArrow?: boolean;
    hoverDirection?:  'right' | 'up';
  };

export const TNButton: React.FC<TNButtonProps> = ({
  label,
  withArrow = true,
  color,
  size,
  className,
    hoverDirection = 'right',
  ...props
}) => {
  return (
    <button className={clsx(buttonStyles({ color, size }), className)} {...props}>
      {/* Background fill animation */}
      <span className={`absolute inset-0 bg-primary-600 dark:bg-accent-600 ${hoverDirection === 'right' ? ' origin-left scale-x-0 group-hover:scale-x-100' : ' origin-bottom-right scale-y-0 group-hover:scale-y-100'} transition-transform duration-500 ease-out z-0`} />

      {/* Foreground content */}
      <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-300">
        {label}
        {withArrow && (
          <svg
            className="ml-2 -mr-1 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
    </button>
  );
};
