import { CgSearch } from "react-icons/cg";

const Complain = () => {
  return (
    <form className=" w-[350px] ml-[320px] mt-[100px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Search Complain......."
          className="w-full h-[50px] bg-purple-400 rounded-[30px] p-4 placeholder-black"
        />
        <button className="absolute right-1 p-3 text-black">
          <CgSearch className="font-bold w-6 h-6" />
        </button>
      </div>
    </form>
  );
};

export default Complain;
