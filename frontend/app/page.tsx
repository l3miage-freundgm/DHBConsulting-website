'use client'

import { Hero } from "../components/home/Hero";
import { AchievementsSection } from "../components/home/AchievementsSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { ExpertiseSection } from "../components/home/ExpertiseSection";
import { ContactSection } from "../components/home/ContactSection";


// app/page.tsx

export default function Home() {
    return (
        <main>
            <Hero />
            
            <AchievementsSection />
            
            <ServicesSection />

            <ExpertiseSection />

            <ContactSection />
        </main>
    )
}