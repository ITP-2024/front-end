import Navbar from "./OrderManagement/navbar";
import Complain from "./OrderManagement/complain";
import Dashboard from "./OrderManagement/dashboard";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <Dashboard />
    </div>
  );
}
