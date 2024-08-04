import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { GadgetData } from "../home/bestdeals/mobilegadgets/data";
import { GentlyUsedData } from "../home/gentlyUsed/data";
import { RecData } from "../home/recommended/data";

const SearchComponent = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    const combinedData = [...GadgetData, ...GentlyUsedData, ...RecData];
    const filteredResults = combinedData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="relative">
      <SearchBar onSearch={handleSearch} />
      {searchQuery && (
        <div className="absolute left-0 right-0 bg-white shadow-lg mt-2 z-50">
          <div className="p-4">
            {searchResults.length > 0 ? (
              searchResults.map((item) => (
                <div key={item.id} className="search-item p-2 border-b">
                  <Link
                    to={
                      GadgetData.some((gadget) => gadget.id === item.id)
                        ? `/mobile-gadgets/${item.id}`
                        : GentlyUsedData.some((used) => used.id === item.id)
                        ? `/gently-used/${item.id}`
                        : `/rec-deals/${item.id}`
                    }
                    className="font-bold text-blue-600 hover:underline"
                  >
                    {item.title}
                  </Link>
                </div>
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
