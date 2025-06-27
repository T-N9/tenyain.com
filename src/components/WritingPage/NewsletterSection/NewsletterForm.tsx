'use client';

import Heading from '@/components/common/headings/Heading';
import SectionWrapper from '@/components/common/wrappers/SectionWrapper';
import useNewsletterForm from './useNewsletterForm';
import { TNButton } from '@/components/common/buttons/TNButton';

const NewsletterSection = () => {
    const { handleSubmit, errors, isLoading, register, onSubmit } = useNewsletterForm();

    return (
        <SectionWrapper>
            <Heading title="Subscribe" />
<div className='mx-auto table mb-4'>
                <a aria-label="Click to view my notes" href="https://notes.tenyain.com/" target='_blank' rel="noreferrer" className="inline-flex justify-between items-center py-1 px-1 pr-4 text-sm text-secondary bg-gray-100 rounded-full dark:bg-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 duration-100 transition-all">
                    <span className="text-xs bg-primary-600 dark:bg-accent-600 rounded-full text-white dark:text-secondary px-4 py-1.5 mr-3">New</span> <span className="lg:text-sm text-xs font-medium">See what&apos;s new on the feed </span>
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
</div>
            <p className={'text-center mb-10 text-slate-500 lg:w-1/2 mx-auto'}>Subscribe to my newsletter and get notified whenever a new article is published at tenyain.com or <a className={'font-bold text-primary-600 dark:text-accent-600'}
                href="https://notes.tenyain.com/">notes.tenyain.com</a></p>
            <div className="mx-auto max-w-screen-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-lg font-medium text-primary-600 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`bg-gray-50 border ${errors.email ? '!border-red-500' : 'border-gray-300'} text-secondary text-lg lg:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-secondary placeholder-gray-300 dark:placeholder-gray-500 dark:text-white dark:focus:ring-accent-500 dark:focus:border-accent-500`}
                            placeholder="eg: johndoe@gmail.com"
                            {...register("email")}
                        />
                        {errors.email && (
                            <span className="mt-1 text-sm text-red-600">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <TNButton
                        type="submit"
                        className='mx-auto table'
                        disabled={isLoading}
                        label={isLoading ? "Subscribing..." : "Subscribe"}
                    />


                </form>
            </div>
        </SectionWrapper>
    );
};

export default NewsletterSection;
