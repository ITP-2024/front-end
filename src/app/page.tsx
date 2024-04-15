import Navbar from "./ManagerUI/navbar";

// Saheel
import ODashboard from "./OrderManagement/dashboard";
import orders from "./OrderManagement/orders";
import Complain from "./OrderManagement/complain";

// Harsha
import IDashboard from "./InventoryManagement/dashboard";
import Products from "./InventoryManagement/products";
import LowInventories from "./InventoryManagement/lowInventories";
import AddProduct from "./InventoryManagement/addProduct";

import TestProduct from "./InventoryManagement/testProduct";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <TestProduct/>
    </div>
  );
};
