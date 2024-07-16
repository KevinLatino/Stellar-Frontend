import React from 'react'
import Discover from '../../public/Ilustrations/Stellar-Falling.svg'

const DiscoverScreen = () => {
    return (
        <>
            <div className='flex flex-col gap-8 animate__animated animate__fadeInDown'>
                <div className="flex my-2 bg-light-blue rounded-3xl">
                    <div className="my-14 ml-14 w-1/2">
                        <div className="w-full text-light-White">
                            <h1 className="text-4xl font-medium">
                                <b>¿Qué quieres aprender hoy?</b>
                            </h1>
                            <p className="text-xl font-medium">
                               Descubre nuevos métodos para mejorar la gestión de tu tiempo
                            </p>
                        </div>
                    </div>
                    <div className="w-[16em] hidden sm:flex relative">
                        <img
                            src={Discover}
                            alt="Ilustration"
                            className="absolute left-[200px] bottom-[-0%]"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export { DiscoverScreen };
