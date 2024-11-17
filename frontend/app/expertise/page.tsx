'use client'

import Image from 'next/image'
import { Shield, Search, FileCheck, Users2, Drill, Microchip } from 'lucide-react'
import { scrollToSection } from '../../lib/utils'
import { ContactSection } from '../../components/home/ContactSection'

export default function ExpertisePage() {
    return (
        <main className="pt-32">
            {/* Hero Section */}
            <section className="relative py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <span className="inline-block text-sm tracking-widest text-gray-500 font-light mb-6">
                            OUR EXPERTISE
                        </span>
                        <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6">
                            Technical Excellence in Well Integrity
                        </h1>
                        <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                            Three decades of specialized experience in well integrity management, drilling operations, and technical leadership across global energy projects.
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

            {/* Core Competencies */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-2xl font-light text-gray-900 mb-8">Core Competencies</h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Well Integrity Management",
                                        description: "Comprehensive well lifecycle management and optimization"
                                    },
                                    {
                                        title: "Drilling & Workover",
                                        description: "Expert supervision of drilling operations and workover activities"
                                    },
                                    {
                                        title: "Safety & Compliance",
                                        description: "Regulatory compliance and HSE policy implementation"
                                    },
                                    {
                                        title: "Technical Leadership",
                                        description: "Strategic planning and team development"
                                    }
                                ].map((competency, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-3" />
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900 mb-1">
                                                {competency.title}
                                            </h3>
                                            <p className="text-gray-600 font-light">
                                                {competency.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="/images/expertise-1.jpg"
                                alt="Technical expertise in action"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specializations */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-light text-gray-900 mb-12">Technical Specializations</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Well Integrity & Safety",
                                points: [
                                    "WIMS development & implementation",
                                    "Well barrier verification",
                                    "Risk assessment protocols",
                                    "Emergency response planning"
                                ]
                            },
                            {
                                icon: Drill,
                                title: "Drilling & Operations",
                                points: [
                                    "Drilling program development",
                                    "Workover operations",
                                    "Completion optimization",
                                    "Production enhancement"
                                ]
                            },
                            {
                                icon: Search,
                                title: "Audits & Compliance",
                                points: [
                                    "Well integrity audits",
                                    "Regulatory compliance",
                                    "Quality management systems",
                                    "Performance verification"
                                ]
                            },
                            {
                                icon: FileCheck,
                                title: "Technical Standards",
                                points: [
                                    "Standards development",
                                    "Procedure optimization",
                                    "Best practice implementation",
                                    "Documentation systems"
                                ]
                            },
                            {
                                icon: Microchip,
                                title: "Technical Innovation",
                                points: [
                                    "New technology integration",
                                    "Process optimization",
                                    "Efficiency improvements",
                                    "Cost reduction strategies"
                                ]
                            },
                            {
                                icon: Users2,
                                title: "Team Development",
                                points: [
                                    "Technical training programs",
                                    "Capability building",
                                    "Knowledge transfer",
                                    "Performance monitoring"
                                ]
                            }
                        ].map((specialization, index) => {
                            const Icon = specialization.icon
                            return (
                                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-2 bg-gray-50 rounded-lg">
                                            <Icon className="h-6 w-6 text-gray-900" />
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900">
                                            {specialization.title}
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {specialization.points.map((point, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                                <span className="text-gray-600 font-light">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Tools & Technologies */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-light text-gray-900 mb-12">Tools & Technologies</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-6">Technical Tools</h3>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    "WIMS Software",
                                    "Nodal Analysis",
                                    "PROSPER",
                                    "GAP",
                                    "MBAL",
                                    "MS Project"
                                ].map((tool, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm font-light"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-6">Certifications</h3>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    "Lean Six Sigma Master Black Belt",
                                    "Well Drilling and Completion Certificate",
                                    "Production Optimization Certificate",
                                    "Process Engineering Certificate"
                                ].map((cert, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm font-light"
                                    >
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    )
}