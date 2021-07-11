import React, { useState } from "react";

import MenuItemCard from "./MenuItemCard";
import SearchBar from "./SearchBar";

const MenuItemsContainer = ({
  items,
  selectedItems,
  setSelectedItems,
  query,
  setQuery,
}) => {
  const selectItem = (e, item) => {
    e.preventDefault();
    if (!selectedItems.includes(item)) {
      setSelectedItems(selectedItems.concat(item));
    }
  };

  return (
    <div className="col-5">
      <SearchBar query={query} setQuery={setQuery} />
      {items.map((item) => (
        <MenuItemCard item={item} selectItem={selectItem} />
      ))}
    </div>
  );
};

export default MenuItemsContainer;
