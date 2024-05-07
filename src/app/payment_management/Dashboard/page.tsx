import Card from "../../../components/payment_management/card";

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
          title={"Total Payment"}
          value={"25"}
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
          title={"panding payment"}
          value={"05"}
        />
      </div>
      <div className="ml-[330px] mr-[20px] mt-[30px]"></div>
    </div>
  );
};

export default Dashboard;
