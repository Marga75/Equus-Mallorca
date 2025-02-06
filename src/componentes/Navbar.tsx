import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-between">
        <li className="mr-4">
          <Link to="/" data-key="menu" className="text-white hover:text-gray-400">
            Inicio
          </Link>
        </li>
        <li className="mr-4">
          <Link to="/salto" data-key="menu1" className="text-white hover:text-gray-400">
            Salto
          </Link>
        </li>
        <li className="mr-4">
          <Link to="/doma" data-key="menu2" className="text-white hover:text-gray-400">
            Doma
          </Link>
        </li>
        <li className="mr-4">
          <Link to="/carreras" data-key="menu3" className="text-white hover:text-gray-400">
            Carreras
          </Link>
        </li>
        <li className="mr-4">
          <Link to="/volteo" data-key="menu4" className="text-white hover:text-gray-400">
            Volteo
          </Link>
        </li>
        <li className="mr-4">
          <Link to="/domaVaquera" data-key="menu5" className="text-white hover:text-gray-400">
            Doma Vaquera
          </Link>
        </li>
        <li className="mr-4">
          <Link to="/western" data-key="menu6" className="text-white hover:text-gray-400">
            Western
          </Link>
        </li>
        <li className="mr-4">
          <Link
            to="/calculadoraExperiencia" data-key="menu7"
            className="text-white hover:text-gray-400"
          >
            Calcula tu experiencia
          </Link>
        </li>
        <li className="mr-4">
          <Link to="/contacto" data-key="menu8" className="text-white hover:text-gray-400">
            Contactame
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
