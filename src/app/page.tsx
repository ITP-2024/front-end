import Navbar from "./InventoryManagement/navbar";
import Dashboard from "./InventoryManagement/dashboard";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <Dashboard />
    </div>
  );
};