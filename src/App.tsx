import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/Home' 
import CadastrarCategoria from './pages/categoria/CadastrarCategoria' 
import ListarCategoria from './pages/categoria/ListarCategoria'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/listarCategoria" element={<ListarCategoria />} /> 
          <Route path="/cadastrarCategoria" element={<CadastrarCategoria />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
