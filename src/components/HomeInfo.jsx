import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Icon } from "@mui/material";
import Link from "next/link";
import React from "react";

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-lg text-center'>{text}</p>
        <Link
            href={link}
            className='neo-brutalism-white neo-btn'
            alignSelf='center'
        >
            {btnText}
            <ArrowForwardIcon className='w-4 h-4 object-contain ' />
        </Link>
    </div>
);
const renderContent = {
    1: (
        <h1 className='sm:text-lg sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Armita</span>👋
            <br />A Front-End Developer
        </h1>
    ),
    2: (
        <InfoBox
            text='Worked with great Companies and picked up many skills along the way.'
            link='./About'
            btnText='Learn more'
        />
    ),
    3: (
        <div className='mx-5 relative flex text-white flex-col  max-w-xl neo-brutalism-blue p-8  px-8'>
            <p className='font-medium sm:text-lg text-center'>
                I have honed my skills in crafting visually appealing and highly
                functional web applications. Curious about the impact?
            </p>
        </div>
    ),
    4: (
        <InfoBox
            text='Need a project done or looking for a dev? I´m just a few keystrokes away'
            link='./Contact'
            btnText='Lets talk'
        />
    ),
};

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage];
};

export default HomeInfo;
