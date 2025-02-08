import volteo from "../assets/volteo2.webp";

function Volteo() {
  return (
    <>
      <div className="w-[50.00rem] m-auto bg-[rgb(228,209,170)] grid mt-5 mb-5">
        <h2 data-key="subtitulo" className="m-5 pt-2.5 text-3xl font-bold text-center">
          Volteo en Mallorca
        </h2>

        <p data-key="texto1" className="m-5 p-1">
          El volteo es una modalidad de gimnasia realizada sobre un caballo en
          movimiento, el cual avanza al galope en círculos mientras es guiado
          por un conductor a la cuerda.
        </p>

        <h3 data-key="apartado1" className="text-2xl font-bold text-center mt-9">Clubs de Volteo en Mallorca</h3>
        <p data-key="texto2" className="m-5 p-1">
          En Mallorca, los clubes que practican esta disciplina son:
        </p>
        <div className="w-full flex justify-start">
          <ul className="text-left list-inside ml-12 list-disc">
            <li data-key="lista1">Club Hípico La Gubia</li>
            <li data-key="lista2">Club Equitació S’Espiga</li>
            <li data-key="lista3">Club Hípico Es Pi</li>
            <li data-key="lista4">Son Molina</li>
            <li data-key="lista5">S’Hort Vell</li>
            <li data-key="lista6">Centro Hípico Mallorca Horses</li>
          </ul>
        </div>

        <h3 data-key="apartado2" className="text-2xl font-bold text-center mt-9">Participantes</h3>
        <div className="w-full flex justify-start">
          <ul className="text-left list-inside ml-12 list-disc">
            <li data-key="lista7">
              <strong>Volteadores:</strong> Son los atletas que ejecutan los
              ejercicios sobre el caballo. No solo deben concentrarse en sus
              propias maniobras, sino que también son responsables de la
              seguridad de sus compañeros y del caballo.
            </li>
            <li data-key="lista8">
              <strong>Conductores de cuerda (longers):</strong> Son los expertos
              que manejan el caballo, proporcionando las condiciones óptimas
              para que los volteadores rindan al máximo.
            </li>
            <li data-key="lista9">
              <strong>Caballos:</strong> Deben ser obedientes, mantener un ritmo
              constante en el galope y responder adecuadamente a las
              instrucciones del longer.
            </li>
          </ul>
        </div>

        <h3 data-key="apartado3" className="text-2xl font-bold text-center mt-9">Categorías y Niveles</h3>
        <div className="w-full flex justify-start">
          <ul className="text-left list-inside ml-12 list-disc">
            <li data-key="lista10">
              <strong>Modalidades:</strong> El volteo puede realizarse en
              equipos (grupos), en parejas o de forma individual.
            </li>
            <li data-key="lista11">
              <strong>Niveles:</strong> Existen distintos niveles de dificultad:
              Promoción 1, 2 y 3, así como Niveles 1, 2 y 3.
            </li>
            <li data-key="lista12">
              <strong>Categorías por Edad:</strong> Se diferencian en junior y
              senior (mayores de 16 años).
            </li>
          </ul>
        </div>

        <h3 data-key="apartado4" className="text-2xl font-bold text-center mt-9">Calificaciones</h3>
        <p data-key="texto3" className="m-5 p-1">
          1. <strong>Ejercicios Obligatorios:</strong> En esta fase, los jueces
          evaluarán:
        </p>
        <div className="w-full flex justify-start">
          <ul className="text-left list-inside ml-12 list-disc">
            <li data-key="lista13">Técnica y tensión corporal</li>
            <li data-key="lista14">Seguridad en la ejecución</li>
            <li data-key="lista15">Ligereza y precisión</li>
            <li data-key="lista16">
              Amplitud (altura y extensión en la ejecución)
            </li>
            <li data-key="lista17">
              Transiciones armoniosas y tiempos breves entre figuras
            </li>
          </ul>
        </div>
        <p data-key="texto4" className="m-5 p-1">
          Las puntuaciones van de 0 a 10, donde 0 indica que el ejercicio no fue
          realizado y 10 representa una ejecución sobresaliente.
        </p>

        <br />

        <p data-key="texto5" className="m-5 p-1">
          2. <strong>Kür:</strong> En esta parte, los volteadores tienen la
          libertad de crear su propia coreografía y elegir los ejercicios a
          ejecutar. Se valoran especialmente la creatividad y la calidad de la
          composición. Los ejercicios deben estar adaptados al nivel del atleta,
          ya que los jueces penalizan los movimientos que exceden la capacidad
          del volteador.
        </p>

        <p data-key="texto6" className="m-5 p-1">
          La <strong>Kür</strong> incluye ejercicios estáticos y dinámicos. Para
          los ejercicios estáticos, la posición debe mantenerse durante tres
          trancos de paso o tres tiempos de galope, de lo contrario, no se
          contabilizará el grado de dificultad.
        </p>

        <p data-key="texto7" className="m-5 p-1">
          Las calificaciones en la kür se basan en los siguientes criterios:
        </p>
        <div className="w-full flex justify-start">
          <ul className="text-left list-inside ml-12 list-disc">
            <li data-key="lista18">
              <strong>Ejecución:</strong> Calidad de cada ejercicio comparado
              con el ideal, puntuado de 0 a 10.
            </li>
            <li data-key="lista19">
              <strong>Dificultad:</strong> Nivel de dificultad del ejercicio:
              Fácil (E), Medio (M), Difícil (D), o con Riesgo (R).
            </li>
            <li data-key="lista20">
              <strong>Creatividad:</strong> Puntos culminantes y momentos de
              expectación, transiciones creativas y elementos novedosos, todo
              aquello que contribuya a una ejecución auténtica y única.
            </li>
            <li data-key="lista21">
              <strong>Impresión Final:</strong> La nota global del caballo
              depende de su presentación, equipamiento adecuado y
              características propias del galope, además del trabajo del longer,
              quien influye en la calidad del desempeño.
            </li>
          </ul>
        </div>

        <p data-key="texto8" className="m-5 p-1">
          Dependiendo de la categoría y nivel, algunos criterios como dificultad
          e impresión final pueden no ser evaluados.
        </p>

        <img className="w-[37.50rem] mb-3 mx-auto" src={volteo} alt="volteo" />
      </div>
    </>
  );
}

export default Volteo;
