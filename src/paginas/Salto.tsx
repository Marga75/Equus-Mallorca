import obstaculos from "../assets/obstaculos.webp";
import salto from "../assets/salto.webp";

function Salto() {
  return (
    <>
      <div className="w-[50.00rem] m-auto text-center bg-[rgb(228,209,170)] grid place-items-center mt-5 mb-5">
        <h2 data-key="subtitulo" className="m-5 pt-2.5 text-3xl font-bold">
          Salto de Obstáculos en Mallorca
        </h2>

        <p data-key="texto1" className="text-left m-5 p-1">
          El <strong>salto de obstáculos</strong> es una de las disciplinas más
          reconocidas en el mundo de la equitación. Su objetivo principal es que
          el jinete y su caballo completen el recorrido sin derribar los
          obstáculos y en el menor tiempo posible. Para ello, el jinete debe
          mostrar una armonía perfecta con su caballo, y este, a su vez, debe
          demostrar agilidad, fuerza y precisión en cada salto.
        </p>

        <h3 data-key="apartado1" className="text-2xl font-bold">Tipos de obstáculos</h3>
        <p data-key="texto2" className="text-left m-5 p-1">
          Los recorridos de salto pueden incluir una variedad de obstáculos,
          diseñados para probar diferentes habilidades de los caballos y
          jinetes, tales como
          <strong>verticales, oxers, triples barras y combinaciones</strong>.
          Cada tipo de obstáculo desafía de manera distinta la técnica y
          coordinación de ambos.
        </p>
        <img src={obstaculos} alt="Tipos de obstáculos" />

        <br />
        <br />

        <h3 data-key="apartado2" className="text-2xl font-bold">Tipos de penalización</h3>
        <p data-key="texto3" className="text-left m-5 p-1">
          En las competencias de salto, los jinetes pueden recibir diferentes
          penalizaciones según los errores cometidos:
        </p>

        <table className="border-collapse ml-5 mr-5 mb-5">
          <thead className="text-left p-3">
            <tr>
              <th
                data-key="encabezado1"
                className="border border-[rgb(73,36,1)] px-3"
              >
                Tipo de Penalización
              </th>
              <th
                data-key="encabezado2"
                className="border border-[rgb(73,36,1)] px-3"
              >
                Descripción
              </th>
              <th
                data-key="encabezado3"
                className="border border-[rgb(73,36,1)] px-3"
              >
                Puntos
              </th>
            </tr>
          </thead>
          <tbody className="text-left p-3">
            <tr>
              <td
                data-key="contenido1"
                className="border border-[rgb(73,36,1)] px-3"
              >
                Rehúse
              </td>
              <td
                data-key="contenido2"
                className="border border-[rgb(73,36,1)] px-3"
              >
                El caballo se detiene frente al obstáculo sin saltarlo.
              </td>
              <td
                data-key="contenido3"
                className="border border-[rgb(73,36,1)] px-3"
              >
                Primer rehúse: 4 puntos
                <br />
                Segundo rehúse: Eliminación
              </td>
            </tr>
            <tr>
              <td
                data-key="contenido4"
                className="border border-[rgb(73,36,1)] px-3"
              >
                Derribo
              </td>
              <td
                data-key="contenido5"
                className="border border-[rgb(73,36,1)] px-3"
              >
                Caída de cualquier parte del obstáculo al suelo.
              </td>
              <td
                data-key="contenido6"
                className="border border-[rgb(73,36,1)] px-3"
              >
                4 puntos
              </td>
            </tr>
            <tr>
              <td
                data-key="contenido7"
                className="border border-[rgb(73,36,1)] px-3"
              >
                Caída del jinete
              </td>
              <td
                data-key="contenido8"
                className="border border-[rgb(73,36,1)] px-3"
              >
                Si el jinete cae durante el recorrido.
              </td>
              <td
                data-key="contenido9"
                className="border border-[rgb(73,36,1)] px-3"
              >
                Eliminación
              </td>
            </tr>
            <tr>
              <td
                data-key="contenido10"
                className="border border-[rgb(73,36,1)] px-3"
              >
                Error de recorrido
              </td>
              <td
                data-key="contenido11"
                className="border border-[rgb(73,36,1)] px-3"
              >
                El jinete salta un obstáculo en el orden incorrecto.
              </td>
              <td
                data-key="contenido12"
                className="border border-[rgb(73,36,1)] px-3"
              >
                Eliminación
              </td>
            </tr>
            <tr>
              <td
                data-key="contenido13"
                className="border border-[rgb(73,36,1)] px-3"
              >
                Exceso de tiempo
              </td>
              <td
                data-key="contenido14"
                className="border border-[rgb(73,36,1)]  px-3"
              >
                Se supera el tiempo asignado para completar el recorrido.
              </td>
              <td
                data-key="contenido15"
                className="border border-[rgb(73,36,1)]  px-3"
              >
                1 punto por cada 4 segundos de exceso
              </td>
            </tr>
          </tbody>
        </table>

        <img className="w-[37.50rem] mb-3" src={salto} alt="Salto" />
      </div>
    </>
  );
}

export default Salto;
