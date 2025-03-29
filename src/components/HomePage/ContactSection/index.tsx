'use client'
import Heading from '@/components/common/headings/Heading';
import SectionWrapper from '@/components/common/wrappers/SectionWrapper';
import { Button } from 'flowbite-react';
import useContactForm from './useContactForm';

const ContactSection = () => {
    const { handleSubmit, errors, isLoading, register, onSubmit } = useContactForm();

    return (
        <SectionWrapper>
            <Heading title='Keep In Touch' />
            <div className='mx-auto max-w-screen-md '>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="mb-4">
                        <label htmlFor={'name'} className="block mb-2 text-lg font-medium text-primary-600 dark:text-accent-600">
                            Name
                        </label>
                        <input
                            type={'text'}
                            id={'name'}
                            className={`bg-gray-50 border border-gray-300 text-secondary text-lg lg:text-2xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-secondary placeholder-gray-300 dark:placeholder-gray-500 dark:text-white dark:focus:ring-accent-500 dark:focus:border-accent-500`}
                            placeholder={
                                'Enter your name'
                            }
                            {...register("name")}
                        />
                        {/* Only render the error message if it exists and is a string */}
                        {errors.name && <span className="mt-1 text-sm text-red-600">{errors.name.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor={'email'} className="block mb-2 text-lg font-medium text-primary-600 dark:text-accent-600">
                            Email
                        </label>
                        <input
                            type={'email'}
                            id={'email'}
                            className={`bg-gray-50 border border-gray-300 text-secondary text-lg lg:text-2xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-secondary placeholder-gray-300 dark:placeholder-gray-500 dark:text-white dark:focus:ring-accent-500 dark:focus:border-accent-500`}
                            placeholder={
                                'Enter your mail'
                            }
                            {...register("email")}
                        />
                        {/* Only render the error message if it exists and is a string */}
                        {errors.email && <span className="mt-1 text-sm text-red-600">{errors.email.message}</span>}
                    </div>
                    <div className="mb-4 sm:col-span-2">
                        <label htmlFor={'message'} className="block mb-2 text-lg font-medium text-primary-600 dark:text-accent-600">
                            Message
                        </label>
                        <textarea
                            id={'message'}
                            rows={6}
                            className={`block p-2.5 w-full text-lg lg:text-2xl text-secondary bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 placeholder-gray-300 dark:border-secondary dark:placeholder-gray-500 dark:text-white dark:focus:ring-accent-500 dark:focus:border-accent-500`}
                            placeholder={'Leave a message...'}
                            {...register("message")}
                        ></textarea>
                        {errors.message && <span className="mt-1 text-sm text-red-600">{errors.message.message}</span>}
                    </div>
                    <Button
                        type="submit"
                        className='primary-btn w-fit'
                        size='lg'
                        disabled={isLoading}
                    >
                        {isLoading ? "Sending..." : "Submit"}
                    </Button>
                </form>
            </div>
        </SectionWrapper>
    );
}

export default ContactSection;
