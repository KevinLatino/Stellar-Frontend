import React, { useState } from 'react';
import Meditation from '../../../public/People-Ilustrations/People-Meditation.png';
import Modal from './Modal';
import BackToDiscover from './BackToDiscover';
import { motion } from 'framer-motion';
import { useMutation } from 'react-query';
import { checkMindfulnessMedal, addMindfulnessMedal } from '../../Api/UserMedal.Api';
import confetti from 'canvas-confetti';
import useFetchStatus from '../../hooks/useFetchStatus';
import { Alert } from '@mui/material';

const Mindfulness = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [answers, setAnswers] = useState({
        mindfulness: '',
        breaks: '',
        journaling: '',
        listening: ''
    });

    const correctAnswers = {
        mindfulness: 'Tomarse unos minutos para respirar profundamente.',
        breaks: 'Programar breves descansos para respirar o caminar.',
        journaling: 'Procesar y liberar el estrés acumulado.',
        listening: 'Enfocarse completamente en la otra persona y sus palabras.'
    };

    const handleChange = (question, value) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [question]: value
        }));
    };

    const [error, setError] = useState('');

    const handleCompleteTest = () => {
        const allCorrect = Object.keys(correctAnswers).every(
            (key) => answers[key] === correctAnswers[key]
        );

        if (allCorrect) {
            mutation.mutate();
        } else {
            setError('Por favor, revisa tus respuestas.');
        }
    };


    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const { status: hasMedal, refetch } = useFetchStatus(checkMindfulnessMedal);

    const mutation = useMutation({
        mutationFn: addMindfulnessMedal,
        onSuccess: () => {
            confetti();
            refetch();
            setModalIsOpen(false);
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
                                <b>Prácticas de Mindfulness</b>
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
                onRequestClose={() => setModalIsOpen(false)}
            >
                <div className='flex flex-col gap-2'>
                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>Prácticas de Mindfulness</b>
                        </span>
                    </h1>

                    <p className="text-l mb-2">
                        Responde a las siguientes preguntas para evaluar tu comprensión de las prácticas de mindfulness y cómo aplicarlas en tu vida diaria.
                    </p>

                    <h3 className="text-xl font-medium text-stellar-blue mb-4">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>¡Demuestra Tu Conocimiento!</b>
                        </span>
                    </h3>
                    <div className="flex flex-col gap-6">
                        <div className='flex flex-col gap-2'>
                            <h1 className="text-xl font-medium text-stellar-blue">
                                <b>¿Cuál es la primera práctica recomendada para iniciar el día con atención plena?</b>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="mindfulness-A"
                                        name="mindfulness"
                                        value="Hacer una reflexión diaria sobre los logros y planificar el día."
                                        onChange={(e) => handleChange('mindfulness', e.target.value)}
                                    />
                                    <label htmlFor="mindfulness-A">Hacer una reflexión diaria sobre los logros y planificar el día.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="mindfulness-B"
                                        name="mindfulness"
                                        value="Tomarse unos minutos para respirar profundamente."
                                        onChange={(e) => handleChange('mindfulness', e.target.value)}
                                    />
                                    <label htmlFor="mindfulness-B">Tomarse unos minutos para respirar profundamente.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="mindfulness-C"
                                        name="mindfulness"
                                        value="Escuchar música relajante mientras trabajas."
                                        onChange={(e) => handleChange('mindfulness', e.target.value)}
                                    />
                                    <label htmlFor="mindfulness-C">Escuchar música relajante mientras trabajas.</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className="text-xl font-medium text-stellar-blue">
                                <b>¿Cómo puedes incorporar pausas conscientes en tu rutina diaria?</b>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="breaks-A"
                                        name="breaks"
                                        value="Programar breves descansos para respirar o caminar."
                                        onChange={(e) => handleChange('breaks', e.target.value)}
                                    />
                                    <label htmlFor="breaks-A">Programar breves descansos para respirar o caminar.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="breaks-B"
                                        name="breaks"
                                        value="Trabajar sin interrupciones durante todo el día."
                                        onChange={(e) => handleChange('breaks', e.target.value)}
                                    />
                                    <label htmlFor="breaks-B">Trabajar sin interrupciones durante todo el día.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="breaks-C"
                                        name="breaks"
                                        value="Tomar descansos solo para almorzar."
                                        onChange={(e) => handleChange('breaks', e.target.value)}
                                    />
                                    <label htmlFor="breaks-C">Tomar descansos solo para almorzar.</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className="text-xl font-medium text-stellar-blue">
                                <b>¿Cuál es el propósito de llevar un diario de mindfulness?</b>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="journaling-A"
                                        name="journaling"
                                        value="Procesar y liberar el estrés acumulado."
                                        onChange={(e) => handleChange('journaling', e.target.value)}
                                    />
                                    <label htmlFor="journaling-A">Procesar y liberar el estrés acumulado.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="journaling-B"
                                        name="journaling"
                                        value="Planificar las tareas del día."
                                        onChange={(e) => handleChange('journaling', e.target.value)}
                                    />
                                    <label htmlFor="journaling-B">Planificar las tareas del día.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="journaling-C"
                                        name="journaling"
                                        value="Listar los objetivos semanales."
                                        onChange={(e) => handleChange('journaling', e.target.value)}
                                    />
                                    <label htmlFor="journaling-C">Listar los objetivos semanales.</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className="text-xl font-medium text-stellar-blue">
                                <b>¿Cómo puedes practicar una escucha atenta y empática?</b>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="listening-A"
                                        name="listening"
                                        value="Enfocarse completamente en la otra persona y sus palabras."
                                        onChange={(e) => handleChange('listening', e.target.value)}
                                    />
                                    <label htmlFor="listening-A">Enfocarse completamente en la otra persona y sus palabras.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="listening-B"
                                        name="listening"
                                        value="Interrumpir para expresar tu propia opinión."
                                        onChange={(e) => handleChange('listening', e.target.value)}
                                    />
                                    <label htmlFor="listening-B">Interrumpir para expresar tu propia opinión.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="listening-C"
                                        name="listening"
                                        value="Pensar en lo que vas a decir mientras escuchas."
                                        onChange={(e) => handleChange('listening', e.target.value)}
                                    />
                                    <label htmlFor="listening-C">Pensar en lo que vas a decir mientras escuchas.</label>
                                </li>
                            </ul>
                        </div>

                        {error && (
                            <div className='mt-2'>
                                <Alert severity="error">{error}</Alert>
                            </div>
                        )}

                        <div className="flex justify-center mt-6">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="bg-light-blue text-white px-4 py-2.5 rounded-full font-semibold text-lg shadow-lg"
                                onClick={handleCompleteTest}
                            >
                                Enviar Respuestas
                            </motion.button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Mindfulness;
