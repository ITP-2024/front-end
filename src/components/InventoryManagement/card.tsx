interface CardProps {
  icon: React.ReactNode; // Icon element to be displayed in the card
  title: string; // Title of the card
  value: string; // Value to be displayed in the card
}


const Card: React.FC<CardProps> = ({ icon, title, value }) => {
  return (
    <div className="w-[650px] h-[155px] relative left-0 top-0 bg-purple-400 border-2 border-purple-800 rounded-[20px]">
      <div className="left-[13px] absolute text-black text-[36px] mt-[10px] font-semibold font-['Inter']">
        {icon}
      </div>
      <div className="left-[13px] top-[44px] mt-[15px] absolute text-black text-[22px] font-semibold font-['Inter']">
        {title}
      </div>
      <div className="left-[13px] top-[95px] absolute text-black text-2xl font-semibold font-['Inter']">
        {value}
      </div>
    </div>
  );
};

export default Card;
