import Link from 'next/link';
import TopNavLinks from './topnavlinks';

export default function TopNav() {
    return (
        <div className="flex justify-center flex-col md:flex-row md:overflow-hidden">
            <TopNavLinks/>
             
        </div>
    );
}
