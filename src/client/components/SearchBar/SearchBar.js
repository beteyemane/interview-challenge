import React from "react";

const SearchBar = ({ query, setQuery }) => {
  const onChange = (q) => {
    setQuery(q);
  };

  return (
    <div className="filters">
      <input
        id="search-bar"
        className="form-control"
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
