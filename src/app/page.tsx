import Navbar from "./ManagerUI/navbar";

// Saheel
import ODashboard from "./OrderManagement/dashboard";
import orders from "./OrderManagement/orders";
import Complain from "./OrderManagement/complain";

// Harsha
import IDashboard from "./InventoryManagement/dashboard";
import Products from "./InventoryManagement/products";
import TestProducts from "./InventoryManagement/testProducts";
import Test from "./InventoryManagement/test";
import TP from "./InventoryManagement/tp";
import LowInventories from "./InventoryManagement/lowInventories";
import AddProduct from "./InventoryManagement/addProduct";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <TP />
    </div>
  );
};
