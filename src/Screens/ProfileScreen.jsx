import React from 'react'
import { useAuth } from '../Context/context';
import { EditProfile } from '../Components/ViewMedalsComponent';
import ProfileBg from '../../public/Ilustrations/Vector.svg'
import { Trophy, UserRound, KeyRound, LayoutPanelTop } from 'lucide-react';
import useFormSetters from '../hooks/useFormSetter'


const ProfileScreen = () => {

    const [formState, createFormSetter] = useFormSetters({ name: '', lastName: '', email: '', password: '' });

    const { logout } = useAuth();

    const handleButtonClick = () => {
        logout();
    }

    return (
        <>
            <div className='flex flex-col gap-[3rem] animate__animated animate__fadeInDown'>
                <div className='flex justify-center items-center flex-col gap-y-4'>
                    <img src={ProfileBg} width={1000} 
                    className="mt-[-60px]"
                    />
                    <h1 className='font-raleway text-2xl border-b-2 border-light-blue'>Kevin Latino</h1>
                </div>

                <div className='flex justify-center items-center flex-col gap-2'>

                    <div className="relative mb-4 w-full max-w-md">
                        <UserRound size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7A3AFF]" />
                        <input
                            type="text"
                            placeholder="Modifica tu nombre"
                            className="bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-3 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="relative mb-4 w-full max-w-md">
                        <LayoutPanelTop size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7A3AFF]" />
                        <input
                            type="text"
                            placeholder="Modifica tu apellido"
                            className=" bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-3 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="relative mb-4 w-full max-w-md">
                        <KeyRound size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7A3AFF]" />
                        <input
                            type="password"
                            placeholder="Modifica tu nueva contraseña"
                            className=" bg-[#E0E4EE] placeholder-strong-blue text-gray-800 py-3 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        className="bg-light-blue text-white px-4 py-2 rounded-xl"
                    >
                        Modificar Perfil
                    </button>
                </div>
            </div>
            <EditProfile />
        </>
    )
}

export { ProfileScreen }
