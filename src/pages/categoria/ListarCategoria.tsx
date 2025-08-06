import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type Categoria from "../../models/Categoria";
import { buscar } from "../../services/Service";

export default function ListarCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    buscar("/categorias", setCategorias);
  }, []);

  return (
    <div className="min-h-[60vh] bg-emerald-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-800 mb-6">Categorias</h1>
        <p className="text-sm text-gray-600 mb-8">Escolha um “remédio” para o seu bug!</p>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {categorias.length === 0 ? (
            <p>Nenhuma categoria encontrada.</p>
          ) : (
            categorias.map((categoria) => (
              <article
                key={categoria.id}
                className="w-60 bg-white border-2 border-teal-100 rounded-lg p-4 text-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">{categoria.nome}</h3>
                <p className="text-sm text-teal-700 mb-4">{categoria.descricao}</p>

                <div className="flex justify-around">
                  <button
                    onClick={() => navigate(`/editarCategoria/${categoria.id}`)}
                    className="bg-teal-600 cursor-pointer hover:bg-teal-700 text-white px-3 py-1 rounded"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => navigate(`/deletarCategoria/${categoria.id}`)}
                    className="bg-gray-400 cursor-pointer hover:bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Apagar
                  </button>
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </div>
  );
}
