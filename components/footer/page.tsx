'use client';

import SocialIconLink from '@/components/ui/SocialIconLink';
import NavLink from '@/components/ui/NavLink';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-white/5 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-primary font-bold text-xl sm:text-2xl mb-4">
                            Imesh Gimshan
                        </h3>
                        <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xs mx-auto md:mx-0">
                            Building innovative solutions and crafting exceptional digital experiences with passion and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h4 className="text-white font-semibold text-base sm:text-lg mb-4">
                            Quick Links
                        </h4>
                        <nav className="flex flex-col gap-2">
                            <a href="#about" className="text-white/70 hover:text-primary transition-colors text-sm sm:text-base">
                                About
                            </a>
                            <a href="#tech-stack" className="text-white/70 hover:text-primary transition-colors text-sm sm:text-base">
                                Tech Stack
                            </a>
                            <a href="#timeline" className="text-white/70 hover:text-primary transition-colors text-sm sm:text-base">
                                Timeline
                            </a>
                            <a href="#contact" className="text-white/70 hover:text-primary transition-colors text-sm sm:text-base">
                                Contact
                            </a>
                        </nav>
                    </div>

                    {/* Connect Section */}
                    <div className="text-center md:text-right">
                        <h4 className="text-white font-semibold text-base sm:text-lg mb-4">
                            Let's Connect
                        </h4>
                        <div className="flex gap-3 justify-center md:justify-end mb-4">
                            <SocialIconLink 
                                href="https://github.com/ImeshGimshan" 
                                icon={Github}
                                label="GitHub"
                            />
                            <SocialIconLink 
                                href="https://linkedin.com/in/imeshgimshan" 
                                icon={Linkedin}
                                label="LinkedIn"
                            />
                            <SocialIconLink 
                                href="mailto:imeshgimhan@outlook.com" 
                                icon={Mail}
                                label="Email"
                                external={false}
                            />
                        </div>
                        <a 
                            href="mailto:imeshgimhan@outlook.com" 
                            className="text-primary hover:text-cyan-300 transition-colors text-sm sm:text-base inline-block"
                        >
                            imeshgimhan@outlook.com
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-white/60 text-sm text-center sm:text-left">
                        © {currentYear} Imesh Gimshan. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-primary hover:text-cyan-300 transition-all duration-300 text-sm font-medium"
                        aria-label="Scroll to top"
                    >
                        <span>Back to Top</span>
                        <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        </footer>
    );
}
