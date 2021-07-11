import React from "react";

import MenuItemsContainer from "./MenuItemsContainer";
import MenuPreviewContainer from "./MenuPreviewContainer";

const MenuContainer = ({
  items,
  selectedItems,
  setSelectedItems,
  query,
  setQuery,
}) => {
  return (
    <div className="container menu-builder">
      <div className="row">
        <MenuItemsContainer
          items={items}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          query={query}
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
