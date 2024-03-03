import React from 'react'

function Cabecera() {
  
    function mostrarMenu(reaccion)
    {
      let botones = document.getElementById("botones-oculto")
  
      if(reaccion === "over")
      {
        botones.style.display = "flex"
      }
      else
      {
        botones.style.display = "none"
      }
    }

    function Ir_inicio()
    {
      const espacio_sobre_mi = document.getElementById('espacio_inicio');
      espacio_sobre_mi.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function Ir_sobre_mi()
    {
      const espacio_sobre_mi = document.getElementById('espacio_sobre_mi');
      espacio_sobre_mi.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function Ir_habilidades()
    {
      const espacio_sobre_mi = document.getElementById('espacio_habilidades');
      espacio_sobre_mi.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function Ir_portafolio() 
    {
      const espacio_sobre_mi = document.getElementById('espacio_portafolio');
      espacio_sobre_mi.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function Ir_curriculum()
    {
      const espacio_sobre_mi = document.getElementById('espacio_curriculum');
      espacio_sobre_mi.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function Ir_contactos()
    {
      const espacio_sobre_mi = document.getElementById('espacio_contactos');
      espacio_sobre_mi.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  
    return (
    <header onMouseOver={() => mostrarMenu("over")} onMouseLeave={() => mostrarMenu("leave")}>    
  
      <svg id={"menu"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={"feather feather-menu"}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
  
      <div className={"botones"}>
        <h2 onClick={Ir_inicio}>Inicio</h2>
        <h2 onClick={Ir_sobre_mi}>Sobre mi</h2>
        <h2 onClick={Ir_habilidades}>Habilidades</h2>
        <h2 onClick={Ir_portafolio}>Portafoleo</h2>
        <h2 onClick={Ir_curriculum}>Curriculum</h2>
        <h2 onClick={Ir_contactos}>Contactos</h2>
      </div>
  
      <div id={"botones-oculto"}>
        <div>
          <h2 onClick={Ir_inicio}>Inicio</h2>
          <h2 onClick={Ir_sobre_mi}>Sobre mi</h2>
          <h2 onClick={Ir_habilidades}>Habilidades</h2>
          <h2 onClick={Ir_portafolio}>Portafoleo</h2>
          <h2 onClick={Ir_curriculum}>Curriculum</h2>
          <h2 onClick={Ir_contactos}>Contactos</h2>
        </div>
      </div>
  
    </header>


    );
  }
  
  export default Cabecera;