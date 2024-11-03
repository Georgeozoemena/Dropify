import React from 'react'
import './App.css'
import LeftPanel from './components/ui/left-panel/left-panel'
import Orders from './components/ui/orders/orders'

function App() {
  return (
    <div className="dashboard">
      <LeftPanel />
      <Orders />
    </div>
  )
}

export default App