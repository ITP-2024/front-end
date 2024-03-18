const Navbar = () => {
  interface NavItem {
    title: string;
    href: string;
  }

  const navItems: NavItem[] = [
    { title: "Order Management", href: "#order" },
    { title: "Inventory Management", href: "#inventory" },
    { title: "Financial Management", href: "#finance" },
  ];

  return (
    <div className="w-[290px] h-full bg-violet-200 fixed top-0 left-0">
      <nav className="mr-auto ">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block w-full h-[52px] bg-purple-400 text-white text-center flex items-center justify-center hover:bg-purple-500"
          >
            <div className="text-black hover:text-white">{item.title}</div>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
