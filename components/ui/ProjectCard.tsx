import { ExternalLink, Github } from 'lucide-react';
import Card from './Card';

interface ProjectCardProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tags: string[];
    demoLink?: string;
    githubLink?: string;
}

export default function ProjectCard({
    title,
    subtitle,
    description,
    image,
    tags,
    demoLink,
    githubLink,
}: ProjectCardProps) {
    return (
        <Card className="group overflow-hidden flex-shrink-0 w-full h-full p-0">
            {/* Project Image */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
                <h3 className="text-primary text-lg sm:text-xl font-bold mb-1 group-hover:text-cyan-300 transition-colors">
                    {title}
                </h3>
                <p className="text-cyan-300 text-xs sm:text-sm mb-3">
                    {subtitle}
                </p>
                <p className="text-white/70 text-xs sm:text-sm mb-4 line-clamp-2">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-md bg-primary/20 text-primary border border-primary/30"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/50 hover:border-primary rounded-lg text-primary text-sm font-medium transition-all duration-300"
                        >
                            <span>Demo</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-primary rounded-lg text-white text-sm font-medium transition-all duration-300"
                        >
                            <span>GitHub</span>
                            <Github className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>
        </Card>
    );
}
