import React, { useState } from 'react'
import GirlStudying from '../../../public/People-Ilustrations/Girl-Studying.png'
import BackToDiscover from './BackToDiscover'
import Modal from './Modal';
import { motion } from 'framer-motion';

const PlanificationEnvironment = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

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
                        className="bg-light-blue text-white px-4 py-2.5 rounded-full font-semibold text-lg shadow-lg"
                        onClick={openModal}
                    >
                        Realizar Prueba
                    </motion.button>
                </div>
            </div>
            <BackToDiscover />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <h2 className="text-3xl font-bold text-stellar-blue mb-6">Cómo Crear un Ambiente de Planificación y el Caso de Maria</h2>

                <p className="text-lg mb-6">
                    Maria quiere crear un ambiente de planificación efectivo para mejorar su productividad. A continuación, responderá una serie de preguntas para definir cómo puede optimizar su espacio de trabajo.
                </p>

                <h3 className="text-2xl font-semibold text-stellar-blue mb-4">Preguntas para Ayudar a Maria</h3>
                <div className="flex flex-col gap-6">
                    <div>
                        <p>¿Cuál es el primer paso para crear un buen ambiente de planificación?</p>
                        <ul className="list-disc pl-5">
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="step1-A"
                                    name="step1"
                                />
                                <label htmlFor="step1-A">Encontrar un espacio cómodo y sin distracciones.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="step1-B"
                                    name="step1"
                                />
                                <label htmlFor="step1-B">Organizar todas sus tareas pendientes primero.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="step1-C"
                                    name="step1"
                                />
                                <label htmlFor="step1-C">Buscar herramientas de planificación en línea.</label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>¿Cómo puede Maria organizar su espacio de trabajo?</p>
                        <ul className="list-disc pl-5">
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="organize-A"
                                    name="organize"
                                />
                                <label htmlFor="organize-A">Mantener su área de trabajo ordenada con todos los materiales necesarios a mano.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="organize-B"
                                    name="organize"
                                />
                                <label htmlFor="organize-B">Poner todos los materiales en una caja y sacarlos cuando los necesite.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="organize-C"
                                    name="organize"
                                />
                                <label htmlFor="organize-C">Dejar sus materiales dispersos para tenerlos siempre a la vista.</label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>¿Qué debe hacer Maria para mejorar su concentración mientras trabaja?</p>
                        <ul className="list-disc pl-5">
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="focus-A"
                                    name="focus"
                                />
                                <label htmlFor="focus-A">Crear un entorno agradable que reduzca las distracciones.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="focus-B"
                                    name="focus"
                                />
                                <label htmlFor="focus-B">Escuchar música alta mientras trabaja.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="focus-C"
                                    name="focus"
                                />
                                <label htmlFor="focus-C">Trabajar en un espacio público con mucho movimiento.</label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>¿Cuál es una ventaja de tener un ambiente de planificación bien organizado?</p>
                        <ul className="list-disc pl-5">
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="advantage-A"
                                    name="advantage"
                                />
                                <label htmlFor="advantage-A">Mejora la organización y facilita el flujo de trabajo.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="advantage-B"
                                    name="advantage"
                                />
                                <label htmlFor="advantage-B">Permite trabajar más tiempo sin descansar.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="advantage-C"
                                    name="advantage"
                                />
                                <label htmlFor="advantage-C">Facilita el multitasking y trabajar en varias tareas a la vez.</label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="bg-light-blue text-white px-4 py-2.5 rounded-full font-semibold text-lg shadow-lg"
                        onClick={closeModal}
                    >
                        Cerrar
                    </motion.button>
                </div>
            </Modal>

        </>
    )
}

export default PlanificationEnvironment
