import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import CadastrarCategoria from "./pages/categoria/CadastrarCategoria";
import DeletarCategoria from "./pages/categoria/DeletarCategoria";
import ListarCategoria from "./pages/categoria/ListarCategoria";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/listarCategoria" element={<ListarCategoria />} />
          <Route path="/cadastrarCategoria" element={<CadastrarCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
