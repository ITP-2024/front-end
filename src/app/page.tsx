import Navbar from "./Components/navbar";
import TopBar from "./Components/topbar";
import Dashboard from "./Components/dashboard";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <TopBar />
      <Dashboard />
    </div>
  );
}
