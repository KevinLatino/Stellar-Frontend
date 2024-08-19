import React, { useState } from 'react';
import PeoplePlanning from '../../../public/People-Ilustrations/People-planning.png';
import BackToDiscover from '@Components/BackToDiscover';
import Modal from '@Components/Modal';
import { motion } from 'framer-motion';
import { checkEnvironmentMedal, addEnvironmentMedal } from '@Api/UserMedal.Api';
import LaunchConfetti from '@Components/ConfettiComponent';
import useFetchStatus from '@Hooks/useFetchStatus';
import { Alert } from '@mui/material';
import { useMutation } from 'react-query';


const PlanificationEnvironment = () => {



    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
    });


    const correctAnswers = {
        question1: 'Encontrar un espacio cómodo y sin distracciones.',
        question2: 'Mantener su área de trabajo ordenada con todos los materiales necesarios a mano.',
        question3: 'Crear un entorno agradable que reduzca las distracciones.',
        question4: 'Mejora la organización y facilita el flujo de trabajo.'
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

    const { status: hasMedal, refetch } = useFetchStatus(checkEnvironmentMedal)

    const mutation = useMutation({
        mutationFn: addEnvironmentMedal,
        onSuccess: () => {
            LaunchConfetti();
            refetch();
            closeModal();
        },
        onError: (error) => {
            console.log(error);
        }
    });


    return (
        <>
            <div className='flex flex-col gap-14 relative animate__animated animate__fadeInDown'>
                <div className="flex p-6 h-[10.5rem] w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                    <div className="w-[42rem] h-[7.5rem]">
                        <div className="flex flex-col gap-1 pl-6 justify-center h-full">
                            <h1 className="text-4xl font-medium text-white">
                                <b>¡Define un ámbiente de planificación!</b>
                            </h1>
                            <p className="text-xl font-medium text-white">
                                Establecer un entorno de plafinicación que nos guste para sentirnos motivados es vital.
                            </p>
                        </div>
                    </div>
                    <div className="w-[16rem] hidden sm:flex relative">
                        <img
                            src={PeoplePlanning}
                            alt="Ilustration"
                            className="absolute left-[200px] bottom-[-23%]"
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
                            <b>Cómo Crear un Ambiente de Planificación y el Caso de Maria</b>
                        </span>
                    </h1>

                    <p className="text-l mb-2">
                        Maria quiere crear un ambiente de planificación efectivo para mejorar su productividad. A continuación, responderá una serie de preguntas para definir cómo puede optimizar su espacio de trabajo.
                    </p>

                    <h3 className="text-2xl font-medium text-stellar-blue mb-4">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>¡Ayuda a María!</b>
                        </span>
                    </h3>
                    <div className=" flex flex-col gap-6">
                        <div className='flex flex-col gap-2'>
                            <h1 className="text-xl font-medium text-stellar-blue">
                                <b>¿Cuál es el primer paso para crear un buen ambiente de planificación?</b>
                            </h1>
                            <ul className="pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="question1"
                                        value="Encontrar un espacio cómodo y sin distracciones."
                                        onChange={(e) => handleChange('question1', e.target.value)}
                                    />
                                    <label>Encontrar un espacio cómodo y sin distracciones.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="question1"
                                        value="Organizar todas sus tareas pendientes primero."
                                        onChange={(e) => handleChange('question1', e.target.value)}
                                    />
                                    <label>Organizar todas sus tareas pendientes primero.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="question1"
                                        value="Buscar herramientas de planificación en línea."
                                        onChange={(e) => handleChange('question1', e.target.value)}
                                    />
                                    <label>Buscar herramientas de planificación en línea.</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className="text-xl font-medium text-stellar-blue">
                                <b>¿Cómo puede Maria organizar su espacio de trabajo?</b>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="question2"
                                        value="Mantener su área de trabajo ordenada con todos los materiales necesarios a mano."
                                        onChange={(e) => handleChange('question2', e.target.value)}
                                    />
                                    <label htmlFor="organize-A">Mantener su área de trabajo ordenada con todos los materiales necesarios a mano.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="question2"
                                        value="Poner todos los materiales en una caja y sacarlos cuando los necesite."
                                        onChange={(e) => handleChange('question2', e.target.value)}
                                    />
                                    <label htmlFor="organize-B">Poner todos los materiales en una caja y sacarlos cuando los necesite.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="question2"
                                        value="Dejar sus materiales dispersos para tenerlos siempre a la vista."
                                        onChange={(e) => handleChange('question2', e.target.value)}
                                    />
                                    <label htmlFor="organize-C">Dejar sus materiales dispersos para tenerlos siempre a la vista.</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className="text-xl font-medium text-stellar-blue">
                                <span className="inline-block border-b-[0.1rem pb-1">
                                    <b>¿Qué debe hacer Maria para mejorar su concentración mientras trabaja?</b>
                                </span>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="question3"
                                        value="Crear un entorno agradable que reduzca las distracciones."
                                        onChange={(e) => handleChange('question3', e.target.value)}
                                    />
                                    <label htmlFor="focus-A">Crear un entorno agradable que reduzca las distracciones.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="question3"
                                        value="Escuchar música alta mientras trabaja."
                                        onChange={(e) => handleChange('question3', e.target.value)}
                                    />
                                    <label htmlFor="focus-B">Escuchar música alta mientras trabaja.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="question3"
                                        value="Trabajar en un espacio público con mucho movimiento."
                                        onChange={(e) => handleChange('question3', e.target.value)}
                                    />
                                    <label htmlFor="focus-C">Trabajar en un espacio público con mucho movimiento.</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className="text-xl font-medium text-stellar-blue">
                                <b>¿Cuál es una ventaja de tener un ambiente de planificación bien organizado?</b>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="question4"
                                        value="Mejora la organización y facilita el flujo de trabajo."
                                        onChange={(e) => handleChange('question4', e.target.value)}
                                    />
                                    <label htmlFor="advantage-A">Mejora la organización y facilita el flujo de trabajo.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="question4"
                                        value="Permite trabajar más tiempo sin descansar."
                                        onChange={(e) => handleChange('question4', e.target.value)}
                                    />
                                    <label htmlFor="advantage-B">Permite trabajar más tiempo sin descansar.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="question4"
                                        value="Facilita el multitasking y trabajar en varias tareas a la vez."
                                        onChange={(e) => handleChange('question4', e.target.value)}
                                    />
                                    <label htmlFor="advantage-C">Facilita el multitasking y trabajar en varias tareas a la vez.</label>
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
                            Completar test
                        </motion.button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default PlanificationEnvironment
