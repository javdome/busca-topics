import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/home'
import Disciplines from './pages/disciplines'
import Topics from './pages/topics'
import Tracks from './pages/tracks'
import { useState } from 'react'


function App() {

  const [filterAll, setFilterAll] = useState(false);

  return (
    <div className="App">
      <HashRouter>
      {/* <BrowserRouter basename="/busca-topics"> */}
        <Routes>
          <Route path="/" element={<Home filterAll={filterAll} setFilterAll={setFilterAll} />} />
          <Route path="/disciplines" element={<Disciplines />} />
          <Route path="/topics" element={<Topics filterAll={filterAll} setFilterAll={setFilterAll} />} />
          <Route path="/tracks" element={<Tracks filterAll={filterAll} setFilterAll={setFilterAll} />} />
          {/* <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/redirect" element={<Navigate to="/about" />} /> */}
        </Routes>
      {/* </BrowserRouter> */}
      </HashRouter>
    </div>
  )
}

export default App