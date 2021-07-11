import React from 'react'

const MenuPreviewCard = ({selectedItem, removeItem}) => {
    return (      
        <ul key={selectedItem.id} className="menu-preview">
            <li className="item">
                <h2>{selectedItem.name}</h2>
                <p>
                {selectedItem.dietaries.map(dietary => 
                    <span className="dietary" key={dietary.id}>
                        {dietary}
                    </span>
                )}
                </p>
                <button className="remove-item" onClick={(e) => removeItem(e, selectedItem)}>x</button>
            </li>
        </ul>
    )
}

export default MenuPreviewCard