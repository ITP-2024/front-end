import Link from 'next/link';

export default function Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>Customer Information</h2>
      <div style={{ marginBottom: '10px' }}></div>
      <div style={{ border: '4px solid #D8BFD8', borderRadius: '10px', padding: '20px', marginBottom: '30px' }}>
        <div>
          <div>
            <strong>Name:</strong> {/* Add dynamic data */}
          </div>
          <div>
            <strong>Address:</strong> {/* Add dynamic data */}
          </div>
          <div>
            <strong>Account Details:</strong> {/* Add dynamic data */}
          </div>
          <div>
            <strong>Gender:</strong> {/* Add dynamic data */}
          </div>
          {/* Add more details as needed */}
        </div>
      </div>
      <Link href="/">
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#D8BFD8', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Back to Home
        </button>
      </Link>
    </div>
  );
};
