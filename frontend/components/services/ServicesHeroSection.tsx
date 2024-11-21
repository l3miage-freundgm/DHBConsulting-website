import { motion } from 'framer-motion'
import { scrollToSection } from '../../lib/utils'

export function ServicesHeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section className="relative py-20 bg-gray-50 overflow-hidden">

            <div className="max-w-6xl mx-auto px-4 relative">
                <motion.div
                    className="max-w-3xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span
                        variants={itemVariants}
                        className="inline-block text-sm tracking-widest text-gray-500 font-light mb-6"
                    >
                        OUR SERVICES
                    </motion.span>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6"
                    >
                        <span className="relative">
                            Comprehensive
                            
                        </span>{" "}
                        Well Integrity Solutions
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-600 font-light leading-relaxed mb-8"
                    >
                        Expert well integrity management services backed by three decades of industry experience and academic excellence.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <motion.button
                            onClick={() => scrollToSection('consultation')}
                            className="relative px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm tracking-widest font-light group overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.span className="relative z-10 inline-flex items-center gap-2">
                                DISCUSS YOUR NEEDS
                                <span className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">?</span>
                            </motion.span>
                            <motion.div 
                                className="absolute inset-0 bg-gray-800"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
