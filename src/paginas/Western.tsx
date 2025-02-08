import western from "../assets/western2.webp";

function Western() {
  return (
    <>
      <div className="intro">
        <h2 data-key="subtitulo" className="apartado">
          Equitación Western en Mallorca
        </h2>

        <p data-key="texto1">
          La <strong>equitación western</strong> es un estilo de monta que
          evolucionó a partir de las tradiciones ganaderas y ecuestres que
          trajeron los conquistadores españoles a América, y del equipo y
          técnicas desarrollados para adaptarse a las necesidades de trabajo del
          vaquero en el oeste estadounidense.
        </p>

        <h3 data-key="apartado1">Dónde practicar Western en Mallorca:</h3>
        <br />
        <div className="lista">
          <ul>
            <li data-key="lista1">Son Molina</li>
            <li data-key="lista2">Finca Caballo Blanco</li>
          </ul>
        </div>

        <br />

        <p data-key="texto2">
          Hoy en día, esta disciplina cuenta con numerosos seguidores y ofrece
          una variedad de competiciones deportivas, entre las que se incluyen:
        </p>

        <div className="lista">
          <ul>
            <li data-key="lista3">
              <strong>Pony Express:</strong> Prueba de velocidad en la que el
              jinete recorre un circuito y debe recoger alforjas en el menor
              tiempo posible. Su nombre evoca a los antiguos mensajeros del Pony
              Express del Viejo Oeste.
            </li>
            <li data-key="lista4">
              <strong>Western Trail Class:</strong> En esta prueba, jinete y
              caballo atraviesan una serie de obstáculos en la pista. La calma y
              la obediencia del caballo son clave para superar el recorrido con
              éxito.
            </li>
            <li data-key="lista5">
              <strong>Barrel Racing:</strong> Consiste en recorrer un circuito
              de tres barriles en el menor tiempo posible. La velocidad y la
              precisión en los giros son fundamentales.
            </li>
            <li data-key="lista6">
              <strong>Pole Bending:</strong> Popular en Estados Unidos, esta
              prueba exige realizar un recorrido en zigzag entre siete postes,
              con cambios de mano rápidos y precisos.
            </li>
            <li data-key="lista7">
              <strong>Reining:</strong> Aquí, la conexión entre jinete y caballo
              es esencial. Deben realizar una serie de maniobras (como
              deslizamientos, giros y cambios de dirección) con gran precisión y
              a la mayor velocidad posible.
            </li>
            <li data-key="lista8">
              <strong>Placer Occidental:</strong> El jinete debe mostrar el
              control del caballo en una pista junto a otros caballos, pasando
              por paso, trote (lento y controlado) y galope (también
              controlado). En ocasiones, el juez puede solicitar un galope
              extendido o un trote más amplio. El caballo debe responder con una
              rienda suelta, la cabeza baja, y obedecer a indicaciones sutiles
              por parte del jinete.
            </li>
            <li data-key="lista9">
              <strong>Corte:</strong> En esta competición, jinete y caballo
              seleccionan una vaca de una pequeña manada y la separan. Una vez
              apartada, el jinete suelta las riendas y deja que el caballo evite
              que la vaca regrese a la manada. Dependiendo del nivel de la
              competencia, uno a tres jueces califican el rendimiento del
              equipo.
            </li>
            <li data-key="lista10">
              <strong>Caballo de Trabajo con Vacas:</strong> También conocido
              como &apos;Working Cow Horse&apos;, esta prueba combina habilidades de corte
              y reining, donde jinete y caballo trabajan en equipo con una vaca,
              guiándola en varias maniobras dentro de la pista.
            </li>
            <li data-key="lista11">
              <strong>Caballo de Rancho:</strong> En este evento, que puede
              variar según la organización, el caballo de rancho debe demostrar
              su capacidad en distintas categorías:
            </li>
          </ul>
        </div>

        <div className="lista pequeña">
          <ul>
            <li data-key="lista12">
              <strong>Monta de Rancho:</strong> Similar al placer occidental.
            </li>
            <li data-key="lista13">
              <strong>Sendero de Rancho:</strong> Realizado en terreno natural,
              pone a prueba habilidades utilizadas en el trabajo de rancho.
            </li>
            <li data-key="lista14">
              <strong>Corte de Rancho:</strong> Evaluado de forma similar a la
              prueba de corte.
            </li>
            <li data-key="lista15">
              <strong>Trabajo de Rancho:</strong> Combina reining, roping y
              habilidades de manejo de vacas.
            </li>
            <li data-key="lista16">
              <strong>Conformación de Rancho:</strong> Se evalúa al caballo en
              una clase de cabestro.
            </li>
          </ul>
        </div>

        <div className="lista">
          <ul>
            <li data-key="lista17">
              <strong>Encierro por Equipos:</strong> Evento cronometrado en el
              que tres jinetes deben seleccionar de tres a cinco novillos
              marcados de una manada y conducirlos hasta un corral. La puerta
              del corral no se puede cerrar hasta que todo el ganado designado
              esté dentro. El equipo más rápido gana, mientras que los equipos
              que superen el tiempo límite quedan descalificados. Un evento
              relacionado es la clasificación por ranchos.
            </li>
          </ul>
        </div>

        <br />

        <img className="img-central" src={western} alt="western" />
      </div>
    </>
  );
}

export default Western;
