function Header() {
  return (
    <header>
      <div className="bg-[rgb(73,36,1)] text-center">
        <h1 
        data-key="titulo" 
        className="p-5 text-cyan-50 uppercase underline text-[5em] text-shadow-lg font-bold"
        style={{ textShadow: "8px 7px 5px black" }}
        >Equitación</h1>
        <h2 data-key="subtitulo1" className="p-5 text-cyan-50 text-3xl font-bold">Todas las disciplinas que se practican en Mallorca</h2>
      </div>

      <hr />
    </header>
  );
}

export default Header;
