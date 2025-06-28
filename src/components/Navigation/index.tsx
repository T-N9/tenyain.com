'use client'

import React, { useState } from 'react';
import TNLogo from '../common/logos/TNLogo';
import Link from 'next/link';
import { Button } from 'flowbite-react';
import { usePathname } from 'next/navigation';
import ThemeToggler from '../ThemeToggler';
import { useLocale } from 'next-intl';
import LocaleSwitcher from '../common/locale/LocaleSwitcher';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // To detect current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const locale = useLocale();

  // Navigation links with label and href
  const navItems = [
    { label: 'Home', href: `/${locale}` },
    { label: 'About', href: `/${locale}/about` },
    { label: 'Works', href: `/${locale}/works` },
    { label: 'Writing', href: `/${locale}/writing` },
    { label: 'Services', href: `/${locale}/services` },
    { label: 'Contact', href: `/${locale}/contact` },
  ];

  // Function to determine if the current route is active (including sub-routes)
  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}`;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className=" fixed w-full z-50 top-0 start-0 ">
      <div className="max-w-screen-lg rounded-b-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4 xl:px-8 lg:mt-5 bg-white/30 dark:bg-secondary/30 backdrop-blur-[10px] transition-colors border dark:border-gray-700 lg:rounded-xl">
        <Link aria-label="Back to Home page" href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <TNLogo />
        </Link>
        <div className="flex items-center gap-2 md:gap-4 lg:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

          <LocaleSwitcher />
          <ThemeToggler />
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-secondary rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-secondary dark:hover:bg-gray-700 dark:focus:ring-secondary"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path className='stroke-slate-700 dark:stroke-slate-200' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 dark:border-gray-700">
            {navItems.map((item) => (
              <li onClick={() => setIsOpen(false)} key={item.href} className='relative'>
                <Link href={item.href}>
                  <span
                    className={`block py-2 px-3 rounded transition duration-300 ${isActive(item.href)
                      ? 'text-white bg-primary-600 dark:bg-accent-600 dark:lg:bg-transparent lg:bg-transparent lg:text-primary-600 dark:lg:text-accent-600'
                      : 'text-slate-400 hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary-600 dark:lg:hover:text-accent-600 dark:text-gray-400 dark:hover:text-white'
                      }`}
                  >
                    {item.label}
                  </span>
                </Link>
                {
                  isActive(item.href) &&
                  <>
                    <div className="bg-nav-link-indicator absolute -bottom-2 left-1/2 h-px w-12 -translate-x-1/2"></div>
                    <div className="absolute -bottom-2 left-1/2 size-2.5 -translate-x-1/2 rounded-[4px] bg-primary-600 blur-[8px] dark:bg-accent-600"></div>
                  </>
                }
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
