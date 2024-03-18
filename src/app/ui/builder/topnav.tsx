import Link from 'next/link';

export default function TopNav() {
    return (
        <div className="flex justify-center h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="Theme w-52 h-10 relative m-2">
                <Link href="/theme">
                    <a className="Rectangle46 w-52 h-10 left-0 top-0 absolute bg-violet-200 flex justify-center items-center">
                        <div className="Theme w-40 h-10 text-center text-stone-900 text-base font-semibold">Theme</div>
                    </a>
                </Link>
            </div>
            <div className="Card w-52 h-10 relative m-2">
                <Link href="/greeting-card">
                    <a className="Rectangle43 w-52 h-10 left-0 top-0 absolute bg-violet-200 flex justify-center items-center">
                        <div className="GreetingCard w-40 h-10 text-center text-stone-900 text-base font-semibold">Greeting card</div>
                    </a>
                </Link>
            </div>
            <div className="Products w-52 h-10 relative m-2">
                <Link href="/products">
                    <a className="Rectangle44 w-52 h-10 left-0 top-0 absolute bg-violet-200 flex justify-center items-center">
                        <div className="Products w-40 h-10 text-center text-stone-900 text-base font-semibold">Products</div>
                    </a>
                </Link>
            </div>
            <div className="Box w-52 h-10 relative m-2">
                <Link href="/gift-box">
                    <a className="Rectangle45 w-52 h-10 left-0 top-0 absolute bg-violet-200 flex justify-center items-center">
                        <div className="GiftBox w-40 h-10 text-center text-stone-900 text-base font-semibold">Gift Box</div>
                    </a>
                </Link>
            </div>
        </div>
    );
}
