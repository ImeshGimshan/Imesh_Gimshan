'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
}

interface ScrollTimelineProps {
    events: TimelineEvent[];
}

export default function ScrollTimeline({ events }: ScrollTimelineProps) {
    const timelineRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!timelineRef.current || !lineRef.current) return;

        const ctx = gsap.context(() => {
            // Animate the timeline line
            gsap.to(lineRef.current, {
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 1,
                },
                height: '100%',
                ease: 'none',
            });

            // Animate each timeline item
            const items = timelineRef.current?.querySelectorAll('.timeline-item');
            items?.forEach((item, index) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: 1,
                    },
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                });

                // Animate the dots
                const dot = item.querySelector('.timeline-dot');
                if (dot) {
                    gsap.from(dot, {
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 75%',
                            toggleActions: 'play none none none',
                        },
                        scale: 0,
                        duration: 0.5,
                        ease: 'back.out(1.7)',
                    });
                }
            });
        }, timelineRef);

        return () => ctx.revert();
    }, [events]);

    return (
        <div ref={timelineRef} className="relative">
            {/* Center Line Container */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 hidden md:block">
                {/* Background line */}
                <div className="absolute inset-0 bg-white/10" />
                {/* Animated line */}
                <div
                    ref={lineRef}
                    className="absolute inset-0 bg-gradient-to-b from-indigo-700 to-primary"
                    style={{ height: '0%' }}
                />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-0">
                {events.map((event, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`timeline-item relative flex ${
                                isLeft ? 'md:justify-start' : 'md:justify-end'
                            } mb-16 md:mb-24`}
                        >
                            {/* Content Card */}
                            <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                                <Card className="p-6 sm:p-8 group">
                                    <div className="flex items-center gap-2 text-primary text-sm sm:text-base mb-3">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                        <span className="font-medium">{event.year}</span>
                                    </div>
                                    <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                                        {event.description}
                                    </p>
                                </Card>
                            </div>

                            {/* Center Dot */}
                            <div className="timeline-dot absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                                <div className="w-6 h-6 rounded-full bg-primary shadow-lg shadow-primary/50 border-4 border-background relative z-10">
                                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
