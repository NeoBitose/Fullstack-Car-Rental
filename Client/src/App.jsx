import { useState } from 'react'
import Landing from './components/Landing'
import Filter from './components/Filter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Landing/> */}
      <Filter/>
    </>
  )
}

export default App
