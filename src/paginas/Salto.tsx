import obstaculos from "../assets/obstaculos.webp";
import salto from "../assets/salto.webp";

function Salto() {
  return (
    <>
      <div className="intro">
        <h2 data-key="subtitulo" className="apartado">
          Salto de Obstáculos en Mallorca
        </h2>

        <p data-key="texto1">
          El <strong>salto de obstáculos</strong> es una de las disciplinas más
          reconocidas en el mundo de la equitación. Su objetivo principal es que
          el jinete y su caballo completen el recorrido sin derribar los
          obstáculos y en el menor tiempo posible. Para ello, el jinete debe
          mostrar una armonía perfecta con su caballo, y este, a su vez, debe
          demostrar agilidad, fuerza y precisión en cada salto.
        </p>

        <h3 data-key="apartado1">Tipos de obstáculos</h3>
        <p data-key="texto2">
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

        <h3 data-key="apartado2">Tipos de penalización</h3>
        <p data-key="texto3">
          En las competencias de salto, los jinetes pueden recibir diferentes
          penalizaciones según los errores cometidos:
        </p>

        <table>
          <tbody>
            <tr>
              <th data-key="encabezado1">Tipo de Penalización</th>
              <th data-key="encabezado2">Descripción</th>
              <th data-key="encabezado3">Puntos</th>
            </tr>
            <tr>
              <td data-key="contenido1">Rehúse</td>
              <td data-key="contenido2">
                El caballo se detiene frente al obstáculo sin saltarlo.
              </td>
              <td data-key="contenido3">
                Primer rehúse: 4 puntos
                <br />
                Segundo rehúse: Eliminación
              </td>
            </tr>
            <tr>
              <td data-key="contenido4">Derribo</td>
              <td data-key="contenido5">
                Caída de cualquier parte del obstáculo al suelo.
              </td>
              <td data-key="contenido6">4 puntos</td>
            </tr>
            <tr>
              <td data-key="contenido7">Caída del jinete</td>
              <td data-key="contenido8">
                Si el jinete cae durante el recorrido.
              </td>
              <td data-key="contenido9">Eliminación</td>
            </tr>
            <tr>
              <td data-key="contenido10">Error de recorrido</td>
              <td data-key="contenido11">
                El jinete salta un obstáculo en el orden incorrecto.
              </td>
              <td data-key="contenido12">Eliminación</td>
            </tr>
            <tr>
              <td data-key="contenido13">Exceso de tiempo</td>
              <td data-key="contenido14">
                Se supera el tiempo asignado para completar el recorrido.
              </td>
              <td data-key="contenido15">
                1 punto por cada 4 segundos de exceso
              </td>
            </tr>
          </tbody>
        </table>

        <img className="img-central" src={salto} alt="Salto" />
      </div>
    </>
  );
}

export default Salto;