import React from 'react'

import MenuPreviewCard from "./MenuPreviewCard"

const MenuPreviewContainer = ({selectedItems, setSelectedItems}) => {

    const removeItem = (e, item) => {
        e.preventDefault();
        const newSelectedItemsList = selectedItems.filter((selectedItem) => selectedItem != item);
        setSelectedItems(newSelectedItemsList);
    
        // const newSelectedDietariesList = selectedDietaries.filter((selectedItem) => selectedItem.dietaries != item.dietaries);
        // setSelectedDietaries(newSelectedDietariesList);
        // groupDietaries()
    }

    return (
        <div className="col-7">
            <h2>Menu preview</h2>        
            {selectedItems.map(selectedItem => 
                <MenuPreviewCard selectedItem={selectedItem} removeItem={removeItem}/>
            )}
        </div>
    )
}

export default MenuPreviewContainer