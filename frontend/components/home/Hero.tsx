import Image from 'next/image'
import { scrollToSection } from '../../lib/utils'

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image and Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-image.jpg"
                    alt="Well integrity engineering"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>

            {/* Content Container - Exactly matching header container */}
            <div className="relative h-full">
                <div className="max-w-6xl mx-auto px-4 h-full">
                    <div className="h-full flex items-center">
                        <div>
                            <span className="inline-block text-sm tracking-widest text-gray-300 font-light mb-6">
                                SENIOR WELL INTEGRITY AND WELL EXAMINATION SPECIALIST
                            </span>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight mb-6">
                                Optimizing Well Operating Envelope Throughout Operation
                            </h1>

                            <p className="text-xl text-gray-200 font-light mb-8 leading-relaxed max-w-2xl">
                                Results-oriented professional with more than 30 years in oil & gas industry driving well integrity management systems (WIMS).
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <button onClick={() => scrollToSection('services')}
                                    className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors text-sm tracking-widest font-light">
                                    OUR SERVICES
                                </button>
                                <button onClick={() => scrollToSection('consultation')}
                                    className="px-8 py-4 border border-white text-white hover:bg-white/10 transition-colors text-sm tracking-widest font-light">
                                    SCHEDULE CONSULTATION
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}