import Heading from "@/components/common/headings/Heading";
import SectionWrapper from "@/components/common/wrappers/SectionWrapper";
import {
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
} from "flowbite-react";

function TimelineSection() {
    return (
        <SectionWrapper>
            <Heading title="Timeline" align="left" />
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
                <Timeline>
                    <TimelineItem>
                        <TimelinePoint />
                        <TimelineContent>
                            <TimelineTime className="text-xl text-secondary dark:text-gray-200">2015-2016</TimelineTime>
                            <TimelineTitle className="text-primary-600 dark:text-accent-600 text-2xl">Passed Matriculation Examination</TimelineTitle>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelinePoint />
                        <TimelineContent>
                            <TimelineTime className="text-xl text-secondary dark:text-gray-200">2016-2017</TimelineTime>
                            <TimelineTitle className="text-primary-600 dark:text-accent-600 text-2xl">Joined University of Computer Studies, Hinthada</TimelineTitle>
                            <TimelineBody>
                                UCSH Web Design Competition (HTML & CSS) - 1st Prize
                            </TimelineBody>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelinePoint />
                        <TimelineContent>
                            <TimelineTime className="text-xl text-secondary dark:text-gray-200">2017-2018</TimelineTime>
                            <TimelineTitle className="text-primary-600 dark:text-accent-600 text-2xl">UCSH - CS 2nd year</TimelineTitle>
                            <TimelineBody>
                                <ul className="list-disc">
                                    <li>
                                        UCSH English Impromptu Speech - 1st Prize

                                    </li>
                                    <li>
                                        Designer at <a className="text-primary-600 dark:text-accent-600" href="https://www.facebook.com/BarCampHinthada">BarCamp Hinthada 2018</a>
                                    </li>
                                </ul>
                            </TimelineBody>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelinePoint />
                        <TimelineContent>
                            <TimelineTime className="text-xl text-secondary dark:text-gray-200">2018-2019</TimelineTime>
                            <TimelineTitle className="text-primary-600 dark:text-accent-600 text-2xl">UCSH - CS 3rd year</TimelineTitle>
                            <TimelineBody>
                                <ul className="list-disc">
                                    <li>
                                        UCSH ICT & Project Show - 1st Prize

                                    </li>
                                    <li>
                                        Co-founded UCSH Music Club
                                    </li>
                                </ul>
                            </TimelineBody>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
                <Timeline>

                    <TimelineItem>
                        <TimelinePoint />
                        <TimelineContent>
                            <TimelineTime className="text-xl text-secondary dark:text-gray-200">2020</TimelineTime>
                            <TimelineTitle className="text-primary-600 dark:text-accent-600 text-2xl">Stay @ Home</TimelineTitle>
                            <TimelineBody>
                                <ul className="list-disc">
                                    <li>
                                        Started learning Web design & development <a className="font-bold text-primary-600 dark:text-accent-600" href="https://www.facebook.com/mmsoss">@MMSIT</a>

                                    </li>
                                    <li>
                                        Continued self-study Software Engineering and Communications
                                    </li>
                                </ul>
                            </TimelineBody>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelinePoint />
                        <TimelineContent>
                            <TimelineTime className="text-xl text-secondary dark:text-gray-200">2021</TimelineTime>
                            <TimelineTitle className="text-primary-600 dark:text-accent-600 text-2xl">Dark Times in Myanmar</TimelineTitle>
                            <TimelineBody>
                                <ul className="list-disc">
                                    <li>
                                        <a className="text-primary-600 dark:text-accent-600 font-bold" href="https://twitter.com/hashtag/WhatsHappeningInMyanmar?src=hashtag_click">#WhatsHappeningInMyanmar</a>

                                    </li>
                                    <li>
                                        My Front-end and Freelancing journey were started
                                    </li>
                                </ul>
                            </TimelineBody>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelinePoint />
                        <TimelineContent>
                            <TimelineTime className="text-xl text-secondary dark:text-gray-200">2022</TimelineTime>
                            <TimelineTitle className="text-primary-600 dark:text-accent-600 text-2xl">On Job Training</TimelineTitle>
                            <TimelineBody>
                                <ul className="list-disc">
                                    <li>
                                        4 months of OJT at Myanmar High Society
                                    </li>
                                    <li>
                                        Language learning and preparation for ITPEC Fundamental Engineering Examination
                                    </li>
                                </ul>
                            </TimelineBody>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelinePoint />
                        <TimelineContent>
                            <TimelineTime className="text-xl text-secondary dark:text-gray-200">2023</TimelineTime>
                            <TimelineTitle className="text-primary-600 dark:text-accent-600 text-2xl">In Progress</TimelineTitle>
                            <TimelineBody>
                                <ul className="list-disc">
                                    <li>
                                        Passed ITPEC Fundamental IT Engineer Examination
                                    </li>

                                </ul>
                            </TimelineBody>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelinePoint />
                        <TimelineContent>
                            <TimelineTime className="text-xl text-secondary dark:text-gray-200">2024</TimelineTime>
                            <TimelineTitle className="text-primary-600 dark:text-accent-600 text-2xl">A New Chapter

                            </TimelineTitle>
                            <TimelineBody>
                                <ul className="list-disc">
                                    <li>
                                        Relocated to Chiang Mai, Thailand
                                    </li>

                                </ul>
                            </TimelineBody>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </SectionWrapper>
    );
}

export default TimelineSection;