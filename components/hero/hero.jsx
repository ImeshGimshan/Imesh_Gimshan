'use client';
import '@/app/globals.css';
import RotatingText from '@/app/ui/RotatingText';
import ProfileCard from '@/app/ui/ProfileCard';
import { MdDownload } from 'react-icons/md';
import { MdPermContactCalendar } from 'react-icons/md';
import { useRef } from 'react';
import {gsap} from 'gsap';

export default function Hero() {
    const downloadBtnRef = useRef(null);
    const contactBtnRef = useRef(null);

    const handleDownloadHover = () => {
        gsap.to(downloadBtnRef.current, {
            scale: 1.05,
            boxShadow: "0 0 20px #57C3AD",
            duration: 0.3,
            ease: "back.out(2)",
        });
    };
    const handleDownloadLeave = () => {
        gsap.to(downloadBtnRef.current, {
            scale: 1,
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const handleContactHover = () => {
        gsap.to(contactBtnRef.current, {
            x: 5,
            backgroundImage: "linear-gradient(to right, #57C3AD, #009698)",
            duration: 0.40,
            ease: "power3.out",
        });
    };
    const handleContactLeave = () => {
        gsap.to(contactBtnRef.current, {
            x: 0,
            backgroundImage: "linear-gradient(to right, #6542E7, #9141E7)",
            duration: 0.35,
            ease: "power3.inOut",
        });
    };
    return (
        <section className="flex flex-col p-6 mt-20 md:mt-0 items-center justify-center min-h-screen">
            <div className="flex flex-col bg-glass backdrop-blur-sm max-w-7xl w-full p-6 md:p-8 border-1 border-white/30 rounded-4xl shadow-4xl">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full gap-10 lg:gap-16">
                    <div className="flex flex-col items-center justify-center w-full lg:w-2/3 md:items-start md:justify-start">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-text p-2 bg-clip-text text-center md:text-left md:p-0">
                                Hi !
                            </h1>
                            <h1 className="text-4xl md:text-6xl font-poppins font-bold bg-gradient-to-r from-text to-blur
                                            bg-clip-text text-transparent text-center p-1 md:p-0 md:text-left">
                                I'm
                            </h1>
                            <h1 className="text-4xl md:text-6xl font-gothic font-bold bg-gradient-to-r from-primary to-secondary 
                                            bg-clip-text text-transparent text-center md:text-left">
                                Imesh Gimshan
                            </h1>
                        </div>
                        <div className="mt-8">
                            <RotatingText
                                texts={[
                                    'Fullstack Developer',
                                    'UX / UI Designer',
                                    'Tech Enthusiast',
                                    'Open Source Contributor',
                                    'Problem Solver',
                                    'Creative Thinker',
                                ]}
                                mainClassName="inline-block w-[250px] md:w-[430px] bg-gradient-to-r from-blur/50 to-text/50 text-white/70 
                                                font-gothic font-bold border-1 border-white/30 rounded-lg px-5 py-4 text-md md:text-3xl text-center"
                                staggerFrom="last"
                                initial={{ y: '100%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '-120%' }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden"
                                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                                rotationInterval={5000}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 mt-8 w-full md:w-auto items-center md:items-start">
                            <button
                                ref={downloadBtnRef}
                                type="button"
                                onMouseEnter={handleDownloadHover}
                                onMouseLeave={handleDownloadLeave}
                                className="bg-gradient-to-r from-primary/90 to-secondary/90 text-black/70 font-semibold px-6 py-3 
                                            rounded-lg shadow-lg transition-colors duration-500 w-full md:w-auto"
                            >
                                <MdDownload className="inline-block mr-2 transition-transform duration-500 group-hover:animate-bounce" />
                                Download CV
                            </button>
                            <button
                                ref={contactBtnRef}
                                type="button"
                                onMouseEnter={handleContactHover}
                                onMouseLeave={handleContactLeave}
                                className="bg-gradient-to-r from-primary/90 to-secondary/90 text-black/70 font-semibold px-6 py-3 
                                            rounded-lg shadow-lg transition-colors duration-500 w-full md:w-auto"
                            >
                                <MdPermContactCalendar className="inline-block mr-2 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 items-center justify-center mt-10 lg:mt-0">
                        <ProfileCard
                            name="Imesh Gimshan"
                            title="Software Engineer"
                            status="Online"
                            contactText="Contact Me"
                            avatarUrl="../../assets/profile.png"
                            showUserInfo={false}
                            enableTilt={true}
                            enableMobileTilt={false}
                            onContactClick={() => console.log('Contact clicked')}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
