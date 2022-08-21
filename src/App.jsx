import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/home'
import Disciplines from './pages/disciplines'
import Topics from './pages/topics'
import Tracks from './pages/tracks'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disciplines" element={<Disciplines />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/tracks" element={<Tracks />} />
          {/* <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/redirect" element={<Navigate to="/about" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App