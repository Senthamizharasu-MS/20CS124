import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Detail from './Components/Detail'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App