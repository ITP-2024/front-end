// Import the 'Customer' component
//import Customer from "./Components/Customer/page";
//import Customerinfo from "./Components/Customerinfo/page";
import Link from 'next/link';
import axios from 'axios';
//import dashboard from './dashboard;




export default function Home() {
  

  return (

      <div className="flex flex-col items-center"style={{ backgroundColor: '#EED9FF', padding: '100px' }}>
      
    <h2 className="mb-6 text-2xl font-bold"style={{ fontSize: '24px', color: 'black', fontWeight: 'bold' }}>My Account</h2>
    <div className="mb-10"></div>
    {/* Highlighted rectangle container */}
    <div className="border-2 border-purple-400 rounded-lg p-6 mb-30 h-95h-[350px] w-[700px]">
      <div className="flex">
        <div className="mr-6">
          {/* Use an <a> tag for navigation */}
          <Link href="#">
            <button className="mr-4 px-6 py-4 text-lg bg-purple-400 rounded-md"style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>
              Information
            </button>
          </Link>
          <Link href="/user-management/AddAddress">
            <button className="mr-4 px-6 py-4 text-lg bg-purple-400 rounded-md"style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>
              Address
            </button>
          </Link>
          <button className="px-6 py-4 text-lg bg-purple-400 rounded-md"style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>
            My posts & followers
          </button>
        </div>
      </div>
      <div className="mb-10"></div>
      {/* Second set of buttons */}
      <div className="flex">
        <button className="mr-4 px-6 py-4 text-lg bg-purple-400 rounded-md"style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>
          Order History and Details
        </button>
        <button className="mr-4 px-6 py-4 text-lg bg-purple-400 rounded-md"style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>
          Old Orders
        </button>
        <button className="px-6 py-4 text-lg bg-purple-400 rounded-md"style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>
          Vouchers
        </button>
      </div>
    </div>
    <Link href="/">
            <button className="mt-8 mr-8 px-8 py-4 text-xl bg-purple-400 rounded-lg font-bold"style={{ fontSize: '20px', color: 'white', fontWeight: 'bold' }}>
             Back to home
            </button>
          </Link>
  </div>
  
  );
}
