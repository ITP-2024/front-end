import Navbar from "./OrderManagement/navbar";
import Complain from "./OrderManagement/complain";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <Complain />
    </div>
  );
}
