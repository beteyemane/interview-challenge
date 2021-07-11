import React from "react";

import DietaryList from "./DietaryList";

const Header = ({ selectedItems }) => {
  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{selectedItems.length}</span>
          </div>
          <DietaryList selectedItems={selectedItems} />
        </div>
      </div>
    </div>
  );
};

export default Header;
