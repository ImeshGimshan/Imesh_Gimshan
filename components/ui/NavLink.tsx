interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    mobile?: boolean;
}

export default function NavLink({ href, children, onClick, mobile = false }: NavLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        if (onClick) {
            onClick();
        }
    };

    if (mobile) {
        return (
            <a
                href={href}
                onClick={handleClick}
                className="text-primary hover:text-cyan-300 hover:bg-foreground/5 transition-all text-sm sm:text-base md:text-lg py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-medium"
            >
                {children}
            </a>
        );
    }

    return (
        <a
            href={href}
            onClick={handleClick}
            className="text-primary hover:text-cyan-300 transition-colors text-sm xl:text-base relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-300 transition-all group-hover:w-full"></span>
        </a>
    );
}
