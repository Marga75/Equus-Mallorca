import { useState, useEffect } from "react";
//import "../tailwindcss/calculadora.css";

function CalculadoraExperiencia() {
  const [experiencia, setExperiencia] = useState("");
  const [frequencia, setFrequencia] = useState("");
  const [terreno, setTerreno] = useState("");
  const [resultado, setResultado] = useState("");
  const [idioma, setIdioma] = useState("es"); // Iidoma por defecto

  useEffect(() => {
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    setIdioma(idiomaGuardado);
  }, []);

  const handleExperienciaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setExperiencia(event.target.value);
  };

  const handleFrequenciaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFrequencia(event.target.value);
  };

  const handleTerrenoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerreno(event.target.value);
  };

  const calcular = () => {
    let resultado = "";

    if (idioma === "es") {
      if (!terreno) {
        resultado = "Por favor, responde a todas las preguntas.";
      } else if (experiencia === "principiante") {
        resultado =
          "Eres un principiante. Te recomendamos rutas fáciles y planas.";
      } else if (experiencia === "intermedio" && frequencia === "moderada") {
        resultado =
          "Tienes experiencia moderada. Prueba rutas intermedias con terrenos variados.";
      } else if (experiencia === "avanzado" && terreno === "si") {
        resultado =
          "Eres un jinete avanzado. Explora rutas desafiantes con terreno irregular.";
      } else {
        resultado =
          "Basándonos en tus respuestas, recomendamos rutas intermedias.";
      }
    } else {
      if (!terreno) {
        resultado = "Please answer all questions.";
      } else if (experiencia === "principiante") {
        resultado = "You are a beginner. We recommend easy and flat routes.";
      } else if (experiencia === "intermedio" && frequencia === "moderada") {
        resultado =
          "You have moderate experience. Try intermediate routes with varied terrain.";
      } else if (experiencia === "avanzado" && terreno === "si") {
        resultado =
          "You are an advanced rider. Explore challenging routes with uneven terrain.";
      } else {
        resultado = "Based on your answers, we recommend intermediate routes.";
      }
    }

    setResultado(resultado);
  };

  return (
    <>
      <div className="w-[50.00rem] m-auto text-center bg-[rgb(228,209,170)] h-[47.00rem] mb-5">
        <h2 data-key="encabezado" className="m-5 pt-5 text-[50px] font-bold">
          Descubre tu nivel de experiencia
        </h2>

        <div className="max-w-[37.50rem] my-6 m-auto p-5 rounded-lg bg-[rgb(166,148,112)] shadow-md">
          <form id="formulario" method="post">
            <label data-key="pregunta1" className="block mt-3.5 mx-0 mb-1 font-bold">
              ¿Cuánto tiempo llevas montando a caballo?
            </label>
            <br />
            <select
              id="experiencia"
              value={experiencia}
              onChange={handleExperienciaChange}
            >
              <option data-key="opcion1" value="principiante">
                Menos de 6 meses
              </option>
              <option data-key="opcion2" value="intermedio">
                6 meses - 2 años
              </option>
              <option data-key="opcion3" value="avanzado">
                Más de 2 años
              </option>
            </select>

            <br />
            <br />

            <label data-key="pregunta2" className="block mt-3.5 mx-0 mb-1 font-bold">¿Con qué frecuencia montas?</label>
            <br />
            <select
              id="frequencia"
              value={frequencia}
              onChange={handleFrequenciaChange}
            >
              <option data-key="opcion4" value="baja">
                Rara vez
              </option>
              <option data-key="opcion5" value="moderada">
                Una vez al mes
              </option>
              <option data-key="opcion6" value="alta">
                Varias veces al mes
              </option>
            </select>
            <br />
            <br />

            <label data-key="pregunta3" className="block mt-3.5 mx-0 mb-1 font-bold">
              ¿Has montado en rutas con terreno irregular?
            </label>
            <br />
            <input
              type="radio"
              name="terreno"
              id="si"
              value="si"
              checked={terreno === "si"}
              onChange={handleTerrenoChange}
            />
            <label data-key="opcion7" className="inline" htmlFor="si">
              Sí
            </label>
            <br />
            <input
              type="radio"
              id="no"
              name="terreno"
              value="no"
              checked={terreno === "no"}
              onChange={handleTerrenoChange}
            />
            <label className="inline" htmlFor="no">
              No
            </label>

            <br />
            <br />

            <button
              data-key="calcular"
              type="button"
              id="calcular"
              className="text-white py-2 px-5 rounded-md cursor-pointer text-base bg-green-600 hover:bg-green-700"
              onClick={calcular}
            >
              Calcular nivel
            </button>
          </form>
        </div>

        <div id="resultado" className="mt-10 text-xl leading-7">{resultado}</div>
      </div>
    </>
  );
}

export default CalculadoraExperiencia;
