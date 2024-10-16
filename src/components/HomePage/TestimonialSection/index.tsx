'use client'
import TestimonialCard from "@/components/common/cards/TestimonialCard";
import SectionWrapper from "@/components/common/wrappers/SectionWrapper";
import Slider from "react-slick";

const TestimonialSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
           
          ]
    };
    return (

        <SectionWrapper className="text-center">
            <div className="mx-auto max-w-screen-sm">
                <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-primary-600 dark:text-white">Testimonials</h2>
            </div>
            <div className="slider-container">
                <Slider {...settings}>

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


                </Slider>
            </div>

        </SectionWrapper>
    )
}

export default TestimonialSection