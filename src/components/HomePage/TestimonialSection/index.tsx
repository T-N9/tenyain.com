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
                        testimonial="I am thrilled with the website created by the talented website developer TeNyain. The design is visually stunning, the functionality is seamless, and it perfectly represents my business."
                        name="Micheal Gough"
                        role="CEO at Google"
                        profileImage="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    />

                    <TestimonialCard
                        testimonial="I am thrilled with the website created by the talented website developer TeNyain. The design is visually stunning, the functionality is seamless, and it perfectly represents my business."
                        name="Micheal Gough"
                        role="CEO at Google"
                        profileImage="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    />

                    <TestimonialCard
                        testimonial="I am thrilled with the website created by the talented website developer TeNyain. The design is visually stunning, the functionality is seamless, and it perfectly represents my business."
                        name="Micheal Gough"
                        role="CEO at Google"
                        profileImage="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    />


                </Slider>
            </div>

        </SectionWrapper>
    )
}

export default TestimonialSection