import React, { FormEvent, useState } from "react";
import { CgSearch } from "react-icons/cg";

interface CartProps {
  title: string;
}
const SearchBar: React.FC<CartProps> = ({ title }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery.trim() === "") {
      alert("Please enter a search query.");
      return;
    }

    console.log("Perform search or complain with query:", searchQuery);
  };
  return (
    <form className=" w-[350px] relative" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="search"
          placeholder={title}
          className="w-full h-[50px] bg-purple-400 rounded-[30px] p-4 placeholder-black"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="absolute right-1 p-3 text-black">
          <CgSearch className="font-bold w-6 h-6" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
