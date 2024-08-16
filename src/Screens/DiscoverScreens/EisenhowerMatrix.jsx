import React, { useState, useEffect } from 'react';
import GirlStudying from '../../../public/People-Ilustrations/Girl-Studying-Science.png';
import BackToDiscover from './BackToDiscover';
import Modal from './Modal';
import { motion } from 'framer-motion';
import { useMutation } from 'react-query';
import { checkEisenhowerMedal, addEisenhowerMedal } from '../../Api/UserMedal.Api';
import LaunchConfetti from '../../Components/ConfettiComponent';
import useFetchStatus from '../../hooks/useFetchStatus';

const EisenhowerMatrix = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [answers, setAnswers] = useState({
        quadrant1: '',
        quadrant2: '',
        quadrant3: '',
        quadrant4: ''
    });

    const correctAnswers = {
        quadrant1: 'Pagar las facturas que vencen hoy para evitar recargos.',
        quadrant2: 'Planificar el presupuesto mensual para ahorrar dinero.',
        quadrant3: 'Responder a correos electrónicos que no son importantes.',
        quadrant4: 'Ver televisión durante horas.'
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
                                <b>La versión de Stellar de La matriz de Eisenhower</b>
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
                            <b>La Matriz de Eisenhower y el Caso de Jane</b>
                        </span>
                    </h1>
                    <p className="text-l mb-6">
                        Jane, una mujer dedicada y trabajadora, se encuentra en su casa con una lista larga de tareas por hacer. Para lograr ser más eficiente y manejar mejor su tiempo, Jane debe utilizar la matriz de Eisenhower para priorizar sus actividades según su urgencia e importancia.
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
                            <p>Estas son las tareas que Jane debe atender de inmediato, ya que son cruciales para sus objetivos.</p>
                            <ul className="list-disc pl-5 flex flex-col gap-4">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant1-A"
                                        name="quadrant1"
                                        value="Pagar las facturas que vencen hoy para evitar recargos."
                                        onChange={(e) => handleChange('quadrant1', e.target.value)}
                                    />
                                    <label htmlFor="quadrant1-A">Pagar las facturas que vencen hoy para evitar recargos                                    </label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant1-B"
                                        name="quadrant1"
                                        value="Terminar un reporte urgente para el trabajo."
                                        onChange={(e) => handleChange('quadrant1', e.target.value)}
                                    />
                                    <label htmlFor="quadrant1-B">Terminar un reporte urgente para el trabajo.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant1-C"
                                        name="quadrant1"
                                        value="Llevar a su hijo al médico por una cita importante."
                                        onChange={(e) => handleChange('quadrant1', e.target.value)}
                                    />
                                    <label htmlFor="quadrant1-C">Llevar a su hijo al médico por una cita importante.</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>2. Importante pero No Urgente:</p>
                            </h1>
                            <p>Estas tareas son importantes para los objetivos a largo plazo de Jane, pero no necesitan atención inmediata.</p>
                            <ul className="list-disc pl-5 flex flex-col gap-4">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant2-A"
                                        name="quadrant2"
                                        value="Planificar el presupuesto mensual para ahorrar dinero."
                                        onChange={(e) => handleChange('quadrant2', e.target.value)}
                                    />
                                    <label htmlFor="quadrant2-A">Planificar el presupuesto mensual para ahorrar dinero.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant2-B"
                                        name="quadrant2"
                                        value="Preparar una presentación para un proyecto a futuro."
                                        onChange={(e) => handleChange('quadrant2', e.target.value)}
                                    />
                                    <label htmlFor="quadrant2-B">Preparar una presentación para un proyecto a futuro.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant2-C"
                                        name="quadrant2"
                                        value="Leer un libro sobre desarrollo personal."
                                        onChange={(e) => handleChange('quadrant2', e.target.value)}
                                    />
                                    <label htmlFor="quadrant2-C">Leer un libro sobre desarrollo personal.</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>3. Urgente pero No Importante:</p>
                            </h1>
                            <p>Estas tareas requieren atención inmediata pero no son cruciales para los objetivos principales de Jane.</p>
                            <ul className="list-disc pl-5 flex flex-col gap-4">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant3-A"
                                        name="quadrant3"
                                        value="Responder a correos electrónicos que no son importantes."
                                        onChange={(e) => handleChange('quadrant3', e.target.value)}
                                    />
                                    <label htmlFor="quadrant3-A">Responder a correos electrónicos que no son importantes.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant3-B"
                                        name="quadrant3"
                                        value="Comprar comestibles para la semana."
                                        onChange={(e) => handleChange('quadrant3', e.target.value)}
                                    />
                                    <label htmlFor="quadrant3-B">Comprar comestibles para la semana.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant3-C"
                                        name="quadrant3"
                                        value="Llamar a un amigo para organizar una reunión."
                                        onChange={(e) => handleChange('quadrant3', e.target.value)}
                                    />
                                    <label htmlFor="quadrant3-C">Llamar a un amigo para organizar una reunión.</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h1 className="text-lg font-bold text-stellar-blue">
                                <p>4. No Urgente y No Importante:</p>
                            </h1>
                            <p>Estas tareas pueden ser eliminadas o minimizadas ya que no tienen urgencia ni importancia.</p>
                            <ul className="list-disc pl-5 flex flex-col gap-4">
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant4-A"
                                        name="quadrant4"
                                        value="Ver televisión durante horas."
                                        onChange={(e) => handleChange('quadrant4', e.target.value)}
                                    />
                                    <label htmlFor="quadrant4-A">Ver televisión durante horas.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant4-B"
                                        name="quadrant4"
                                        value="Pasar tiempo en redes sociales sin ningún propósito específico."
                                        onChange={(e) => handleChange('quadrant4', e.target.value)}
                                    />
                                    <label htmlFor="quadrant4-B">Pasar tiempo en redes sociales sin ningún propósito específico.</label>
                                </li>
                                <li className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        id="quadrant4-C"
                                        name="quadrant4"
                                        value="Jugar videojuegos por largas horas."
                                        onChange={(e) => handleChange('quadrant4', e.target.value)}
                                    />
                                    <label htmlFor="quadrant4-C">Jugar videojuegos por largas horas.</label>
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

export default EisenhowerMatrix;
