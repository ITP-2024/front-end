import Card from "./card";

const Dashboard = () => {
  return (
    <div>
      {/* Container for the cards */}
      <div className="ml-[330px] flex justify-start mt-[70px] gap-4">
        {/* First card */}
        <Card
          // Icon for notification
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              {/* Notification icon path */}
            </svg>
          }
          title={"Notification"} // Title for the first card
          value={"15"} // Value for the first card
        />
        {/* Second card */}
        <Card
          // Icon for reports
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              {/* Reports icon path */}
            </svg>
          }
          title={"Reports"} // Title for the second card
          value={"02"} // Value for the second card
        />
      </div>
      {/* Additional content section */}
      <div className="ml-[330px] mr-[20px] mt-[30px]">
        {/* Content here */}
      </div>
    </div>
  );
};

export default Dashboard;
