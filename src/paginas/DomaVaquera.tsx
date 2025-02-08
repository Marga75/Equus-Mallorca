import domaVaquera from "../assets/domaVaquera2.webp";

function DomaVaquera() {
  return (
    <>
      <div className="intro">
        <h2 data-key="subtitulo" className="apartado">
          Doma Vaquera en Mallorca
        </h2>

        <p data-key="texto1">
          La <strong>Doma Vaquera</strong> es un deporte ecuestre en el que
          jinete y caballo deben ejecutar una serie de maniobras en un
          cuadrilongo, inspiradas en los movimientos que tradicionalmente se
          realizan en el campo para trabajar con el ganado vacuno.
        </p>

        <p data-key="texto2">
          Esta disciplina exige que el binomio (jinete y caballo) demuestre
          habilidad, precisión y rapidez en cada ejercicio. Las maniobras se
          realizan siguiendo un patrón específico, y el caballo debe estar
          atento y dispuesto a responder a las indicaciones del jinete. La
          destreza y la rapidez del caballo aportan espectacularidad a cada
          movimiento, siendo la velocidad un requisito esencial en todas las
          maniobras.
        </p>

        <h3 data-key="apartado1">Dónde practicar Doma Vaquera en Mallorca</h3>
        <br />
        <div className="lista">
          <ul>
            <li data-key="lista1">Club Hípico La Paz</li>
            <li data-key="lista2">Varias fincas privadas</li>
          </ul>
        </div>

        <h3 data-key="apartado2">Maniobras en Doma Vaquera</h3>
        <br />
        <div className="lista">
          <ul>
            <li data-key="lista3">
              <strong>Círculos:</strong> El jinete realiza círculos grandes y
              pequeños al galope, mostrando una clara diferencia en la velocidad
              e impulsión del caballo. La ejecución debe ser fluida, sin que se
              perciba esfuerzo o movimiento visible por parte del jinete. La
              transición del galope medio al recogido debe ser suave y con el
              mínimo comando posible.
            </li>
            <li data-key="lista4">
              <strong>Cambio de mano:</strong> Al cambiar de dirección al
              galope, el caballo debe cambiar de mano sin perder el ritmo ni
              alterar la cadencia. Este cambio se realiza en un punto específico
              de la pista, que no está marcada con letras, pero cuenta con
              cuatro postes en las esquinas y dos en el centro.
            </li>
            <li data-key="lista5">
              <strong>Paso atrás:</strong> Con una mínima presión en las
              riendas, el caballo debe retroceder en línea recta al menos 3
              metros y a gran velocidad.
            </li>
            <li data-key="lista6">
              <strong>Media vuelta:</strong> Desde el galope, el caballo debe
              detenerse de forma abrupta, pivotar sobre sus patas traseras en un
              giro de 180° y cambiar de dirección, saliendo de inmediato al
              galope en la nueva dirección.
            </li>
            <li data-key="lista7">
              <strong>Piruetas:</strong> El caballo realiza giros de 360°,
              manteniendo la pata trasera interior en el mismo lugar, mientras
              que las patas delanteras y la trasera exterior proporcionan la
              impulsión necesaria para girar con rapidez, manteniendo el galope.
            </li>
            <li data-key="lista8">
              <strong>Paradas:</strong> Desde el galope, el caballo debe
              detenerse de forma repentina, metiendo sus patas traseras bajo su
              cuerpo, lo que produce un deslizamiento mientras las patas
              delanteras avanzan. Estas paradas pueden generar deslizamientos de
              hasta 10 metros, creando un efecto visual impresionante.
            </li>
          </ul>
        </div>

        <br />

        <img
          className="img-central"
          src={domaVaquera}
          alt="domaVaquera"
        />
      </div>
    </>
  );
}

export default DomaVaquera;
