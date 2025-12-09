interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    mobile?: boolean;
    isActive?: boolean;
}

export default function NavLink({ href, children, onClick, mobile = false, isActive = false }: NavLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        // Close menu first if mobile
        if (onClick) {
            onClick();
        }
        
        // Add delay to allow menu to close before scrolling
        setTimeout(() => {
            const targetId = href.replace('#', '');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = mobile ? 80 : 100; // Account for sticky header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, mobile ? 300 : 0); // Delay for mobile to let menu close
    };

    if (mobile) {
        return (
            <a
                href={href}
                onClick={handleClick}
                className={`transition-all text-sm sm:text-base md:text-lg py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-medium ${
                    isActive 
                        ? 'text-cyan-300 bg-primary/10 border-l-2 border-primary' 
                        : 'text-primary hover:text-cyan-300 hover:bg-foreground/5'
                }`}
            >
                {children}
            </a>
        );
    }

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`transition-colors text-sm xl:text-base relative group ${
                isActive ? 'text-cyan-300' : 'text-primary hover:text-cyan-300'
            }`}
        >
            {children}
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-300 transition-all ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
        </a>
    );
}
