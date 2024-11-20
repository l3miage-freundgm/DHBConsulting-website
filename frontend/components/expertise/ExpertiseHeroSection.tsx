import { motion } from 'framer-motion'
import { scrollToSection } from '../../lib/utils'

export function ExpertiseHeroSection() {
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
            

            {/* Side decoration */}
            <motion.div
                className="absolute right-0 h-full w-1 flex flex-col justify-evenly opacity-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1, delay: 1 }}
            >
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`dot-${i}`}
                        className="w-1 h-1 bg-gray-900 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 + (i * 0.1) }}
                    />
                ))}
            </motion.div>

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
                        OUR EXPERTISE
                    </motion.span>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6"
                    >
                        Technical Excellence in{" "}
                        <span className="relative inline-block">
                            Well Integrity
                            <motion.div
                                className="absolute -bottom-2 left-0 w-full h-px bg-gray-900"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-600 font-light leading-relaxed mb-8"
                    >
                        Three decades of specialized experience in well integrity management, drilling operations, and technical leadership across global energy projects.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <motion.button
                            onClick={() => scrollToSection('consultation')}
                            className="group relative px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-all text-sm tracking-widest font-light overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.span className="relative z-10 inline-flex items-center gap-2">
                                DISCUSS YOUR NEEDS
                                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                    ?
                                </span>
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
