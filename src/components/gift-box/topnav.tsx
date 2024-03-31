'use client';
import { usePathname, useRouter } from 'next/navigation';

const links = [
    { name: 'Theme', href: '/builder/theme'},
    { name: 'Greeting Card', href: '/builder/card'},
    { name: 'Products', href: '/builder/products'},
    { name: 'Gift Box', href: '/builder/giftbox'},
];


export default function TopNav() {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <div className="flex justify-center flex-col md:flex-row md:overflow-hidden">
            <>
            {links.map((link, index) => (
                <div 
                    key={link.name} 
                    onClick={() => router.push(link.href)}
                    className={`cursor-pointer flex h-[40px] w-[200px] items-center justify-center p-3 font-medium md:flex-none md:p-2 md:px-3 
                                ${pathname === link.href ? 'bg-fuchsia-900 text-white' : 'bg-violet-200'}`}
                    style={{ marginRight: index < links.length - 1 ? '10px' : '0' }}
                >
                    <p className="hidden md:block font-semibold">{link.name}</p>
                </div>
            ))}
        </>
             
        </div>
    );
}
