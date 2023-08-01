/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useState } from "react";
import { TextInput } from "flowbite-react";
import { IoSearch } from "react-icons/io5";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import "./styles.css";

export default function Search({ onSearch, handleSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
    if(event.target.value.length === 0) {
      handleSearch();
    }
  };

  const _handleSearch = () => {
    handleSearch();
  }

  return (
    <div>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IoSearch className="text-3xl text-slate-500" />
        </div>
        <input
          onChange={handleInputChange}
          type="search"
          id="search"
          class="block w-96 p-4 pl-12 text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search"
        />
        <button
          onClick={_handleSearch}
          type="button"
          class="text-white absolute right-2.5 bottom-2.5 bg-dnt-accent focus:ring-4 focus:outline-none focus:ring-dnt-accent font-medium rounded-lg text-2xl px-4 py-2"
        >
          Search
        </button>
      </div>
    </div>
  );
}
