interface MenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {
    return (
        <button
            onClick={onClick}
            className="lg:hidden text-primary p-1.5 sm:p-2 hover:bg-foreground/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
        >
            <svg
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0)' }}
            >
                {isOpen ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                )}
            </svg>
        </button>
    );
}
