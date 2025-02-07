import doma from "../assets/doma.webp";

function Doma() {
  return (
    <>
      <div className="w-[50.00rem] m-auto text-center bg-[rgb(228,209,170)] grid place-items-center mt-5 mb-5">
        <h2 data-key="subtitulo" className="m-5 pt-2.5 text-3xl font-bold">
          Doma Clásica en Mallorca
        </h2>

        <p data-key="texto1" className="text-left m-5 p-1">
          La <strong>doma clásica</strong> es una disciplina ecuestre que
          consiste en una serie de ejercicios ejecutados por el caballo bajo la
          guía de su jinete, con el objetivo de lograr movimientos armónicos,
          equilibrados y precisos.
        </p>

        <p data-key="texto2" className="text-left m-5 p-1">
          En esta disciplina, se valora especialmente la tranquilidad del
          caballo durante el recorrido, así como su elasticidad, agilidad y
          flexibilidad a lo largo de la reprise.
        </p>

        <p data-key="texto3" className="text-left m-5 p-1">
          La <strong>reprise</strong> incluye todos los aires básicos de la
          equitación clásica (paso, trote y galope) y una serie de ejercicios
          fundamentales que demuestran el nivel de entrenamiento y control.
        </p>

        <h3 data-key="apartado1" className="text-2xl font-bold">Niveles de la Reprise</h3>

        <p data-key="texto4" className="text-left m-5 p-1">
          La doma clásica cuenta con diferentes niveles de dificultad en las
          reprises, que progresan conforme aumenta la habilidad del jinete y el
          caballo. Cada nivel incorpora movimientos y figuras de mayor
          complejidad.
        </p>

        <table className="border-collapse ml-5 mr-5 mb-5">
          <thead className="text-left p-3">
            <tr>
              <th data-key="encabezado1" className="border border-[rgb(73,36,1)] px-3">Nivel</th>
              <th data-key="encabezado2" className="border border-[rgb(73,36,1)] px-3">Descripción de la Reprise</th>
              <th data-key="encabezado3" className="border border-[rgb(73,36,1)] px-3">Participantes</th>
            </tr>
          </thead>
          <tbody className="text-left p-3">
            <tr>
              <td data-key="contenido1" className="border border-[rgb(73,36,1)] px-3">Caballos Jóvenes</td>
              <td data-key="contenido2" className="border border-[rgb(73,36,1)] px-3">
                Fase inicial para toma de contacto y adaptación.
              </td>
              <td data-key="contenido3" className="border border-[rgb(73,36,1)] px-3">
                4 años
                <br />5 años
                <br />6 años
              </td>
            </tr>
            <tr>
              <td data-key="contenido4" className="border border-[rgb(73,36,1)] px-3">Nivel 0: Asiento y Posición</td>
              <td data-key="contenido5" className="border border-[rgb(73,36,1)] px-3">
                Introducción a la doma, enfocada en la postura y equilibrio del
                jinete.
              </td>
              <td data-key="contenido6" className="border border-[rgb(73,36,1)] px-3">
                Benjamines 1 y 2<br />
                Ponis A
              </td>
            </tr>
            <tr>
              <td data-key="contenido7" className="border border-[rgb(73,36,1)] px-3">Nivel 1: Iniciación</td>
              <td data-key="contenido8" className="border border-[rgb(73,36,1)] px-3">
                Primer nivel de doma estructurada, ideal para etapas iniciales
                de aprendizaje.
              </td>
              <td data-key="contenido9" className="border border-[rgb(73,36,1)] px-3">
                Alevines
                <br />
                Promoción 1
              </td>
            </tr>
            <tr>
              <td data-key="contenido10" className="border border-[rgb(73,36,1)] px-3">Nivel 2: Elemental</td>
              <td data-key="contenido11" className="border border-[rgb(73,36,1)] px-3">
                Desarrollo del segundo año de entrenamiento, consolidando los
                fundamentos.
              </td>
              <td data-key="contenido12" className="border border-[rgb(73,36,1)] px-3">
                Infantiles
                <br />
                Promoción 2
              </td>
            </tr>
            <tr>
              <td data-key="contenido13" className="border border-[rgb(73,36,1)] px-3">Nivel 3: Básico</td>
              <td data-key="contenido14" className="border border-[rgb(73,36,1)] px-3">
                Adiestramiento general que establece una base sólida para
                cualquier disciplina ecuestre.
              </td>
              <td data-key="contenido15" className="border border-[rgb(73,36,1)] px-3">
                Juveniles 0*
                <br />
                Promoción 3
              </td>
            </tr>
            <tr>
              <td data-key="contenido16" className="border border-[rgb(73,36,1)] px-3">Nivel 4: Medio</td>
              <td data-key="contenido17" className="border border-[rgb(73,36,1)] px-3">
                Introduce la reunión en los tres aires (paso, trote, galope)
                para mayor control.
              </td>
              <td data-key="contenido18" className="border border-[rgb(73,36,1)] px-3">
                Juveniles
                <br />
                Promoción 4
              </td>
            </tr>
            <tr>
              <td data-key="contenido19" className="border border-[rgb(73,36,1)] px-3">Nivel San Jorge (Medio/Avanzado)</td>
              <td data-key="contenido20" className="border border-[rgb(73,36,1)] px-3">
                Etapa intermedia que refuerza la precisión y armonía en el
                entrenamiento.
              </td>
              <td data-key="contenido21" className="border border-[rgb(73,36,1)] px-3">
                Jóvenes Jinetes
                <br />
                San Jorge
              </td>
            </tr>
            <tr>
              <td data-key="contenido22" className="border border-[rgb(73,36,1)] px-3">
                Nivel Intermedia I (Medio/Avanzado)
              </td>
              <td data-key="contenido23" className="border border-[rgb(73,36,1)] px-3">
                Preparación para competencias avanzadas, enfocada en el Gran
                Premio.
              </td>
              <td className="border border-[rgb(73,36,1)] px-3">-</td>
            </tr>
            <tr>
              <td data-key="contenido24" className="border border-[rgb(73,36,1)] px-3">Nivel Intermedia II (Avanzado)</td>
              <td data-key="contenido25" className="border border-[rgb(73,36,1)] px-3">
                Etapa avanzada que afina la técnica en preparación para el Gran
                Premio.
              </td>
              <td className="border border-[rgb(73,36,1)] px-3">-</td>
            </tr>
            <tr>
              <td data-key="contenido26" className="border border-[rgb(73,36,1)] px-3">Nivel Gran Premio (Avanzado)</td>
              <td data-key="contenido27" className="border border-[rgb(73,36,1)] px-3">
                Máximo nivel de competición, donde se busca una ejecución de
                perfecta ligereza y armonía.
              </td>
              <td className="border border-[rgb(73,36,1)] px-3">-</td>
            </tr>
          </tbody>
        </table>

        <h3 data-key="apartado2" className="text-2xl font-bold">Puntuación</h3>
        <p data-key="texto5" className="text-left m-5 p-1">
          Las reprises de doma clásica se evalúan mediante un sistema de
          puntuación. Cada movimiento recibe una calificación en una escala de
          cero a diez, permitiéndose medios puntos. Obtener un diez en un
          movimiento es extremadamente raro y representa una ejecución casi
          perfecta. Se puntúan de la siguiente manera:
        </p>

        <div className="w-full flex justify-start">
          <ol start={0} className="text-left list-inside ml-12 list-decimal">
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

        <p data-key="texto6" className="text-left m-5 p-1">
          Al finalizar cada prueba, los puntos obtenidos se suman y se dividen
          por el total de puntos posibles en la prueba, obteniendo así un
          porcentaje que refleja el desempeño del binomio (jinete y caballo) en
          la reprise.
        </p>

        <img className="w-[37.50rem] mb-3" src={doma} alt="Doma" />
      </div>
    </>
  );
}

export default Doma;