import noticias_hoy from "../Img/Noticias-hoy.png"
import tauro_shop from "../Img/Tauro Shop.png"
import crud_registro_escolar from "../Img/crud-registro-escolar.png"
import crud_registro_estudiantil from "../Img/CRUD Registro estudiantil.jpg"
import code_pro from "../Img/code pro.jpg"
import portafolio_proyectos from "../Img/Portafolio-proyectos.png"
import js from "../Img/js.png"
import css from "../Img/css.png"
import html from "../Img/html.png"
import angular from "../Img/angular.png"
import react from "../Img/react.png"
import mysql from "../Img/mysql.png"
import node from "../Img/node.png"
import mongo from "../Img/mongo.png"
import python from "../Img/python.png"
import base_datos from "../Img/base_datos.png"
import tail_wind from "../Img/tailwind.png"

import Cabecera from "./Cabecera"
import Pie_pagina from "./Pie_pagina"

function Portafolio() {

    let activo = 'mx-2 font-medium text-teal-400 cursor-pointer'
    let inactivo = 'mx-2 font-medium transition hover:text-teal-400 cursor-pointer'

    const img = [js, css, html, angular, react, node, mysql, python, python, mongo, base_datos, tail_wind]
    const texto_lenguaje = ["JavaScript", "CSS", "HTML", "Angular", "React", "Express.jsNode.js", "MySQL", "Django", "Python", "MongoDB", "HeidiSQL", "Tailwind CSS"]
    
    let lenguaje = []

    for(let i = 0; i < img.length; i++)
    {
             
        lenguaje.push(
        <div key={i} className="border border-zinc-400 rounded inline-flex items-center mr-2 p-0.5 mb-1">
            <img className="w-4 h-4 mr-1 " src={img[i]} alt={`imagen_${texto_lenguaje[i]}`}></img>
            <h3 className="text-sm">{texto_lenguaje[i]}</h3>
        </div>
        )
    }
    class Botones
    {
        boton_proyecto(link_proyecto, link_codigo)
        {
            let proyecto = []

            proyecto.push(
                <div key={1} className="flex flex-wrap justify-center">
                    <a href={link_proyecto} target="_blank" rel="noreferrer" className="text-lg flex items-center group hover:text-teal-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                        Ver codigo
                        </a>
                    <a href={link_codigo} rel="noreferrer" target="_blank" className="flex items-center ml-3 bg-black hover:bg-zinc-800 font-medium transition text-white text-lg px-2 py-0.5 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                        </svg>
                        Ver proyecto</a>
                </div>
            )

            return proyecto
        }

        boton_codigo(link_codigo)
        {
            let codigo = []

            codigo.push(
                <div key={2} className="flex">
                    <a href={link_codigo} rel="noreferrer" target="_blank" className="flex items-center ml-3 bg-black hover:bg-zinc-800 font-medium transition text-white text-lg px-2 py-0.5 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                        Ver codigo
                    </a>
                </div>
            )

            return codigo
        }
    }

    let botones = new Botones()

    return (
     
        <div>
            
            <Cabecera sobre_mi = {inactivo} habilidades = {inactivo} portafolio = {activo} curriculum = {inactivo} contactos = {inactivo}/>

            <div className="pt-28 lg:w-8/12 md:w-10/12 lg:px-0 px-4 mx-auto">
                <div>
                    <h1 className="md:text-5xl text-2xl font-bold tracking-tight text-zinc-700">¡Bienvenido a mi portafolio de proyectos!</h1>
                    <br></br>
                    <p>En mi portafolio, encontrarás una selección de proyectos que abarcan diversos temas y funcionalidades. Desde un CRUD hasta sitios web para una tienda de ropas, cada proyecto refleja mi dedicación al arte del desarrollo web y mi compromiso con la excelencia técnica.</p>
                    <br/>
                    <p>Algunas de las tecnologías que utilizo en mis proyectos incluyen JavaScript, CSS y HTML para la creación de interfaces de usuario. Además, tengo el diseño de varias APIs que están enlazadas con  bases de datos relacionales como MySQL para garantizar un almacenamiento de datos eficiente y seguro. He trabajado con Python y el framework Django, así como con Node.js, para el desarrollo de APIs con Express.js y react para el desarrollo web en las interfaces de usuario.</p>
                    <br></br>
                    <p>Mi objetivo al compartir estos proyectos es mostrar mis habilidades y experiencia como desarrollador web, así como buscar oportunidades laborales que me permitan seguir creciendo y desarrollándome profesionalmente en el campo del desarrollo web.</p>
                    <br/>
                    <br/>

                    <div className="Noticias_hoy">
                        <br></br>
                        <h5 className="md:text-4xl text-2xl font-bold tracking-tight text-zinc-700">Noticias Hoy (+ API)</h5>
                        <br></br>
                        <p>Noticias Hoy es una plataforma digital que te mantiene actualizado con las últimas noticias y eventos tanto a nivel local como global. Desarrollada utilizando una API creada por mí, la cual consulta información de usuarios y artículos desde una base de datos propia, garantizando así un acceso rápido y confiable a la información más relevante. Además, integra otras APIs externas como OpenWeatherMap para brindar información meteorológica en tiempo real y GetGeoAPI para obtener datos actualizados sobre divisas. Con un diseño intuitivo y contenido variado, Noticias Hoy se posiciona como tu fuente confiable para mantenerte informado sobre los acontecimientos más importantes del día.</p>
                        <br></br>
                        <p>Cuenta con un control de privilegios con el cual se pueden hacer modificaciones según el usuario.</p>
                        <br></br>
                        <p>La cuenta administradora puede hacer cambios en todos los artículos:</p>
                        <br></br>
                        <p>Usuario: admin@admin.com</p>
                        <p>contraseña : 12345</p>
                        <br></br>
                        <p>Las demas cuentas solo pueden hacer cambios solo en los artículos que esas mismas cuentas han publicado:</p>
                        <br></br>
                        <p>Usuario: pubone@pub.com</p>
                        <p>contraseña : 12345</p>
                        <br></br>
                        <p>Usuario: pubtwo@pub.com</p>
                        <p>contraseña : 12345</p>
                        <br></br>

                        {lenguaje[4]}
                        {lenguaje[0]}
                        {lenguaje[1]}
                        {lenguaje[11]}
                        {lenguaje[2]}
                        {lenguaje[5]}
                        {lenguaje[6]}
            
                        <img src={noticias_hoy} alt="tauro-shop" className="rounded-3xl shadow-md"></img>
                        <div className="flex justify-center mt-4">{botones.boton_proyecto("https://github.com/Deyvid-10/Breaking-News", "https://noticias-hoy.netlify.app/login")}</div>
                    </div>

                    <div className="Tauro_shop">
                        <br></br>
                        <h5 className="md:text-4xl text-2xl font-bold tracking-tight text-zinc-700">Tauro Shop (+ API)</h5>
                        <br></br>
                        <p>Sitio web que simula una tienda de ropas online que se alimenta de una api creada por mi con los requerimientos que necesita el sitio para tener todos los articulos y control de acceso necesarios.</p>
                        <br></br>
                        <p>Hecha un vistazo a mi tienda, revisa las prendas que mas te gusten, hechalas en en tu carrito y has tu compra.</p>
                        <br></br>
                        {lenguaje[0]}
                        {lenguaje[1]}
                        {lenguaje[2]}
                        {lenguaje[5]}
                        {lenguaje[6]}
            
                        <img src={tauro_shop} alt="tauro-shop" className="rounded-3xl shadow-md"></img>
                        <div className="flex justify-center mt-4">{botones.boton_proyecto("https://github.com/Deyvid-10/Tauro-Shop", "https://main--tauro-shop.netlify.app/")}</div>
                    </div>
                    <div className="crud_registro_escolar">
                        <br></br>
                        <h5 className="md:text-4xl text-2xl font-bold tracking-tight text-zinc-700">CRUD Registro escolar (+ API)</h5>
                        <br></br>
                        <p>En este CRUD busco simular un registro de estudiantes de una escuela. He creado esta página con el objetivo de ofrecer una solución efectiva y eficiente para la gestión de registros escolares, realizando las cuatro tareas de un CRUD creación de registros, lectura y visualización, actualización de registros y eliminación de registros.</p>
                        <br></br>
                        {lenguaje[0]}
                        {lenguaje[1]}
                        {lenguaje[2]}
                        {lenguaje[5]}
                        {lenguaje[6]}
            
                        <img src={crud_registro_escolar} alt="CRUD Registro escolar (+ API)" className="rounded-3xl shadow-md"></img>
                        <div className="flex justify-center mt-4">{botones.boton_proyecto("https://github.com/Deyvid-10/CRUD-Registro-escolar", "https://crud-registro-escolar.netlify.app/")}</div>
                    </div>
                    <div className="portafolio_proyectos">
                        <br></br>
                        <h5 className="md:text-4xl text-2xl font-bold tracking-tight text-zinc-700">Portafolio de proyectos</h5>
                        <br></br>
                        <p>Si estás interesado en ver el código fuente de mi propio portafolio de proyectos, te invito a que eches un vistazo al repositorio correspondiente. Allí encontrarás todos los detalles sobre cómo está estructurado y podrás explorar el código para obtener una mejor comprensión de su funcionamiento y diseño.</p>
                        <br></br>
                        <p>No dudes en revisar el repositorio para obtener más información sobre cómo fue creado y las tecnologías utilizadas. ¡Espero que encuentres útil y educativo el contenido que encontrarás allí!</p>
                        <br></br>
                        {lenguaje[4]}
                        {lenguaje[0]}
                        {lenguaje[1]}
                        {lenguaje[2]}
            
                        <img src={portafolio_proyectos} alt="Portafolio de proyectos" className="rounded-3xl shadow-md"></img>
                        <div className="flex justify-center mt-4">{botones.boton_codigo("https://github.com/Deyvid-10/Portafolio-de-proyectos-codigo-pagina")}</div>
                    </div>
                    <div className="crud_registro_estudiantil">
                        <br></br>
                        <h5 className="md:text-4xl text-2xl font-bold tracking-tight text-zinc-700">CRUD Registro estudiantil</h5>
                        <br></br>
                        <p>Este CRUD, aunque similar al previamente mostrado, está desarrollado en Django con el propósito de demostrar no solo mi habilidad en JavaScript, sino también mi competencia en el manejo de frameworks de otros lenguajes como Python. Al optar por utilizar Django, busco resaltar mi versatilidad y capacidad para adaptarme a diferentes entornos de desarrollo, ampliando así mi conjunto de habilidades y ofreciendo soluciones efectivas en una variedad de tecnologías.</p>
                        <br></br>
                        {lenguaje[7]}
                        {lenguaje[8]}
                        {lenguaje[1]}
                        {lenguaje[2]}
            
                        <img src={crud_registro_estudiantil} alt="CRUD Registro estudiantil" className="rounded-3xl shadow-md"></img>
                        <div className="flex justify-center mt-4">{botones.boton_codigo("https://github.com/Deyvid-10/CRUD-Registro-estudiantil")}</div>
                    </div>
                    <div className="code_pro">
                        <br></br>
                        <h5 className="md:text-4xl text-2xl font-bold tracking-tight text-zinc-700">Code Pro</h5>
                        <br></br>
                        <p>Este proyecto, que busca simular una empresa de desarrollo, marca uno de mis primeros pasos en mi capacitación como desarrollador web. Representa el inicio de mi trayectoria en este campo, ofreciendo una oportunidad para explorar y aplicar mis habilidades recién adquiridas en un entorno práctico. A través de este proyecto, he tenido la oportunidad de familiarizarme con los procesos y desafíos del desarrollo web, sentando las bases para mi crecimiento y aprendizaje continuo en esta emocionante industria.</p>
                        <br></br>
                        {lenguaje[7]}
                        {lenguaje[8]}
                        {lenguaje[1]}
                        {lenguaje[2]}
            
                        <img src={code_pro} alt="code_pro" className="rounded-3xl shadow-md"></img>
                        <div className="flex justify-center mt-4">{botones.boton_codigo("https://github.com/Deyvid-10/code-pro")}</div>
                    </div>
                    <Pie_pagina/>
                </div>
            </div>
        </div>
       
    );
  }
  
  export default Portafolio;
