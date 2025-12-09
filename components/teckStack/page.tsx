'use client';

import LogoLoop from '@/app/ui/LogoLoop';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Teckstack() {
    const techLogos = [
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', alt: 'NestJS' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', alt: 'Spring Boot' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', alt: 'ASP.NET' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', alt: 'Next.js' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', alt: 'Tailwind CSS' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', alt: 'Firebase' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', alt: 'Docker' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma' },
    ];

    return (
        <SectionContainer id="tech-stack">
            <div className="mb-10 sm:mb-12 md:mb-16">
                <SectionHeading>
                    <SectionHeading.Part>Tech </SectionHeading.Part>
                    <SectionHeading.Part primary>Stack</SectionHeading.Part>
                    <SectionHeading.Part> and </SectionHeading.Part>
                    <SectionHeading.Part primary>Tools</SectionHeading.Part>
                </SectionHeading>
            </div>

            <div className="relative">
                <LogoLoop 
                    logos={techLogos}
                    speed={30}
                    direction="right"
                    logoHeight={60}
                    gap={40}
                    pauseOnHover={true}
                    scaleOnHover={true}
                    fadeOut={true}
                    fadeOutColor="rgba(10, 10, 10, 1)"
                />
            </div>
        </SectionContainer>
    )
}