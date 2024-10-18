'use client'
import Heading from '@/components/common/headings/Heading';
import InputField from '@/components/common/input';
import TextAreaField from '@/components/common/input/TextArea';
import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import { Button } from 'flowbite-react';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
interface FormValues {
    name: string;
    email: string;
}
const ContactSection = () => {
    const methods = useForm<FormValues>({
        mode: 'onBlur', // validate on blur
    });
    const { handleSubmit } = methods;

    const onSubmit = (data: FormValues) => {
        console.log(data); // Handle form submission
    };

    return (
        <SectionWrapper>
           <Heading title='Keep In Touch'/>
            <div className=' mx-auto max-w-screen-md'>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <InputField name="name" label="Name" type="text" placeholder="John Doe" />
                        <InputField name="email" label="Email" type="email" placeholder="name@flowbite.com" />
                        <TextAreaField name="message" label="Your Message" placeholder="Leave a message..." />
                        <Button
                            type="submit"
                            className='bg-primary-600 hover:bg-primary-600/40 dark:bg-accent-600 dark:text-secondary'
                            size='lg'
                        >
                            Submit
                        </Button>
                    </form>
                </FormProvider>
            </div>
        </SectionWrapper>
    );
}

export default ContactSection