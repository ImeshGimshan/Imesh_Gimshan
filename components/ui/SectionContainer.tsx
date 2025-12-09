interface SectionContainerProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
}

export default function SectionContainer({ id, children, className = "" }: SectionContainerProps) {
    return (
        <section
            id={id}
            className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}
        >
            {children}
        </section>
    );
}
