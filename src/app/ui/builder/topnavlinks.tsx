'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Theme', href: '/builder'},
    { name: 'Greeting Card', href: '/builder/card'},
    { name: 'Products', href: '/builder/products'},
    { name: 'Gift Box', href: '/builder/giftbox'},
];

export default function TopNavLinks() {
    const pathname = usePathname();      
    return (
        <>
            {links.map((link, index) => (
                <Link 
                    key={link.name} 
                    href={link.href}
                    
                    className={clsx(
                            'flex h-[40px] w-[200px] items-center justify-center bg-violet-200 p-3 font-medium md:flex-none md:p-2 md:px-3',
                            {
                                'bg-fuchsia-800 text-white': pathname === link.href,
                            },
                        )}
                        style={{ marginRight: index < links.length - 1 ? '10px' : '0' }}
                        >
                    <p className="hidden md:block font-semibold">{link.name}</p>

                </Link>
            ))}
        </>
    ); 
}
