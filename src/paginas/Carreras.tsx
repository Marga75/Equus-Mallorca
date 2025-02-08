import carrerasTrotones from "../assets/carrerasTrotones.webp";

function Carreras() {
  return (
    <>
      <div className="w-[50.00rem] m-auto bg-[rgb(228,209,170)] grid mt-5 mb-5">
        <h2 data-key="subtitulo" className="m-5 pt-2.5 text-3xl font-bold text-center">
          Carreras de trotones en Mallorca
        </h2>

        <p data-key="texto1" className="m-5">
          Las carreras de caballos suelen asociarse con el jinete montado sobre
          el caballo, galopando hacia la meta. Sin embargo, en Mallorca son más
          populares las carreras de trotones enganchados. En esta modalidad, los
          caballos avanzan al trote y el jinete se sienta en un pequeño carro,
          llamado sulky, que el caballo arrastra.
        </p>

        <p data-key="texto2" className="m-5">
          Existen también carreras de trotones en las que el jinete monta
          directamente al caballo, aunque estas son menos comunes.
        </p>

        <p data-key="texto3" className="m-5">
          Cada jinete lleva una camisa que representa a su cuadra.
        </p>

        <p data-key="texto4" className="m-5">
          Las carreras se realizan en hipódromos, y en Mallorca contamos con dos:
        </p>

        <div className="w-full flex justify-start">
          <ul className="text-left list-inside ml-12 list-disc">
            <li data-key="lista1">
              <strong>Hipódromo de Son Pardo</strong>
            </li>
            <li data-key="lista2">
              <strong>Hipódromo de Manacor</strong>
            </li>
          </ul>
        </div>

        <p data-key="texto5" className="mt-9 ml-5 mr-5 mb-5">
          No todos pueden participar en todas las carreras; estas se dividen en
          categorías: MiniTrot, Alevín, Aprendiz, Amateur y Profesional (o
          Jockey). Las categorías se asignan generalmente por edad, excepto la
          Profesional.
        </p>

        <table className="border-collapse ml-5 mr-5 mb-5">
          <thead className="text-left p-3">
            <tr>
              <th data-key="encabezado1" className="border border-[rgb(73,36,1)] px-3">Edad</th>
              <th data-key="encabezado2" className="border border-[rgb(73,36,1)] px-3">Categoría</th>
            </tr>
          </thead>
          <tbody className="text-left p-3">
            <tr>
              <td className="border border-[rgb(73,36,1)] px-3">12-16</td>
              <td data-key="contenido1" className="border border-[rgb(73,36,1)] px-3">MiniTrot</td>
            </tr>
            <tr>
              <td className="border border-[rgb(73,36,1)] px-3">16-18</td>
              <td data-key="contenido2" className="border border-[rgb(73,36,1)] px-3">Aprendiz</td>
            </tr>
            <tr>
              <td className="border border-[rgb(73,36,1)] px-3">+ 18</td>
              <td data-key="contenido3" className="border border-[rgb(73,36,1)] px-3">Amateur</td>
            </tr>
            <tr>
              <td data-key="contenido4" className="border border-[rgb(73,36,1)] px-3">+ 18 y haber ganado 15 carreras</td>
              <td data-key="contenido5" className="border border-[rgb(73,36,1)] px-3">Professional o Jockey</td>
            </tr>
          </tbody>
        </table>

        <h3 data-key="apartado1" className="text-2xl font-bold text-center mt-9">Caracteristicas y modalidades</h3>

        <p data-key="texto6" className="m-5">
          Las carreras se clasifican por la distancia que deben recorrer:
        </p>
        <div className="w-full flex justify-start">
          <ul className="text-left list-inside ml-12 list-disc">
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

        <p data-key="texto7" className="m-5">Existen dos modalidades de salida:</p>
        <div className="w-full flex justify-start">
          <ul className="text-left list-inside ml-12 list-disc">
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

        <h3 data-key="apartado2" className="text-2xl font-bold text-center mt-9">Clasificación</h3>

        <p data-key="texto8" className="m-5">
          En cada carrera se clasifican los primeros seis en cruzar la meta,
          quienes reciben premios en metálico, cuyo valor varía según el premio
          total de la carrera.
        </p>

        <h3 data-key="apartado3" className="text-2xl font-bold text-center mt-9">Descalificaciones</h3>

        <p data-key="texto9" className="m-5">Un jinete puede ser descalificado si:</p>
        <div className="w-full flex justify-start">
          <ul className="text-left list-inside ml-12 list-disc">
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

        <img className="w-[37.50rem] mb-3 mx-auto" src={carrerasTrotones} alt="troton" />
      </div>
    </>
  );
}

export default Carreras;
