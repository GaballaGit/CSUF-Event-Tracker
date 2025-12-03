import { useState } from 'react'
import { Route, Routes, Link} from 'react-router-dom'
import  Dashboard  from './pages/dashboard'
import  Finder  from './pages/finder'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1>Hello world</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/find">Find Events</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/find" element={<Finder />} />
      </Routes>
    </>
  )
}

export default App
