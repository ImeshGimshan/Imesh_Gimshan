import { LucideIcon } from 'lucide-react';

interface SocialIconLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    external?: boolean;
}

export default function SocialIconLink({ href, icon: Icon, label, external = true }: SocialIconLinkProps) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-primary/20 border border-white/20 hover:border-primary rounded-lg flex items-center justify-center transition-all duration-300 group"
        >
            <Icon className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-300" />
        </a>
    );
}
