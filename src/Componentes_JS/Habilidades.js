import back_end from "../Img/back_end.png"
import front_end from "../Img/front_end.png"
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



function Habilidades() {

    const img_front = [js, css, html, tailwind, react]
    const nom_front = ["JavaScript", "CSS", "HTML", "Tailwind CSS", "React"]
    const pro_front = ["Avanzado", "Avanzado", "Avanzado", "Medio", "Basico"]
    const niv_front = [3, 3, 3, 2, 1]

    let elementos_front = []
    for(let front = 0; front < img_front.length; front++)
    {

        elementos_front.push(
            <div key={front}>
                <div className="ordenar_habilidad">
                    <div className="ordenar_lenguaje">
                        <img className="img_lenguaje" src={img_front[front]} alt={nom_front[front]}></img>
                        <h3 className="lenguaje_habilidad">{nom_front[front]}</h3>
                    </div>
                    <h3 className="nivel_lenguaje">{pro_front[front]}</h3>
                </div>

                {grafico(niv_front[front])}

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
                <div className="ordenar_habilidad">
                    <div className="ordenar_lenguaje">
                        <img className="img_lenguaje" src={img_back[back]} alt={nom_back[back]}></img>
                        <h3 className="lenguaje_habilidad">{nom_back[back]}</h3>
                    </div>
                    <h3 className="nivel_lenguaje">{pro_back[back]}</h3>
                </div>

                {grafico(niv_back[back])}

            </div>
        )
        
    }

    function grafico(nivel)
    {
        let graf_nivel = []

        switch (nivel) {
            case 3:
                graf_nivel.push(
                    <div id="grafico_nivel" key={nivel}>
                        <div className="verde"></div>
                        <div className="verde"></div>
                        <div className="verde"></div>
                        <div className="nulo"></div>
                    </div>
                    )
                return graf_nivel;

            case 2:
                graf_nivel.push(
                    <div id="grafico_nivel" key={nivel}>
                        <div className="verde"></div>
                        <div className="verde"></div>
                        <div className="nulo"></div>
                        <div className="nulo"></div>
                    </div>
                    )
                return graf_nivel;

            case 1:
                graf_nivel.push(
                    <div id="grafico_nivel" key={nivel}>
                        <div className="verde"></div>
                        <div className="nulo"></div>
                        <div className="nulo"></div>
                        <div className="nulo"></div>
                    </div>
                    )
                return graf_nivel;

            case 0:
                graf_nivel.push(
                    <div id="grafico_nivel" key={nivel}>
                        <div className="nulo"></div>
                        <div className="nulo"></div>
                        <div className="nulo"></div>
                        <div className="nulo"></div>
                    </div>
                    )
                return graf_nivel;
        
            default:
                break;
        }
    }

    return (
     
        <div id="espacio_habilidades">
            <div className="sub_titulo">
                <h4>Habilidades</h4>
            </div>

            <br></br>

            <div id="contenedor_habilidades">
                <div className="elementos_habilidades">
                    <div className="ordendar_img_end"><img className="img_end" src={front_end} alt="front-end"></img></div>
                    <h3 className="titulo_end">Front-End</h3>
                    {elementos_front}
                </div>

                <div className="elementos_habilidades">
                    <div className="ordendar_img_end"><img className="img_end" src={back_end} alt="back-end"></img></div>
                    <h3 className="titulo_end">Back-End</h3>
                    {elementos_back}
                </div>
            </div>
        </div>
       
    );
  }
  
  export default Habilidades;