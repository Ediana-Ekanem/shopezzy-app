import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdCancel } from "react-icons/md";

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setSearchValue(searchWord);
    onSearch(searchWord);
  };

  const handleCancelClick = () => {
    setSearchValue("");
    onSearch("");

    // Clear search value in parent component
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex items-center justify-center rounded-2xl border border-white bg-transparent"
      onSubmit={handleFormSubmit}
    >
      <div className="relative w-[450px] flex items-center">
        <CiSearch size={18} className="absolute left-2 text-white" />
        <input
          type="text"
          value={searchValue}
          onChange={handleFilter}
          className="w-full pl-8 pr-10 py-[10px] rounded-2xl text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-normal placeholder:text-sm placeholder:text-white"
          placeholder="Search..."
        />
        {searchValue && (
          <div className="absolute right-2 flex items-center justify-center w-6 h-6 rounded-full">
            <button
              type="button"
              onClick={handleCancelClick}
              className="text-md font-medium text-white"
            >
              <MdCancel size={20} />
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
