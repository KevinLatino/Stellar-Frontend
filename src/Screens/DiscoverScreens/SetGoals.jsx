import React from 'react';
import PeopleLearning from '../../../public/Ilustrations/Time-Management.png';
import BackToDiscover from './BackToDiscover';

const SetGoals = () => {
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

                <motion className="flex justify-center mt-2">
                    <button className="bg-light-blue text-white px-4 py-2.5 rounded-full font-semibold text-lg shadow-lg">
                        Realizar Prueba
                    </button>
                </motion>
            </div>
            <BackToDiscover />
        </>
    );
}

export default SetGoals;
