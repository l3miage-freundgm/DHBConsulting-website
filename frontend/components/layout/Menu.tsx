// components/layout/Menu.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

interface MenuProps {
    isOpen: boolean
    onClose: () => void
}

export function Menu({ isOpen, onClose }: MenuProps) {
    return (
        <>
            <div
                className={`
          fixed inset-0 z-[50] bg-black/50 transition-opacity duration-500
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
                onClick={onClose}
            />

            <div
                role="dialog"
                aria-modal="true"
                className={`
          fixed inset-y-0 left-0 z-[60] w-full max-w-md bg-black
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                {/* Menu Header */}
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="flex justify-between items-center border-b border-white/20 pb-8">
                        <span className="text-sm text-white/60 tracking-widest font-light">MENU</span>
                        <button
                            onClick={onClose}
                            className="text-white hover:opacity-70 transition-opacity"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Menu Content */}
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <nav className="flex flex-col gap-8">
                        <Link
                            href="/about"
                            className="text-2xl text-white font-light tracking-wide hover:opacity-70 transition-opacity"
                            onClick={onClose}
                        >
                            ABOUT US
                        </Link>
                        <Link
                            href="/services"
                            className="text-2xl text-white font-light tracking-wide hover:opacity-70 transition-opacity"
                            onClick={onClose}
                        >
                            OUR SERVICES
                        </Link>
                        <Link
                            href="/projects"
                            className="text-2xl text-white font-light tracking-wide hover:opacity-70 transition-opacity"
                            onClick={onClose}
                        >
                            PROJECTS
                        </Link>
                        <Link
                            href="/contact"
                            className="text-2xl text-white font-light tracking-wide hover:opacity-70 transition-opacity"
                            onClick={onClose}
                        >
                            CONTACT
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}