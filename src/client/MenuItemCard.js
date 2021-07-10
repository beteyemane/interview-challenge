import React from 'react'

const MenuItemCard = ({selectItem, item}) => {
    return (
        <ul key={item.id} className="item-picker" onClick={(e) => selectItem(e, item)}>
            <li className="item">
                <h2>{item.name}</h2>
                <p>
                  {item.dietaries.map(dietary => 
                    <span className="dietary" key={dietary.id}>
                      {dietary}
                    </span>
                  )}
                </p>
            </li>
        </ul>
    )
}

export default MenuItemCard