// Import the 'Customer' component
//import Customer from "./Components/Customer/page";
//import Customerinfo from "./Components/Customerinfo/page";
import Link from 'next/link';


// Use the 'Customer' component in your JSX
export default function Home() {
  return (
    
   
    
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
    
      <h2 style={{ marginBottom: '20px' }}> My Account </h2>
      <div style={{ marginBottom: '10px' }}></div>
       {/* Highlighted rectangle container */}
       <div style={{ border: '2px solid #D8BFD8', borderRadius: '10px', padding: '20px', marginBottom: '30px' }}>
          
  
  
      <div>
      <div>
        {/* Use an <a> tag for navigation */}
        <Link href="/Components/Customerinfo">
          <button style={{ marginRight: '20px', padding: '20px 30px', fontSize: '20px', backgroundColor: '#D8BFD8', border: 'none', borderRadius: '5px' }}>
            Information
          </button>
        </Link>
        <button style={{ marginRight: '20px', padding: '20px 30px', fontSize: '20px', backgroundColor: '#D8BFD8', border: 'none', borderRadius: '5px'  }}>Addresses</button>
        <button style={{ marginRight: '20px', padding: '20px 30px', fontSize: '20px', backgroundColor: '#D8BFD8', border: 'none', borderRadius: '5px'  }}>Track Order</button>
      </div>
         
         
         
      </div>
     
      <div style={{ marginBottom: '30px' }}></div>
      {/* Second set of buttons */}
      <div>
          <button style={{ marginRight: '20px', padding: '20px 30px', fontSize: '20px', backgroundColor: '#D8BFD8', border: 'none', borderRadius: '5px'  }}>Order History and Details</button>
          <button style={{ marginRight: '20px', padding: '20px 30px', fontSize: '20px' , backgroundColor: '#D8BFD8', border: 'none', borderRadius: '5px' }}>Old Orders</button>
          <button style={{ marginRight: '20px', padding: '20px 30px', fontSize: '20px', backgroundColor: '#D8BFD8', border: 'none', borderRadius: '5px'  }}>Vouchers</button>
      </div>
      </div>
       
      
    </div>
    
  );
}
