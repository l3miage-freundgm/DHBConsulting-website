import '@/app/globals.css'
import { Playfair_Display, Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '../components/layout/Footer'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair'
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${playfair.variable} ${inter.variable} font-body`}>
                <Header />
                <main className="bg-corporate-dark text-corporate-light">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}