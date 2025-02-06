import { Link } from "react-router-dom";
import salto2 from '../assets/salto2.webp';
import doma2 from '../assets/doma2.webp';
import carreras2 from '../assets/carrerasTrotones2.webp';
import portada from '../assets/portada.webp';
import volteo from '../assets/volteo.webp';
import domaVaquera from '../assets/domaVaquera.webp';
import western from '../assets/western.webp';

function Index() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">¿Qué es la equitación?</h1>
      <p className="text-lg">
        La equitación es el arte de montar a caballo, una especialidad dentro de
        los deportes ecuestres en la que se evalúa tanto al jinete como al
        caballo. Pero lo cierto es que, si bien ellos son los protagonistas,
        aspectos como la vestimenta o la limpieza y el pulido del caballo son
        otros factores de gran importancia. En la equitación, el jinete ha de
        demostrar sus habilidades y destrezas en el dominio del caballo,
        manteniéndose en equilibrio con el animal, mostrando la postura correcta
        en cada movimiento y haciendo gala de una actitud dominante y relajada a
        la vez, dirigiendo al caballo con total soltura y determinación.
      </p>
      <p className="text-lg">
        La relación entre el caballo y el jinete se basa en tres principios:
        confianza del caballo en el jinete, liderazgo del jinete y óptima
        comunicación entre ellos. Tales principios permiten desplegar los aires
        o tipos de paso del caballo como la partida, la parada, el paso, el
        trote, el galope y el galope tendido.
      </p>
      <p className="text-lg">
        En la actualidad, la equitación engloba una serie de disciplinas con
        diferentes niveles de dificultad y características propias.
      </p>
      <div className="flex justify-between">
        <Link to="/salto" className="text-white hover:text-gray-400">
          Salto
        </Link>
        <Link to="/doma" className="text-white hover:text-gray-400">
          Doma
        </Link>
        <Link to="/carreras" className="text-white hover:text-gray-400">
          Carreras
        </Link>
        <Link to="/volteo" className="text-white hover:text-gray-400">
          Volteo
        </Link>
        <Link to="/domaVaquera" className="text-white hover:text-gray-400">
          Doma Vaquera
        </Link>
        <Link to="/western" className="text-white hover:text-gray-400">
          Western
        </Link>
      </div>
    </div>
  );
}

export default Index;