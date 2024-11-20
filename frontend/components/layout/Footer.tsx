import { Phone, Mail, MapPin } from 'lucide-react'

const contactInfo = {
    locations: [
        "Abu Dhabi, UAE",
        "France"
    ],
    phone: {
        uae: "+971501060408",
        france: "+33765251218"
    },
    email: "hdaghmouni@hotmail.com"
}

export function Footer() {
    return (
        <footer className="bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">
                {/* Upper Footer */}
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {/* Brand Section */}
                        <div className="space-y-6">
                            <img
                                src="/images/logo-white.svg"
                                alt="DHB Consulting"
                                className="h-12 w-auto"
                            />
                            <p className="text-gray-400 font-light">
                                Senior Well Integrity and Well Examination Specialist with over 30 years of industry expertise.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div className="space-y-6">
                            <h3 className="text-sm text-gray-400 tracking-widest">
                                EXPERTISE
                            </h3>
                            <nav className="grid grid-cols-1 gap-4">
                                <a href="#" className="text-white font-light hover:text-gray-300 transition-colors">
                                    WELL INTEGRITY MANAGEMENT
                                </a>
                                <a href="#" className="text-white font-light hover:text-gray-300 transition-colors">
                                    COMPLIANCE & AUDITING
                                </a>
                                <a href="#" className="text-white font-light hover:text-gray-300 transition-colors">
                                    CO₂ & CCS PROJECTS
                                </a>
                                <a href="#" className="text-white font-light hover:text-gray-300 transition-colors">
                                    TECHNICAL STANDARDS
                                </a>
                            </nav>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <h3 className="text-sm text-gray-400 tracking-widest">
                                CONTACT
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin size={20} className="text-gray-400 flex-shrink-0 mt-1" />
                                    <span className="text-white font-light">
                                        {contactInfo.locations.join(" • ")}
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone size={20} className="text-gray-400 flex-shrink-0 mt-1" />
                                    <div className="text-white font-light">
                                        <div>UAE: {contactInfo.phone.uae}</div>
                                        <div>France: {contactInfo.phone.france}</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail size={20} className="text-gray-400 flex-shrink-0 mt-1" />
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-white font-light hover:text-gray-300 transition-colors"
                                    >
                                        {contactInfo.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm font-light">
                            © {new Date().getFullYear()} BHD Consulting. All rights reserved.
                        </p>
                        <div className="flex gap-8">
                            <a href="#" className="text-sm text-white font-light hover:text-gray-300 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-white font-light hover:text-gray-300 transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}