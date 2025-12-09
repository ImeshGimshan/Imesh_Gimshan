import { Calendar } from 'lucide-react';
import Card from './Card';

interface TimelineCardProps {
    year: string;
    title: string;
    description: string;
    isLeft?: boolean;
}

export default function TimelineCard({ year, title, description, isLeft = true }: TimelineCardProps) {
    return (
        <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} mb-8`}>
            <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                <Card className="p-6 sm:p-8 group">
                    <div className="flex items-center gap-2 text-primary text-sm sm:text-base mb-3">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{year}</span>
                    </div>
                    <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors">
                        {title}
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                        {description}
                    </p>
                </Card>
            </div>
        </div>
    );
}
