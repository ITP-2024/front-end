interface CartProps {
  title: string;
  value: string;
}

const Cart: React.FC<CartProps> = ({ title, value }) => {
  return (
    <div className="w-[317px] h-[155px] relative">
      <div className="w-[317px] h-[155px] left-0 top-0 absolute bg-purple-400 rounded-[20px]" />
      <div className="left-[13px] top-[44px] absolute text-black text-[22px] font-semibold font-['Inter']">
        {title}
      </div>
      <div className="left-[13px] top-[89px] absolute text-black text-2xl font-semibold font-['Inter']">
        {value}
      </div>
    </div>
  );
};

export default Cart;
