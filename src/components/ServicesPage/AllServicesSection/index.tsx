import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import React from 'react'

const AllServicesSection = () => {
    return (
        <SectionWrapper>
            <section className="bg-white dark:bg-secondary">
                <div className="pt-8 mx-auto max-w-screen-xl sm:pt-16 ">
                    <div className="max-w-screen-md mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-secondary dark:text-gray-200 "><b className='text-primary-600 dark:text-accent-600 font-bold'>Designed</b> for business like yours</h2>
                        <p className="text-secondary sm:text-xl dark:text-secondary">At <b className='text-primary-600 dark:text-accent-600 font-bold'>tenyain.com</b>, I focus on creating visually engaging and seamless web experiences that connect brands with your audience through innovative front-end development solutions.</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-accent-900">
                                <svg className="w-6 h-6 text-primary-600 dark:text-accent-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z" />
                                </svg>

                            </div>
                            <h3 className="mb-2 text-xl pl-4 border-l-4 border-primary-500 dark:border-accent-500 dark:text-white font-bold text-secondary ">Responsive Design
                            </h3>
                            <p className="text-secondary dark:text-secondary">Responsiveness of a website plays an important role at user experience. I ensure my design is looking good on any kind of devices.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-accent-900">
                                <svg className="w-6 h-6 text-primary-600 dark:text-accent-600 " width="24" height="24" fill="none" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><path stroke="currentColor" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" /></svg>
                            </div>
                            <h3 className="mb-2 text-xl pl-4 border-l-4 border-primary-500 dark:border-accent-500 dark:text-white font-bold text-secondary ">Prototyping</h3>
                            <p className="text-secondary dark:text-secondary">Reaching project goals by identifying customer requirements and prototyping before diving into an actual project are my first stages of development.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-accent-900">
                                <svg className="w-6 h-6 text-primary-600 dark:text-accent-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                </svg>

                            </div>
                            <h3 className="mb-2 text-xl pl-4 border-l-4 border-primary-500 dark:border-accent-500 dark:text-white font-bold text-secondary ">Accessibility</h3>
                            <p className="text-secondary dark:text-secondary">Web is for EVERYONE. I manage my user interface and codes to meet W3C standards and make the best performance.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-accent-900">
                                <svg className="w-6 h-6 text-primary-600 dark:text-accent-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                                </svg>

                            </div>
                            <h3 className="mb-2 text-xl pl-4 border-l-4 border-primary-500 dark:border-accent-500 dark:text-white font-bold text-secondary ">Search Engine Optimization</h3>
                            <p className="text-secondary dark:text-secondary">To be a reachable and engaging website, the implementation must proceed prioritizing SEO support concepts.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-accent-900">
                                <svg className="w-6 h-6 text-primary-600 dark:text-accent-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
                                </svg>

                            </div>
                            <h3 className="mb-2 text-xl pl-4 border-l-4 border-primary-500 dark:border-accent-500 dark:text-white font-bold text-secondary ">Design to Code</h3>
                            <p className="text-secondary dark:text-secondary">If web design is already crafted, I am here to convert Figma, PSD, and Xd templates into well-performed websites.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-accent-900">
                                <svg className="w-6 h-6 text-primary-600 dark:text-accent-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z" />
                                    <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z" />
                                </svg>

                            </div>
                            <h3 className="mb-2 text-xl pl-4 border-l-4 border-primary-500 dark:border-accent-500 dark:text-white font-bold text-secondary ">Front-end Development</h3>
                            <p className="text-secondary dark:text-secondary">I use React.JS, Next.JS and Tailwind CSS to build scalable, reusable, maintainable, and to provide fast Single Page Applications.</p>
                        </div>
                    </div>
                </div>
            </section>
        </SectionWrapper>
    )
}

export default AllServicesSection