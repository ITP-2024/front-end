import TopNav from '@/components/gift-box/giftbox-topnav';
import { GiftBoxProvider }  from '@/context/giftBox';
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }: { children: React.ReactNode }) {
    return ( 
            <div>
                    {children}
            </div>
    );
}