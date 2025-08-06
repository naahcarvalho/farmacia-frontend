import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 text-white flex justify-center py-8 shadow-md">
        <div className="container flex justify-between items-center text-lg px-4">
          <h1 className="text-5xl font-bold tracking-wider select-none">
            Saú.dev
          </h1>

          <div className="flex gap-6 text-white font-medium tracking-wide">
            <Link
              to="/home"
              className="px-3 py-1 rounded hover:bg-white hover:text-teal-700 transition"
            >
              Home
            </Link>
            <Link
              to="/listarCategoria"
              className="px-3 py-1 rounded hover:bg-white hover:text-teal-700 transition"
            >
              Categorias
            </Link>
            <Link
              to="/cadastrarCategoria"
              className="px-3 py-1 rounded hover:bg-white hover:text-teal-700 transition"
            >
              Cadastrar Categoria
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
