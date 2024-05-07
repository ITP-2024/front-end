import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="ml-56 mr-56">
                <div>
                    <ToastContainer />
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
            </div>
            <Footer />
        </div>
    );
}