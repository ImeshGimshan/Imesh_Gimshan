'use client';

import { useState, useEffect } from 'react';
import NavLink from '@/components/ui/NavLink';
import MenuButton from '@/components/ui/MenuButton';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className={`sticky top-0 z-50 flex justify-center transition-all duration-300 ${
            scrolled ? 'pt-0 pb-2 px-3 sm:pb-3 sm:px-4 md:pb-4 md:px-6 lg:pb-6 lg:px-8' : 'py-3 px-3 sm:py-4 sm:px-4 md:py-6 md:px-8 lg:py-10 lg:px-12'
        }`}>
            <nav className={`bg-foreground/5 w-full lg:w-3/4 backdrop-blur-md transition-all duration-300 ${
                scrolled ? 'shadow-lg rounded-b-2xl sm:rounded-b-3xl md:rounded-b-[40px] lg:rounded-b-[50px]' : 'rounded-2xl sm:rounded-3xl md:rounded-[40px] lg:rounded-[50px]'
            }`}>
                <div className="flex items-center justify-between max-w-7xl mx-auto px-3 py-3 sm:px-4 sm:py-3.5 md:px-6 md:py-4 lg:px-8 lg:py-5">
                    {/* Logo - Responsive sizing */}
                    <div className="text-primary font-bold text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap">
                        Imesh Gimshan
                    </div>

                    {/* Desktop Navigation - Hidden on mobile/tablet */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-12 font-medium">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#tech-stack">Tech Stack</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </div>

                    {/* Mobile/Tablet Menu Button */}
                    <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>

                {/* Mobile/Tablet Menu - Smooth transition */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-5 pt-2 border-t border-foreground/10">
                        <div className="flex flex-col gap-1">
                            <NavLink href="#about" onClick={closeMenu} mobile>About</NavLink>
                            <NavLink href="#tech-stack" onClick={closeMenu} mobile>Tech Stack</NavLink>
                            <NavLink href="#projects" onClick={closeMenu} mobile>Projects</NavLink>
                            <NavLink href="#contact" onClick={closeMenu} mobile>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}