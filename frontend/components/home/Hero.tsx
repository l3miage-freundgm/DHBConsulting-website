import Image from 'next/image'
import { motion } from 'framer-motion'
import { scrollToSection } from '../../lib/utils'

export function Hero() {
    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 }
        }
    }

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
            >
                <Image
                    src="/images/hero-image.jpg"
                    alt="Well integrity engineering"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </motion.div>

            <div className="relative h-full">
                <div className="max-w-6xl mx-auto px-4 h-full">
                    <motion.div
                        className="h-full flex items-center"
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                    >
                        <div className="grid gap-6 md:gap-8 max-w-4xl">
                            <motion.div variants={textVariants} className="space-y-2">
                                <span className="inline-block text-sm tracking-widest text-gray-300 font-light">
                                    SENIOR WELL INTEGRITY AND WELL EXAMINATION SPECIALIST
                                </span>
                            </motion.div>

                            <motion.div variants={textVariants} className="space-y-6">
                                <div className="space-y-4">
                                    <h1 className="text-3xl md:text-4xl text-white font-light leading-tight">
                                        Operator&apos;s success relies on efficient reservoir management and exploitation to meet production targets with optimal safety
                                    </h1>
                                </div>
                                <p className="text-xl text-gray-200 font-light leading-relaxed border-l-2 border-white/30 pl-4">
                                    Ensuring the integrity of wells is essential to achieve these requirements.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={textVariants}
                                className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection('services')}
                                    className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors text-sm tracking-widest font-light"
                                >
                                    OUR SERVICES
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => scrollToSection('consultation')}
                                    className="px-8 py-4 border border-white text-white hover:bg-white/10 transition-colors text-sm tracking-widest font-light"
                                >
                                    SCHEDULE CONSULTATION
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}