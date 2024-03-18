import TopNav from "../ui/builder/topnav";
import Page from "./page";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <><div className="CustomGiftBoxBuilder w-100 h-17 text-center text-stone-900 text-3xl font-bold font-inter m-5">Custom Gift Box Builder</div>
        <div>
            <TopNav />
            <Page />
        </div></>
    );
}
