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
                    <div className="w-1/2 flex flex-col gap-4 ml-14">
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
                <div className='flex flex-col gap-2'>
                    <h1 className="text-2xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>Historia de Carlos</b>
                        </span>
                    </h1>
                    <p className="text-l mb-6">
                        Carlos es un joven profesional que está buscando avanzar en su carrera y mejorar su vida personal. Para lograrlo,
                        ha decidido establecer metas claras y alcanzables. A continuación, responderá una serie de preguntas para definir
                        sus objetivos de manera más precisa.
                    </p>

                    <h1 className="text-2xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>Ayuda a Carlos</b>
                        </span>
                    </h1>

                    <div className="flex flex-col gap-6">
                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>¿Qué debe lograr Carlos exactamente?</p>
                            </h1>

                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="1-A"
                                        name="1"
                                    />
                                    <label htmlFor="1-A">Obtener un ascenso en su trabajo actual.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="1-B"
                                        name="1"
                                    />
                                    <label htmlFor="1-B">Comenzar un nuevo negocio.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="1-C"
                                        name="1"
                                    />
                                    <label htmlFor="1-C">Mejorar su salud física.</label>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>¿Cómo puede Carlos saber que ha alcanzado su meta?</p>
                            </h1>

                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="2-A"
                                        name="2"
                                    />
                                    <label htmlFor="2-A">Recibir una promoción con un aumento de salario.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="2-B"
                                        name="2"
                                    />
                                    <label htmlFor="2-B">Tener un negocio operando con éxito.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="2-C"
                                        name="2"
                                    />
                                    <label htmlFor="2-C">Perder 10 kg y mantener un régimen de ejercicios regular.</label>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>¿Qué recursos necesita Carlos para alcanzar su meta y cómo los obtendrá?</p>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="3-A"
                                        name="3"
                                    />
                                    <label htmlFor="3-A">Mentoría y formación adicional en su campo laboral.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="3-B"
                                        name="3"
                                    />
                                    <label htmlFor="3-B">Capital inicial y asesoramiento empresarial.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="3-C"
                                        name="3"
                                    />
                                    <label htmlFor="3-C">Un plan de dieta y un entrenador personal.</label>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>¿Por qué es importante para Carlos alcanzar esta meta?</p>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="4-A"
                                        name="4"
                                    />
                                    <label htmlFor="4-A">Para asegurar un futuro financiero estable.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="4-B"
                                        name="4"
                                    />
                                    <label htmlFor="4-B">Para cumplir un sueño personal de emprendimiento.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="4-C"
                                        name="4"
                                    />
                                    <label htmlFor="4-C">Para mejorar su calidad de vida y bienestar.</label>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <span className="inline-block border-b-[0.1rem] pb-1">
                                    <p>¿Cuál es el plazo para que Carlos logre esta meta?</p>
                                </span>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="5-A"
                                        name="5"
                                    />
                                    <label htmlFor="5-A">Dentro de los próximos seis meses.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="5-B"
                                        name="5"
                                    />
                                    <label htmlFor="5-B">Dentro del próximo año.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="5-C"
                                        name="5"
                                    />
                                    <label htmlFor="5-C">Dentro de los próximos dos años.</label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                        <button className="mt-6 bg-light-blue text-white px-6 py-2 rounded-full">
                            Verificar Respuestas
                        </button>
                    </div>
                </div>
            </Modal>

        </>
    );
};

export default SetGoals;
