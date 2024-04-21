import React from 'react'

function Pie_pagina() {
  

  
    return (
  
      <footer className="flex flex-col items-center py-5 border-t border-zinc-200 mt-10 ">

        <ul className='flex flex-wrap justify-center text-zinc-600 text-sm pointer-events-auto rounded-full px-2'>
          <li className='p-2 font-medium  transition hover:text-teal-400 cursor-pointer'><a href="/sobre_mi">Sobre mi</a></li>
          <li className='p-2 font-medium transition hover:text-teal-400 cursor-pointer'><a href="/habilidades">Habilidades</a></li>
          <li className='p-2 font-medium transition hover:text-teal-400 cursor-pointer'><a href="/portafolio">Portafolio</a></li>
          <li className='p-2 font-medium transition hover:text-teal-400 cursor-pointer'><a href="/curriculum">Curriculum</a></li>
          <li className='p-2 font-medium transition hover:text-teal-400 cursor-pointer'><a href="/contactos">Contactos</a></li>
        </ul>

        <p className='px-4 text-sm text-center text-zinc-500'>Copyright © 2024 Designed by Deyvid Marmolejo</p>
      </footer>


    );
  }
  
  export default Pie_pagina;