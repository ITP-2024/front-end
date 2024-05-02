import Card from "../../../components/InventoryManagement/card";

const Dashboard = () => {
  return (
    <div>
      <div className="ml-[330px] flex justify-start mt-[70px] gap-4">
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            ></svg>
          }
          title={"Notification"}
          value={"15"}
        />
        <Card
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            ></svg>
          }
          title={"Reports"}
          value={"02"}
        />
      </div>
      <div className="ml-[330px] mr-[20px] mt-[30px]"></div>
    </div>
  );
};

export default Dashboard;
