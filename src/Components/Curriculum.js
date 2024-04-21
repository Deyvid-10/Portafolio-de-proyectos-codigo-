import Cabecera from "./Cabecera"
import Pie_pagina from "./Pie_pagina"

function Curriculum() {

    let activo = 'sm:block hidden p-2 font-medium text-teal-400 cursor-pointer'
    let inactivo = 'sm:block hidden p-2 font-medium transition hover:text-teal-400 cursor-pointer'

    const cursos = ["Engresado de ingeniería en sistemas y computación", "Introducción a la programación", "Python", "JavaScript", "Angular", "Base de datos"]
    const centro_educativo = ["Universidad Dominicana O&M", "Itla", "Udemy", "Udemy", "Itla", "Udemy"]
    const tiempo_estudio = ["2017-2023", "Julio, 2023", "Septiembre, 2023", "Diciembre, 2023", "Cursando", "Cursando"]
    const descripcion_estudio =["Aunque soy apacionado por el desarrollo de aplicaciones, tambien cuento con una sólida formación como ingeniero en sistemas, he sido capacitado en diversas áreas de la informática, incluyendo redes de telecomunicaciones, administración de servidores y seguridad informática.",
                                "Desde los principios básicos de la lógica de programación hasta la sintaxis de los lenguajes de programación, he aprendido a crear algoritmos simples y a escribir código en un entorno de desarrollo. Además, he desarrollado habilidades para resolver problemas de manera estructurada y lógica, lo que me permite abordar desafíos de codificación con confianza y eficiencia.",
                                "Aprendí desde la creación de aplicaciones de escritorio utilizando Tkinter hasta el desarrollo de aplicaciones web con Django. Este curso me proporcionó una base sólida en programación y me equipó con las habilidades necesarias para abordar una amplia gama de proyectos de desarrollo de software.",
                                "JavaScript es un lenguaje que me cautivó desde el principio. Durante mi exploración en este campo, no solo dominé el propio lenguaje, sino que también adquirí conocimientos sólidos en tecnologías front-end como HTML, CSS y archivos JSON. Además, me sumergí en el uso de frameworks populares como React y Angular, lo que amplió mis habilidades en el desarrollo de aplicaciones web dinámicas. También aprendí sobre la comunicación con el servidor y, en el backend, utilicé bases de datos como MySQL o MongoDB junto con Node.js y Express, lo que me permitió desarrollar aplicaciones completas desde el frontend hasta el backend con confianza y eficacia.",
                                "Busco expandir mi conocimiento sobre bases de datos para fortalecer mis capacidades en el desarrollo del backend. Estoy ansioso por adquirir nuevas habilidades y técnicas que me permitan diseñar, implementar y administrar bases de datos de manera eficiente y efectiva en mis proyectos futuros.",
                                "Estoy emocionado por la oportunidad de aprender todo lo que el docente pueda compartir sobre Angular. Estoy seguro de que su experiencia y conocimiento serán invaluables para mi desarrollo en esta área y estoy ansioso por absorber cada detalle y consejo que pueda ofrecer."
                                ]

    let elementos_educacion = []
    for(let cur = 0; cur < cursos.length; cur++)
    {
        elementos_educacion.push(
            <div className="flex organizar" key={cur}>
                <div className="text-zinc-500 sm:p-4 p-1 border-l border-zinc-200">
                    <h3 className="">{centro_educativo[cur]}</h3>
                    <h3 className="">{tiempo_estudio[cur]}</h3>
                </div>
                <div className="hover:bg-zinc-50 transition p-4 mb-10">
                    <h3 className="font-bold text-zinc-700">{cursos[cur]}</h3>
                    <h3>{descripcion_estudio[cur]}</h3>
                </div>
            </div>
        ) 
    }

    const puesto = ["Representante de contacto previo", "Soporte a técnico Claro TV"]
    const empresa = ["Opitel", "Opitel"]
    const tiempo_experiencia = ["2018-2022", "2022-actulidad"]
    const descripcion_experiencia = ["En mi antiguo puesto como Representante de Contacto Previo, desempeñaba un papel crucial en representacion de la empresa ante los clientes. Mi principal responsabilidad era garantizar que las solicitudes recibidas cumplieran con los estándares y parámetros establecidos. Esto implicaba una comunicación efectiva con los clientes para comprender sus necesidades y preocupaciones, así como coordinar con los departamentos internos para garantizar una respuesta precisa y oportuna a cada solicitud.",
                                    "En mi puesto actual, desempeño un rol colaborativo clave al trabajar estrechamente con los técnicos de la empresa, tanto en el ámbito de instalación como en el de resolución de averías, a nivel nacional. Mis responsabilidades incluyen la asignación de facilidades, el control del inventario de facilidades, así como la configuración y aseguramiento de la calidad de los servicios de telecomunicaciones. Además, me encargo de facilitar información relevante. Mi enfoque se centra en optimizar los procesos internos y externos para garantizar la eficiencia operativa y la satisfacción del cliente en cada interacción."
                                    ]

    let elementos_experiencia = []
    for(let exp = 0; exp < puesto.length; exp++)
    {
        elementos_experiencia.push(
            <div className="flex organizar" key={exp}>
            <div className="text-zinc-500 md:p-4 p-1 border-l border-zinc-200">
                <h3 className="">{empresa[exp]}</h3>
                <h3 className="">{tiempo_experiencia[exp]}</h3>
            </div>
            <div className="hover:bg-zinc-50 transition p-4  mb-10">
                <h3 className="font-bold text-zinc-700">{puesto[exp]}</h3>
                <h3>{descripcion_experiencia[exp]}</h3>
            </div>
        </div>
        ) 
    }

    return (
     
        <div>
            <Cabecera sobre_mi = {inactivo} habilidades = {inactivo} portafolio = {inactivo} curriculum = {activo} contactos = {inactivo}/>
            <div className="pt-28 lg:w-8/12 md:w-10/12 lg:px-0 px-4 mx-auto">
                <h1 className="md:text-5xl text-2xl font-bold tracking-tight text-zinc-700">Comprometido con el crecimiento profesional continuo y desempeño en roles de trabajo exigentes.</h1>
                <br/>
                <p>Me esfuerzo constantemente por alcanzar un crecimiento profesional continuo, mi dedicación hacia el aprendizaje y la superación personal me impulsa a enfrentar con confianza y determinación cada nuevo desafío que se presente en mi camino laboral</p>
                <br/>
                <br/>
                <br/>
                <h1 className="md:text-4xl text-2xl font-bold tracking-tight text-zinc-700">Educación</h1>
                <br/>
                <div className="alineador">{elementos_educacion}</div>
                <br/>
                <h1 className="md:text-4xl text-2xl font-bold tracking-tight text-zinc-700">Experiencia Laboral</h1>
                <br/>
                <div className="alineador">{elementos_experiencia}</div>

            <Pie_pagina/>

            </div>

        </div>
       
    );
  }
  
  export default Curriculum;