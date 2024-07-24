import React from 'react'
import Ranking from '../../public/Ilustrations/Ranking.png'
import Goal from '../../public/Ilustrations/Medal.png'


const CalenndarScreen = () => {
    return (
        <>
            <div className='flex flex-col gap-8'>
                <div className="flex bg-gradient-to-r from-light-blue to-light-blue rounded-3xl animate__animated animate__fadeInDown">
                    <div className="my-14 ml-14 w-1/2">
                        <div className="w-full text-light-White">
                            <h1 className="text-4xl font-medium">
                                <b>¡Aquí tienes el Ranking!</b>
                            </h1>
                            <p className="text-xl font-medium">
                                Aquí están las personas que más tareas han completado
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className=" w-[13rem] hidden sm:flex relative">
                            <img
                                src={Ranking}
                                alt="Ilustration"
                                className="absolute left-[160px] bottom-[0%]"
                            />
                        </div>
                        <div className='w-[8.5rem] hidden sm:flex relative'>
                            <img
                                src={Goal}
                                alt="Ilustration"
                                className="absolute left-[170px] bottom-[2.5%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { CalenndarScreen }
