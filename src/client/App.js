import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import MenuContainer from "./components/Menu/MenuContainer";
import Header from "./components/Header/Header";

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/items?search=${query}`)
      .then((response) => {
        setItems(response.data.items);
      });
  }, [query]);

  return (
    <div className="wrapper">
      <span>6 times</span>
      <Header selectedItems={selectedItems} />
      <MenuContainer
        items={items}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        query={query}
        setQuery={setQuery}
      />
    </div>
  );
};

export default App;
