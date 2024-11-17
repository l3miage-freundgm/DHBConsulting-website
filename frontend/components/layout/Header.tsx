'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu as MenuIcon, X } from 'lucide-react'
import { scrollToSection } from '../../lib/utils'
import { routes } from '@/config/routes'


export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    return (
        <>
            <header className={`
                fixed top-0 w-full z-50
                transition-all duration-300 bg-white
                ${isScrolled ? 'py-4 shadow-sm' : 'py-8'}
            `}>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between relative">
                        {/* Mobile Menu Button - Left aligned */}
                        <button
                            className="md:hidden p-2 text-gray-900 hover:text-gray-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <MenuIcon size={24} />
                        </button>

                        {/* Logo and Navigation Container */}
                        <div className="flex items-center gap-8">
                            {/* Logo */}
                            <Link
                                href="/"
                                className="md:relative absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0"
                            >
                                <img
                                    src="/images/logo-black.svg"
                                    alt="DHB Consulting"
                                    className={`
                                        w-auto transition-all duration-300
                                        ${isScrolled ? 'h-12' : 'h-18'}
                                    `}
                                />
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center gap-8">
                                {routes.map((item) => (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        className="text-sm font-light tracking-widest text-gray-900 hover:text-gray-600 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Contact Button */}
                        <button onClick={() => scrollToSection('consultation')}
                            className="hidden md:block text-sm font-light tracking-widest text-gray-900 hover:text-gray-600 transition-colors">
                            CONTACT
                        </button>

                        {/* Empty div for mobile layout balance */}
                        <div className="w-10 md:hidden" />
                    </div>
                </div>
            </header>

            {/* Rest of the mobile menu code stays the same */}
            <div className={`
                fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden
                ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `} onClick={() => setIsMobileMenuOpen(false)} />

            <div className={`
                fixed top-0 left-0 w-[300px] h-full bg-white z-50 
                transform transition-transform duration-300 ease-in-out md:hidden
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-6 border-b border-gray-200">
                        <span className="text-sm text-gray-600 tracking-widest">MENU</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-gray-900 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex flex-col p-6 space-y-6">
                        {routes.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className="text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="text-lg font-light text-gray-900 hover:text-gray-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            CONTACT
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}