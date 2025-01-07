import React, { useState, useEffect } from 'react';
import GirlWritingNotes from '../../../public/People-Ilustrations/Girl-Writing-Notes.png';
import BackToDiscover from './BackToDiscover';
import Modal from './Modal';
import { motion } from 'framer-motion';
import { useMutation } from 'react-query';
import { checkDateMedal, addDateMedal } from '@Api/UserMedal.Api';
import LaunchConfetti from '@Components/ConfettiComponent';
import useFetchStatus from '../../hooks/useFetchStatus';
import { Alert } from '@mui/material';


const ImportantDates = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: ''
    });

    const correctAnswers = {
        question1: 'Identificar las tareas y proyectos clave.',
        question2: 'Asignar una fecha de entrega realista para cada tarea.',
        question3: 'Revisar el calendario y ajustar la fecha de entrega si es necesario.',
        question4: 'Programar revisiones semanales para actualizar fechas y prioridades.',
        question5: 'Evaluar su progreso al final de cada día y ajustar las fechas si es necesario.'
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


    const handleChange = (question, value) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [question]: value
        }));
    };

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const { status: hasMedal, refetch } = useFetchStatus(checkDateMedal);

    const mutation = useMutation({
        mutationFn: addDateMedal,
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
                <header className="flex p-6 h-[10.5rem] w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
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
                </header>

                <main className="flex justify-center h-full">
                    <section className="w-1/2 flex flex-col gap-4 ml-10">
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
                    </section>

                    <div className="w-0.5 bg-gray-300 mx-8 font-raleway"></div>

                    <section className="w-1/2 flex flex-col gap-4 ml-5">
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
                    </section>
                </main>

                <div className="flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className={`bg-light-blue text-white px-4 py-2.5 rounded-full font-semibold text-lg shadow-lg ${hasMedal ? 'cursor-not-allowed opacity-85' : ''}`}
                        onClick={!hasMedal ? openModal : undefined}
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
                            <b>Cómo Definir Fechas Importantes y el Caso de Alex</b>
                        </span>
                    </h1>

                    <p className="text-l mb-6">
                        Alex, un profesional que busca mejorar su organización y gestión del tiempo, ha decidido establecer fechas importantes para sus tareas y proyectos. A continuación, responde una serie de preguntas para definir cómo puede mejorar su planificación con un calendario.
                    </p>

                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>Preguntas para Ayudar a Alex</b>
                        </span>
                    </h1>

                    <div className="mt-4 flex flex-col gap-6">
                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>¿Cuál es el primer paso para establecer fechas importantes en el calendario?</p>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="step1-A"
                                        name="question1"
                                        value="Identificar las tareas y proyectos clave."
                                        onChange={(e) => handleChange('question1', e.target.value)}
                                    />
                                    <label htmlFor="step1-A">Identificar las tareas y proyectos clave.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="step1-B"
                                        name="question1"
                                        value="Asignar fechas de entrega a cada tarea."
                                        onChange={(e) => handleChange('question1', e.target.value)}
                                    />
                                    <label htmlFor="step1-B">Asignar fechas de entrega a cada tarea.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="step1-C"
                                        name="question1"
                                        value="Revisar y ajustar el calendario regularmente."
                                        onChange={(e) => handleChange('question1', e.target.value)}
                                    />
                                    <label htmlFor="step1-C">Revisar y ajustar el calendario regularmente.</label>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>¿Cómo debe Alex asignar fechas a sus tareas?</p>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="assign-A"
                                        name="question2"
                                        value="Asignar una fecha de entrega realista para cada tarea."
                                        onChange={(e) => handleChange('question2', e.target.value)}
                                    />
                                    <label htmlFor="assign-A">Asignar una fecha de entrega realista para cada tarea.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="assign-B"
                                        name="question2"
                                        value="Establecer fechas de entrega arbitrarias sin considerar la carga de trabajo."
                                        onChange={(e) => handleChange('question2', e.target.value)}
                                    />
                                    <label htmlFor="assign-B">Establecer fechas de entrega arbitrarias sin considerar la carga de trabajo.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="assign-C"
                                        name="question2"
                                        value="Asignar fechas de entrega solo a las tareas más importantes."
                                        onChange={(e) => handleChange('question2', e.target.value)}
                                    />
                                    <label htmlFor="assign-C">Asignar fechas de entrega solo a las tareas más importantes.</label>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>¿Qué debe hacer Alex si no puede cumplir una fecha de entrega?</p>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="adjust-A"
                                        name="question3"
                                        value="Revisar el calendario y ajustar la fecha de entrega si es necesario."
                                        onChange={(e) => handleChange('question3', e.target.value)}
                                    />
                                    <label htmlFor="adjust-A">Revisar el calendario y ajustar la fecha de entrega si es necesario.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="adjust-B"
                                        name="question3"
                                        value="Eliminar la tarea del calendario."
                                        onChange={(e) => handleChange('question3', e.target.value)}
                                    />
                                    <label htmlFor="adjust-B">Eliminar la tarea del calendario.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="adjust-C"
                                        name="question3"
                                        value="Reasignar la tarea a otra persona."
                                        onChange={(e) => handleChange('question3', e.target.value)}
                                    />
                                    <label htmlFor="adjust-C">Reasignar la tarea a otra persona.</label>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>¿Cómo puede Alex revisar y ajustar su calendario regularmente?</p>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="review-A"
                                        name="question4"
                                        value="Programar revisiones semanales para actualizar fechas y prioridades."
                                        onChange={(e) => handleChange('question4', e.target.value)}
                                    />
                                    <label htmlFor="review-A">Programar revisiones semanales para actualizar fechas y prioridades.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="review-B"
                                        name="question4"
                                        value="Actualizar el calendario solo cuando surjan problemas."
                                        onChange={(e) => handleChange('question4', e.target.value)}
                                    />
                                    <label htmlFor="review-B">Actualizar el calendario solo cuando surjan problemas.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="review-C"
                                        name="question4"
                                        value="Revisar el calendario al final de cada mes."
                                        onChange={(e) => handleChange('question4', e.target.value)}
                                    />
                                    <label htmlFor="review-C">Revisar el calendario al final de cada mes.</label>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>¿Cuál es una buena práctica para Alex al revisar su progreso con respecto a las fechas establecidas?</p>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="review-A"
                                        name="question5"
                                        value="Evaluar su progreso al final de cada día y ajustar las fechas si es necesario."
                                        onChange={(e) => handleChange('question5', e.target.value)}
                                    />
                                    <label htmlFor="review-A">Evaluar su progreso al final de cada día y ajustar las fechas si es necesario.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="review-B"
                                        name="question5"
                                        value="Esperar hasta el final del proyecto para revisar su progreso."
                                        onChange={(e) => handleChange('question5', e.target.value)}
                                    />
                                    <label htmlFor="review-B">Esperar hasta el final del proyecto para revisar su progreso.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="review-C"
                                        name="question5"
                                        value="Revisar su progreso solo si siente que está atrasado en sus tareas."
                                        onChange={(e) => handleChange('question5', e.target.value)}
                                    />
                                    <label htmlFor="review-C">Revisar su progreso solo si siente que está atrasado en sus tareas.</label>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {error && (
                        <div className='mt-2'>
                            <Alert severity="error">{error}</Alert>
                        </div>
                    )}

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

export default ImportantDates;
