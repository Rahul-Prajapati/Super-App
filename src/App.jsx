import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import RecommandMovies from './pages/RecommandMovies'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/recommendation" element={<RecommandMovies />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
