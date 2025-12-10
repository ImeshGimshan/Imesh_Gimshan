'use client';

import { useRef, useState, useEffect } from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import { projectStorage, Project } from '@/lib/storage';
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

    const [projects, setProjects] = useState<Project[]>([]);
    const [contributedProjects, setContributedProjects] = useState<Project[]>([]);

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = async () => {
        const personal = await projectStorage.getByType('personal');
        const contributed = await projectStorage.getByType('contributed');
        setProjects(personal);
        setContributedProjects(contributed);
    };

    return (
        <SectionContainer id="projects">
            {/* Projects Section */}
            <div className="mb-16 sm:mb-20">
                <div className="mb-10 sm:mb-12 md:mb-16">
                    <SectionHeading>
                        <SectionHeading.Part primary>Projects</SectionHeading.Part>
                    </SectionHeading>
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
                    <SectionHeading>
                        <SectionHeading.Part>Contributed </SectionHeading.Part>
                        <SectionHeading.Part primary>Projects</SectionHeading.Part>
                    </SectionHeading>
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
        </SectionContainer>
    );
}
