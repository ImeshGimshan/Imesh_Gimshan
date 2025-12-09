'use client';

import { useState, useEffect } from 'react';
import NavLink from '@/components/ui/NavLink';
import MenuButton from '@/components/ui/MenuButton';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            // Detect active section
            const sections = ['about', 'tech-stack', 'timeline', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 150; // Offset for header

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }

            // If at top, clear active section
            if (window.scrollY < 100) {
                setActiveSection('');
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
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
                    <a 
                        href="#hero" 
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-primary font-bold text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                        Imesh Gimshan
                    </a>

                    {/* Desktop Navigation - Hidden on mobile/tablet */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-12 font-medium">
                        <NavLink href="#about" isActive={activeSection === 'about'}>About</NavLink>
                        <NavLink href="#tech-stack" isActive={activeSection === 'tech-stack'}>Tech Stack</NavLink>
                        <NavLink href="#timeline" isActive={activeSection === 'timeline'}>My Journey</NavLink>
                        <NavLink href="#projects" isActive={activeSection === 'projects'}>Projects</NavLink>
                        <NavLink href="#contact" isActive={activeSection === 'contact'}>Contact</NavLink>
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
                            <NavLink href="#about" onClick={closeMenu} mobile isActive={activeSection === 'about'}>About</NavLink>
                            <NavLink href="#tech-stack" onClick={closeMenu} mobile isActive={activeSection === 'tech-stack'}>Tech Stack</NavLink>
                            <NavLink href="#timeline" onClick={closeMenu} mobile isActive={activeSection === 'timeline'}>My Journey</NavLink>
                            <NavLink href="#projects" onClick={closeMenu} mobile isActive={activeSection === 'projects'}>Projects</NavLink>
                            <NavLink href="#contact" onClick={closeMenu} mobile isActive={activeSection === 'contact'}>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}