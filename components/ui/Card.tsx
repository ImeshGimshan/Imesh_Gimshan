import { cn } from '@/lib/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    onClick?: () => void;
}

export default function Card({ children, className = "", hover = true, onClick }: CardProps) {
    return (
        <div
            className={cn(
                "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl",
                hover && "hover:bg-white/10 hover:border-primary/30 transition-all duration-300",
                onClick && "cursor-pointer",
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
