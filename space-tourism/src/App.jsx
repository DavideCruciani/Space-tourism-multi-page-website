import Destination from './components/Destination'
import Header from './components/Header'
import Home from './components/Home'
import Crew from './components/Crew'
import Technology from './components/Technology'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
    </>
  )
}

export default App
