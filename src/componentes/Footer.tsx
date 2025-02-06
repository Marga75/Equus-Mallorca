import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const [idioma, setIdioma] = useState(localStorage.getItem("idioma") || "es");

  const location = useLocation();

  const obtenerPaginaActual = () => {
    let pagina = location.pathname.split("/").pop();
    if (!pagina || pagina === "index.html") return "Index";
    return (
      pagina.replace(".html", "").charAt(0).toUpperCase() + pagina.slice(1)
    );
  };

  const [paginaActual, setPaginaActual] = useState(obtenerPaginaActual());

  useEffect(() => {
    setPaginaActual(obtenerPaginaActual());
  }, [location]);

  useEffect(() => {
    const cargarTraducciones = async () => {
      try {
        const respuesta = await fetch(`/json/${idioma}.json`);
        if (!respuesta.ok)
          throw new Error(`HTTP error! status: ${respuesta.status}`);

        const datos = await respuesta.json();

        if (datos[paginaActual]) {
          Object.keys(datos[paginaActual]).forEach((clave) => {
            const elemento = document.querySelector(`[data-key="${clave}"]`);
            if (elemento) {
              elemento.innerHTML = datos[paginaActual][clave];
            } else {
              console.warn(
                `No se encontró el elemento [data-key="${clave}"] en la página`
              );
            }
          });
        } else {
          console.warn(
            `No hay traducciones para la página '${paginaActual}' en ${idioma}.json`
          );
        }
      } catch (error) {
        console.error("Error al cargar las traducciones:", error);
      }
    };

    cargarTraducciones();
  }, [idioma, paginaActual]);

  const cambiarIdioma = (event) => {
    const idiomaSeleccionado = event.target.value;
    localStorage.setItem("idioma", idiomaSeleccionado);
    setIdioma(idiomaSeleccionado);
  };

  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="selectorIdioma">
        <label data-key="lenguaje" htmlFor="idioma">
          Selecciona un idioma:
        </label>
        <select id="idioma" onChange={cambiarIdioma} value={idioma}>
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
