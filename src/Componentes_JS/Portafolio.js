import tauro_shop from "../Img/Tauro Shop.png"
import crud_registro_escolar from "../Img/crud-registro-escolar.png"
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
import github from "../Img/github.png"
import internet from "../Img/internet.png"

function Portafolio() {

    const img = [js, css, html, angular, react, node, mysql, python, python, mongo, base_datos]
    const texto_lenguaje = ["JavaScript", "CSS", "HTML", "Angular", "React", "Express.jsNode.js", "MySQL", "Django", "Python", "MongoDB", "HeidiSQL"]
    
    let lenguaje = []

    for(let i = 0; i < img.length; i++)
    {
        if(texto_lenguaje[i] !== "Express.jsNode.js")
        {       
        lenguaje.push(
        <div key={i} className="elemnto_lenguaje" id={`estilo_${texto_lenguaje[i]}`}>
            <img src={img[i]} alt={`imagen_${texto_lenguaje[i]}`}></img>
            <h3>{texto_lenguaje[i]}</h3>
        </div>
        )
        }
        else
        {
            lenguaje.push(
                <div key={i} className="elemnto_lenguaje" id={`estilo_node`}>
                    <img src={img[i]} alt={`imagen_${texto_lenguaje[i]}`}></img>
                    <h3>{texto_lenguaje[i]}</h3>
                </div>
                ) 
        }
    }
    class Botones
    {
        boton_proyecto(link_proyecto, link_codigo)
        {
            let proyecto = []

            proyecto.push(
                <div key={1} className="contenedor_botones">
                    <a href={link_proyecto} target="_blank" rel="noreferrer" className="botones_portafolio"><img className="imagen_boton_portafolio" id="boton_proyecto" src={internet} alt="ver_proyecto"></img><h3>Ver proyecto</h3></a>
                    <a href={link_codigo} rel="noreferrer" target="_blank" className="botones_portafolio"><h3>Ver codigo</h3><img className="imagen_boton_portafolio" id="boton_codigo" src={github} alt="ver_proyecto"></img></a>
                </div>
            )

            return proyecto
        }

        boton_codigo(link_codigo)
        {
            let codigo = []

            codigo.push(
                <div key={2} className="contenedor_boton">
                    <a href={link_codigo} rel="noreferrer" target="_blank" className="botones_portafolio"><h3>Ver cofigo</h3><img id="boton_git" src={github} alt="ver_proyecto"></img></a>
                </div>
            )

            return codigo
        }
    }

    let botones = new Botones()

    return (
     
        <div id="espacio_portafolio">
            <div className="sub_titulo">
                <h4>Portafolio</h4>
            </div>

            <br></br>

            <div id="contenedor_portafolio">

                <br></br>  

                <p>¡Bienvenido a mi portafolio de proyectos!</p>    
                <br></br>  
                <p>En mi portafolio, encontrarás una selección de proyectos que abarcan diversos temas y funcionalidades. Desde un CRUD hasta sitios web para una tienda de ropas, cada proyecto refleja mi dedicación al arte del desarrollo web y mi compromiso con la excelencia técnica.</p>
                <br></br>  
                <p>Algunas de las tecnologías que utilizo en mis proyectos incluyen JavaScript, CSS y HTML para la creación de interfaces de usuario. Además, tengo el diseño de varias APIs que están enlazadas con  bases de datos relacionales como MySQL para garantizar un almacenamiento de datos eficiente y seguro. He trabajado con Python y el framework Django, así como con Node.js, para el desarrollo de APIs con Express.js y react para el desarrollo web en las interfaces de usuario.</p>
                <br></br>  
                <p>Mi objetivo al compartir estos proyectos es mostrar mis habilidades y experiencia como desarrollador web, así como buscar oportunidades laborales que me permitan seguir creciendo y desarrollándome profesionalmente en el campo del desarrollo web.</p>
                

                <div className="tauro_shop">
                    <br></br> 
                    <h5 id="titulo_tauro">Tauro Shop (+ API)</h5>
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
                    
                    <img src={tauro_shop} alt="tauro-shop" className="img_contenedor_portafolio"></img>
                    {botones.boton_proyecto("asdas", "adad")}
                </div>

                <div className="tauro_shop">
                    <br></br> 
                    <h5 id="titulo_CRUD_Registro_escolar">CRUD Registro escolar (+ API)</h5>
                    <br></br>
                    <p>En este CRUD busco simular un registro de estudiantes de una escuela. He creado esta página con el objetivo de ofrecer una solución efectiva y eficiente para la gestión de registros escolares, realizando las cuatro tareas de un CRUD creación de registros, lectura y visualización, actualización de registros y eliminación de registros.</p>
                    <br></br>

                    {lenguaje[0]}
                    {lenguaje[1]}
                    {lenguaje[2]}
                    {lenguaje[5]}
                    {lenguaje[6]}
                    
                    <img src={crud_registro_escolar} alt="tauro-shop" className="img_contenedor_portafolio"></img>
                    {botones.boton_proyecto("https://crud-registro-escolar.netlify.app/", "https://github.com/Deyvid-10/CRUD-Registro-escolar")}
                </div>

            </div>
        </div>
       
    );
  }
  
  export default Portafolio;