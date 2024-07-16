import React from 'react'
import Welcome from '../../public/Ilustrations/Welcome.png'

const HomeScreen = () => {
    
    return (
        <>
            <div className='flex flex-col gap-8 animate__animated animate__fadeInDown'>
                <div className="flex my-1 bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                    <div className="my-14 ml-14 w-1/2">
                        <div className="w-full text-light-White">
                            <h1 className="text-4xl font-medium">
                                <b>¡Bienvenido a Stellar!</b>
                            </h1>
                            <p className="text-xl font-medium">
                                Ya puedes organizar tus tareas de una mejor manera
                            </p>
                        </div>
                    </div>
                    <div className="w-[14rem] hidden sm:flex relative">
                        <img
                            src={Welcome}
                            alt="Ilustration"
                            className="absolute left-[188px] bottom-[0%]"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-[#48BC5E] pb-1">
                            <b>¡Aquí están tus tareas completadas, sigue así!</b>
                        </span>
                    </h1>
                </div>
            </div>
        </>
    )
}

export { HomeScreen }
2