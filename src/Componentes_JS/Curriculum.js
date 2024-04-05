function Curriculum() {

    const cursos = ["Ingeniería en sistemas y computación", "Introducción a la programación", "Python", "JavaScript", "Angular", "Base de datos"]
    const centro_educativo = ["Universidad Dominicana O&M", "Itla", "Udemy", "Udemy", "Itla", "Udemy"]
    const tiempo_estudio = ["2017-2023", "2023", "2023", "2023", "Cursando", "Cursando"]

    let elementos_educacion = []
    for(let cur = 0; cur < cursos.length; cur++)
    {
        elementos_educacion.push(
            <div className="elemento_educacion" key={cur}>
                <h3 className="texto1_curriculum">{cursos[cur]}</h3>
                <h3 className="texto2_curriculum">{centro_educativo[cur]}</h3>
                <h3 className="texto3_curriculum">{tiempo_estudio[cur]}</h3>
            </div>
        ) 
    }

    const puesto = ["Representante Contacto Previo", "Soporte a técnico Claro TV"]
    const empresa = ["Opitel", "Opitel"]
    const tiempo_experiencia = ["2018-2022", "2022-actulidad"]

    let elementos_experiencia = []
    for(let exp = 0; exp < puesto.length; exp++)
    {
        elementos_experiencia.push(
            <div className="elemento_experiencia" key={exp}>
                <h3 className="texto1_curriculum">{puesto[exp]}</h3>
                <h3 className="texto2_curriculum">{empresa[exp]}</h3>
                <h3 className="texto3_curriculum">{tiempo_experiencia[exp]}</h3>
            </div>
        ) 
    }

    return (
     
        <div id="espacio_curriculum">
            <div className="sub_titulo">
                <h4>Curriculum</h4>
            </div>

            <br></br>

            <div id="contenedor_curriculum">
                <div className="elementos_curriculum">
                    <h6>Educación</h6>
                    <br></br>
                    <div>
                        {elementos_educacion}
                    </div>
                </div>

                <div>
                    <h6>Experiencia laboral</h6>
                    <br></br>
                    <div className="contenedor_curriculum">
                        {elementos_experiencia}
                    </div>
                </div>
            </div>
        </div>
       
    );
  }
  
  export default Curriculum;