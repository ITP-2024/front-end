import TopNav from '@/components/gift-box/giftbox-topnav';
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="ml-56 mr-56">
            <div>
                <ToastContainer />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>

    );
}