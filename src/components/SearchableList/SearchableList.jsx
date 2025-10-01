import React, { useState } from "react";

const SearchableList = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
