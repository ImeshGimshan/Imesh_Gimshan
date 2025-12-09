'use client';

import RoleCarousel from '@/components/ui/RoleCarousel';

export default function About() {
    const roles = [
        'Backend Developer',
        'Frontend Developer',
        'AI / ML Developer',
        'Mobile App Developer',
        'DevOps Engineer',
        'Full Stack Developer',
    ];

    return (
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="mb-10 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    <span className="text-white">Who </span>
                    <span className="text-primary">I Am</span>
                </h2>
            </div>

            <div className="max-w-6xl items-center justify-center mx-auto">
                <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 sm:mb-10 text-center">
                    I'm a <span className="text-primary font-medium">Software Engineering</span> undergraduate passionate about <span className="text-primary font-medium">Full Stack Development</span>, <span className="text-primary font-medium">Mobile Application Development</span>, <span className="text-primary font-medium">AI</span>, and <span className="text-primary font-medium">Machine Learning</span>. I enjoy building dynamic, user-friendly <span className="text-primary font-medium">web and mobile applications</span> while exploring intelligent, data-driven solutions. I'm also expanding my skills in <span className="text-primary font-medium">DevOps</span> and modern development workflows. As a full-stack developer, I love turning ideas into functional, scalable, and meaningful digital experiences.
                </p>
            </div>

            {/* Role cards section */}
            <div className="mt-16 sm:mt-20">
                <RoleCarousel roles={roles} speed={60} />
            </div>
        </section>
    )
}