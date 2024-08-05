import React from 'react'
import GirlStudying from '../../../public/Ilustrations/Girl-Studying-Science.png'
import BackToDiscover from './BackToDiscover'

const EisenhowerMatrix = () => {
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
                                <li><b>Tareas con alta urgencia =</b> Urgente e Importante .</li>
                                <li><b>Tareas con moderada urgencia = </b>Importante pero no urgente</li>
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
            </div>
            <BackToDiscover />
        </>
    )
}

export default EisenhowerMatrix
