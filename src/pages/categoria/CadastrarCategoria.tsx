import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cadastrar } from "../../services/Service";

export default function CadastrarCategoria() {
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!categoria.trim()) {
      alert("Por favor, preencha o nome da categoria.");
      return;
    }

    if (!descricao.trim()) {
      alert("Por favor, preencha a descrição da categoria.");
      return;
    }

    try {
      await cadastrar("/categorias", { nome: categoria, descricao }, () => {});
      alert(`Categoria "${categoria}" cadastrada com sucesso!`);
      
      setCategoria("");
      setDescricao("");

      navigate("/listarCategoria");
    } catch (error) {
      alert("Erro ao cadastrar a categoria.");
      console.error(error);
    }
  }

  return (
    <div className="container mx-auto px-4 py-20 max-w-md">
      <h1 className="text-2xl font-bold mb-7 text-teal-800 text-center">
        Cadastrar Nova Categoria
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="categoria" className="font-semibold text-teal-700 mb-2">
          Nome:
        </label>
        <input
          id="categoria"
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder="Digite o nome da categoria"
          className="border border-teal-300 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          required
        />

        <label htmlFor="descricao" className="font-semibold text-teal-700 mb-2">
          Descrição:
        </label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Digite a descrição da categoria"
          className="border border-teal-300 rounded px-3 py-2 h-24 resize-none mb-6 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          required
        />

        <button
          type="submit"
          className="bg-teal-600 cursor-pointer text-white rounded py-2 font-semibold hover:bg-teal-700 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
