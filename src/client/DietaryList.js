import React from "react";

const DietaryList = ({ selectedItems }) => {
  // const newSelectedDietariesList = selectedDietaries.filter((selectedItem) => selectedItem.dietaries != item.dietaries);
  // setSelectedDietaries(newSelectedDietariesList);
  // groupDietaries()

  const groupDietaries = () => {
    //grouping the selected dietaries
    //make the dietary the key and add 1 to value everytime it gets added to the selected list
    selectedItems.dietaries.map((i) => groupedArr.push(i));
    const dietariesGrouped = groupedArr.reduce((acc, curr) => {
      if (typeof acc[curr] == "undefined") {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
      return acc;
    }, {});
    console.log("check", dietariesGrouped);
    return dietariesGrouped;
  };

  // const groupedArr = []
  // groupedArr.concat(item.dietaries)
  // console.log("grouped arr", groupedArr)
  // groupedArr.reduce((acc, curr) => {
  //   if (!groupedDietaries.hasOwnProperty(curr)) {
  //     acc[curr] = 1;
  //   } else {
  //     acc[curr] += 1;
  //   }
  //   return acc;
  // }, {});
  // setGroupedDietaries(groupedArr)
  return (
    <div className="col-6 menu-summary-right">
      {/* {selectedItems.dietaries.map((dietary) =>
                        <span key={dietary} className="dietary">{dietary}</span>
                    )} */}
      {Object.entries(groupDietaries).map(([key, value]) => (
        <span key={key}>
          {value}x <span className="dietary">{key}</span>
        </span>
      ))}
    </div>
  );
};

export default DietaryList;
