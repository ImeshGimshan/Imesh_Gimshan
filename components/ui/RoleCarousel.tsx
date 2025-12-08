'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import RoleCard from './RoleCard';

interface RoleCarouselProps {
    roles: string[];
    speed?: number;
}

export default function RoleCarousel({ roles, speed = 30 }: RoleCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const firstRowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !firstRowRef.current) return;

        const firstRow = firstRowRef.current;
        const cards = firstRow.children;
        
        if (cards.length === 0) return;

        // Calculate total width of one set of cards
        const cardsPerSet = roles.length;
        let setWidth = 0;
        
        for (let i = 0; i < cardsPerSet; i++) {
            setWidth += (cards[i] as HTMLElement).offsetWidth + 24; // 24 is gap
        }

        // Set initial position
        gsap.set(firstRow, { x: 0 });

        // Create seamless infinite loop
        const animation = gsap.to(firstRow, {
            x: -setWidth,
            duration: speed,
            ease: 'none',
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % setWidth)
            }
        });

        return () => {
            animation.kill();
        };
    }, [roles, speed]);

    // Duplicate roles multiple times for seamless loop
    const duplicatedRoles = [...roles, ...roles, ...roles, ...roles];

    return (
        <div className="relative w-full">
            {/* Left fade overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
            
            {/* Right fade overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
            
            {/* Carousel container */}
            <div ref={containerRef} className="overflow-hidden w-full">
                <div 
                    ref={firstRowRef}
                    className="flex gap-4 sm:gap-6"
                    style={{ width: 'fit-content' }}
                >
                    {duplicatedRoles.map((role, index) => (
                        <RoleCard key={`${role}-${index}`} title={role} />
                    ))}
                </div>
            </div>
        </div>
    );
}
