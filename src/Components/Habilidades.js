
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
import base_datos from "../Img/base_datos.png"
import github from "../Img/github.png"
import bootstrap from "../Img/bootstrap.png"


import Cabecera from "./Cabecera"
import Pie_pagina from "./Pie_pagina"

function Habilidades() {

    let activo = 'p-2 font-medium text-teal-400 cursor-pointer'
    let inactivo = 'p-2 font-medium transition hover:text-teal-400 cursor-pointer'

    const img_front = [js, css, html, tailwind, react, angular, bootstrap]
    const nom_front = ["JavaScript", "CSS", "HTML", "Tailwind CSS", "React", "Angular", "Bootstrap"]
    const pro_front = ["Avanzado", "Avanzado", "Avanzado", "Medio", "Basico", "Aprendiendo", "Aprendiendo"]
    const niv_front = [3, 3, 3, 2, 1, 0, 0]

    let elementos_front = []
    for(let front = 0; front < img_front.length; front++)
    {

        elementos_front.push(
            <div key={front}>
                <div className="w-60 mb-8 mr-10">
                   
                    <img className="w-8 mb-4" src={img_front[front]} alt={nom_front[front]}></img>
                    <h3 className="font-bold">{nom_front[front]}</h3>
                    <h3 className="flex justify-between">Nivel: <span>{pro_front[front]}</span></h3>

                    {grafico(niv_front[front])}
                </div>

                

            </div>
        )
        
    }

    const img_back = [node, mysql, python, python, mongo, base_datos]
    const nom_back = ["Express.js/Node.js", "MySQL", "Django", "Python", "MongoDB", "HeidiSQL"]
    const pro_back = ["Medio", "Medio", "Medio", "Avanzado", "Basico", "Aprendiendo"]
    const niv_back = [2, 2, 2, 3, 1, 0]

    let elementos_back = []
    for(let back = 0; back < img_back.length; back++)
    {

        elementos_back.push(
            <div key={back}>
                <div className="w-60 mb-8 mr-10">
                    <img className="w-8 mb-4" src={img_back[back]} alt={nom_back[back]}></img>
                    <h3 className="font-bold">{nom_back[back]}</h3>
                    <h3 className="flex justify-between">Nivel: <span>{pro_back[back]}</span></h3>

                    {grafico(niv_back[back])}
                </div>

                

            </div>
        )
        
    }

    const img_otros = [github]
    const nom_otros = ["GitHub"]
    const pro_otros = ["Medio"]
    const niv_otros = [2]

    let elementos_otros = []
    for(let ot = 0; ot < img_otros.length; ot++)
    {

        elementos_otros.push(
            <div key={ot}>
                <div className="w-60 mb-8 mr-10">
                    <img className="w-8 mb-4" src={img_otros[ot]} alt={nom_otros[ot]}></img>
                    <h3 className="font-bold">{nom_otros[ot]}</h3>
                    <h3 className="flex justify-between">Nivel: <span>{pro_otros[ot]}</span></h3>

                    {grafico(niv_back[ot])}
                </div>

                

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
            <h1 className="md:text-5xl text-2xl font-bold tracking-tight text-zinc-700">Desarrollo Web Versátil.</h1>
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