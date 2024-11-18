import { Award, BarChart3, Globe2, Users2 } from 'lucide-react'
import Image from 'next/image'
import { scrollToSection, textures } from '../../lib/utils'

export function AchievementsSection() {
    return (
        <section className="py-24 bg-white" style={textures.dots}>
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-3xl mb-20">
                    <span className="inline-block text-sm tracking-widest text-gray-500 font-light mb-6">
                        INDUSTRY IMPACT
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6">
                        Setting New Standards in Well Integrity Management
                    </h2>
                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                        Through strategic innovation and technical excellence, we&apos;ve transformed well integrity practices
                        across major energy operations worldwide.
                    </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {[
                        {
                            icon: Globe2,
                            metric: "30+",
                            label: "Years of Global Expertise",
                            detail: "Leading well integrity innovations across continents"
                        },
                        {
                            icon: BarChart3,
                            metric: "$30M+",
                            label: "Project Value Delivered",
                            detail: "In successful well integrity solutions"
                        },
                        {
                            icon: Users2,
                            metric: "4,500+",
                            label: "Wells Managed",
                            detail: "Across diverse operational environments"
                        },
                        {
                            icon: Award,
                            metric: "50+",
                            label: "Major Projects",
                            detail: "For leading energy companies globally"
                        }
                    ].map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-gray-50 p-8 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex flex-col h-full">
                                    <Icon className="w-6 h-6 text-gray-400 mb-6" />
                                    <div className="text-3xl font-light text-gray-900 mb-3">
                                        {item.metric}
                                    </div>
                                    <div className="text-sm font-medium text-gray-900 mb-2">
                                        {item.label}
                                    </div>
                                    <p className="text-sm text-gray-500 font-light">
                                        {item.detail}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Featured Achievement */}
                <div className="relative bg-gray-50 rounded-lg p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-sm tracking-widest text-gray-500 font-light mb-6">
                                FEATURED ACHIEVEMENT
                            </span>
                            <h3 className="text-2xl font-light text-gray-900 mb-6">
                                Transforming ADNOC&apos;s Well Integrity Management
                            </h3>
                            <p className="text-gray-600 font-light mb-8 leading-relaxed">
                                Led the development and implementation of comprehensive well integrity management
                                systems for over 4,500 wells, resulting in enhanced safety protocols and
                                operational efficiency.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                {["Risk Mitigation", "Efficiency Improvement", "Cost Optimization"].map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white text-sm text-gray-600 font-light rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[300px] bg-white rounded-lg overflow-hidden">
                            <Image
                                src="/images/achievement-feature.jpg"
                                alt="ADNOC Well Integrity Project"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <p className="text-gray-600 font-light mb-6">
                        Discover how our expertise can enhance your well integrity operations
                    </p>
                    <button onClick={() => scrollToSection('consultation')}
                        className="px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm tracking-widest font-light">
                        SCHEDULE A CONSULTATION
                    </button>
                </div>
            </div>
            
        </section>
    )
}