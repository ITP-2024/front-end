import TopNav from '@/components/gift-box/giftbox-topnav';
import { GiftBoxProvider }  from '@/context/giftBox';
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="ml-56 mr-56">
            <div className="CustomGiftBoxBuilder w-100 h-17 text-center text-stone-900 text-3xl font-bold font-inter m-5">Custom Gift Box Builder</div>
            <div>
                <TopNav />
                <GiftBoxProvider/>
                <ToastContainer />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>

    );
}