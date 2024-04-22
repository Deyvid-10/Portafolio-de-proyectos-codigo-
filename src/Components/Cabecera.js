import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Link, Routes, NavLink, useLocation} from 'react-router-dom';

function Cabecera(props) {
  
    let [menu, setMenu] = useState(true)

    function verMenu()
    {
      setMenu(!menu)
    }
  
    return (
  
      <nav className='flex sm:justify-evenly justify-around items-center mt-6 fixed left-auto right-auto w-full z-10'>
        <a href="/"><img className='w-9 rounded-full border-2 border-gray-400' src={process.env.PUBLIC_URL + "img/perfil.png"} alt='Perfil'/></a>

   

        <ul className='hidden sm:flex bg-white text-zinc-800 text-sm pointer-events-auto shadow-md rounded-full p-2'>
    
          <li className={props.sobre_mi}><a href="/">Sobre mi</a></li>
          <li className={props.habilidades}><a href="/habilidades">Habilidades</a></li>
          <li className={props.portafolio}><a href="/portafolio">Portafolio</a></li>
          <li className={props.curriculum}><a href="/curriculum">Curriculum</a></li>
          <li className={props.contactos}><a href="/contactos">Contactos</a></li>
        </ul>

        <div className={menu ? "hidden" : "sm:hidden fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm"}></div>

        <ul className={menu ? 'hidden' : 'sm:hidden w-11/12 text-zinc-800 bg-white shadow-md absolute top-3 z-50 p-3 rounded-2xl'}>
          <div className='flex items-center justify-between px-2 pb-1 border-b-2 '>
            <h2 className='font-bold text-lg'>Menu</h2>
            <svg onClick={verMenu} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className='hover:cursor-pointer' viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
          <li className={props.sobre_mi}><a href="/">Sobre mi</a></li>
          <li className={props.habilidades}><a href="/habilidades">Habilidades</a></li>
          <li className={props.portafolio}><a href="/portafolio">Portafolio</a></li>
          <li className={props.curriculum}><a href="/curriculum">Curriculum</a></li>
          <li className={props.contactos}><a href="/contactos">Contactos</a></li>
        </ul>
     

        <button onClick={verMenu} className='sm:hidden flex items-center rounded-full shadow-md py-2 px-4 font-medium transition hover:text-teal-400 cursor-pointer group'>
          Menu 
          <svg viewBox="0 0 8 6" aria-hidden="true" class="ml-2 h-auto w-2 stroke-zinc-800 transition group-hover:stroke-teal-400 dark:group-hover:stroke-zinc-400"><path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </button>

        {/* <NavLink to="/curriculum">sdasd</NavLink> */}

        <div className='sm:block hidden w-9 h-9 rounded-full border-2 border-none' src={process.env.PUBLIC_URL + "img/perfil.png"} alt='Perfil'/>
      </nav>


    );
  }
  
  export default Cabecera;