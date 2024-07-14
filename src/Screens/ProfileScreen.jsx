
import React from 'react'
import ProfileBg from '../../public/Ilustrations/Profile.svg'
import { UserRound, LayoutPanelTop, } from 'lucide-react';


const ProfileScreen = () => {

    return (
        <>
            <div className='flex flex-col gap-[3rem] animate__animated animate__fadeInDown'>
                <div className='flex justify-center items-center flex-col gap-y-4'>
                    <img src={ProfileBg} width={1000}
                        className="mt-[-50px]"
                    />
                    <h1 className='font-raleway text-3xl border-b-2 border-light-blue'>Kevin Latino</h1>
                </div>

                <div className='flex justify-center items-center flex-col gap-2'>

                    <div className="relative mb-4 w-full max-w-md">
                        <UserRound size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-blue" />
                        <input
                            type="text"
                            placeholder="Modifica tu nombre"
                            className="bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-3 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="relative mb-4 w-full max-w-md">
                        <LayoutPanelTop size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-blue" />
                        <input
                            type="text"
                            placeholder="Modifica tu apellido"
                            className=" bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-3 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className='flex justify-center items-center gap-5'>
                        <button
                            className="bg-light-blue text-white px-4 py-2 rounded-xl"
                        >
                            Modificar Perfil
                        </button>
                        <button
                            className="bg-strong-red text-white px-4 py-2 rounded-xl"
                        >
                            Eliminar Perfil
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export { ProfileScreen }
