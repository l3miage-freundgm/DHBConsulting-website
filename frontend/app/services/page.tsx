'use client'

import { Shield, Database, Settings } from 'lucide-react'
import { scrollToSection } from '../../lib/utils'
import { ContactSection } from '../../components/home/ContactSection'
import Image from 'next/image'


const services = [
    {
        icon: Database,
        title: "Rig-less Plug & Abandonment",
        description: "Comprehensive well decommissioning services with strategic planning and cost-effective execution.",
        features: [
            "Complete verification & assessment studies",
            "Cost impact analysis",
            "Execution strategy recommendations",
            "Final assessment reporting"
        ],
        benefits: [
            "Cost-effective solutions",
            "Regulatory compliance",
            "Environmental protection",
            "Risk mitigation"
        ],
        image: "/images/services/plug-abandonment.jpg"
    },
    {
        icon: Shield,
        title: "Inactive Wells Studies",
        description: "Strategic solutions for cost-effective rig-less reactivation of inactive wells through comprehensive analysis.",
        features: [
            "Well data verification & cleansing",
            "Integrity status assessment",
            "Cost-effective reactivation planning",
            "Risk assessment reporting"
        ],
        benefits: [
            "Asset optimization",
            "Cost reduction",
            "Production recovery",
            "Safety assurance"
        ],
        image: "/images/services/inactive-wells.jpg"
    },
    {
        icon: Settings,
        title: "Well Integrity Management Systems",
        description: "End-to-end development and implementation of comprehensive well integrity management systems.",
        features: [
            "System architecture design",
            "Team development & training",
            "Process optimization",
            "Performance monitoring"
        ],
        benefits: [
            "Enhanced safety",
            "Operational efficiency",
            "Regulatory compliance",
            "Cost optimization"
        ],
        image: "/images/services/integrity-management.jpg"
    }
    // Add other services...
]

export default function ServicesPage() {
    return (
        <main className="pt-32">
            {/* Hero Section */}
            <section className="relative py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <span className="inline-block text-sm tracking-widest text-gray-500 font-light mb-6">
                            OUR SERVICES
                        </span>
                        <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6">
                            Comprehensive Well Integrity Solutions
                        </h1>
                        <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                            Expert well integrity management services backed by three decades of industry experience and academic excellence.
                        </p>
                        <button
                            onClick={() => scrollToSection('consultation')}
                            className="px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm tracking-widest font-light"
                        >
                            DISCUSS YOUR NEEDS
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div key={index} className="mb-24 last:mb-0">
                                <div className="grid md:grid-cols-2 gap-16 items-center">
                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-gray-50 rounded-lg">
                                                <Icon className="h-8 w-8 text-gray-900" />
                                            </div>
                                            <h2 className="text-2xl font-light text-gray-900">
                                                {service.title}
                                            </h2>
                                        </div>
                                        <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                                    Key Features
                                                </h3>
                                                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                                                    {service.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                                            <span className="text-gray-600 font-light">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                                    Benefits
                                                </h3>
                                                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                                                    {service.benefits.map((benefit, idx) => (
                                                        <li key={idx} className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                                            <span className="text-gray-600 font-light">{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-100">
                                        {/* Replace with actual service images */}
                                        <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-100">
                                            {service.image ? (
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Icon className="h-16 w-16 text-gray-300" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl font-light text-gray-900 mb-6">
                            Our Approach
                        </h2>
                        <p className="text-lg text-gray-600 font-light">
                            We follow a systematic methodology to ensure exceptional results in every project.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Assessment",
                                description: "Comprehensive evaluation of current systems and requirements"
                            },
                            {
                                step: "02",
                                title: "Strategy",
                                description: "Development of tailored solutions and implementation plans"
                            },
                            {
                                step: "03",
                                title: "Execution",
                                description: "Professional implementation with continuous monitoring"
                            },
                            {
                                step: "04",
                                title: "Optimization",
                                description: "Ongoing support and performance enhancement"
                            }
                        ].map((phase, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                                    <div className="text-3xl font-light text-gray-300 mb-4">
                                        {phase.step}
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                        {phase.title}
                                    </h3>
                                    <p className="text-gray-600 font-light">
                                        {phase.description}
                                    </p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-1/2 right-0 w-8 h-px bg-gray-300 translate-x-4" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
            <ContactSection />
        </main>
    )
}