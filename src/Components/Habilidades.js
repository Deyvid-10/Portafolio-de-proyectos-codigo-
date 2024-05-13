
import js from "../Img/js.png"
import css from "../Img/css.png"
import html from "../Img/html.png"
import tailwind  from "../Img/tailwind.png"
import angular from "../Img/angular.png"
import react from "../Img/react.png"
import mysql from "../Img/mysql.png"
import node from "../Img/node.png"
import mongo from "../Img/mongo.png"
import python from "../Img/python.png"
import aws from "../Img/aws.png"
import github from "../Img/github.png"
import bootstrap from "../Img/bootstrap.png"
import postman from "../Img/postman.svg"

import Cabecera from "./Cabecera"
import Pie_pagina from "./Pie_pagina"

function Habilidades() {

    let activo = 'mx-2 font-medium text-teal-400 cursor-pointer'
    let inactivo = 'mx-2 font-medium transition hover:text-teal-400 cursor-pointer'

    const img_front = [js, css, html, tailwind, react, angular, bootstrap]
    const nom_front = ["JavaScript", "CSS", "HTML", "Tailwind CSS", "React", "Angular", "Bootstrap"]

    let elementos_front = []
    for(let front = 0; front < img_front.length; front++)
    {
        elementos_front.push(
            <div key={front} className="w-52 mb-8 mr-3 p-2 border-2 border-zinc-400 rounded flex items-center hover:bg-zinc-50">
                <img className="w-7" src={img_front[front]} alt={nom_front[front]}></img>
                <h3 className="ml-2 font-bold">{nom_front[front]}</h3>
            </div>
        ) 
    }

    const img_back = [node, js, mysql, python, python, mongo, aws]
    const nom_back = ["Node.js", "Express.js", "MySQL", "Django", "Python", "MongoDB", "Amazon Web Services"]

    let elementos_back = []
    for(let back = 0; back < img_back.length; back++)
    {

        if(nom_back[back] !== "Amazon Web Services")
        {
            elementos_back.push(
                <div key={back} className="w-52  mb-8 mr-3 p-2 border-2 border-zinc-400 rounded flex items-center hover:bg-zinc-50">
                    <img className="w-7" src={img_back[back]} alt={nom_back[back]}></img>
                    <h3 className="ml-2 font-bold">{nom_back[back]}</h3>
                </div>
            )
        }
        else
        {
            elementos_back.push(
                <div key={back} className="w-56  mb-8 mr-3 p-2 border-2 border-zinc-400 rounded flex items-center hover:bg-zinc-50">
                    <img className="w-7" src={img_back[back]} alt={nom_back[back]}></img>
                    <h3 className="ml-2 font-bold">{nom_back[back]}</h3>
                </div>
            )
        }
        
    }

    const img_otros = [github, postman]
    const nom_otros = ["GitHub", "Postman"]

    let elementos_otros = []
    for(let ot = 0; ot < img_otros.length; ot++)
    {

        elementos_otros.push(
            <div key={ot} className="w-52 mb-8 mr-3 p-2 border-2 border-zinc-400 rounded flex items-center hover:bg-zinc-50">
                <img className="w-7" src={img_otros[ot]} alt={nom_otros[ot]}></img>
                <h3 className="ml-2 font-bold">{nom_otros[ot]}</h3>
            </div>
        )
        
    }

    function grafico(nivel)
    {
        let graf_nivel = []

        switch (nivel) {
            case 3:
                graf_nivel.push(
                    <div className="bg-zinc-400 h-2 rounded-full" key={nivel}>
                        <div className="bg-black w-3/4 h-2 rounded-full"></div>
                    </div>
                    )
                return graf_nivel;

            case 2:
                graf_nivel.push(
                    <div className="bg-zinc-400 h-2 rounded-full" key={nivel}>
                        <div className="bg-black w-2/4 h-2 rounded-full"></div>
                    </div>
                    )
                return graf_nivel;

            case 1:
                graf_nivel.push(
                    <div className="bg-zinc-400 h-2 rounded-full" key={nivel}>
                        <div className="bg-black w-1/4 h-2 rounded-full"></div>
                    </div>
                    )
                return graf_nivel;

            case 0:
                graf_nivel.push(
                    <div className="bg-zinc-400 h-2 rounded-full" key={nivel}>
                        
                    </div>
                    )
                return graf_nivel;
        
            default:
                break;
        }
    }

    return (
     
        <div>
            <Cabecera sobre_mi = {inactivo} habilidades = {activo} portafolio = {inactivo} curriculum = {inactivo} contactos = {inactivo}/>
            <div className="pt-28 lg:w-8/12 md:w-10/12 lg:px-0 px-4 mx-auto">
            <h1 className="md:text-5xl text-2xl font-bold tracking-tight text-zinc-700">Desarrollo web versátil.</h1>
            <br/>
            <p>Sólido conocimiento en el desarrollo de aplicaciones web utilizando una amplia gama de tecnologías y frameworks para adaptarse a las necesidades específicas del proyecto.</p>
                <br/>
                <br/>
                <br/>

                <h5 className="md:text-4xl text-2xl font-bold tracking-tight text-zinc-700">Front-end</h5>
                <br/>
                <div className="flex flex-wrap">
                    {elementos_front}
                </div>
                
                <br/>
                <h5 className="md:text-4xl text-2xl font-bold tracking-tight text-zinc-700">Back-end</h5>
                <br/>
                <div className="flex flex-wrap">
                    {elementos_back}
                </div>

                <br/>
                <h5 className="md:text-4xl text-2xl font-bold tracking-tight text-zinc-700">Otros</h5>
                <br/>
                <div className="flex flex-wrap">
                    {elementos_otros}
                </div>
             
                <Pie_pagina/>
            </div>
        </div>
       
    );
  }
  
  export default Habilidades;