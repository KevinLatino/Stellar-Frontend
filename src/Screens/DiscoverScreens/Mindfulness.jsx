import React, { useState } from 'react'
import Meditation from '../../../public/People-Ilustrations/People-Meditation.png'
import Modal from './Modal';
import BackToDiscover from './BackToDiscover'
import { motion } from 'framer-motion';

const Mindfulness = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

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

                <div className="flex justify-center">
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
                <h2 className="text-3xl font-bold text-stellar-blue mb-6">La Matriz de Eisenhower y el Caso de Ana</h2>

                <p className="text-lg mb-6">
                    Ana quiere aplicar la matriz de Eisenhower para priorizar sus tareas y mejorar su productividad. A continuación, responderá una serie de preguntas para definir cómo puede integrar prácticas de mindfulness en su rutina diaria.
                </p>

                <h3 className="text-2xl font-semibold text-stellar-blue mb-4">Preguntas para Ayudar a Ana</h3>
                <div className="flex flex-col gap-6">
                    <div>
                        <p>¿Qué debe hacer Ana antes de comenzar una tarea urgente e importante?</p>
                        <ul className="list-disc pl-5">
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="task1-A"
                                    name="task1"
                                />
                                <label htmlFor="task1-A">Tomarse un momento para respirar profundamente.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="task1-B"
                                    name="task1"
                                />
                                <label htmlFor="task1-B">Hacer una lista de todas las tareas del día.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="task1-C"
                                    name="task1"
                                />
                                <label htmlFor="task1-C">Revisar sus correos electrónicos.</label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>¿Cómo puede Ana programar descansos para mantenerse consciente durante el día?</p>
                        <ul className="list-disc pl-5">
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="breaks-A"
                                    name="breaks"
                                />
                                <label htmlFor="breaks-A">Programando descansos conscientes para enfocarse en su respiración o una breve caminata.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="breaks-B"
                                    name="breaks"
                                />
                                <label htmlFor="breaks-B">Tomando descansos solo cuando se sienta agotada.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="breaks-C"
                                    name="breaks"
                                />
                                <label htmlFor="breaks-C">No programando descansos para mantener la concentración.</label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>¿Qué práctica de mindfulness puede ayudar a Ana a planificar mejor sus tareas del día siguiente?</p>
                        <ul className="list-disc pl-5">
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="reflection-A"
                                    name="reflection"
                                />
                                <label htmlFor="reflection-A">Dedicar unos minutos al final del día para reflexionar sobre sus logros.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="reflection-B"
                                    name="reflection"
                                />
                                <label htmlFor="reflection-B">Hacer una lista de tareas antes de acostarse.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="reflection-C"
                                    name="reflection"
                                />
                                <label htmlFor="reflection-C">Revisar sus correos electrónicos.</label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>¿Cuál es una práctica de mindfulness que puede mejorar las relaciones de Ana y reducir su estrés?</p>
                        <ul className="list-disc pl-5">
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="listening-A"
                                    name="listening"
                                />
                                <label htmlFor="listening-A">Practicar la escucha atenta y empática en sus interacciones diarias.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="listening-B"
                                    name="listening"
                                />
                                <label htmlFor="listening-B">Hablar con todos sus colegas sobre sus tareas.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="listening-C"
                                    name="listening"
                                />
                                <label htmlFor="listening-C">Evitar las interacciones sociales durante el trabajo.</label>
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

export default Mindfulness
