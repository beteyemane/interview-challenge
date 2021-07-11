import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import MenuContainer from "./MenuContainer";
import Header from "./Header";
import SearchBar from "./SearchBar";

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedDietaries, setSelectedDietaries] = useState([]);
  const [groupedDietaries, setGroupedDietaries] = useState({});
  const [error, setError] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/items?search=${query}`)
      .then((response) => {
        setItems(response.data.items);
        console.log("query", query);
      })
      .catch(() => {
        setError(error);
      });
  }, [query]);

  return (
    <div className="wrapper">
      <Header
        selectedItems={selectedItems}
        groupedDietaries={groupedDietaries}
      />
      <SearchBar query={query} setQuery={setQuery} />
      <MenuContainer
        items={items}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        getQuery={query}
        setQuery={setQuery}
      />
    </div>
  );
};

export default App;
