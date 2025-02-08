import carrerasTrotones from "../assets/carrerasTrotones.webp";

function Carreras() {
  return (
    <>
      <div className="intro">
        <h2 data-key="subtitulo" className="apartado">
          Carreras de trotones en Mallorca
        </h2>

        <p data-key="texto1">
          Las carreras de caballos suelen asociarse con el jinete montado sobre
          el caballo, galopando hacia la meta. Sin embargo, en Mallorca son más
          populares las carreras de trotones enganchados. En esta modalidad, los
          caballos avanzan al trote y el jinete se sienta en un pequeño carro,
          llamado sulky, que el caballo arrastra.
        </p>

        <p data-key="texto2">
          Existen también carreras de trotones en las que el jinete monta
          directamente al caballo, aunque estas son menos comunes.
        </p>

        <p data-key="texto3">
          Cada jinete lleva una camisa que representa a su cuadra.
        </p>

        <p data-key="texto4">
          Las carreras se realizan en hipódromos, y en Mallorca contamos con
          dos:
        </p>

        <div className="lista">
          <ul>
            <li data-key="lista1">
              <strong>Hipódromo de Son Pardo</strong>
            </li>
            <li data-key="lista2">
              <strong>Hipódromo de Manacor</strong>
            </li>
          </ul>
        </div>

        <p data-key="texto5">
          No todos pueden participar en todas las carreras; estas se dividen en
          categorías: MiniTrot, Alevín, Aprendiz, Amateur y Profesional (o
          Jockey). Las categorías se asignan generalmente por edad, excepto la
          Profesional.
        </p>

        <table>
          <thead>
            <tr>
              <th data-key="encabezado1">Edad</th>
              <th data-key="encabezado2">Categoría</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12-16</td>
              <td data-key="contenido1">MiniTrot</td>
            </tr>
            <tr>
              <td>16-18</td>
              <td data-key="contenido2">Aprendiz</td>
            </tr>
            <tr>
              <td>+ 18</td>
              <td data-key="contenido3">Amateur</td>
            </tr>
            <tr>
              <td data-key="contenido4">+ 18 y haber ganado 15 carreras</td>
              <td data-key="contenido5">Professional o Jockey</td>
            </tr>
          </tbody>
        </table>

        <h3 data-key="apartado1">Caracteristicas y modalidades</h3>

        <p data-key="texto6">
          Las carreras se clasifican por la distancia que deben recorrer:
        </p>
        <div className="lista">
          <ul>
            <li data-key="lista3">
              <strong>Corta distancia:</strong> hasta 1,609 metros
            </li>
            <li data-key="lista4">
              <strong>Media distancia:</strong> entre 2,000 y 2,600 metros
            </li>
            <li data-key="lista5">
              <strong>Larga distancia o de fondo:</strong> más de 2,600 metros
            </li>
          </ul>
        </div>

        <p data-key="texto7">Existen dos modalidades de salida:</p>
        <div className="lista">
          <ul>
            <li data-key="lista6">
              <strong>Autostart:</strong> los participantes comienzan detrás de
              un coche en movimiento.
            </li>
            <li data-key="lista7">
              <strong>Handicap:</strong> los caballos comienzan a pie parado.
            </li>
          </ul>
        </div>

        <br />

        <h3 data-key="apartado2">Clasificación</h3>

        <p data-key="texto8">
          En cada carrera se clasifican los primeros seis en cruzar la meta,
          quienes reciben premios en metálico, cuyo valor varía según el premio
          total de la carrera.
        </p>

        <h3 data-key="apartado3">Descalificaciones</h3>

        <p data-key="texto9">Un jinete puede ser descalificado si:</p>
        <div className="lista">
          <ul>
            <li data-key="lista8">
              Su caballo galopa más de dos trancos consecutivos.
            </li>
            <li data-key="lista9">Obstaculiza a otro corredor.</li>
            <li data-key="lista10">
              Usa la fusta más de siete veces en los últimos 500 metros.
            </li>
            <li data-key="lista11">Se detecta dopaje en el caballo.</li>
          </ul>
        </div>

        <br />

        <img className="img-central" src={carrerasTrotones} alt="troton" />
      </div>
    </>
  );
}

export default Carreras;
