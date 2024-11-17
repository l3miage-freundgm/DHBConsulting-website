import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

export const textures = {
    // Subtle dots
    dots: {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
    },

    // Subtle grid
    grid: {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v1H0V0zm0 20h40v1H0V20zM0 40h40v1H0V40zM0 0h1v40H0V0zm20 0h1v40h-1V0zM40 0h1v40h-1V0z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
    },

    // Subtle diagonal lines
    lines: {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
    },

    // Subtle topography
    topography: {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40c5.523 0 10-4.477 10-10S5.523 20 0 20v20zm20 0c5.523 0 10-4.477 10-10s-4.477-10-10-10S10 24.477 10 30s4.477 10 10 10zm20 0V20c-5.523 0-10 4.477-10 10s4.477 10 10 10z' fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
    }
}