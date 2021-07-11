import React from "react";

const groupDietaries = (items) => {
  //grouping the selected dietaries
  //make the dietary the key and add 1 to value everytime it gets added to the selected list

  return items.reduce((acc, curr) => {
    curr.dietaries.forEach((dietary) => {
      if (!acc.hasOwnProperty(dietary)) {
        acc[dietary] = 1;
      } else {
        acc[dietary] += 1;
      }
    });
    return acc;
  }, {});
};

const DietarySummary = ({ selectedItems }) => {
  return (
    <div className="col-6 menu-summary-right">
      {Object.entries(groupDietaries(selectedItems)).map(([key, value]) => (
        <span key={key}>
          {value}x <span className="dietary">{key}</span>
        </span>
      ))}
    </div>
  );
};

export default DietarySummary;
