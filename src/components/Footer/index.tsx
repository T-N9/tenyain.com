import React from 'react'
import TNLogo from '../common/logos/TNLogo'
import Link from 'next/link'
import Greetings from '../Greetings'

const Footer = () => {
  return (
    <footer className="p-4 pt-20 mt-20 bg-slate-100 dark:bg-gray-700">
    <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
            <div className="mb-20 text-primary-600 dark:text-accent-600 md:mb-0">
                <Link href="/" className="flex items-center">
                    <TNLogo/>
                </Link>

                <Greetings/>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-primary-600 dark:text-accent-600 text-sm font-semibold  uppercase ">Resources</h2>
                    <ul className="text-secondary dark:text-white">
                    <li className="mb-4">
                            <a href="https://nextjs.org/" className="hover:underline">Next.JS</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://flowbite.com" className="hover:underline">Flowbite</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-primary-600 dark:text-accent-600 text-sm font-semibold  uppercase">Follow Me</h2>
                    <ul className="text-secondary dark:text-white">
                        <li className="mb-4">
                            <a href="https://github.com/T-N9" className="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/te-nyain-moe-lwin-80b4a11a4/" className="hover:underline">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-primary-600 dark:text-accent-600 text-sm font-semibold  uppercase">Legal</h2>
                    <ul className="text-secondary dark:text-white">
                        <li className="mb-4">
                            <Link href="/privacy-and-policy" className="hover:underline">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-8" />
        <div className="text-center">
            <span className="text-sm text-secondary text-center dark:text-white">© 2022 - 2024 <a href="https://tenyain.com" className="hover:underline">tenyain.com</a>. All Rights Reserved.
            </span>

        </div>
    </div>
</footer>
  )
}

export default Footer