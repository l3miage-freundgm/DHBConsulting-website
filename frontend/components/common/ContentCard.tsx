// src/components/common/ContentCard.tsx
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"  // assuming you have this from shadcn/ui setup

interface ContentCardProps {
    icon?: React.ComponentType<{ className?: string }>
    title: string
    description: string
    details?: string[]
    isActive?: boolean
    className?: string
}

export function ContentCard({
    icon: Icon,
    title,
    description,
    details = [],
    isActive = false,
    className
}: ContentCardProps) {
    return (
        <div className={cn(
            "relative bg-white p-8 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
            className
        )}>
            {Icon && (
                <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                </div>
            )}

            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>

            {details.length > 0 && (
                <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    isActive ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                )}>
                    <ul className="mt-4 space-y-2">
                        {details.map((detail, index) => (
                            <li key={index} className="text-gray-600 text-sm flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                                {detail}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <Button variant="outline" size="sm">Learn More</Button>
                    </div>
                </div>
            )}
        </div>
    )
}