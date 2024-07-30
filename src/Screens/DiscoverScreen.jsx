import React from 'react'
import Discover from '../../public/Ilustrations/Sitting2.png'
import 'animate.css'

const DiscoverScreen = () => {
    return (
        <>
            <div className='flex flex-col  h-full gap-11 animate__animated animate__fadeInDown'>
                <div className="flex h-[10.5rem] w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                    <div className="w-1/2 p-4">
                        <div className="flex flex-col gap-1 pl-6 justify-center h-full">
                            <h1 className="text-4xl font-medium text-white">
                                <b>¿Qué quieres aprender hoy?</b>
                            </h1>
                            <p className="text-xl font-medium text-white">
                                Descubre métodos para mejorar la gestión de tu tiempo
                            </p>
                        </div>
                    </div>
                    <div className="w-[11.5rem] hidden sm:flex relative">
                        <img
                            src={Discover}
                            alt="Ilustration"
                            className="absolute left-[340px] bottom-[-60%]"
                        />
                    </div>
                </div>
                <div>
                <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>¡Has click en la sección de interés!</b>
                        </span>
                    </h1>
                </div>
            </div>
        </>
    )
}



export { DiscoverScreen };
