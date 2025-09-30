import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import './App.css'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}