interface SectionHeadingProps {
    children: React.ReactNode;
    className?: string;
}

interface SectionHeadingPartProps {
    children: React.ReactNode;
    primary?: boolean;
}

const SectionHeadingPart = ({ children, primary = false }: SectionHeadingPartProps) => (
    <span className={primary ? "text-primary" : "text-white"}>{children}</span>
);

export default function SectionHeading({ children, className = "" }: SectionHeadingProps) {
    return (
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${className}`}>
            {children}
        </h2>
    );
}

SectionHeading.Part = SectionHeadingPart;
