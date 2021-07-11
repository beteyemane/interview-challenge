import React, { useState } from "react";

import MenuItemCard from "./MenuItemCard";

const MenuItemsContainer = ({ items, selectedItems, setSelectedItems }) => {
  const selectItem = (e, item) => {
    e.preventDefault();
    if (!selectedItems.includes(item)) {
      setSelectedItems(selectedItems.concat(item));
    }
  };

  return (
    <div className="col-5">
      {items.map((item) => (
        <MenuItemCard item={item} selectItem={selectItem} />
      ))}
    </div>
  );
};

export default MenuItemsContainer;
