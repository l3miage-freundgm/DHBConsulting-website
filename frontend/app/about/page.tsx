'use client'

import Image from 'next/image'
import { GraduationCap, Award, Users2, Shield, Target } from 'lucide-react'
import { ValuesSection } from '../../components/about/ValuesSection'
import { ContactSection } from '../../components/home/ContactSection'
import { AboutHeroSection } from '../../components/about/AboutHeroSection'

export default function WhoWeArePage() {
    return (
        <main className="pt-32">
            {/* Hero Section - Keep the personal touch */}
            <AboutHeroSection />

            {/* Key Expertise */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-light text-gray-900 mb-12">Areas of Expertise</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Well Integrity Management",
                                description: "Comprehensive systems development and implementation for optimal well lifecycle management."
                            },
                            {
                                icon: Target,
                                title: "Compliance & Auditing",
                                description: "Expert compliance verification and risk assessment services ensuring adherence to international standards."
                            },
                            {
                                icon: Users2,
                                title: "Team Development",
                                description: "Building and training high-performing well integrity teams across global operations."
                            }
                        ].map((expertise, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                                <expertise.icon className="h-6 w-6 text-gray-600 mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-3">
                                    {expertise.title}
                                </h3>
                                <p className="text-gray-600 font-light">
                                    {expertise.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience & Qualifications */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Qualifications */}
                        <div>
                            <h2 className="text-2xl font-light text-gray-900 mb-12">Academic Excellence</h2>
                            <div className="space-y-8">
                                <div className="bg-gray-50 p-8 rounded-lg">
                                    <GraduationCap className="h-6 w-6 text-gray-600 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                        Phd. Petroleum Engineering and Chemicals
                                    </h3>
                                    <p className="text-gray-600 font-light">
                                        Polytechnical University
                                        <br />
                                        Wroclaw, Poland
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-lg">
                                    <GraduationCap className="h-6 w-6 text-gray-600 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                        Executive MBA
                                    </h3>
                                    <p className="text-gray-600 font-light">
                                        Mediterranean School of Business
                                        <br />
                                        Tunis, Tunisia
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-lg">
                                    <Award className="h-6 w-6 text-gray-600 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                        Professional Certifications
                                    </h3>
                                    <ul className="space-y-2 text-gray-600 font-light">
                                        <li>Lean Six Sigma Master Black Belt</li>
                                        <li>Well Drilling and Completion Certificate, IFP</li>
                                        <li>Production Optimization Certificate</li>
                                        <li>Prosper, MBAL, and GAP Certificate</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Career Experience */}
                        <div>
                            <h2 className="text-2xl font-light text-gray-900 mb-12">Professional Journey</h2>
                            <div className="space-y-8">
                                {[
                                    {
                                        period: "2008 - 2022",
                                        role: "Well Integrity Manager",
                                        company: "ADNOC",
                                        description: "Led well integrity management for over 4,500 wells, implementing comprehensive systems and standards. Achieved significant cost savings through innovative solutions.",
                                        highlights: [
                                            "Managed team of 50 cross-functional engineers",
                                            "Led $30MM+ project implementations",
                                            "Developed company-wide standards"
                                        ]
                                    },
                                    {
                                        period: "1994 - 2008",
                                        role: "Senior Production Technologist",
                                        company: "Tunisian Petroleum Company",
                                        description: "Optimized production through technological integrations and advanced data analysis. Led more than 25 on- and offshore workover operations.",
                                        highlights: [
                                            "Field development projects",
                                            "Well engineering programs",
                                            "Production optimization"
                                        ]
                                    }
                                ].map((experience, index) => (
                                    <div key={index} className="border-l-2 border-gray-200 pl-8 relative">
                                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-400" />
                                        <div className="text-sm text-gray-500 mb-2">{experience.period}</div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-1">{experience.role}</h3>
                                        <div className="text-gray-600 mb-3">{experience.company}</div>
                                        <p className="text-gray-600 font-light mb-4">{experience.description}</p>
                                        <ul className="space-y-2">
                                            {experience.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery & Impact */}
            <section className="py-24 ">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative h-[280px] rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/teaching-1.jpg"
                                        alt="Consulting session"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-[180px] rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/teaching-2.jpg"
                                        alt="Team training"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative h-[180px] rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/teaching-3.jpg"
                                        alt="Site inspection"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-[280px] rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/teaching-4.jpg"
                                        alt="Technical review"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Impact */}
                        <div>
                            <h2 className="text-2xl font-light text-gray-900 mb-8">Global Impact</h2>
                            <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                                Through innovative solutions and strategic leadership, we have achieved remarkable results across international operations, setting new standards in well integrity management.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { metric: "264", label: "Rig Days Saved" },
                                    { metric: "$20M+", label: "Cost Savings" },
                                    { metric: "50+", label: "Global Projects" },
                                    { metric: "4,500+", label: "Wells Managed" }
                                ].map((stat, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="text-2xl font-light text-gray-900 mb-1">{stat.metric}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ValuesSection />
            <ContactSection />
        </main>
    )
}