import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-6 text-2xl font-bold">Customer Information</h2>
      <div className="mb-10"></div>
      <div className="border-4 border-purple-400 rounded-lg p-6 mb-10">
        <div>
          <div className="mb-2">
            <strong>Name:</strong> {/* Add dynamic data */}
            </div>
              <div className="mb-2">
            <strong>Address:</strong> {/* Add dynamic data */}
          </div>
        <div className="mb-2">
      <strong>Account Details:</strong> {/* Add dynamic data */}
    </div>
        <div className="mb-2">
          <strong>Gender:</strong> {/* Add dynamic data */}
           </div>
            {/* Add more details as needed */}
            </div>
          </div>
      <Link href="/">
        <button className="px-4 py-2 text-lg bg-purple-400 rounded-md cursor-pointer">Back to Home</button>
      </Link>
    </div>
  );
};
