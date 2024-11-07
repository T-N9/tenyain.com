import { Blockquote } from "flowbite-react";
import SectionWrapper from '@/components/common/wrappers/SectionWrapper';

function MottoSection() {
    return (
        <SectionWrapper className='my-14'>
            <Blockquote className='text-center text-secondary/40 dark:text-slate-200  text-3xl'>
                <svg
                    className="mb-4 mx-auto h-8 w-8 fill-primary-600 dark:fill-accent-600  dark:text-secondary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                “ If I cannot build a wall, I will lay a brick every day one by one until it becomes a wall. “
            </Blockquote>
        </SectionWrapper>
    );
}

export default  MottoSection;


