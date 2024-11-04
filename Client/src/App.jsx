import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './components/Landing'
import Filter from './components/Filter'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/filter" element={<Filter/>} />
      </Routes>
    </Router>
  )
}

export default App
