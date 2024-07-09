import React from 'react'

const DiscoverScreen = () => {
    return (
        <>
            <div className='flex flex-col gap-8 animate__animated animate__fadeInDown'>
                <div className="flex my-1 bg-[#2357c7] rounded-3xl">
                    <div className="my-14 ml-14 w-1/2">
                        <div className="w-full text-light-White">
                            <h1 className="text-4xl font-medium">
                                <b>¡Crea y visualiza tus Tareas!</b>
                            </h1>
                            <p className="text-xl font-medium">
                                En este espacio puedes tomar el control de tus deberes
                            </p>
                        </div>
                    </div>
                    <div className="w-[12rem] hidden sm:flex relative">
                        <img
                            src={Tasks}
                            alt="Ilustration"
                            className="absolute left-[188px] bottom-[-10%]"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export { DiscoverScreen };
