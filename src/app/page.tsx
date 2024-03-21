import Navbar from "./OrderManagement/navbar";
import Dashboard from "./OrderManagement/dashboard";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <Dashboard />
    </div>
  );
}
