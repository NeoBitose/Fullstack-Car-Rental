import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CarProvider } from './context/carContext';

import Landing from './pages/Landing'
import Filter from './pages/Filter'

function App() {
  return (
 
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </Router>

  )
}

export default App
