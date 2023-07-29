/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useState } from "react";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import "./styles.css";
import { TextInput } from "flowbite-react";

export default function Search({ onSearch }) {

  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex items-center space-x-4">
      <input
      id="search"
      placeholder="Search"
      type="search"
      onChange={handleInputChange}
      className="text-2xl border border-slate-400 rounded-lg p-2.5"
      required
      />
    </div>
  );
}
