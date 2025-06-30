'use client'
import TestimonialCard from "@/components/common/cards/TestimonialCard";
import Heading from "@/components/common/headings/Heading";
import SectionWrapper from "@/components/common/wrappers/SectionWrapper";

const TestimonialSection = () => {
    return (

        <SectionWrapper className="text-center">
            <div className="mx-auto max-w-screen-sm">
                <Heading title="Testimonials"/>
            </div>
            <div className="slider-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 ">


                    <TestimonialCard
                        testimonial="I am thrilled with the website created by the talented website developer TeNyain. The design is visually stunning, the functionality is seamless, and it perfectly represents my business. Working with TeNyain was a pleasure, and I highly recommend his services to anyone in need of a remarkable website."
                        name="Szu Ho Chen"
                        role="at Bride To Be Bridal , USA"
                    />

                    <TestimonialCard
                        testimonial="Te Nyain is a well-trained student who took the 'Special Web Design' course from us. He is specialized in Front-end development and delivering trustworthy interactive websites to his consumers."
                        name="Hein Htet Zan"
                        role="at MMSIT , Myanmar"
                    />

                    <TestimonialCard
                        testimonial="Te Nyain is a cooperative and collaborative student. He is open to learning and receptive to improving his studies. He follows directions perfectly and shows respect for peers and teachers. I'm impressed by his passion for discussion and collaboration. It's an honor to be his teacher."
                        name="Tr. Thant"
                        role="at BS Camp , Myanmar"
                    />
            </div>

        </SectionWrapper>
    )
}

export default TestimonialSection