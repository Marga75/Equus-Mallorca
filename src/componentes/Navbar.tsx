import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[rgb(73,36,1)] p-2 sticky top-0 text-cyan-50">
      <div className="flex items-center">
        <Link to="/" data-key="menu" className="hover:text-[rgb(248,233,200)] hover:underline">
          Inicio
        </Link>
      </div>
      <div className="flex items-center flex-grow justify-center">
        <Link to="/salto" data-key="menu1" className="mx-3 hover:text-[rgb(248,233,200)] hover:underline">
          Salto
        </Link>
        <Link to="/doma" data-key="menu2" className="mx-3 hover:text-[rgb(248,233,200)] hover:underline">
          Doma
        </Link>
        <Link to="/carreras" data-key="menu3" className="mx-3 hover:text-[rgb(248,233,200)] hover:underline">
          Carreras
        </Link>
        <Link to="/volteo" data-key="menu4" className="mx-3 hover:text-[rgb(248,233,200)] hover:underline">
          Volteo
        </Link>
        <Link to="/domaVaquera" data-key="menu5" className="mx-3 hover:text-[rgb(248,233,200)] hover:underline">
          Doma Vaquera
        </Link>
        <Link to="/western" data-key="menu6" className="mx-3 hover:text-[rgb(248,233,200)] hover:underline">
          Western
        </Link>
        <Link to="/calculadoraExperiencia" data-key="menu7" className="mx-3 hover:text-[rgb(248,233,200)] hover:underline">
          Calcula tu experiencia
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/contacto" data-key="menu8" className="hover:text-[rgb(248,233,200)] hover:underline">
          Contactame
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
