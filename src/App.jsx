import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import ComparatorPage from './pages/ComparatorPAge'
import FavoritePage from './pages/FavoritePage'
import NavBar from './components/NavBar'
import './App.css'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailPage />} />
          <Route path="/compare" element={<ComparatorPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}