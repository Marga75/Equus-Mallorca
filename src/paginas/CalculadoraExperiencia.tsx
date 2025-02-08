import { useState, useEffect } from "react";

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

  const handleExperienciaChange = (event) => {
    setExperiencia(event.target.value);
  };

  const handleFrequenciaChange = (event) => {
    setFrequencia(event.target.value);
  };

  const handleTerrenoChange = (event) => {
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
      <div className="contenedor-formulario">
        <h2 data-key="encabezado" className="calculadora">
          Descubre tu nivel de experiencia
        </h2>

        <div className="formulario">
          <form id="formulario" method="post">
            <label data-key="pregunta1">
              ¿Cuánto tiempo llevas montando a caballo?
            </label>
            <br />
            <select id="experiencia" onChange={handleExperienciaChange}>
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

            <label data-key="pregunta2">¿Con qué frecuencia montas?</label>
            <br />
            <select id="frequencia" onChange={handleFrequenciaChange}>
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

            <label data-key="pregunta3">
              ¿Has montado en rutas con terreno irregular?
            </label>
            <br />
            <input
              type="radio"
              name="terreno"
              id="si"
              value="si"
              onChange={handleTerrenoChange}
            />
            <label data-key="opcion7" className="opcion" htmlFor="si">
              Sí
            </label>
            <br />
            <input
              type="radio"
              id="no"
              name="terreno"
              value="no"
              onChange={handleTerrenoChange}
            />
            <label className="opcion" htmlFor="no">
              No
            </label>

            <br />
            <br />

            <button
              data-key="calcular"
              type="button"
              id="calcular"
              onClick={calcular}
            >
              Calcular nivel
            </button>
          </form>
        </div>

        <div id="resultado">{resultado}</div>
      </div>
    </>
  );
}

export default CalculadoraExperiencia;
