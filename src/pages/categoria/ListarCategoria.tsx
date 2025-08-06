export default function ListarCategoria() {
  const categorias = [
    { nome: "Depurex Forte", desc: "Contra bugs persistentes" },
    { nome: "Refactorina 500mg", desc: "Para códigos desorganizados" },
    { nome: "Loginex Flash", desc: "Autenticação sem dor de cabeça" },
    { nome: "Errostop", desc: "Para não deixar os erros te pararem" },
    { nome: "Responsivol", desc: "Sites bonitos em qualquer tela" },
    { nome: "Hookedonina", desc: "Use com moderação em componentes" },
    { nome: "AsyncFast", desc: "Para requisições que nunca chegam" },
    { nome: "DeploySafe", desc: "Evita dores de cabeça na hora de publicar" },
  ];

  return (
    <div className="min-h-[60vh] bg-emerald-50 py-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-teal-800 -mt-18">
              Categorias
            </h1>
            <p className="text-sm text-gray-600 py-2">
              Escolha um “remédio” para o seu bug!
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {categorias.map((item, i) => (
            <article
              key={i}
              className="w-60 bg-white border-2 border-teal-100 rounded-lg p-4 text-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {item.nome}
              </h3>
              <p className="text-sm text-teal-700 mb-4">({item.desc})</p>

              <div className="flex justify-around">
                <button
                  type="button"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded"
                >
                  Editar
                </button>

                <button
                  type="button"
                  className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                >
                  Apagar
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
