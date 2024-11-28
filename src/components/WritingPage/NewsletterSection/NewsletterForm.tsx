'use client';

import Heading from '@/components/common/headings/Heading';
import SectionWrapper from '@/components/common/wrappers/SectionWrapper';
import { Button } from 'flowbite-react';
import useNewsletterForm from './useNewsletterForm';

const NewsletterSection = () => {
    const { handleSubmit, errors, isLoading, register, onSubmit } = useNewsletterForm();

    return (
        <SectionWrapper>
            <Heading title="Subscribe to My Newsletter" />
            <div className="mx-auto max-w-screen-md">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-lg font-medium text-primary-900 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`bg-gray-50 border ${errors.email ? '!border-red-500' : 'border-gray-300'} text-secondary text-lg lg:text-2xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-secondary placeholder-gray-300 dark:placeholder-gray-500 dark:text-white dark:focus:ring-accent-500 dark:focus:border-accent-500`}
                            placeholder="Enter your email"
                            {...register("email")}
                        />
                        {errors.email && (
                            <span className="mt-1 text-sm text-red-600">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <Button
                        type="submit"
                        className="primary-btn w-fit"
                        size="lg"
                        disabled={isLoading}
                    >
                        {isLoading ? "Subscribing..." : "Subscribe"}
                    </Button>
                </form>
            </div>
        </SectionWrapper>
    );
};

export default NewsletterSection;
