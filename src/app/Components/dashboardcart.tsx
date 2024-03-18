import Cart from "./cart";

const DashboardCart = () => {
  return (
    <div className="ml-[350px] flex gap-4 mt-[200px]">
      <Cart title={"Total Income"} value={"240, 500.00 LKR"} />
      <Cart title={"Total Order"} value={"324"} />
      <Cart title={"Complains"} value={"04"} />
    </div>
  );
};

export default DashboardCart;
