import React from 'react'
import GirlStudying from '../../../public/Ilustrations/Girl-Studying.png'
import BackToDiscover from './BackToDiscover'
import { motion } from 'framer-motion';

const PlanificationEnvironment = () => {
    return (
        <>
            <div className='flex flex-col gap-14 relative animate__animated animate__fadeInDown'>
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
                    <div className="w-[13.2rem] hidden sm:flex relative">
                        <img
                            src={GirlStudying}
                            alt="Ilustration"
                            className="absolute left-[260px] bottom-[-30%]"
                        />
                    </div>
                </div>

                <div className="flex justify-center h-full">
                    <div className="w-1/2 flex flex-col gap-4 ml-10">
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>Cómo crear un ambiente de planificación</b>
                            </span>
                        </h1>
                        <ul className='list-disc ml-5 flex flex-col gap-6 font-raleway text-[#000000a3] text-[17.5px] font-medium'>
                            <li><b>Encuentra un espacio cómodo:</b> Elige un lugar donde te sientas cómodo y sin distracciones.</li>
                            <li><b>Organiza tu espacio:</b> Mantén tu área de trabajo ordenada y con todos los materiales necesarios a mano.</li>
                            <li><b>Organiza tus tareas:</b> encuentra un espacio que te ayude a organizar tus tareas utilizando buenas prácticas.</li>
                            <li><b>Stellar:</b> Con Stellar, tienes acceso a un entorno de planificación diseñado para maximizar tu productividad.</li>
                        </ul>
                    </div>

                    <div className="w-0.5 bg-gray-300 mx-8 font-raleway"></div>

                    <div className="w-1/2 flex flex-col gap-4 ml-5">
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>Beneficios de un buen ambiente de planificación</b>
                            </span>
                        </h1>
                        <ul className='list-disc ml-5 flex flex-col gap-6 font-raleway text-[#000000a3] text-[17.5px] font-medium'>
                            <li><b>Mejora la concentración:</b> Un entorno agradable reduce las distracciones y mejora el enfoque.</li>
                            <li><b>Aumenta la motivación:</b> Un espacio que te guste puede aumentar tu entusiasmo por trabajar.</li>
                            <li><b>Facilita la organización:</b> Un ambiente bien organizado te ayuda a mantener un flujo de trabajo eficiente.</li>
                            <li><b>Constante aprendizaje:</b> Un ambiente de calidad, te brinda la oportunidad de aprender nuevas técnicas para mejorar.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center mt-2">
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

export default PlanificationEnvironment
