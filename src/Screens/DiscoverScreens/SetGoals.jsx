import { useState } from 'react';
import PeopleLearning from '../../../public/People-Ilustrations/Time-Management.png';
import BackToDiscover from './BackToDiscover';
import Modal from './Modal';
import { motion } from 'framer-motion';

const SetGoals = () => {
    
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
                                <b>¡Define tus metas del futuro!</b>
                            </h1>
                            <p className="text-xl font-medium text-white">
                                Establece metas las cuales deseas conseguir en un futuro.
                            </p>
                        </div>
                    </div>
                    <div className="w-[21rem] hidden sm:flex relative">
                        <img
                            src={PeopleLearning}
                            alt="Ilustration"
                            className="absolute left-[150px] bottom-[-20%]"
                        />
                    </div>
                </div>

                <div className="flex justify-center h-full">
                    <div className="w-1/2 flex flex-col gap-4 ml-10">
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>La importancia de mis metas a futuro</b>
                            </span>
                        </h1>
                        <p className='font-raleway text-[#000000a3] text-[17.5px] font-medium'>
                            Establecer metas claras y alcanzables es fundamental para tu éxito personal y profesional.
                            Definir lo que quieres lograr te ayudará a mantenerte enfocado, motivado y en camino hacia tus objetivos
                            a largo plazo.
                        </p>
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>Empieza a imaginarte en unos años</b>
                            </span>
                        </h1>
                        <p className='font-raleway text-[#000000a3] text-[17.5px] font-medium'>
                            Visualiza tu futuro ideal: imagina dónde te ves en 1, 5 o 10 años. ¿Qué logros te gustaría alcanzar?
                            ¿Cómo te gustaría que sea tu vida? ¿Qué harás para conseguir ese futuro deseado? Considera aspectos generales
                            de tu vida.
                        </p>
                    </div>
                    <div className="w-0.5 bg-gray-300 mx-8 font-raleway"></div>
                    <div className="w-1/2 flex flex-col gap-2 ml-5">
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>Preguntas que debería hacerme</b>
                            </span>
                        </h1>
                        <ul className="mt-6 font-raleway text-[#000000a3] text-[17.5px] font-medium flex flex-col gap-7">
                            <li>Específicas: ¿Qué quieres lograr exactamente?</li>
                            <li>Medibles: ¿Cómo sabrás que has alcanzado tu meta?</li>
                            <li>Alcanzables: ¿Es realista tu objetivo?</li>
                            <li>Relevantes: ¿Por qué es importante para ti?</li>
                            <li>Temporales: ¿Cuál es el plazo para lograrlo?</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center mt-2">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={openModal}
                        className="bg-light-blue text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
                        Realizar Prueba
                    </motion.button>
                </div>
            </div>
            <BackToDiscover />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <h2 className="text-3xl font-bold text-stellar-blue mb-6">Historia de Astro y Test</h2>
                <p className="text-lg mb-6">
                    Astro, un robot explorador intergaláctico, está atrapado en una estación espacial dañada en el borde de una galaxia lejana. Debido a un mal funcionamiento, ha perdido conexión con su nave y necesita encontrar el mapa de la estación, que está almacenado en el centro de control, para poder regresar a su nave y continuar su misión. Enfrentado a pasillos oscuros y equipos dañados, Astro debe definir claramente su objetivo y planificar los pasos necesarios para resolver esta situación crítica.
                </p>

                <h3 className="text-2xl font-semibold text-stellar-blue mb-4">Preguntas para Ayudar a Astro</h3>

                <div className="flex flex-col gap-6">
                    <div>
                        <p>¿Qué quieres lograr exactamente?</p>
                        <ul className="list-disc pl-5">
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="1-A"
                                    name="1"
                                />
                                <label htmlFor="1-A">Encuentra una forma de contactar a la base espacial.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="1-B"
                                    name="1"
                                />
                                <label htmlFor="1-B">Localiza el mapa de la estación espacial.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="1-C"
                                    name="1"
                                />
                                <label htmlFor="1-C">Encuentra el compartimiento de herramientas en la estación.</label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>¿Cómo sabrás que has alcanzado tu meta?</p>
                        <ul className="list-disc pl-5">
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="2-A"
                                    name="2"
                                />
                                <label htmlFor="2-A">Encuentra una forma de contactar a la base espacial.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="2-B"
                                    name="2"
                                />
                                <label htmlFor="2-B">Localiza el mapa de la estación espacial.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="2-C"
                                    name="2"
                                />
                                <label htmlFor="2-C">Encuentra el compartimiento de herramientas en la estación.</label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>¿Qué recursos necesito para encontrar el mapa de la estación espacial y cómo los obtendré?</p>
                        <ul className="list-disc pl-5">
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="3-A"
                                    name="3"
                                />
                                <label htmlFor="3-A">Encuentra una forma de contactar a la base espacial.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="3-B"
                                    name="3"
                                />
                                <label htmlFor="3-B">Localiza el mapa de la estación espacial.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="3-C"
                                    name="3"
                                />
                                <label htmlFor="3-C">Encuentra el compartimiento de herramientas en la estación.</label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>¿Por qué es importante encontrar el mapa de la estación espacial?</p>
                        <ul className="list-disc pl-5">
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="4-A"
                                    name="4"
                                />
                                <label htmlFor="4-A">Encuentra una forma de contactar a la base espacial.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="4-B"
                                    name="4"
                                />
                                <label htmlFor="4-B">Localiza el mapa de la estación espacial.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="4-C"
                                    name="4"
                                />
                                <label htmlFor="4-C">Encuentra el compartimiento de herramientas en la estación.</label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p>¿Cuál es el plazo para encontrar el mapa antes de que la estación se vuelva inoperativa?</p>
                        <ul className="list-disc pl-5">
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="5-A"
                                    name="5"
                                />
                                <label htmlFor="5-A">Encuentra una forma de contactar a la base espacial.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="5-B"
                                    name="5"
                                />
                                <label htmlFor="5-B">Localiza el mapa de la estación espacial.</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="5-C"
                                    name="5"
                                />
                                <label htmlFor="5-C">Encuentra el compartimiento de herramientas en la estación.</label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <button className="mt-6 bg-light-blue text-white px-6 py-2 rounded-full">
                        Verificar Respuestas
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default SetGoals;
