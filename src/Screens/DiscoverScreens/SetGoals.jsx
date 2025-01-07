import { useState } from 'react';
import PeopleLearning from '../../../public/People-Ilustrations/Time-Management.png';
import BackToDiscover from './BackToDiscover';
import Modal from './Modal';
import { motion } from 'framer-motion';
import { useMutation } from 'react-query';
import { addGoalMedal, checkGoalMedal } from '@Api/UserMedal.Api';
import LaunchConfetti from '@Components/ConfettiComponent';
import useFetchStatus from '../../hooks/useFetchStatus';
import { Alert } from '@mui/material';

const SetGoals = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [answers, setAnswers] = useState({
        1: '',
        2: '',
        3: '',
        4: ''
    });

    const correctAnswers = {
        1: 'Que se inscriba en un programa de desarrollo de liderazgo y estudie su futuro puesto.',
        2: 'Estudiar el mercado y aprender las nuevas tendencias de su profesión.',
        3: 'Mantener una rutina de ejercicio y meditación para lograr un equilibrio saludable.',
        4: '12 meses.'
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

    const handleChange = (questionId, value) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: value
        }));
    };

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const { status: hasMedal, refetch } = useFetchStatus(checkGoalMedal);

    const mutation = useMutation({
        mutationFn: addGoalMedal,
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
            <div className='flex flex-col gap-14 relative animate__animated animate__fadeInDown'>
                <header className="flex p-6 h-[10.5rem] w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
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
                </header>

                <main className="flex justify-center h-full">
                    <section className="w-1/2 flex flex-col gap-4 ml-14">
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
                    </section>
                    <div className="w-0.5 bg-gray-300 mx-8 font-raleway"></div>
                    <section className="w-1/2 flex flex-col gap-2 ml-5">
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
                    </section>
                </main>

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
                            <b>Historia de Isabel</b>
                        </span>
                    </h1>
                    <p className="text-l mb-6">
                        Isabel es una profesional comprometida que está buscando avanzar en su carrera y mejorar su bienestar personal.
                        Para lograrlo, ha decidido establecer metas claras y alcanzables. Ayuda a Isabel a tomar las decisiones correctas
                        respondiendo las siguientes preguntas.
                    </p>

                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>Ayuda a Isabel con sus metas</b>
                        </span>
                    </h1>

                    <div className="flex flex-col gap-6">
                        <div className='flex flex-col gap-2'>
                            <h1 className="mt-3 text-lg font-bold text-stellar-blue">
                                <p>Isabel quiere avanzar en su carrera. ¿Qué consejo le darías para lograr un ascenso en su departamento?</p>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="1-A"
                                        name="1"
                                        value="Que se inscriba en un programa de desarrollo de liderazgo y estudie su futuro puesto."
                                        onChange={(e) => handleChange('1', e.target.value)}
                                    />
                                    <label htmlFor="1-A">Que se inscriba en un programa de desarrollo de liderazgo y estudie su futuro puesto.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="1-B"
                                        name="1"
                                        value="Que se concentre en mantener su posición actual."
                                        onChange={(e) => handleChange('1', e.target.value)}
                                    />
                                    <label htmlFor="1-B">Que se concentre en mantener su posición actual.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="1-C"
                                        name="1"
                                        value="Que busque cambiar de empresa."
                                        onChange={(e) => handleChange('1', e.target.value)}
                                    />
                                    <label htmlFor="1-C">Que busque cambiar de empresa para asumir nuevos retos.</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>Isabel se siente estancada en su profesión ¿Cuál sería la mejor acción para que tome en los próximos 6 meses?</p>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="2-A"
                                        name="2"
                                        value="Estudiar el mercado y aprender las nuevas tendencias de su profesión."
                                        onChange={(e) => handleChange('2', e.target.value)}
                                    />
                                    <label htmlFor="2-A">Estudiar el mercado y aprender las nuevas tendencias de su profesión.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="2-B"
                                        name="2"
                                        value="Tomarse unas vacaciones prolongadas para descansar."
                                        onChange={(e) => handleChange('2', e.target.value)}
                                    />
                                    <label htmlFor="2-B">Tomarse unas vacaciones prolongadas para descansar.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="2-C"
                                        name="2"
                                        value="Delegar más tareas a su equipo sin desarrollar nuevas habilidades."
                                        onChange={(e) => handleChange('2', e.target.value)}
                                    />
                                    <label htmlFor="2-C">Delegar más tareas a su equipo sin desarrollar nuevas habilidades.</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>Isabel está preocupada por su salud física y mental. ¿Qué le sugerirías hacer para mejorar en estos aspectos?</p>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="3-A"
                                        name="3"
                                        value="Mantener una rutina de ejercicio y meditación para lograr un equilibrio saludable."
                                        onChange={(e) => handleChange('3', e.target.value)}
                                    />
                                    <label htmlFor="3-A">Mantener una rutina de ejercicio y meditación para lograr un equilibrio saludable.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="3-B"
                                        name="3"
                                        value="Dedicar más tiempo al trabajo y dejar su salud en segundo plano."
                                        onChange={(e) => handleChange('3', e.target.value)}
                                    />
                                    <label htmlFor="3-B">Dedicar más tiempo al trabajo y dejar su salud en segundo plano.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="3-C"
                                        name="3"
                                        value="Cambiar su dieta sin preocuparse por hacer ejercicio."
                                        onChange={(e) => handleChange('3', e.target.value)}
                                    />
                                    <label htmlFor="3-C">Cambiar su dieta sin preocuparse por hacer ejercicio.</label>
                                </li>
                            </ul>
                        </div>

                        <div  className='flex flex-col gap-2'>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>¿Cuál crees que es un plazo realista para lograr estos cambios?</p>
                            </h1>
                            <ul className="list-disc pl-5">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="4-A"
                                        name="4"
                                        value="12 meses."
                                        onChange={(e) => handleChange('4', e.target.value)}
                                    />
                                    <label htmlFor="4-A">12 meses.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="4-B"
                                        name="4"
                                        value="6 meses."
                                        onChange={(e) => handleChange('4', e.target.value)}
                                    />
                                    <label htmlFor="4-B">6 meses.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="4-C"
                                        name="4"
                                        value="3 meses."
                                        onChange={(e) => handleChange('4', e.target.value)}
                                    />
                                    <label htmlFor="4-C">3 meses.</label>
                                </li>
                            </ul>
                        </div>

                        {error && <Alert severity="error">{error}</Alert>}

                        <div className="flex justify-center mt-6">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                onClick={handleCompleteTest}
                                className="bg-light-blue text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg"
                            >
                                Completar Prueba
                            </motion.button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default SetGoals;
