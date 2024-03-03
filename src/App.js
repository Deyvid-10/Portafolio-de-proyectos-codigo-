import './App.css';
import Cabecera from './Componentes_JS/Cabecera.js'
import Inicio from './Componentes_JS/Inicio.js'
import Sobre_mi from './Componentes_JS/Sobre_mi.js'
import Habilidades from './Componentes_JS/Habilidades.js'
import Portafolio from './Componentes_JS/Portafolio.js';
import Curriculum from './Componentes_JS/Curriculum.js';
import Contactos from './Componentes_JS/Contactos.js';

function App() {

 return(
  <div>
    <Cabecera/>
    <Inicio/>
    <Sobre_mi/>
    <Habilidades/>
    <Portafolio/>
    <Curriculum/>
    <Contactos/>
  </div>
 )
}

export default App;
