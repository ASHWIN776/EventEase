import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </div>
  )
}

export default App
