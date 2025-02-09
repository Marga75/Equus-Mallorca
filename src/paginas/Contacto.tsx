import { useState, useEffect } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [idioma, setIdioma] = useState("es"); // Iidoma por defecto

  useEffect(() => {
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    setIdioma(idiomaGuardado);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsValid(true);

    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
      setIsValid(false);
    } else if (idioma === "es") {
      alert(`Gracias, ${nombre}, por contactarnos. Te responderemos pronto.`);
    } else {
      alert(
        `Thanks, ${nombre}, for contacting us. We will respond to you soon.`
      );
    }
  };

  const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMensajeChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMensaje(event.target.value);
  };

  return (
    <>
      <div className="w-[800px] m-auto text-center bg-[rgb(228,209,170)] h-[630px] mb-5">
        <h2 data-key="encabezado" className="m-5 pt-5 text-5xl font-bold">
          Contacto
        </h2>

        <div className="max-w-[37.50rem] my-6 m-auto p-5 rounded-lg bg-[rgb(166,148,112)] shadow-md">
          <form id="formulario" method="post" onSubmit={handleSubmit}>
            <label
              data-key="nombre"
              htmlFor="nombre"
              className="block mt-3.5 mx-0 mb-1 font-bold"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              onChange={handleNombreChange}
              className="w-full p-2.5 mb-2.5 border border-[rgb(204,204,204)] rounded-md text-sm"
            />

            <label
              data-key="email"
              htmlFor="email"
              className="block mt-3.5 mx-0 mb-1 font-bold"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleEmailChange}
              className="w-full p-2.5 mb-2.5 border border-[rgb(204,204,204)] rounded-md text-sm"
            />

            <label
              data-key="mensaje"
              htmlFor="mensaje"
              className="block mt-3.5 mx-0 mb-1 font-bold"
            >
              Mensaje
            </label>
            <textarea
              name="mensaje"
              id="mensaje"
              rows={5}
              onChange={handleMensajeChange}
              className="w-full p-2.5 mb-2.5 border border-[rgb(204,204,204)] rounded-md text-sm"
            />

            <button
              data-key="enviar"
              className="bg-[rgb(76,175,80)] text-white py-2 px-5 rounded-md cursor-pointer text-base hover:bg-[rgb(69,160,73)]"
              type="submit"
            >
              Enviar
            </button>
            {!isValid && (
              <p className="text-red-500 mt-2">
                {idioma === "es"
                  ? "Por favor, completa todos los campos."
                  : "Please fill in all fields."}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacto;
