const Navbar = () => {
  interface NavItem {
    title: string;
    href: string;
    dropdownItems?: string[];
  }

  const navItems: NavItem[] = [
    {
      title: "Order Management",
      href: "#order",
      dropdownItems: ["Dashboard", "Orders", "Complains"],
    },
    { title: "Inventory Management", href: "#Inventory" },
    { title: "Financial Management", href: "#finance" },
  ];

  return (
    <div className="w-[290px] h-full bg-violet-200 fixed top-0 left-0">
      <nav className="mt-[200px]">
        {navItems.map((item, index) => (
          <a
            href={item.href}
            title={item.title}
            className="block w-full h-[52px] bg-purple-400  flex items-center justify-between pl-8 pr-4 hover:bg-purple-500 hover:text-white "
          >
            <div className="text-black hover:text-white ">{item.title}</div>
            <svg
              className="w-3.5 h-2.5 ml-3 mt-2 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                className="stroke-black hover:stroke-white transition-all duration-300"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </a>
        ))}
        ;
      </nav>
    </div>
  );
};

export default Navbar;
