
import React, { FormEvent, useState } from "react";
import { CgSearch } from "react-icons/cg"; // Importing the search icon

// Define the props interface for the SearchBar component
interface SearchBarProps {
  title: string; // Title for the search bar placeholder
}

// Define the SearchBar component
const SearchBar: React.FC<SearchBarProps> = ({ title }) => {
  // State hook to manage the search query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Function to handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    // If search query is empty, show alert and return
    if (searchQuery.trim() === "") {
      alert("Please enter a search query.");
      return;
    }

    // Log the search query
    console.log("Perform search:", searchQuery);
  };

  // Return the JSX for the SearchBar component
  return (
    <form className=" w-[350px] relative" onSubmit={handleSubmit}>
      <div className="relative">
        {/* Input field for search query */}
        <input
          type="search"
          placeholder={title} // Placeholder text from props
          className="w-full h-[50px] bg-purple-400 rounded-[30px] p-4 placeholder-black" // Styling for the input field
          value={searchQuery} // Value of the input field
          onChange={(e) => setSearchQuery(e.target.value)} // OnChange event handler to update searchQuery state
        />
        {/* Button to submit search */}
        <button className="absolute right-1 p-3 text-black">
          <CgSearch className="font-bold w-6 h-6" /> {/* Search icon */}
        </button>
      </div>
    </form>
  );
};

export default SearchBar; 

