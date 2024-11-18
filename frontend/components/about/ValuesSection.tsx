// components/sections/Values.tsx
import { Shield, Target, Users2, Lightbulb, Scale, Award } from 'lucide-react'

const values = [
    {
        icon: Shield,
        title: "Technical Excellence",
        description: "We maintain the highest standards of technical expertise, ensuring every solution is backed by proven methodologies and industry best practices.",
        color: "bg-blue-50"
    },
    {
        icon: Target,
        title: "Integrity & Trust",
        description: "Our commitment to transparency and ethical practices forms the foundation of lasting client relationships built on mutual trust.",
        color: "bg-gray-50"
    },
    {
        icon: Users2,
        title: "Knowledge Transfer",
        description: "We believe in empowering our clients through comprehensive training and knowledge sharing, ensuring sustainable long-term success.",
        color: "bg-blue-50"
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We continuously seek innovative solutions to complex challenges, leveraging cutting-edge technologies and methodologies.",
        color: "bg-gray-50"
    },
    {
        icon: Scale,
        title: "Professional Ethics",
        description: "We uphold the highest professional standards, ensuring compliance and safety in every aspect of our work.",
        color: "bg-blue-50"
    },
    {
        icon: Award,
        title: "Excellence in Delivery",
        description: "We are committed to delivering exceptional results that exceed expectations and create lasting value for our clients.",
        color: "bg-gray-50"
    }
] as const

interface ValueCardProps {
    icon: typeof values[number]['icon']
    title: string
    description: string
    color: string
}

const ValueCard = ({ icon: Icon, title, description, color }: ValueCardProps) => (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
        <div className={`${color} p-8 h-full transition-all duration-300 group-hover:bg-white`}>
            <div className="flex items-center gap-4 mb-6">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Icon className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                    {title}
                </h3>
            </div>
            <p className="text-gray-600 font-light">
                {description}
            </p>
        </div>
        <div className="absolute inset-0 border-2 border-transparent transition-all duration-300 group-hover:border-gray-200 rounded-lg" />
    </div>
)

export function ValuesSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-block text-sm tracking-widest text-gray-500 font-light mb-6">
                        OUR VALUES
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                        The Principles That Guide Us
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <ValueCard
                            key={index}
                            icon={value.icon}
                            title={value.title}
                            description={value.description}
                            color={value.color}
                        />
                    ))}
                </div>

                {/* Impact Statement */}
                <div className="mt-16 p-8 bg-gray-50 rounded-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-lg text-gray-600 font-light italic">
                            &quot;Our values reflect our commitment to excellence and innovation in well integrity management,
                            driving sustainable solutions that protect assets and optimize operations.&quot;
                        </p>
                        <div className="mt-4 text-sm text-gray-500 font-medium">
                            Dr. Hamdi Daghmouni
                        </div>
                        <div className="text-sm text-gray-500">
                            Founder, BHD Consulting
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}