import { useState } from 'react';

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsValid(true);

    if (nombre === "" || email === "" || mensaje === "") {
      setIsValid(false);
    } else {
      alert(`Gracias, ${nombre}, por contactarnos. Te responderemos pronto.`);
    }
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  return (
    <>
      <div className="contenedor-formulario">
        <h2 data-key="encabezado" className="contacto">
          Contacto
        </h2>

        <div className="formulario">
          <form id="formulario" method="post" onSubmit={handleSubmit}>
            <label data-key="nombre" htmlFor="nombre">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              onChange={handleNombreChange}
            />

            <label data-key="email" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleEmailChange}
            />

            <label data-key="mensaje" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              id="mensaje"
              rows="5"
              onChange={handleMensajeChange}
            />

            <button data-key="enviar" className="boton" type="submit">
              Enviar
            </button>
            {isValid ? null : (
              <p style={{ color: "red" }}>
                Por favor, completa todos los campos.
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacto;
