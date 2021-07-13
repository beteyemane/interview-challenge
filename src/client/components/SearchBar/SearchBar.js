import React from "react";

const SearchBar = ({ query, setQuery }) => {
  const onChange = (q) => {
    setQuery(q);
  };

  return (
    <div className="filters">
      <input
        id="search-bar"
        data-testid="search-bar-element"
        className="form-control"
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
