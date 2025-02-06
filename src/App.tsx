//Para que funcione el react-router-dom en la terminal hay que lanzar este comando: npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Index from "./paginas/Index";
/* import Salto from './paginas/Salto';
import Doma from './paginas/Doma';
import Carreras from './paginas/Carreras';
import Volteo from './paginas/Volteo';
import DomaVaquera from './paginas/DomaVaquera';
import Western from './paginas/Western';
import Contacto from './paginas/Contacto';
import CalculadoraExperiencia from './paginas/CalculadoraExperiencia'; */


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
           {/*  <Route path="/salto" element={<Salto />} />
            <Route path="/doma" element={<Doma />} />
            <Route path="/carreras" element={<Carreras />} />
            <Route path="/volteo" element={<Volteo />} />
            <Route path="/domaVaquera" element={<DomaVaquera />} />
            <Route path="/western" element={<Western />} />
            <Route
              path="/calculadoraExperiencia"
              element={<CalculadoraExperiencia />}
            />
            <Route path="/contacto" element={<Contacto />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
