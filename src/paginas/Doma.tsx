import doma from "../assets/doma.webp";

function Doma() {
  return (
    <>
      <div className="intro">
        <h2 data-key="subtitulo" className="apartado">
          Doma Clásica en Mallorca
        </h2>

        <p data-key="texto1">
          La <strong>doma clásica</strong> es una disciplina ecuestre que
          consiste en una serie de ejercicios ejecutados por el caballo bajo la
          guía de su jinete, con el objetivo de lograr movimientos armónicos,
          equilibrados y precisos.
        </p>

        <p data-key="texto2">
          En esta disciplina, se valora especialmente la tranquilidad del
          caballo durante el recorrido, así como su elasticidad, agilidad y
          flexibilidad a lo largo de la reprise.
        </p>

        <p data-key="texto3">
          La <strong>reprise</strong> incluye todos los aires básicos de la
          equitación clásica (paso, trote y galope) y una serie de ejercicios
          fundamentales que demuestran el nivel de entrenamiento y control.
        </p>

        <h3 data-key="apartado1">Niveles de la Reprise</h3>

        <p data-key="texto4">
          La doma clásica cuenta con diferentes niveles de dificultad en las
          reprises, que progresan conforme aumenta la habilidad del jinete y el
          caballo. Cada nivel incorpora movimientos y figuras de mayor
          complejidad.
        </p>

        <table>
          <thead>
            <tr>
              <th data-key="encabezado1">Nivel</th>
              <th data-key="encabezado2">Descripción de la Reprise</th>
              <th data-key="encabezado3">Participantes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-key="contenido1">Caballos Jóvenes</td>
              <td data-key="contenido2">
                Fase inicial para toma de contacto y adaptación.
              </td>
              <td data-key="contenido3">
                4 años
                <br />5 años
                <br />6 años
              </td>
            </tr>
            <tr>
              <td data-key="contenido4">Nivel 0: Asiento y Posición</td>
              <td data-key="contenido5">
                Introducción a la doma, enfocada en la postura y equilibrio del
                jinete.
              </td>
              <td data-key="contenido6">
                Benjamines 1 y 2<br />
                Ponis A
              </td>
            </tr>
            <tr>
              <td data-key="contenido7">Nivel 1: Iniciación</td>
              <td data-key="contenido8">
                Primer nivel de doma estructurada, ideal para etapas iniciales
                de aprendizaje.
              </td>
              <td data-key="contenido9">
                Alevines
                <br />
                Promoción 1
              </td>
            </tr>
            <tr>
              <td data-key="contenido10">Nivel 2: Elemental</td>
              <td data-key="contenido11">
                Desarrollo del segundo año de entrenamiento, consolidando los
                fundamentos.
              </td>
              <td data-key="contenido12">
                Infantiles
                <br />
                Promoción 2
              </td>
            </tr>
            <tr>
              <td data-key="contenido13">Nivel 3: Básico</td>
              <td data-key="contenido14">
                Adiestramiento general que establece una base sólida para
                cualquier disciplina ecuestre.
              </td>
              <td data-key="contenido15">
                Juveniles 0*
                <br />
                Promoción 3
              </td>
            </tr>
            <tr>
              <td data-key="contenido16">Nivel 4: Medio</td>
              <td data-key="contenido17">
                Introduce la reunión en los tres aires (paso, trote, galope)
                para mayor control.
              </td>
              <td data-key="contenido18">
                Juveniles
                <br />
                Promoción 4
              </td>
            </tr>
            <tr>
              <td data-key="contenido19">Nivel San Jorge (Medio/Avanzado)</td>
              <td data-key="contenido20">
                Etapa intermedia que refuerza la precisión y armonía en el
                entrenamiento.
              </td>
              <td data-key="contenido21">
                Jóvenes Jinetes
                <br />
                San Jorge
              </td>
            </tr>
            <tr>
              <td data-key="contenido22">
                Nivel Intermedia I (Medio/Avanzado)
              </td>
              <td data-key="contenido23">
                Preparación para competencias avanzadas, enfocada en el Gran
                Premio.
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td data-key="contenido24">Nivel Intermedia II (Avanzado)</td>
              <td data-key="contenido25">
                Etapa avanzada que afina la técnica en preparación para el Gran
                Premio.
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td data-key="contenido26">Nivel Gran Premio (Avanzado)</td>
              <td data-key="contenido27">
                Máximo nivel de competición, donde se busca una ejecución de
                perfecta ligereza y armonía.
              </td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h3 data-key="apartado2">Puntuación</h3>
        <p data-key="texto5">
          Las reprises de doma clásica se evalúan mediante un sistema de
          puntuación. Cada movimiento recibe una calificación en una escala de
          cero a diez, permitiéndose medios puntos. Obtener un diez en un
          movimiento es extremadamente raro y representa una ejecución casi
          perfecta. Se puntúan de la siguiente manera:
        </p>

        <div className="lista">
          <ol start={0}>
            <li data-key="lista1">No realizado</li>
            <li data-key="lista2">Muy malo</li>
            <li data-key="lista3">Malo</li>
            <li data-key="lista4">Bastante malo</li>
            <li data-key="lista5">Insuficiente</li>
            <li data-key="lista6">Marginales</li>
            <li data-key="lista7">Satisfactorio</li>
            <li data-key="lista8">Bastante bueno</li>
            <li data-key="lista9">Bueno</li>
            <li data-key="lista10">Muy bueno</li>
            <li data-key="lista11">Excelente</li>
          </ol>
        </div>

        <p data-key="texto6">
          Al finalizar cada prueba, los puntos obtenidos se suman y se dividen
          por el total de puntos posibles en la prueba, obteniendo así un
          porcentaje que refleja el desempeño del binomio (jinete y caballo) en
          la reprise.
        </p>

        <img className="img-central" src={doma} alt="Doma" />
      </div>
    </>
  );
}

export default Doma;
