'use client';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useGiftBoxContext } from '@/context/giftBox';

const links = [
    { name: 'Theme', href: '/builder/theme'},
    { name: 'Greeting Card', href: '/builder/card'},
    { name: 'Products', href: '/builder/products'},
    { name: 'Gift Box', href: '/builder/giftbox'},
];


export default function TopNav() {
    const { selectedTheme, selectedGreetingCard, selectedProducts } = useGiftBoxContext();
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigation = (href: string) => {
        // Perform validation based on the current route
        switch (href) {
            case '/builder/theme':
                // Validate if a theme is selected
                if (selectedTheme) {
                    console.log("Theme:", selectedTheme);
                    router.push(href);
                } else {
                    toast.error('Please select a Color');
                }
                break;
            case '/builder/card':
                // Validate if a greeting card is selected
                if (selectedGreetingCard) {
                    console.log("Theme:", selectedGreetingCard);
                    router.push(href);
                    console.log("card:", selectedGreetingCard);
                } else {
                    toast.error('Please select a Greeting Card');
                }
                break;
            case '/builder/giftbox':
                // Validate if at least one product is selected
                if (selectedProducts.length > 0) {
                    router.push(href);
                    console.log('selected products' + selectedProducts)
                } else {
                    toast.error('Please select at least one product');
                }
                break;
            default:
                // For other routes, directly navigate
                router.push(href);
                break;
        }
    };
    return (
        <div className="flex justify-center flex-col md:flex-row md:overflow-hidden">
            <>
            {links.map((link, index) => (
                <div 
                    key={link.name} 
                    onClick={() => router.push(link.href)}
                    className={`cursor-pointer flex h-[40px] w-[210px] items-center justify-center p-3 font-medium md:flex-none md:p-2 md:px-3 
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
