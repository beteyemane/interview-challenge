import React from "react";

import DietarySummary from "../DietarySummary/DietarySummary";

const Header = ({ selectedItems }) => {
  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{selectedItems.length}</span>
          </div>
          <DietarySummary selectedItems={selectedItems} />
        </div>
      </div>
    </div>
  );
};

export default Header;
