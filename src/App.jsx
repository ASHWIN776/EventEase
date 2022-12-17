import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDash from './pages/User/UserDash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/UserDash' element={<UserDash />} />

      </Routes>
    </div>
  )
}

export default App
