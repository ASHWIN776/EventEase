import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Host from './pages/Host/Host'
import AddEventForm from './pages/Host/components/AddEventForm'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Host />} />
        <Route path='/AddEventForm' element={<AddEventForm />} />
        
      </Routes>
    </div>
  )
}

export default App
