import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes, NavLink, useLocation} from 'react-router-dom';

function Cabecera(props) {
  
    // style of button by location page
    // const location = useLocation()
    // const isActive = (pathName) => location.pathname === pathName
  
    return (
  
      <nav className='flex sm:justify-evenly justify-around items-center mt-6 fixed left-auto right-auto w-full z-10'>
        <a href="/"><img className='w-9 rounded-full border-2 border-gray-400' src={process.env.PUBLIC_URL + "img/perfil.png"} alt='Perfil'/></a>

        <ul className='flex bg-white text-zinc-800 text-sm pointer-events-auto shadow-md rounded-full px-2'>
          <li className='sm:hidden flex p-2 font-medium transition hover:text-teal-400 cursor-pointer group'>
            Menu 
            <svg viewBox="0 0 8 6" aria-hidden="true" class="ml-2 h-auto w-2 stroke-zinc-800 transition group-hover:stroke-teal-400 dark:group-hover:stroke-zinc-400"><path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </li>
          <li className={props.sobre_mi}><a href="/">Sobre mi</a></li>
          <li className={props.habilidades}><a href="/habilidades">Habilidades</a></li>
          <li className={props.portafolio}><a href="/portafolio">Portafolio</a></li>
          <li className={props.curriculum}><a href="/curriculum">Curriculum</a></li>
          <li className={props.contactos}><a href="/contactos">Contactos</a></li>
        </ul>

        {/* <NavLink to="/curriculum">sdasd</NavLink> */}

        <div className='sm:block hidden w-9 h-9 rounded-full border-2 border-none' src={process.env.PUBLIC_URL + "img/perfil.png"} alt='Perfil'/>
      </nav>


    );
  }
  
  export default Cabecera;