import React from "react";

import MenuItemsContainer from "./MenuItemsContainer";
import MenuPreviewContainer from "./MenuPreviewContainer";

const MenuContainer = ({
  items,
  selectedItems,
  setSelectedItems,
  getQuery,
  setQuery,
}) => {
  return (
    <div className="container menu-builder">
      <div className="row">
        <MenuItemsContainer
          items={items}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          getQuery={getQuery}
          setQuery={setQuery}
        />
        <MenuPreviewContainer
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </div>
    </div>
  );
};

export default MenuContainer;
