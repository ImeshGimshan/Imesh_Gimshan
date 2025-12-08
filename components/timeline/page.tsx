'use client';

import ScrollTimeline from '@/components/ui/ScrollTimeline';

export default function Timeline() {
    const timelineEvents = [
        {
            year: '2024 - Present',
            title: 'Undergraduate at NSBM Green University',
            description: 'Currently studying Software Engineering as an undergraduate, learning advanced concepts and working on projects to grow my technical skills.',
        },
        {
            year: '2025',
            title: 'Contributed to IEEE, ACDS, and FOSS',
            description: 'Contributed to IEEE, ACDS, and FOSS communities by helping build and improve web platforms and taking part in various club activities.',
        },
        {
            year: '2024',
            title: 'Junior Full-Stack Developer',
            description: 'Focused on building full-stack web applications and strengthening my skills across modern frontend and backend technologies.',
        },
    ];

    return (
        <section id="timeline" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="mb-10 sm:mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    <span className="text-white">My </span>
                    <span className="text-primary">Journey</span>
                </h2>
            </div>

            <ScrollTimeline events={timelineEvents} />
        </section>
    );
}
