import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mui,
    nextjs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    apsy,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },

    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Front-end Developer",
        company_name: "Apsy",
        icon: apsy,
        iconBg: "#c4dff2",
        date: "May 2024 - Currently Working",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Front-end Developer Intern",
        company_name: "Apsaaz",
        // icon: apsaaz_logo,
        iconBg: "#fff6d3",
        date: "October 2023 - May 2024",
        points: [
            "Developed and maintained responsive web applications using React.js and Next.js, improving user experience and performance.",
            "Enhanced proficiency in HTML5 and CSS3 by implementing complex layouts, ensuring cross-browser compatibility, and optimizing code for accessibility.",
            "Utilized Material-UI to create and style reusable components, ensuring a consistent and modern design system across the application.",
            "Integrated React Query for efficient data fetching, caching, and synchronization, improving application responsiveness and user engagement.",
            "Collaborated with the development team to implement best practices in coding standards, version control, and agile methodologies, contributing to a smooth development process.",
            "Participated in code reviews and debugging sessions, gaining hands-on experience in identifying and fixing front-end issues.",
        ],
    },
];

export const socialLinks = [
    {
        name: "Contact",
        iconUrl: contact,
        link: "/contact",
    },
    {
        name: "GitHub",
        iconUrl: github,
        link: "https://github.com/Armita2oo3",
    },
    {
        name: "LinkedIn",
        iconUrl: linkedin,
        link: "www.linkedin.com/in/armita-mir-503150263",
    },
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: "btn-back-red",
        name: "Amazon Price Tracker",
        description:
            "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
        link: "https://github.com/adrianhajdin/pricewise",
    },
    {
        iconUrl: threads,
        theme: "btn-back-green",
        name: "Full Stack Threads Clone",
        description:
            'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: "https://github.com/adrianhajdin/threads",
    },
    {
        iconUrl: car,
        theme: "btn-back-blue",
        name: "Car Finding App",
        description:
            "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
        link: "https://github.com/adrianhajdin/project_next13_car_showcase",
    },
    {
        iconUrl: snapgram,
        theme: "btn-back-pink",
        name: "Full Stack Instagram Clone",
        description:
            "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
        link: "https://github.com/adrianhajdin/social_media_app",
    },
    {
        iconUrl: estate,
        theme: "btn-back-black",
        name: "Real-Estate Application",
        description:
            "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
        link: "https://github.com/adrianhajdin/projects_realestate",
    },
    {
        iconUrl: summiz,
        theme: "btn-back-yellow",
        name: "AI Summarizer Application",
        description:
            "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
        link: "https://github.com/adrianhajdin/project_ai_summarizer",
    },
];
