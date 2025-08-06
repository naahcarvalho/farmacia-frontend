function Footer() {
  const data = new Date().getFullYear();

  return (
    <footer>
      <div className="w-full h-2 bg-transparent relative overflow-hidden">
        <div className="absolute left-[-50px] animate-slidePill w-10 h-2 rounded-full bg-gradient-to-r from-teal-300 via-teal-200 to-cyan-200"></div>
      </div>

      <div className="w-full bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 text-white flex flex-col items-center py-8 shadow-md">
        <p className="text-lg font-bold mb-1">Projeto Saú.dev - {data}</p>
        <p className="text-base italic">
          Criado com 💚 e dedicação para cuidar de você!
        </p>
      </div>
    </footer>
  );
}

export default Footer;
