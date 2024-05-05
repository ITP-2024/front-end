import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../../components/common/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KpopShop-Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      
      <div className={inter.className}>
      <div><Navbar />
       <div className="ml-[320px] mt-[30px] mt-[90px]" > 
       {children}</div>
       </div>
      </div>
  );
}
