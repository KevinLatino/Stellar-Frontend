import React from 'react'
import Ranking from '../../public/Ilustrations/Ranking.png'

const RankingScreen = () => {
    return (
        <>
            <div className='flex flex-col gap-8'>
                <div className="flex my-1 bg-[#2357c7] rounded-3xl">
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
                    <div className="w-[8rem] hidden sm:flex relative">
                        <img
                            src={Ranking}
                            alt="Ilustration"
                            className="absolute left-[188px] bottom-[-10%]"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export { RankingScreen }
