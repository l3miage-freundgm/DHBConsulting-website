import { ArrowRight, Shield, Search, Database, Settings, Users, FileCheck, Microscope, School, Binary } from 'lucide-react'
import { useState } from 'react'
import { scrollToSection, textures } from '../../lib/utils';

const documentedServices = [
    {
        id: 1,
        icon: Database,
        title: "Rig-less Plug & Abandonment",
        shortDesc: "Comprehensive well decommissioning services",
        description: "Conduct all in-front verification and assessment studies with recommended execution strategies to P&A with cost impact scenarios.",
        details: [
            "Conduct all in-front verification and assessment studies",
            "Issue final report with assessment results",
            "Recommend execution strategies with cost impact scenarios"
        ]
    },
    {
        id: 2,
        icon: Shield,
        title: "Inactive Wells Studies",
        shortDesc: "Cost-effective rig-less reactivation solutions",
        description: "Complete assessment and reactivation planning for inactive wells, focusing on cost-effectiveness and integrity.",
        details: [
            "Well Data verification and cleansing",
            "Risk assess the integrity status of each specific well",
            "Issue final report with integrity assessment results",
            "Provide cost effective solution to reactivate the wells"
        ]
    },
    {
        id: 3,
        icon: Settings,
        title: "Well Integrity Management Systems",
        shortDesc: "Complete WIMS development from scratch",
        description: "Building Well Integrity Management systems from scratch including hiring and developing well Integrity team.",
        details: [
            "Provide technical support to build Well Integrity services",
            "Develop well integrity activities for all phases",
            "Support until independent operation achievement",
            "Hiring and developing well Integrity team"
        ]
    },
    {
        id: 4,
        icon: Users,
        title: "Well Integrity Organizations",
        shortDesc: "Organizational structure development",
        description: "Build and develop complete Well Integrity Organizations with defined processes and responsibilities.",
        details: [
            "Developing well integrity activities for all phases",
            "Developing Business Processes and RACI's",
            "Developing Job descriptions",
            "Hiring well Integrity team"
        ]
    },
    {
        id: 5,
        icon: FileCheck,
        title: "Standards & Procedures",
        shortDesc: "Development and updates of integrity standards",
        description: "Develop and update well integrity standards and procedures aligned with worldwide standards and best practice.",
        details: [
            "Review existing standards and procedures",
            "Benchmark against worldwide standards",
            "Identify gaps and amend manuals",
            "Update to match Operations philosophy"
        ]
    },
    {
        id: 6,
        icon: Binary,
        title: "Software Implementation",
        shortDesc: "WIMS software selection and implementation",
        description: "Provide services on well integrity software selection and road map for implementation and enhancement.",
        details: [
            "Prepare business case for WIMS software",
            "Assist in software selection",
            "Support implementation",
            "Guide enhancement processes"
        ]
    },
    {
        id: 7,
        icon: Search,
        title: "Compliance Assurance",
        shortDesc: "Well compliance review and verification",
        description: "Provision of well compliance assurance review and verification services with detailed analysis.",
        details: [
            "Conduct compliance assurance review",
            "Identify business risks and controls",
            "Assess internal control effectiveness",
            "Provide value added recommendations"
        ]
    },
    {
        id: 8,
        icon: Microscope,
        title: "Site Inspection & Examination",
        shortDesc: "Physical well site inspections",
        description: "Conduct Well site Physical inspection and examination on well integrity Matters.",
        details: [
            "Designing well integrity investigations",
            "Conducting physical inspections",
            "Performing root cause analysis",
            "Providing solutions based on findings"
        ]
    },
    {
        id: 9,
        icon: School,
        title: "Training Services",
        shortDesc: "Professional well integrity training",
        description: "Provision of well integrity trainings and lectures through various platforms.",
        details: [
            "Online training delivery",
            "Onsite training sessions",
            "Workshops and seminars",
            "Customized training programs"
        ]
    },
    {
        id: 10,
        icon: Microscope,
        title: "CO₂ & CCS Projects",
        shortDesc: "Carbon capture storage integrity assessment",
        description: "Detailed Well integrity risk assessment and design studies for CO2 and CCS projects.",
        details: [
            "Develop P&A high-level workflow",
            "Conduct basis of design study",
            "Identify barriers placement",
            "Develop monitoring strategies for CO2 injection"
        ]
    }
];

export function ServicesSection() {
    const [activeId, setActiveId] = useState(null)

    return (
        <section id="services" className="py-24 bg-[#F5F7F9] py-24" style={textures.grid}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="max-w-3xl mb-20">
                    <span className="inline-block text-sm tracking-widest text-gray-500 font-light mb-6">
                        OUR SERVICES
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6">
                        Comprehensive Well Integrity Solutions
                    </h2>
                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                        Delivering specialized well integrity management services backed by over three decades of industry expertise.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {documentedServices.map((service) => {
                        const Icon = service.icon
                        const isActive = activeId === service.id

                        return (
                            <div
                                key={service.id}
                                className={`
                  group relative bg-gray-50 rounded-lg overflow-hidden
                  transition-all duration-300
                  ${isActive ? 'shadow-lg' : 'hover:shadow-md'}
                `}
                                onMouseEnter={() => setActiveId(service.id)}
                                onMouseLeave={() => setActiveId(null)}
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-gray-900 opacity-0 transition-opacity duration-300"
                                    style={{ opacity: isActive ? 1 : 0 }}
                                />

                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-2 bg-white rounded-lg">
                                            <Icon className="h-6 w-6 text-gray-900" />
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 font-light mb-6">
                                        {isActive ? service.description : service.shortDesc}
                                    </p>

                                    <div className={`
                    space-y-3 transition-all duration-300
                    ${isActive ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
                  `}>
                                        {service.details.map((detail, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                                <span className="text-sm text-gray-600 font-light">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-600 font-light mb-6">
                        Looking for specialized well integrity solutions?
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