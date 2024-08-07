import React, { useState } from 'react'
import Meditation from '../../../public/People-Ilustrations/Relaxing.png'
import BackToDiscover from './BackToDiscover'
import Modal from './Modal';
import { motion } from 'framer-motion';

const PodomoroTechnique = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <div>
            <div className='flex flex-col gap-10 relative animate__animated animate__fadeInDown'>
                <div className="flex p-6 h-[10.5rem] w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                    <div className="w-[42rem] h-[7.5rem]">
                        <div className="flex flex-col gap-1 pl-6 justify-center h-full">
                            <h1 className="text-4xl font-medium text-white">
                                <b>Técnica Pomodoro</b>
                            </h1>
                            <p className="text-xl font-medium text-white">
                                Utiliza intervalos de trabajo de 25 minutos, seguidos de un breve descanso, para maximizar la concentración y la productividad.
                            </p>
                        </div>
                    </div>
                    <div className="w-[19rem] hidden sm:flex relative">
                        <img
                            src={Meditation}
                            alt="Ilustration"
                            className="absolute left-[200px] bottom-[-30%]"
                        />
                    </div>
                </div>

                <div className="flex justify-center h-full">
                    <div className="w-1/2 flex flex-col gap-4 ml-10">
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>Cómo implementar la técnica Pomodoro</b>
                            </span>
                        </h1>
                        <ul className='list-disc ml-5 flex flex-col gap-6 font-raleway text-[#000000a3] text-[17.5px] font-medium'>
                            <li><b>Elige una tarea:</b> Decide la tarea que quieres trabajar.</li>
                            <li><b>Configura el temporizador:</b> Ajusta el temporizador a 25 minutos, el intervalo Pomodoro.</li>
                            <li><b>Trabaja en la tarea:</b> Concéntrate en la tarea hasta que el temporizador suene.</li>
                            <li><b>Toma un descanso corto:</b> Tómate un descanso de 5 minutos para relajarte.</li>
                            <li><b>Repite:</b> Después de cuatro Pomodoros, toma un descanso más largo de 15-30 minutos.</li>
                        </ul>
                    </div>

                    <div className="w-0.5 bg-gray-300 mx-8 font-raleway"></div>

                    <div className="w-1/2 flex flex-col gap-4 ml-5">
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>Beneficios de la técnica Pomodoro</b>
                            </span>
                        </h1>
                        <ul className='list-disc ml-5 flex flex-col gap-6 font-raleway text-[#000000a3] text-[17.5px] font-medium'>
                            <li><b>Mejora la concentración:</b> Al trabajar en intervalos cortos, se reduce la distracción y se mejora el enfoque.</li>
                            <li><b>Aumenta la productividad:</b> Los descansos regulares ayudan a mantener la energía y la motivación.</li>
                            <li><b>Reduce el agotamiento:</b> Los descansos frecuentes previenen la fatiga y el agotamiento mental.</li>
                            <li><b>Facilita la gestión del tiempo:</b> La técnica ayuda a dividir el trabajo en bloques manejables, haciendo más fácil la planificación y el seguimiento.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={openModal}
                        className="bg-light-blue text-white px-4 py-2.5 rounded-full font-semibold text-lg shadow-lg">
                        Realizar Prueba
                    </motion.button>
                </div>

            </div>
            <BackToDiscover />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <div className='flex flex-col gap-2'>
                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>La Técnica Pomodoro y el Caso de Laura</b>
                        </span>
                    </h1>

                    <p className="text-l mb-6">
                        Laura, una profesional que busca mejorar su productividad, decide implementar la técnica Pomodoro en su rutina diaria. A continuación, responde una serie de preguntas para definir cómo la técnica puede ayudarla a alcanzar sus objetivos.
                    </p>

                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>¿Cómo implementa Laura la técnica Pomodoro?</b>
                        </span>
                    </h1>

                    <div className="mt-4 flex flex-col gap-6">
                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <span className="inline-block border-b-[0.1rem pb-1">
                                    <p>¿Qué hace Laura antes de iniciar un intervalo Pomodoro?</p>
                                </span>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="implement-A"
                                        name="implement"
                                    />
                                    <label htmlFor="implement-A">Elige una tarea específica para trabajar.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="implement-B"
                                        name="implement"
                                    />
                                    <label htmlFor="implement-B">Configura el temporizador a 50 minutos.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="implement-C"
                                        name="implement"
                                    />
                                    <label htmlFor="implement-C">Realiza una pausa de 10 minutos.</label>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <span className="inline-block border-b-[0.1rem pb-1">
                                    <p>¿Cómo sabe Laura que ha terminado un intervalo Pomodoro?</p>
                                </span>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="end-A"
                                        name="end"
                                    />
                                    <label htmlFor="end-A">El temporizador suena después de 25 minutos.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="end-B"
                                        name="end"
                                    />
                                    <label htmlFor="end-B">Recibe una notificación en su computadora.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="end-C"
                                        name="end"
                                    />
                                    <label htmlFor="end-C">Ve un mensaje en su aplicación de productividad.</label>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <span className="inline-block border-b-[0.1rem pb-1">
                                    <p>¿Qué beneficios experimenta Laura al usar la técnica Pomodoro?</p>
                                </span>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="benefit-A"
                                        name="benefit"
                                    />
                                    <label htmlFor="benefit-A">Mejora la concentración y reduce las distracciones.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="benefit-B"
                                        name="benefit"
                                    />
                                    <label htmlFor="benefit-B">Aumenta el tiempo de trabajo continuo sin descansos.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="benefit-C"
                                        name="benefit"
                                    />
                                    <label htmlFor="benefit-C">Elimina la necesidad de establecer plazos.</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 flex items-center justify-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="bg-light-blue text-white px-4 py-2.5 rounded-full font-semibold text-lg shadow-lg"
                            onClick={closeModal}
                        >
                            Terminar
                        </motion.button>
                    </div>
                </div>
            </Modal>


        </div>
    )
}

export default PodomoroTechnique
