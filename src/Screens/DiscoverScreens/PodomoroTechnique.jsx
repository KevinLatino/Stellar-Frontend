import React, { useState, useEffect } from 'react';
import Meditation from '../../../public/People-Ilustrations/Relaxing.png';
import BackToDiscover from './BackToDiscover';
import Modal from './Modal';
import { motion } from 'framer-motion';
import { useMutation } from 'react-query';
import { checkPodomoroMedal, addPomodoroMedal } from '../../Api/UserMedal.Api';
import LaunchConfetti from '../../Components/ConfettiComponent';
import useFetchStatus from '../../hooks/useFetchStatus';

const PodomoroTechnique = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
    });


    const correctAnswers = {
        question1: 'Configura el temporizador a 50 minutos.',
        question2: 'Laura toma un descanso de 15 minutos.',
        question3: 'Mejora la concentración y reduce las distracciones.',
    };

    const handleCompleteTest = () => {
        const allCorrect = Object.keys(correctAnswers).every(
            (key) => answers[key] === correctAnswers[key]
        );

        if (allCorrect) {
            mutation.mutate();
        } else {
            console.log('Algunas respuestas son incorrectas.');
        }
    };

    const handleChange = (question, value) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [question]: value
        }));
    };

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const {status: hasMedal, refetch } = useFetchStatus(checkPodomoroMedal)

    const mutation = useMutation({
        mutationFn: addPomodoroMedal,
        onSuccess: () => {
            LaunchConfetti();
            refetch();
            closeModal();
        },
        onError: (error) => {
            console.error(error);
        }
    });


    return (
        <>
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
                            <li><b>Trabaja en la tarea:</b> Concédele atención completa hasta que el temporizador suene.</li>
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
                        onClick={!hasMedal ? openModal : undefined}
                        className={`bg-light-blue text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg ${hasMedal ? 'cursor-not-allowed opacity-85' : ''}`}
                        disabled={hasMedal}
                    >
                        {hasMedal ? 'Has completado el test' : 'Realizar Prueba'}
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

                    <div className="flex flex-col gap-6">
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
                                        name="question1"
                                        value="Elige una tarea específica para trabajar."
                                        onChange={(e) => handleChange('question1', e.target.value)}
                                    />
                                    <label htmlFor="implement-A">Elige una tarea específica para trabajar.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="implement-B"
                                        name="question1"
                                        value="Configura el temporizador a 50 minutos."
                                        onChange={(e) => handleChange('question1', e.target.value)}
                                    />
                                    <label htmlFor="implement-B">Configura el temporizador a 50 minutos.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="implement-C"
                                        name="question1"
                                        value="Comienza a trabajar sin definir una tarea."
                                        onChange={(e) => handleChange('question1', e.target.value)}
                                    />
                                    <label htmlFor="implement-C">Comienza a trabajar sin definir una tarea.</label>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                    <p>¿Qué sucede cuando el temporizador suena?</p>
                                </span>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="timer-A"
                                        name="question2"
                                        value="Laura toma un descanso de 5 minutos."
                                        onChange={(e) => handleChange('question2', e.target.value)}
                                    />
                                    <label htmlFor="timer-A">Laura toma un descanso de 5 minutos.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="timer-B"
                                        name="question2"
                                        value="Laura continúa trabajando sin descanso."
                                        onChange={(e) => handleChange('question2', e.target.value)}
                                    />
                                    <label htmlFor="timer-B">Laura continúa trabajando sin descanso.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="timer-C"
                                        name="question2"
                                        value="Laura toma un descanso de 15 minutos."
                                        onChange={(e) => handleChange('question2', e.target.value)}
                                    />
                                    <label htmlFor="timer-C">Laura toma un descanso de 15 minutos.</label>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                    <p>¿Qué beneficios obtiene Laura al usar la técnica Pomodoro?</p>
                                </span>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="benefit-A"
                                        name="question3"
                                        value="Mejora la concentración y reduce las distracciones."
                                        onChange={(e) => handleChange('question3', e.target.value)}
                                    />
                                    <label htmlFor="benefit-A">Mejora la concentración y reduce las distracciones.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="benefit-B"
                                        name="question3"
                                        value="Reduce el tiempo total de trabajo."
                                        onChange={(e) => handleChange('question3', e.target.value)}
                                    />
                                    <label htmlFor="benefit-B">Reduce el tiempo total de trabajo.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="benefit-C"
                                        name="question3"
                                        value="Permite trabajar sin definir tareas específicas."
                                        onChange={(e) => handleChange('question3', e.target.value)}
                                    />
                                    <label htmlFor="benefit-C">Permite trabajar sin definir tareas específicas.</label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="bg-light-blue text-white px-4 py-2.5 rounded-full font-semibold text-lg shadow-lg"
                            onClick={handleCompleteTest}
                        >
                            {hasMedal ? 'Medalla Obtenida' : 'Completar Test'}
                        </motion.button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default PodomoroTechnique;
