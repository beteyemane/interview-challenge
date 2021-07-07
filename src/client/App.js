import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(true)
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    setIsLoading(true)
    axios.get("http://localhost:8080/api/items")
        .then(response => {
          setItems(response.data.items)
          console.log(response)
          setIsLoading(false)
        })
        .catch(() => {
            setError(error)
        })
  }, [])

  const selectItem = (e ,item) => {
    e.preventDefault();
    setSelectedItems(selectedItems.concat(item))
    console.log(selectedItems)
  };

  return (
    <div className="wrapper">
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>6 items</span>
            </div>
            <div className="col-6 menu-summary-right">
              6x <span className="dietary">ve</span>
              4x <span className="dietary">v</span>
              12x <span className="dietary">n!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <div className="filters">
              <input className="form-control" placeholder="Name" />
            </div>
            {items.map(item => 
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

          <div className="col-8">
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
                <button className="remove-item">x</button>
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