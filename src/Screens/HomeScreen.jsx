import React from 'react'
import Falling from '../../public/Stellar-Falling.svg'

const HomeScreen = () => {
    return (
        <>
            <div className="flex pb-3 pt-1 my-3 bg-gradient-to-r from-[#F9B742] via-[#F9B742] to-[#F9B742] rounded-3xl">
                <div className="my-14 ml-14 w-1/2">
                    <div className="w-full">
                        <h1 className="text-4xl font-medium">
                            ¡Bienvenido a <b>Stellar</b>!
                        </h1>
                        <p className="text-xl font-medium">
                            Organiza tus tareas de una mejor manera
                        </p>
                    </div>
                </div>
                <div className="w-[17rem] hidden sm:flex relative">
                    <img
                        src={Falling}
                        alt="Imagen no encontrada"
                        className="absolute right-[-180px] bottom-[-6%]"
                    />
                </div>
            </div>
        </>
    )
}

export { HomeScreen }
