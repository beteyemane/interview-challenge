import React from 'react'

import MenuItemsContainer from './MenuItemsContainer';
import MenuPreviewContainer from './MenuPreviewContainer';

const MenuContainer = ({items, selectedItems, setSelectedItems}) => {

  return (
    <div className="container menu-builder">
        <div className="row">
          <MenuItemsContainer   items={items} 
                                selectedItems={selectedItems} 
                                setSelectedItems={setSelectedItems}
                                />
          <MenuPreviewContainer selectedItems={selectedItems} 
                                setSelectedItems={setSelectedItems}
                                />
        </div>
    </div>
  )
}

export default MenuContainer;