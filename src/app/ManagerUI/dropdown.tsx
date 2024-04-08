import React, { useState } from "react";

// Define interfaces for Dropdown and Menu items
interface DropDownItem {
  title: string;
  link?: string;
}

interface MenuItem {
  title: string;
}

// Define the DropDown component
const DropDown: React.FC = () => {
  // Define menu items
  const menu: MenuItem[] = [
    { title: "Order Management" },
    { title: "Inventory Management" },
    { title: "Financial Management" },
  ];

  // Define orders by menu
  const ordersByMenu: { [key: string]: DropDownItem[] } = {
    "Order Management": [
      { title: "Dashboard", link: "/OrderManagement/dashboard" },
      { title: "Orders", link: "/OrderManagement/orders" },
      { title: "Complaints", link: "/OrderManagement/complian" },
    ],
    "Inventory Management": [
      { title: "Dashboard", link: "/InventoryManagement/dashboard" },
      { title: "Products", link: "/InventoryManagement/products" },
      { title: "Low Inventories", link: "/InventoryManagement/lowInventories" },
    ],
    "Financial Management": [
      { title: "Accounting" },
      { title: "Budgeting" },
      { title: "Reporting" },
    ],
  };

  // State to manage selected menu and order
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [selectedOrderBy, setSelectedOrderBy] = useState<string | null>(null);

  // Handle menu click event
  const handleMenuClick = (title: string) => {
    setSelectedMenu(title === selectedMenu ? null : title);
    setSelectedOrderBy(null);
  };

  // Handle order click event
  const handleOrderByClick = (title: string) => {
    setSelectedOrderBy(title === selectedOrderBy ? null : title);
  };

  // Render the component
  return (
    <div className="mt-[200px]">
      {menu.map((menuItem) => (
        <div key={menuItem.title} className="block mt-1">
          {/* Render menu button */}
          <button
            className={`w-[290px] h-[52px] mt-[15px] flex items-center justify-between pl-8 pr-4 font-semibold border-solid border-gray-300 text-black ${
              selectedMenu === menuItem.title
                ? "bg-fuchsia-800 text-white"
                : "bg-purple-400 hover:bg-fuchsia-800 hover:text-white"
            }`}
            onClick={() => handleMenuClick(menuItem.title)}
          >
            {menuItem.title}
            {/* Render menu icon */}
            {selectedMenu === menuItem.title ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                {/* Arrow icon */}
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                {/* Arrow icon */}
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          {/* Render orders if menu is selected */}
          {selectedMenu === menuItem.title && (
            <div className="w-[260px] ml-[30px]">
              {ordersByMenu[selectedMenu].map((order) => (
                <div
                  key={order.title}
                  className={`text-black h-[35px] px-2 mt-[2px] font-semibold font-['Inter'] flex items-center justify-between rounded-[15px] ${
                    selectedOrderBy === order.title
                      ? "bg-fuchsia-800 text-white"
                      : "bg-purple-400 hover:bg-fuchsia-800 hover:text-white"
                  }`}
                  onClick={() => handleOrderByClick(order.title)}
                >
                  {order.title}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDown; 

