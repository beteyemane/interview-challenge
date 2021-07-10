import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css';

import MenuContainer from './MenuContainer';
import Header from './Header';

const App = () => {
  const [items, setItems] = useState([])
  const [selectedDietaries, setSelectedDietaries] = useState([])
  const [groupedDietaries, setGroupedDietaries] = useState({})
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

  return (
    <div className="wrapper">
      <Header selectedItemsTotal={selectedItems.length} groupedDietaries={groupedDietaries} />
      <MenuContainer items={items} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
    </div>
  )
}

export default App;