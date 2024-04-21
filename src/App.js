import './App.css';
import Cabecera from './Components/Cabecera.js'
import Sobre_mi from './Components/Sobre_mi.js'
import Habilidades from './Components/Habilidades.js'
import Portafolio from './Components/Portafolio.js';
import Curriculum from './Components/Curriculum.js';
import Contactos from './Components/Contactos.js';
import Pie_pagina from './Components/Pie_pagina.js';

import { BrowserRouter as Router, Route, Link, Routes, NavLink} from 'react-router-dom';

function App() {

 return(
  
  <Router>
    <Routes>
      <Route path="/sobre_mi" element={<Sobre_mi/>}/>
      <Route path="/habilidades" element={<Habilidades/>}/>
      <Route path="/portafolio" element={<Portafolio/>}/>
      <Route path="/curriculum" element={<Curriculum/>}/> 
      <Route path="/contactos" element={<Contactos/>}/>
    </Routes>
  </Router>
 )
}

export default App;
