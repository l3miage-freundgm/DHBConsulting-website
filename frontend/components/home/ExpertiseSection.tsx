import { ArrowRight, Drill, Shield, Search, FileCheck, HardDriveDownload } from 'lucide-react'
import { textures } from '../../lib/utils'

const expertiseAreas = [
    {
        icon: Drill,
        title: "Drilling, Workover & Completions",
        description: "Expert supervision of drilling operations, workover activities and well completions across onshore and offshore projects.",
        points: [
            "Well construction programs development",
            "Workover campaign planning and execution",
            "Completion design optimization",
            "Drilling program management"
        ]
    },
    {
        icon: Shield,
        title: "Well Design & Integrity",
        description: "Comprehensive well integrity management throughout the complete lifecycle of well operations.",
        points: [
            "Well barrier verification",
            "Design optimization",
            "Integrity monitoring systems",
            "Risk assessment protocols"
        ]
    },
    {
        icon: Search,
        title: "Well Audits & Site Inspections",
        description: "Thorough well integrity investigations and compliance verification through detailed site assessments.",
        points: [
            "Quality management assessments",
            "Well control equipment verification",
            "Compliance assurance reviews",
            "Site safety protocols"
        ]
    },
    {
        icon: FileCheck,
        title: "Safety & Regulatory Compliance",
        description: "Ensuring adherence to international standards and regulatory requirements in well operations.",
        points: [
            "HSE policy alignment",
            "Regulatory documentation",
            "Safety protocol development",
            "Emergency response planning"
        ]
    },
    {
        icon: Search,
        title: "Asset Development & Operations",
        description: "Strategic planning and optimization of well assets throughout their operational lifecycle.",
        points: [
            "Production enhancement",
            "Asset performance optimization",
            "Operational efficiency",
            "Resource utilization"
        ]
    },
    {
        icon: HardDriveDownload,
        title: "Data Analysis & Root Cause Analysis",
        description: "Advanced analytical approaches to identify and resolve well integrity issues.",
        points: [
            "Performance data analysis",
            "Issue identification",
            "Solution development",
            "Preventive measures"
        ]
    }
]

export function ExpertiseSection() {
    return (
        <section className="py-24" style={textures.dots}>
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-3xl mb-20">
                    <span className="inline-block text-sm tracking-widest text-gray-500 font-light mb-6">
                        AREAS OF EXPERTISE
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6">
                        Comprehensive Well Integrity Expertise
                    </h2>
                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                        Three decades of specialized experience in well integrity management, drilling operations, and technical leadership across global energy projects.
                    </p>
                </div>

                {/* Expertise Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertiseAreas.map((area, index) => {
                        const Icon = area.icon
                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                                        <Icon className="h-6 w-6 text-gray-600" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">
                                        {area.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 font-light mb-6">
                                    {area.description}
                                </p>

                                <ul className="space-y-3">
                                    {area.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <ArrowRight className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                            <span className="text-sm text-gray-600 font-light">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>

                {/* Technical Skills */}
                <div className="mt-20 bg-white rounded-lg p-8 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">
                        Technical Proficiencies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {[
                            "WIMS Software",
                            "Nodal Analysis",
                            "PROSPER",
                            "GAP",
                            "MBAL",
                            "MS Project",
                            "Well Construction",
                            "Work Over",
                            "Completion",
                            "Production Optimization"
                        ].map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-gray-50 text-sm text-gray-600 font-light rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}