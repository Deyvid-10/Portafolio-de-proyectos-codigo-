import Cabecera from "./Cabecera"
import Pie_pagina from "./Pie_pagina"

function Contactos() {

    let activo = 'mx-2 font-medium text-teal-400 cursor-pointer'
    let inactivo = 'mx-2 font-medium transition hover:text-teal-400 cursor-pointer'

    return (
     
    <div>
        <Cabecera sobre_mi = {inactivo} habilidades = {inactivo} portafolio = {inactivo} curriculum = {inactivo} contactos = {activo}/>
        <div className="pt-28 lg:px-0 px-3 mx-auto customContainer">
        <h1 className="md:text-5xl text-2xl font-bold tracking-tight text-zinc-700">¡Conéctate conmigo! Estoy listo para colaborar en tus próximos proyectos</h1>
        <br/>
        <p>¡Estoy emocionado por las oportunidades futuras! Si estás interesado en mi trabajo o tienes alguna pregunta, no dudes en contactarme. Estoy abierto a nuevas oportunidades y ansioso por colaborar en proyectos emocionantes.</p>
        <br/>
        <br/>
        <br/>
        <div className="ml-5 block md:flex justify-evenly items-center md:py-0 py-2 md:w-full">
            <div>
                <a className="flex items-center group my-4 text-sm transition font-medium" href="https://github.com/Deyvid-10" target="_blank" rel="noreferrer">
                    <svg className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="none"/>
                        <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"/>
                    </svg>
                    <p className="ml-2 transition group-hover:text-teal-500">GitHub</p>
                </a>
                <a className="flex items-center group my-4 text-sm transition font-medium" href="https://www.linkedin.com/in/deyvid-marmolejo-91a7a2273/" target="_blank" rel="noreferrer">
                    <svg href="https://www.youtube.com/" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 3.47059V20.5294C22 20.9194 21.8451 21.2935 21.5693 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47059C3.08056 22 2.70651 21.8451 2.43073 21.5693C2.15494 21.2935 2 20.9194 2 20.5294V3.47059C2 3.08056 2.15494 2.70651 2.43073 2.43073C2.70651 2.15494 3.08056 2 3.47059 2H20.5294C20.9194 2 21.2935 2.15494 21.5693 2.43073C21.8451 2.70651 22 3.08056 22 3.47059ZM7.88235 9.64706H4.94118V19.0588H7.88235V9.64706ZM8.14706 6.41177C8.14861 6.18929 8.10632 5.96869 8.02261 5.76255C7.93891 5.55642 7.81542 5.36879 7.65919 5.21039C7.50297 5.05198 7.31708 4.92589 7.11213 4.83933C6.90718 4.75277 6.68718 4.70742 6.46471 4.70588H6.41177C5.95934 4.70588 5.52544 4.88561 5.20552 5.20552C4.88561 5.52544 4.70588 5.95934 4.70588 6.41177C4.70588 6.86419 4.88561 7.29809 5.20552 7.61801C5.52544 7.93792 5.95934 8.11765 6.41177 8.11765C6.63426 8.12312 6.85565 8.0847 7.06328 8.00458C7.27092 7.92447 7.46074 7.80422 7.62189 7.65072C7.78304 7.49722 7.91237 7.31346 8.00248 7.10996C8.09259 6.90646 8.14172 6.6872 8.14706 6.46471V6.41177ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7799 9.77345C13.2576 10.0397 12.8143 10.4383 12.4941 10.9294H12.4118V9.64706H9.64706V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.3681 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z" />
                    </svg>
                    <p className="ml-2 transition group-hover:text-teal-500">Linkedin</p>
                </a>
                <a className="flex items-center group my-4 text-sm transition font-medium" href={`${process.env.PUBLIC_URL}/CV - Deyvid Marmolejo.pdf`} download="CV - Deyvid Marmolejo.pdf" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" viewBox="0 0 16 16">
                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
                    </svg>
                    <p className="ml-2 transition group-hover:text-teal-500">Dergarga mi CV</p>
                </a>
            </div>
            <div className="md:w-1 md:h-36 md:border-l w-full h-1 border-t my-2 border-zinc-200"></div>
            <div>
                <a className="flex items-center group my-4 text-sm transition font-medium" href="mailto:marmolejodeyvid@gmail.com" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                    </svg>
                    <p className="ml-2 transition group-hover:text-teal-500">marmolejodeyvid@gmail.com</p>
                </a>
                <a className="flex items-center group my-4 text-sm transition font-medium" href="tel:+18094420389" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                    </svg>
                    <p className="ml-2 transition group-hover:text-teal-500">(809)-442-0389</p>
                </a>
                <a className="flex items-center group my-4 text" href="tel:+18295878292" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                    </svg>
                    <p className="ml-2 transition group-hover:text-teal-500">(829)-587-8292</p>
                </a>
            </div>
        </div>

            <Pie_pagina/>

        </div>
    </div>
    );
  }
  
  export default Contactos;