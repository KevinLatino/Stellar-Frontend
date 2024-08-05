import React from 'react'
import Meditation from '../../../public/Ilustrations/People-Meditation.png'
import BackToDiscover from './BackToDiscover'

const Mindfulness = () => {
    return (
        <>
            <div className='flex flex-col gap-10 relative animate__animated animate__fadeInDown'>
                <div className="flex p-6 h-[10.5rem] w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                    <div className="w-[42rem] h-[7.5rem]">
                        <div className="flex flex-col gap-1 pl-6 justify-center h-full">
                            <h1 className="text-4xl font-medium text-white">
                                <b>La matriz de Eisenhower</b>
                            </h1>
                            <p className="text-xl font-medium text-white">
                                Priorización de tareas por urgencia e importancia
                            </p>
                        </div>
                    </div>
                    <div className="w-[14.5em] hidden sm:flex relative">
                        <img
                            src={Meditation}
                            alt="Ilustration"
                            className="absolute left-[250px] bottom-[-25%]"
                        />
                    </div>
                </div>

                <div className="flex justify-center h-full">
                    <div className="w-1/2 flex flex-col gap-4 ml-10">
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>Principales prácticas de Mindfulness</b>
                            </span>
                        </h1>
                        <ul className='list-disc ml-5 flex flex-col gap-6 font-raleway text-[#000000a3] text-[17.5px] font-medium'>
                            <li><b>Respiración Consciente:</b> Tómate un momento para respirar profundamente antes de comenzar cualquier tarea, especialmente aquellas en el cuadrante Urgente e Importante.</li>
                            <li><b>Mindful Breaks:</b> Programa descansos conscientes donde te desconectes de tus tareas y te enfoques en tu respiración o en una breve caminata.</li>
                            <li><b>Reflexión Diaria:</b> Dedica unos minutos al final del día para reflexionar sobre tus logros y planificar las tareas del día siguiente con una mente clara.</li>
                        </ul>
                    </div>

                    <div className="w-0.5 bg-gray-300 mx-8 font-raleway"></div>

                    <div className="w-1/2 flex flex-col gap-4 ml-5">
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>Más Prácticas de Mindfulness</b>
                            </span>
                        </h1>
                        <ul className='list-disc ml-5 flex flex-col gap-6 font-raleway text-[#000000a3] text-[17.5px] font-medium'>
                            <li><b>Atención Plena:</b> Enfócate plenamente en la tarea que tienes delante, sin permitir que las distracciones te alejen de tu objetivo.</li>
                            <li><b>Journaling:</b> Lleva un diario donde anotes tus pensamientos y emociones, ayudándote a procesar y liberar el estrés acumulado.</li>
                            <li><b>Agradecimiento:</b> Tómate unos momentos cada día para reflexionar sobre las cosas por las que estás agradecido, fomentando una actitud positiva.</li>
                            <li><b>Mindful Listening:</b> Practica la escucha atenta y empática en tus interacciones diarias, mejorando tus relaciones y reduciendo el estrés.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <BackToDiscover />
        </>
    )
}

export default Mindfulness
