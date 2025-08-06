import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Categoria } from "../../models/Categoria";
import { buscar, deletar } from "../../services/Service";

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      buscar(`/categorias/${id}`, setCategoria);
    }
  }, [id]);

  async function sim() {
    try {
      await deletar(`/categorias/${id}`);
      alert("Categoria apagada com sucesso!");
      navigate("/ListarCategoria");
    } catch (error) {
      alert("Erro ao apagar a categoria.");
      console.error(error);
    }
  }

  function nao() {
    navigate("/ListarCategoria");
  }

  return (
    <div className="flex flex-col items-center justify-center m-4">
      <h1 className="text-2xl font-bold text-teal-700 my-10">
        Apagar Categoria
      </h1>
      <div className="bg-red-300 p-6  text-gray-700 rounded shadow-md border-2 border-red-300 w-96 text-center">
        <p className="text-base mb-2 font-semibold">
          Tem certeza de que deseja apagar <br />
          a Categoria:{" "}
          <span className="font-bold text-teal-600">{categoria?.nome}</span>
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={nao}
            className="bg-teal-600 hover:bg-teal-700 cursor-pointer text-white font-semibold px-5 py-2 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={sim}
            className="bg-red-600 hover:bg-red-700 cursor-pointer text-white font-semibold px-5 py-2 rounded"
          >
            Apagar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
