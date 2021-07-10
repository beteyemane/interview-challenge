import React, { useState } from 'react'

import MenuItemCard from './MenuItemCard'
import SearchBar from './SearchBar';

const MenuItemsContainer = ({items, selectedItems, setSelectedItems}) => {

  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const selectItem = (e ,item) => {
    e.preventDefault();
    if(!selectedItems.includes(item)){
      setSelectedItems(selectedItems.concat(item))
      
      // const groupedArr = []
      // //item.dietaries.map(i => groupedArr.push(i))
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
    } 
  };

  return (
      <div className="col-5"> 
         <SearchBar handleChange={handleChange} />
         {items.filter((val) => {
            if(val == "") {
              return val
             } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
             return val
            }
          }).map(item => 
            <MenuItemCard item={item} selectItem={selectItem}/>
        )}
      </div>
  )
}

export default MenuItemsContainer