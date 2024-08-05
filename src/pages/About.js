import Image from "next/image";
import { skills, experiences } from "../constants";
import useResponsive from "../hooks/useResponsive";
import { Grid, Stack } from "@mui/material";
import React from "react";
import { Threejs } from "../assets/icons/threejs";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const CompanyLogo = [
    "/images/apsy-removebg-preview.png",
    "/images/apsaaz-removebg-preview.png",
];
const About = () => {
    const isSmall = useResponsive("down", "sm");
    return (
        <Stack className=' bg-gray-100'>
            <Stack className='max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
                <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>
                    Hello, I´m{" "}
                    <span className='blue-gradient_text font-semibold drop-shadow'>
                        Armita
                    </span>
                </h1>
                <Stack
                    direction='column'
                    gap={3}
                    display='flex'
                    className='mt-5   text-slate-500'
                >
                    <p style={{ maxWidth: "650px" }}>
                        Front-End developer,specializing in React.js and Next.js
                        through hands-on learning and building responsive
                        Websites.
                    </p>
                    <stack className='py-10 flex flex-col'>
                        <h3 className='font-semibold sm:text-3xl text-xl relative font-poppins'>
                            My Skills
                        </h3>
                        <Stack className='mt-16 gap-16 flex-row flex-wrap'>
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className='block-container w-20 h-20 '
                                >
                                    <div className='btn-back rounded-xl' />
                                    <div className='btn-front rounded-xl justify-center items-center flex'>
                                        <Image
                                            src={skill.imageUrl}
                                            alt={skill.name}
                                            className='object-contain'
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className='block-container w-20 h-20 '>
                                <div className='btn-back rounded-xl' />
                                <div className='btn-front rounded-xl justify-center items-center flex'>
                                    <Threejs />
                                </div>
                            </div>
                        </Stack>
                    </stack>
                </Stack>
                <Stack py={16}>
                    <h3 className='font-semibold sm:text-2xl text-xl relative font-poppins'>
                        Work Experience
                    </h3>
                    <Stack
                        gap={3}
                        className='mt-5 flex flex-col  text-slate-500'
                    >
                        <p style={{ maxWidth: "650px" }}>
                            I´ve worked with great companies, leveling up my
                            skills and teaming up with smart and amazing people.
                            Here´s the rundown:
                        </p>
                    </Stack>
                    <Stack className='mt-12 flex'>
                        <VerticalTimeline>
                            {experiences.map((exprience, index) => (
                                <VerticalTimelineElement
                                    key={exprience.company_name}
                                    date={exprience.date}
                                    icon={
                                        <Stack className='justify-center items-center w-full h-full'>
                                            <Image
                                                src={
                                                    index === 0
                                                        ? CompanyLogo[0]
                                                        : CompanyLogo[1]
                                                }
                                                alt={exprience.company_name}
                                                className=' object-contain w-[60%] h-[60%] '
                                                style={{ borderRadius: 5 }}
                                                width={25}
                                                height={25}
                                            />
                                        </Stack>
                                    }
                                    contentStyle={{
                                        borderBottom: "8px",
                                        borderStyle: "solid",
                                        borderBottomColor: exprience.iconBg,
                                        boxShadow: "none",
                                    }}
                                    iconStyle={{
                                        background: exprience.iconBg,
                                    }}
                                >
                                    <Stack className='justify-around flex '>
                                        <h3
                                            style={{ marginBottom: 20 }}
                                            className='text-black text-xl font-poppins font-semibold'
                                        >
                                            {exprience.title}
                                        </h3>
                                        <p
                                            style={{ margin: 0 }}
                                            className='text-gray-700 font-medium'
                                        >
                                            {exprience.company_name}
                                        </p>
                                    </Stack>
                                    <ul className='my-5 list-disc ml-5 space-y-2'>
                                        {exprience.points.map(
                                            (point, index) => (
                                                <li
                                                    key={`experience-point-${index}`}
                                                    className='text-gray-500 font-normal pl-1 text-sm'
                                                >
                                                    {point}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </Stack>
                </Stack>
                <hr className='border-slate-300' />
                <CTA />
            </Stack>
        </Stack>
    );
};

export default About;
