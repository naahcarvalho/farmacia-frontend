import DeletarCategoria from "../categoria/DeletarCategoria";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 text-white px-60 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center justify-between w-full -mt-14 gap-30">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-teal-800 text-5xl font-bold font-cursive mb-4 text-center text-shadow-white">
              Saúde + Código
            </h2>
            <p className="bg-teal-800 text-xl italic text-center">
              Cuidando da sua saúde com o mesmo carinho que você cuida do
              código!
            </p>
          </div> 
          <img
            src="https://i.imgur.com/cXNGBqH.png"
            alt="Ilustração estilizada de saúde e tecnologia combinadas"
            className="w-72 md:w-96"
          />
        </div>
      </section>

      <h1 className="bg-emerald-50 text-3xl font-bold text-teal-800 py-20 px-9">
        Categorias
      </h1>

      <section className="bg-emerald-50 pb-30 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {[
          { nome: "Depurex Forte", desc: "Contra bugs persistentes" },
          { nome: "Refactorina 500mg", desc: "Para códigos desorganizados" },
          { nome: "Loginex Flash", desc: "Autenticação sem dor de cabeça" },
          { nome: "Errostop", desc: "Para não deixar os erros te pararem" },
          { nome: "Responsivol", desc: "Sites bonitos em qualquer tela" },
          { nome: "Hookedonina", desc: "Use com moderação em componentes" },
          { nome: "AsyncFast", desc: "Para requisições que nunca chegam" },
          {
            nome: "DeploySafe",
            desc: "Evita dores de cabeça na hora de publicar",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="w-60 bg-white border-2 border-teal-100 rounded-lg p-4 text-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition"
          >
            <h3 className="text-lg font-bold text-gray-800">{item.nome}</h3>

            <p className="text-sm text-teal-700 mb-4">({item.desc})</p>

            <div className="flex justify-around">
              <button className="bg-teal-600 cursor-pointer hover:bg-teal-700 text-white px-3 py-1 rounded">
                Editar
              </button>

              <button
                onClick={DeletarCategoria}
                className="bg-gray-400 cursor-pointer hover:bg-gray-500 text-white px-4 py-2 rounded"
              >
                Apagar
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
