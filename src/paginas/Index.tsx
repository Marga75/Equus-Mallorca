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
    <div className="flex justify-center items-center w-full pt-5">
      <div className="flex flex-col items-center">
        <Link to="/salto"><img src={salto2} alt="Salto" className="my-2 w-[350px] h-[250px] object-cover border-4 border-[rgb(73,36,1)] rounded-[20%]"
        /></Link>
        <Link to="/doma"><img src={doma2} alt="Doma" className="my-2 w-[350px] h-[250px] object-cover border-4 border-[rgb(73,36,1)] rounded-[20%]"
        /></Link>
        <Link to="/carreras"><img src={carreras2} alt="Carreras" className="my-2 w-[350px] h-[250px] object-cover border-4 border-[rgb(73,36,1)] rounded-[20%]"
        /></Link>
      </div>

      <div className="flex flex-col items-center w-[50.00rem] m-auto text-center bg-[rgb(228,209,170)]">
        <h2 data-key="encabezado" className="m-5 pt-3">¿Qué es la equitación?</h2>
        <p data-key="texto1" className="text-left m-5 p-1">La equitación es el arte de montar a caballo, una especialidad dentro de los deportes ecuestres en la que se evalúa tanto al jinete como al caballo. Pero lo cierto es que, si bien ellos son los protagonistas, aspectos como la vestimenta o la limpieza y el pulido del caballo son otros factores de gran importancia. En la equitación, el jinete ha de demostrar sus habilidades y destrezas en el dominio del caballo, manteniéndose en equilibrio con el animal, mostrando la postura correcta en cada movimiento y haciendo gala de una actitud dominante y relajada a la vez, dirigiendo al caballo con total soltura y determinación.
        </p>

        <p data-key="texto2" className="text-left m-5 p-1">
          La relación entre el caballo y el jinete se basa en tres principios: confianza del caballo en el jinete, liderazgo del jinete y óptima comunicación entre ellos. Tales principios permiten desplegar los aires o tipos de paso del caballo como la partida, la parada, el paso, el trote, el galope y el galope tendido.
        </p>

        <p data-key="texto3" className="text-left m-5 p-1">
          En la actualidad, la equitación engloba una serie de disciplinas con diferentes niveles de dificultad y características propias.
        </p>

        <img className="w-[37.50rem]" src={portada} alt="portada" />
      </div>

      <div className="flex flex-col items-center">
        <Link to="/volteo"><img src={volteo} alt="Volteo" className="my-2 w-[350px] h-[250px] object-cover border-4 border-[rgb(73,36,1)] rounded-[20%]"/></Link>
        <Link to="/domaVaquera"><img src={domaVaquera} alt="Doma Vaquera"className="my-2 w-[350px] h-[250px] object-cover border-4 border-[rgb(73,36,1)] rounded-[20%]" /></Link>
        <Link to="/western"><img src={western} alt="Western" className="my-2 w-[350px] h-[250px] object-cover border-4 border-[rgb(73,36,1)] rounded-[20%]" /></Link>
      </div>

    </div>
  );
}

export default Index;