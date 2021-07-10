import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState(true)
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/items")
        .then(response => {
          setItems(response.data.items)
          console.log(response)
        })
        .catch(() => {
            setError(error)
        })
  }, [])

  const selectItem = (e ,item) => {
    e.preventDefault();
    if(!selectedItems.includes(item)){
      setSelectedItems(selectedItems.concat(item))  
    } 
  };

  const removeItem = (e, item) => {
    e.preventDefault();
    const newSelectedItemsList = selectedItems.filter((selectedItem) => selectedItem != item);
    setSelectedItems(newSelectedItemsList);

    // const newSelectedDietariesList = selectedDietaries.filter((selectedItem) => selectedItem.dietaries != item.dietaries);
    // setSelectedDietaries(newSelectedDietariesList);
    // groupDietaries()
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="wrapper">
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
            <span>{selectedItems.length}</span>
            </div>
            <div className="col-6 menu-summary-right">
             
            </div>
          </div>
        </div>
      </div>
      <div className="container menu-builder">
        <div className="row">
          <div className="col-5">
            <div className="filters">
              <input id="search-bar" className="form-control" placeholder="Name" onChange={handleChange} />
            </div>
            {items.filter((val) => {
              if(val == "") {
                return val
              } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }
            }).map(item => 
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
          )}
          </div>

          <div className="col-7">
          <h2>Menu preview</h2>
          
          {selectedItems.map(selectedItem => 
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
          )}
        </div>
        </div>
      </div>
    </div>
  )
}

export default App;