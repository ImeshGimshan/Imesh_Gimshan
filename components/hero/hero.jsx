'use client';
import '@/app/globals.css';
import RotatingText from '@/app/ui/RotatingText';
import ProfileCard from '@/app/ui/ProfileCard';
import { MdDownload } from 'react-icons/md';
import { MdPermContactCalendar } from 'react-icons/md';

export default function Hero() {
    return (
        <section className="flex flex-col p-6 mt-20 md:mt-0 items-center justify-center min-h-screen">
            <div className="flex flex-col bg-glass backdrop-blur-sm max-w-7xl w-full p-6 md:p-8 border-1 border-white/30 rounded-4xl shadow-4xl">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full gap-10 lg:gap-16">
                    <div className="flex flex-col items-center justify-center w-full lg:w-2/3 md:items-start md:justify-start">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-text p-3 bg-clip-text text-center md:text-left md:p-0">
                                Hi !
                            </h1>
                            <h1 className="text-4xl md:text-6xl font-gothic font-semibold bg-gradient-to-r from-primary to-secondary 
                                            bg-clip-text text-transparent text-center md:text-left">
                                I'm Imesh Gimshan
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
                                mainClassName="inline-block w-[250px] md:w-lg bg-gradient-to-r from-blur/50 to-text/50 text-white/70 
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
                                type="button"
                                className="bg-gradient-to-r from-primary/90 to-secondary/90 text-black/70 font-semibold px-6 py-3 
                                            rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-text hover:to-blur transition-colors 
                                            duration-500 w-full md:w-auto transition-transform hover:scale-105 group"
                            >
                                <MdDownload className="inline-block mr-2 transition-transform duration-500 group-hover:animate-bounce" />
                                Download CV
                            </button>
                            <button
                                type="button"
                                className="bg-gradient-to-r from-primary/90 to-secondary/90 text-black/70 font-semibold px-6 py-3 
                                            rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-text hover:to-blur transition-colors 
                                            duration-500 w-full md:w-auto transition-transform hover:scale-105 group"
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
