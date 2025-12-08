'use client';

import TextType from '@/app/ui/TextType';
import SocialIconLink from '@/components/ui/SocialIconLink';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <>
            <section className='flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 max-w-7xl mx-auto'>
                {/* Text Content */}
                <div className='w-full lg:w-3/4 flex flex-col items-center lg:items-start text-center lg:text-left'>
                    <div className="text-primary text-sm sm:text-base md:text-xl lg:text-2xl font-medium tracking-wider">
                        <TextType
                            text={["Full Stack Developer", "UI/UX Enthusiast", "API Developer", "ML/AI Explorer", "Mobile App Developer"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </div>

                    <div className="mt-4 sm:mt-5 md:mt-6 ">
                        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-tight">
                            <span className="text-white">I Build </span>
                            <span className="text-primary">Creative</span>
                        </div>
                        <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mt-2 sm:mt-3 md:mt-4 lg:mt-5 border-b-2 sm:border-b-3 border-primary pb-6 sm:pb-8 md:pb-10 inline-block">
                            Digital Experiences
                        </div>
                    </div>

                    <div className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-normal mt-6 sm:mt-8 md:mt-10 max-w-xl lg:max-w-2xl leading-relaxed">
                        Full-stack developer crafting elegant solutions with modern technologies, attention to detail, and a passion for exceptional user experiences.
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-4 mt-6 sm:mt-8">
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
                </div>

                {/* Profile Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                    <div className="relative group">
                        <div className="relative rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden w-[280px] h-[340px] sm:w-[320px] sm:h-[380px] md:w-[360px] md:h-[420px] lg:w-[380px] lg:h-[450px] shadow-2xl border-2 border-primary/30 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-105">
                            <img
                                src="/assets/profile.png"
                                alt="Imesh Gimshan - Full Stack Developer"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex justify-center mt-5 animate-bounce">
                <div className="text-center">
                    <p className="text-primary mb-2">Scroll</p>
                    <ChevronDown className="text-primary mx-auto" size={24} />
                </div>
            </div>
        </>
    );
}