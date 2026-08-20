'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface INavLink {
    href: string;
    text: string;
}

const NAV_LINKS: INavLink[] = [
    { href: '/', text: 'Home' },
    { href: '/owners', text: 'Owners' },
    { href: '/units', text: 'Units' },
    { href: '/voting', text: 'Voting' },
]

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-4">
            {NAV_LINKS.map((link) => {
                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                return (
                    <Link
                        key={link.text}
                        href={link.href}
                        className={`transition-colors ${isActive ? 'text-yellow-700 dark:text-zinc-400' : 'text-green-900 hover:text-yellow-700 dark:hover:text-zinc-400'}`}
                    >
                        {link.text}
                    </Link>
                );
            })}
        </nav>
    );
}