import Cart from "./card";

const DashboardCart = () => {
  return (
    <div className="ml-[350px] flex gap-4 mt-[200px]">
      <Cart icon={"Mon"} title={"Total Income"} value={"240, 500.00 LKR"} />
      <Cart icon={"Mon"} title={"Total Order"} value={"324"} />
      <Cart icon={"Mon"} title={"Complains"} value={"04"} />
    </div>
  );
};

export default DashboardCart;
