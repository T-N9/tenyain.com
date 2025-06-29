'use client'
import Heading from '@/components/common/headings/Heading';
import SectionWrapper from '@/components/common/wrappers/SectionWrapper';
import useContactForm from './useContactForm';
import { TNButton } from '@/components/common/buttons/TNButton';
import CharacterHead from '../HeroSection/Character/CharacterHead';

const ContactSection = () => {
    const { handleSubmit, errors, isLoading, register, onSubmit } = useContactForm();

    return (
        <SectionWrapper>
            <Heading title='Keep In Touch' />
            <div className='mx-auto flex flex-row-reverse  gap-5'>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 flex-1">
                    <div className="">
                        <label htmlFor={'name'} className="block mb-2 text-lg font-medium text-primary-600 dark:text-accent-600">
                            Name
                        </label>
                        <input
                            type={'text'}
                            id={'name'}
                            className={`bg-gray-50 border border-gray-300 text-secondary text-lg lg:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-secondary placeholder-gray-300 dark:placeholder-gray-500 dark:text-white dark:focus:ring-accent-500 dark:focus:border-accent-500`}
                            placeholder={
                                'John Doe'
                            }
                            {...register("name")}
                        />
                        {/* Only render the error message if it exists and is a string */}
                        {errors.name && <span className="mt-1 text-sm text-red-600">{errors.name.message}</span>}
                    </div>
                    <div className="">
                        <label htmlFor={'email'} className="block mb-2 text-lg font-medium text-primary-600 dark:text-accent-600">
                            Email
                        </label>
                        <input
                            type={'email'}
                            id={'email'}
                            className={`bg-gray-50 border border-gray-300 text-secondary text-lg lg:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-secondary placeholder-gray-300 dark:placeholder-gray-500 dark:text-white dark:focus:ring-accent-500 dark:focus:border-accent-500`}
                            placeholder={
                                'eg: johndoe@gmail.com'
                            }
                            {...register("email")}
                        />
                        {/* Only render the error message if it exists and is a string */}
                        {errors.email && <span className="mt-1 text-sm text-red-600">{errors.email.message}</span>}
                    </div>
                    <div className=" sm:col-span-2">
                        <label htmlFor={'message'} className="block mb-2 text-lg font-medium text-primary-600 dark:text-accent-600">
                            Message
                        </label>
                        <textarea
                            id={'message'}
                            rows={6}
                            className={`block p-2.5 w-full text-lg lg:text-lg text-secondary bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 placeholder-gray-300 dark:border-secondary dark:placeholder-gray-500 dark:text-white dark:focus:ring-accent-500 dark:focus:border-accent-500`}
                            placeholder={'Hello, I would like to...'}
                            {...register("message")}
                        ></textarea>
                        {errors.message && <span className="mt-1 text-sm text-red-600">{errors.message.message}</span>}
                    </div>
                    <TNButton
                        className="w-full !mt-4"
                        type="submit"
                        disabled={isLoading}
                        label={isLoading ? "Sending..." : "Submit"}
                        hoverDirection='up'
                    />
                </form>

                <div className='flex-1 hidden lg:flex justify-center items-center relative'>
                    <CharacterHead />
                </div>
            </div>
        </SectionWrapper>
    );
}

export default ContactSection;
