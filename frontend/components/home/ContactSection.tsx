import { Mail, Phone, MapPin, Clock, Calendar } from 'lucide-react'
import { textures } from '../../lib/utils'

export function ContactSection() {
    return (
        <section id="consultation" className="py-24" style={textures.grid}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column - Contact Info */}
                    <div>
                        <div className="mb-12">
                            <span className="inline-block text-sm tracking-widest text-gray-500 font-light mb-6">
                                GET IN TOUCH
                            </span>
                            <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-6">
                                Let's Discuss Your Well Integrity Needs
                            </h2>
                            <p className="text-lg text-gray-600 font-light leading-relaxed">
                                Reach out for consultations on well integrity management, audits, and specialized technical services.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-white rounded-lg p-8 shadow-sm">
                        <h3 className="text-xl font-light text-gray-900 mb-6">
                            Schedule a Consultation
                        </h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-light text-gray-600 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-light text-gray-600 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-light text-gray-600 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-light text-gray-600 mb-2">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                                    placeholder="Enter your company name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-light text-gray-600 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all resize-none"
                                    placeholder="Tell us about your needs"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm tracking-widest font-light"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}