'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

// Can be moved to a config file
const contactInfo = {
    email: "hdaghmouni@hotmail.com",
    phone: {
        uae: "+971501060408",
        france: "+33765251218"
    },
    locations: [
        {
            country: "UAE",
            city: "Abu Dhabi"
        },
        {
            country: "France",
            city: "Paris"
        }
    ]
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form data:', formData)
    }

    return (
        <main className="pt-32">
            {/* Hero Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <span className="inline-block text-sm tracking-widest text-gray-500 font-light mb-6">
                            CONTACT US
                        </span>
                        <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6">
                            Let's Discuss Your Well Integrity Needs
                        </h1>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                            Get in touch to explore how our expertise can enhance your well integrity management.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-light text-gray-900 mb-12">
                                Contact Information
                            </h2>
                            <div className="space-y-8 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-gray-50 rounded-lg">
                                        <Mail className="h-6 w-6 text-gray-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                                            Email
                                        </h3>
                                        <a
                                            href={`mailto:${contactInfo.email}`}
                                            className="text-gray-600 font-light hover:text-gray-900 transition-colors"
                                        >
                                            {contactInfo.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-gray-50 rounded-lg">
                                        <Phone className="h-6 w-6 text-gray-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                                            Phone
                                        </h3>
                                        <div className="space-y-2 text-gray-600 font-light">
                                            <p>UAE: {contactInfo.phone.uae}</p>
                                            <p>France: {contactInfo.phone.france}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-gray-50 rounded-lg">
                                        <MapPin className="h-6 w-6 text-gray-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                                            Locations
                                        </h3>
                                        <div className="space-y-2 text-gray-600 font-light">
                                            {contactInfo.locations.map((location, index) => (
                                                <p key={index}>{location.city}, {location.country}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time Notice */}
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-start gap-4">
                                    <Clock className="h-6 w-6 text-gray-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                                            Quick Response
                                        </h3>
                                        <p className="text-gray-600 font-light">
                                            We aim to respond to all inquiries within 24 hours during business days.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-light text-gray-900 mb-12">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-light text-gray-600 mb-2">
                                            First Name*
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                                            placeholder="Enter your first name"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-light text-gray-600 mb-2">
                                            Last Name*
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                                            placeholder="Enter your last name"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-light text-gray-600 mb-2">
                                        Email Address*
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-light text-gray-600 mb-2">
                                        Subject*
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                                        placeholder="Enter message subject"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-light text-gray-600 mb-2">
                                        Message*
                                    </label>
                                    <textarea
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all resize-none"
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
        </main>
    )
}