import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function AboutHeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section className="py-24 md:py-32 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    className="relative grid md:grid-cols-3 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Text Content */}
                    <motion.div className="relative z-10 md:col-span-2">
                        <motion.span
                            variants={itemVariants}
                            className="inline-block text-sm tracking-widest text-gray-500 font-light mb-8"
                        >
                            WHO WE ARE
                        </motion.span>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-8"
                        >
                            Dr. Hamdi Daghmouni
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-600 font-light mb-10 leading-relaxed"
                        >
                            Senior Well Integrity and Well Examination Specialist with over three decades of expertise in optimizing well operating envelope throughout operation and production life of well lifecycle phases.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex gap-4"
                        >
                            <Link href="/contact">
                                <motion.span
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm tracking-widest font-light inline-flex items-center gap-2 cursor-pointer"
                                >
                                    GET IN TOUCH
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">?</span>
                                </motion.span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Creative Profile Image Container */}
                    <motion.div
                        variants={itemVariants}
                        className="relative flex justify-center md:justify-end"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-[280px]"
                        >
                            

                            {/* Main image container with geometric accents */}
                            <div className="relative">
                                

                                {/* Center image */}
                                <motion.div
                                    className="relative w-[200px] h-[200px] mx-auto"
                                >
                                    <div className="w-full h-full overflow-hidden bg-white shadow-lg">
                                        <Image
                                            src="/images/profile.jpg"
                                            alt="Dr. Hamdi Daghmouni"
                                            width={200}
                                            height={200}
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>

                                
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}