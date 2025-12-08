interface RoleCardProps {
    title: string;
}

export default function RoleCard({ title }: RoleCardProps) {
    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl px-6 py-4 sm:px-8 sm:py-5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 flex-shrink-0">
            <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-semibold text-center whitespace-nowrap">
                {title}
            </h3>
        </div>
    );
}
