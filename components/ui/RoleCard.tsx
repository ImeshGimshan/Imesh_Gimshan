import Card from './Card';

interface RoleCardProps {
    title: string;
}

export default function RoleCard({ title }: RoleCardProps) {
    return (
        <Card className="px-6 py-4 sm:px-8 sm:py-5 flex-shrink-0">
            <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-semibold text-center whitespace-nowrap">
                {title}
            </h3>
        </Card>
    );
}
