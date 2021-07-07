import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    axios.get("http://localhost:8080/api/items")
        .then(response => {
          setItems(response.data.items)
          console.log(items)
          setIsLoading(false)
        })
        .catch(() => {
            setError(error)
        })
  }, [])

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
            <ul key={item.id} className="item-picker">
              <li className="item">
                <h2>{item.name}</h2>
                <p>
                  <span className="dietary">ve</span>
                  <span className="dietary">v</span>
                  <span className="dietary">n!</span>
                </p>
              </li>
            </ul>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;