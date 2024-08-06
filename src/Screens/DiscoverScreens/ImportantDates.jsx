import React from 'react'
import GirlWritingNotes from '../../../public/People-Ilustrations/Girl-Writing-Notes.png'
import BackToDiscover from './BackToDiscover'
import { motion } from 'framer-motion';

const ImportantDates = () => {
    return (
        <>
            <div className='flex flex-col gap-10 relative animate__animated animate__fadeInDown'>
                <div className="flex p-6 h-[10.5rem] w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                    <div className="w-[42rem] h-[7.5rem]">
                        <div className="flex flex-col gap-1 pl-6 justify-center h-full">
                            <h1 className="text-4xl font-medium text-white">
                                <b>¡Escribe fechas en un calendario!</b>
                            </h1>
                            <p className="text-xl font-medium text-white">
                                Establecer fechas importantes según su fecha de entrega te permite visualizar y gestionar tus plazos de manera efectiva.
                            </p>
                        </div>
                    </div>
                    <div className="w-[12.2rem] hidden sm:flex relative">
                        <img
                            src={GirlWritingNotes}
                            alt="Ilustration"
                            className="absolute left-[260px] bottom-[-20%]"
                        />
                    </div>
                </div>

                <div className="flex justify-center h-full">
                    <div className="w-1/2 flex flex-col gap-4 ml-10">
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>Cómo definir fechas importantes</b>
                            </span>
                        </h1>
                        <ul className='list-disc ml-5 flex flex-col gap-6 font-raleway text-[#000000a3] text-[17.5px] font-medium'>
                            <li><b>Identifica las tareas clave:</b> Enumera las tareas y proyectos importantes.</li>
                            <li><b>Establece plazos:</b> asigna una fecha de entrega a cada tarea.</li>
                            <li><b>Marca las fechas en el calendario:</b> escribe cada fecha de entrega en tu calendario.</li>
                            <li><b>Revisa y ajusta:</b> revisa regularmente tu calendario y ajusta las fechas según sea necesario.</li>
                            <li><b>Calendario de Stellar:</b> por suerte, Stellar tiene un calendario con tus tareas.</li>
                        </ul>
                    </div>

                    <div className="w-0.5 bg-gray-300 mx-8 font-raleway"></div>

                    <div className="w-1/2 flex flex-col gap-4 ml-5">
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>Beneficios de definir fechas importantes</b>
                            </span>
                        </h1>
                        <ul className='list-disc ml-5 flex flex-col gap-6 font-raleway text-[#000000a3] text-[17.5px] font-medium'>
                            <li><b>Mejora la organización:</b> Tener fechas claras ayuda a organizar mejor tu tiempo y recursos.</li>
                            <li><b>Aumenta la responsabilidad:</b> Los plazos establecidos fomentan un sentido de responsabilidad y urgencia.</li>
                            <li><b>Facilita la planificación:</b> Un calendario con fechas importantes facilita la planificación a largo plazo.</li>
                            <li><b>Reduce el estrés:</b> Saber cuándo son tus plazos ayuda a evitar el estrés de las entregas de última hora.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="bg-light-blue text-white px-4 py-2.5 rounded-full font-semibold text-lg shadow-lg">
                        Realizar Prueba
                    </motion.button>
                </div>
            </div>
            <BackToDiscover />
        </>
    )
}

export default ImportantDates
