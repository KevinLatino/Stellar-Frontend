import React, { useState } from 'react';
import GirlStudying from '../../../public/People-Ilustrations/Girl-Studying-Science.png';
import BackToDiscover from './BackToDiscover';
import Modal from './Modal';
import { motion } from 'framer-motion';
import { useMutation } from 'react-query';
import { checkEisenhowerMedal, addEisenhowerMedal } from '@Api/UserMedal.Api';
import LaunchConfetti from '@Components/ConfettiComponent';
import useFetchStatus from '@Hooks/useFetchStatus';
import { Alert } from '@mui/material';

const EisenhowerMatrix = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [answers, setAnswers] = useState({
        quadrant1: '',
        quadrant2: '',
        quadrant3: '',
        quadrant4: ''
    });

    const correctAnswers = {
        quadrant1: 'Presentar un trabajo de investigación que se entrega mañana.',
        quadrant2: 'Estudiar para un examen que será dentro de una semana.',
        quadrant3: 'Hacer compras de supermercado ya que no tiene comida en casa.',
        quadrant4: 'Revisar redes sociales sin un propósito claro.'
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

    const { status: hasMedal, refetch } = useFetchStatus(checkEisenhowerMedal);

    const mutation = useMutation({
        mutationFn: addEisenhowerMedal,
        onSuccess: () => {
            LaunchConfetti();
            refetch();
            closeModal();
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const handleChange = (quadrant, value) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [quadrant]: value
        }));
    };

    return (
        <>
            <div className='flex flex-col gap-14 relative animate__animated animate__fadeInDown'>
                <div className="flex p-6 h-[10.5rem] w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                    <div className="w-[42rem] h-[7.5rem]">
                        <div className="flex flex-col gap-1 pl-6 justify-center h-full">
                            <h1 className="text-4xl font-medium text-white">
                                <b>La matriz de Eisenhower</b>
                            </h1>
                            <p className="text-xl font-medium text-white">
                                Nos habla de la priorización de tareas por urgencia e importancia y sus beneficios
                            </p>
                        </div>
                    </div>
                    <div className="w-[19.5rem] hidden sm:flex relative">
                        <img
                            src={GirlStudying}
                            alt="Ilustration"
                            className="absolute left-[170px] bottom-[-20%]"
                        />
                    </div>
                </div>

                <div className="flex justify-center h-full">
                    <div className="w-1/2 flex flex-col gap-4 ml-10">
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>¿Qué es la matriz de Eisenhower?</b>
                            </span>
                        </h1>
                        <p className='font-raleway text-[#000000a3] text-[17.5px] font-medium'>
                            La matriz de Eisenhower es una herramienta para priorizar tareas según su urgencia e importancia.
                            Divide las tareas en cuatro cuadrantes.
                        </p>
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>La versión de Stellar de la matriz de Eisenhower</b>
                            </span>
                        </h1>
                        <p className='font-raleway text-[#000000a3] text-[17.5px] font-medium'>
                            <ul className='list-disc ml-5 flex flex-col gap-6'>
                                <li><b>Tareas con alta urgencia =</b> Urgente e Importante.</li>
                                <li><b>Tareas con moderada urgencia =</b> Importante pero no urgente.</li>
                                <li><b>Tareas con baja urgencia:</b> Urgente pero No Importante.</li>
                            </ul>
                        </p>
                    </div>

                    <div className="w-0.5 bg-gray-300 mx-8 font-raleway"></div>

                    <div className="w-1/2 flex flex-col gap-4 ml-5">
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>Cuadrantes de la matriz</b>
                            </span>
                        </h1>
                        <p className='font-raleway text-[#000000a3] text-[17.5px] font-medium'>
                            <ul className='list-disc ml-5 flex flex-col gap-6'>
                                <li><b>Urgente e Importante:</b> Tareas que necesitan atención inmediata y son cruciales para alcanzar objetivos importantes.</li>
                                <li><b>Importante pero No Urgente:</b> Tareas importantes para objetivos a largo plazo que no requieren atención inmediata.</li>
                                <li><b>Urgente pero No Importante:</b> Tareas que requieren atención inmediata pero no son cruciales para objetivos importantes.</li>
                                <li><b>No Urgente y No Importante:</b> Tareas que no tienen urgencia ni importancia y pueden ser eliminadas o minimizadas.</li>
                            </ul>
                        </p>
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
                            <b>La Matriz de Eisenhower y el Caso de Sofia</b>
                        </span>
                    </h1>
                    <p className="text-l mb-6">
                        Sofia es una estudiante universitaria que actualmente está luchando por mejorar en sus estudios.
                        Para gestionar su tiempo de manera más efectiva, decide utilizar la matriz de Eisenhower
                         para clasificar sus tareas en función de su urgencia e importancia.
                    </p>

                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>Ayuda a clasificar la urgencia de las tareas</b>
                        </span>
                    </h1>

                    <div className="flex flex-col gap-6">
                        <div className='flex flex-col gap-2'>
                            <h1 className="mt-3 text-lg font-bold text-stellar-blue">
                                <p>1. Urgente e Importante:</p>
                            </h1>
                            <p>Estas son las tareas que Sofia debe atender de inmediato, ya que son cruciales para sus objetivos.</p>
                            <ul className="list-disc pl-5 flex flex-col gap-4">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant1-A"
                                        name="quadrant1"
                                        value="Llevar a su perro al veterinario para su chequeo anual."
                                        onChange={(e) => handleChange('quadrant1', e.target.value)}
                                    />
                                    <label htmlFor="quadrant1-A">Llevar a su perro al veterinario para su chequeo anual.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant1-B"
                                        name="quadrant1"
                                        value="Ir al cine con sus amigos para tomarse un descanso."
                                        onChange={(e) => handleChange('quadrant1', e.target.value)}
                                    />
                                    <label htmlFor="quadrant1-B">Ir al cine con sus amigos para tomarse un descanso.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant1-C"
                                        name="quadrant1"
                                        value="Presentar un trabajo de investigación que se entrega mañana."
                                        onChange={(e) => handleChange('quadrant1', e.target.value)}
                                    />
                                    <label htmlFor="quadrant1-C">Presentar un trabajo de investigación que se entrega mañana.</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className="mt-3 text-lg font-bold text-stellar-blue">
                                <p>2. Importante pero No Urgente:</p>
                            </h1>
                            <p>Estas tareas son importantes para el progreso académico de Sofia, pero no necesitan atención inmediata.</p>
                            <ul className="list-disc pl-5 flex flex-col gap-4">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant2-A"
                                        name="quadrant2"
                                        value="Establecer metas de ahorro para un viaje futuro."
                                        onChange={(e) => handleChange('quadrant2', e.target.value)}
                                    />
                                    <label htmlFor="quadrant2-A">Establecer metas de ahorro para un viaje futuro.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant2-B"
                                        name="quadrant2"
                                        value="Realizar una investigación para un proyecto que tiene fecha de entrega el próximo mes."
                                        onChange={(e) => handleChange('quadrant2', e.target.value)}
                                    />
                                    <label htmlFor="quadrant2-B">Realizar una investigación para un proyecto que tiene fecha de entrega el próximo mes.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant2-C"
                                        name="quadrant2"
                                        value="Estudiar para un examen que será dentro de una semana."
                                        onChange={(e) => handleChange('quadrant2', e.target.value)}
                                    />
                                    <label htmlFor="quadrant2-C">Estudiar para un examen que será dentro de una semana.</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className="mt-3 text-lg font-bold text-stellar-blue">
                                <p>3. Urgente pero No Importante:</p>
                            </h1>
                            <p>Estas tareas requieren atención inmediata, pero no son cruciales para los objetivos académicos de Sofia.</p>
                            <ul className="list-disc pl-5 flex flex-col gap-4">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant3-A"
                                        name="quadrant3"
                                        value="Responder a mensajes de texto no urgentes."
                                        onChange={(e) => handleChange('quadrant3', e.target.value)}
                                    />
                                    <label htmlFor="quadrant3-A">Responder a mensajes de texto no urgentes.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant3-B"
                                        name="quadrant3"
                                        value="Terminar el proyecto para el cual se entrega en 2 meses."
                                        onChange={(e) => handleChange('quadrant3', e.target.value)}
                                    />
                                    <label htmlFor="quadrant3-B">Terminar el proyecto para el cual se entrega en 2 meses.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant3-C"
                                        name="quadrant3"
                                        value="Hacer compras de supermercado ya que no tiene comida en casa."
                                        onChange={(e) => handleChange('quadrant3', e.target.value)}
                                    />
                                    <label htmlFor="quadrant3-C">Hacer compras de supermercado ya que no tiene comida en casa.</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className="mt-3 text-lg font-bold text-stellar-blue">
                                <p>4. No Urgente y No Importante:</p>
                            </h1>
                            <p>Estas tareas no tienen urgencia ni importancia y pueden ser eliminadas o minimizadas.</p>
                            <ul className="list-disc pl-5 flex flex-col gap-4">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant4-A"
                                        name="quadrant4"
                                        value="Revisar redes sociales sin un propósito claro."
                                        onChange={(e) => handleChange('quadrant4', e.target.value)}
                                    />
                                    <label htmlFor="quadrant4-A">Revisar redes sociales sin un propósito claro.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant4-B"
                                        name="quadrant4"
                                        value="Investigar sobre lo que tiene que estudiar para el próximo semestre."
                                        onChange={(e) => handleChange('quadrant4', e.target.value)}
                                    />
                                    <label htmlFor="quadrant4-B">Investigar sobre lo que tiene que estudiar para el próximo semestre.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant4-C"
                                        name="quadrant4"
                                        value="Estudiar el mercado laboral ya que es su último año en la universidad."
                                        onChange={(e) => handleChange('quadrant4', e.target.value)}
                                    />
                                    <label htmlFor="quadrant4-C">Estudiar el mercado laboral ya que es su último año en la universidad.</label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {error && (
                        <div className='mt-3'>
                            <Alert severity="error" onClose={() => setError('')}>{error}</Alert>
                        </div>
                    )}

                    <div className="flex justify-center mt-2">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            onClick={handleCompleteTest}
                            className={`bg-light-blue text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg`}
                        >
                            Enviar respuestas
                        </motion.button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default EisenhowerMatrix;
