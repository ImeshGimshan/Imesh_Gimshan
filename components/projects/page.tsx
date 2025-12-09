'use client';

import { useRef } from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Projects() {
    const autoplayPlugin1 = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );
    
    const autoplayPlugin2 = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );

    const projects = [
        {
            title: 'Caffeine Brew',
            subtitle: '(E-Commerce platform)',
            description: 'A online coffee shop',
            image: '/assets/projects/caffienebrew.png',
            tags: ['Php', 'MySQL', 'JS', 'CSS'],
            demoLink: 'https://demo-caffeine.com',
            githubLink: 'https://github.com/ImeshGimshan/caffeine-brew',
        },
        {
            title: 'Hyper POS',
            subtitle: '(Enterprise application)',
            description: 'Online and Real time point of sales System',
            image: '/assets/projects/hyperpos.png',
            tags: ['Spring', 'MySQL', 'React', 'Tailwind'],
            demoLink: 'https://demo-hyperpos.com',
            githubLink: 'https://github.com/ImeshGimshan/hyper-pos',
        },
        {
            title: 'Bidzy',
            subtitle: '(Auction platform)',
            description: 'Real time auction and bidding platform',
            image: '/assets/projects/bidzy.png',
            tags: ['Net', 'MSSQL', 'React', 'Tailwind'],
            demoLink: 'https://demo-bidzy.com',
            githubLink: 'https://github.com/ImeshGimshan/bidzy',
        },
        {
            title: 'Caffeine Brew',
            subtitle: '(E-Commerce platform)',
            description: 'A online coffee shop',
            image: '/assets/projects/caffienebrew.png',
            tags: ['Php', 'MySQL', 'JS', 'CSS'],
            demoLink: 'https://demo-caffeine.com',
            githubLink: 'https://github.com/ImeshGimshan/caffeine-brew',
        },
        {
            title: 'Hyper POS',
            subtitle: '(Enterprise application)',
            description: 'Online and Real time point of sales System',
            image: '/assets/projects/hyperpos.png',
            tags: ['Spring', 'MySQL', 'React', 'Tailwind'],
            demoLink: 'https://demo-hyperpos.com',
            githubLink: 'https://github.com/ImeshGimshan/hyper-pos',
        },
        {
            title: 'Bidzy',
            subtitle: '(Auction platform)',
            description: 'Real time auction and bidding platform',
            image: '/assets/projects/bidzy.png',
            tags: ['Net', 'MSSQL', 'React', 'Tailwind'],
            demoLink: 'https://demo-bidzy.com',
            githubLink: 'https://github.com/ImeshGimshan/bidzy',
        }

    ];

    const contributedProjects = [
        {
            title: 'Nexora',
            subtitle: '(ACDS - NSBM)',
            description: 'Nexora 1.0 is an inter-university hackathon',
            image: '/assets/projects/nexora.png',
            tags: ['React', 'MySQL', 'JS', 'CSS'],
            demoLink: 'https://nexora.acds.lk',
            githubLink: 'https://github.com/ACDS/nexora',
        },
        {
            title: 'IEEE-Day(2025)',
            subtitle: '',
            description: 'Online and Real time point of sales System',
            image: '/assets/projects/ieeeday.png',
            tags: ['Spring', 'MySQL', 'React', 'Tailwind'],
            demoLink: 'https://ieeeday2025.com',
            githubLink: 'https://github.com/IEEE/day-2025',
        },
        {
            title: 'Open Squid',
            subtitle: '',
            description: 'Real time auction and bidding platform',
            image: '/assets/projects/opensquid.png',
            tags: ['Net', 'MSSQL', 'React', 'Tailwind'],
            demoLink: 'https://opensquid.org',
            githubLink: 'https://github.com/opensquid/platform',
        },
    ];

    return (
        <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
            {/* Projects Section */}
            <div className="mb-16 sm:mb-20">
                <div className="mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        <span className="text-primary">Projects</span>
                    </h2>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[autoplayPlugin1.current]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {projects.map((project, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <ProjectCard {...project} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            {/* Contributed Projects Section */}
            <div>
                <div className="mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        <span className="text-white">Contributed </span>
                        <span className="text-primary">Projects</span>
                    </h2>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[autoplayPlugin2.current]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {contributedProjects.map((project, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <ProjectCard {...project} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}
