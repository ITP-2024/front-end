import DashboardCart from "./dashboardcart";
const Dashboard = () => {
  return (
    <div>
      <DashboardCart />
      <div className="w-[237px] h-[42px] right-[110px] top-[100px] absolute">
        <div className="w-[237px] h-[42px] left-0 top-0 absolute bg-purple-400 rounded-[30px]" />
        <div className="w-[25px] h-[25px] left-[13px] top-[9px] absolute bg-black bg-opacity-0" />
        <div className="left-[48px] top-[7px] absolute text-black text-[22px] font-semibold font-['Inter']">
          |
        </div>
        <div className="left-[69px] top-[7px] absolute text-black text-[22px] font-semibold font-['Inter']">
          Sort by
        </div>
        <div className="w-[25px] h-[25px] left-[184px] top-[9px] absolute bg-black bg-opacity-0" />
      </div>
    </div>
  );
};

export default Dashboard;
